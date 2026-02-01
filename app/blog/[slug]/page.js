import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { markdownToHtml, getReadingTime } from "@/lib/posts";
// import TableOfContents from '@/components/TableOfContents';
import ReadingProgress from "@/components/ReadingProgress";
import SocialShare from "@/components/SocialShare";
import PostCard from "@/components/PostCard";
import Image from "next/image";
import { notFound } from "next/navigation";

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  // Handle both sync and async params (Next.js 15+)
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Maqola topilmadi",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amaliyhayot.uz";
  const postUrl = `${baseUrl}/blog/${slug}`;
  const fullImageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${baseUrl}${post.image}`
    : null;
  const defaultImageUrl = `${baseUrl}/images/logo.png`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author || "Amaliy Hayot" }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author || "Amaliy Hayot"],
      url: postUrl,
      siteName: "Amaliy Hayot",
      locale: "uz_UZ",
      images: fullImageUrl
        ? [
            {
              url: fullImageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [
            {
              url: defaultImageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
      ...(post.category && { section: post.category }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: fullImageUrl ? [fullImageUrl] : [defaultImageUrl],
      creator: "@amaliyhayot",
      site: "@amaliyhayot",
    },
  };
}

export default async function BlogPost({ params }) {
  // Handle both sync and async params (Next.js 15+)
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);
  const readingTime = getReadingTime(post.content);
  // Format date in Uzbek format
  const date = new Date(post.date);
  const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];
  const formattedDate = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;

  // Get related posts
  const relatedPosts = getRelatedPosts(slug, post.category, 3);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amaliyhayot.uz";
  const postUrl = `${baseUrl}/blog/${slug}`;
  const fullImageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${baseUrl}${post.image}`
    : null;

  // Generate JSON-LD structured data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: fullImageUrl || `${baseUrl}/images/logo.png`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || "Amaliy Hayot",
    },
    publisher: {
      "@type": "Organization",
      name: "Amaliy Hayot",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    ...(post.category && { articleSection: post.category }),
    ...(post.keywords && { keywords: post.keywords }),
  };

  // BreadcrumbList structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Bosh sahifa",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Maqolalar",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ReadingProgress />
      <article className="max-w-250 mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-30 pt-22 md:pt-34">
        <div className="max-w-250 mx-auto">
          {/* Article Header */}
          <header className="mb-10 md:mb-12 space-y-6">
            {post.category && !post.image && (
              <span className="inline-block px-4 py-2 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20">
                {post.category}
              </span>
            )}

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium">{formattedDate}</span>
              </div>

              <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">{readingTime} daqiqa o‘qish</span>
              </div>

              {post.author && (
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="font-medium">{post.author}</span>
                </div>
              )}
            </div>
          </header>

          {/* Header Image */}
          {post.image ? (
            <div className="relative w-full h-72 md:h-125 rounded-2xl overflow-hidden mb-10 md:mb-12 bg-linear-to-br from-gray-100 to-gray-200 shadow-xl">
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent z-10"></div>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              />
              {post.category && (
                <div className="absolute top-6 left-6 z-20">
                  <span className="inline-block px-4 py-2 text-sm font-bold text-white bg-primary/50 backdrop-blur-xs rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full h-72 md:h-125 rounded-2xl overflow-hidden mb-10 md:mb-12 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center shadow-xl relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 opacity-50"></div>
              <span className="text-gray-500 text-lg font-medium relative z-10">
                Rasm yo‘q
              </span>
              {post.category && (
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-2 text-sm font-bold text-primary bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Main Content */}
          <div className="">
            {/* Article Content */}
            <div className="min-w-0">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {/* Social Share */}
              <div className="mt-8">
                <SocialShare
                  url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://amaliyhayot.uz"}/blog/${slug}`}
                  title={post.title}
                  description={post.description}
                  variant="inline"
                />
              </div>
            </div>

            {/* Table of Contents Sidebar */}
            {/* <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents content={contentHtml} />
              </div>
            </aside> */}
          </div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10">
              Mavzuga oid maqolalar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
