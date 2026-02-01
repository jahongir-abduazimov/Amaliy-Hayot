import { getAllPosts } from "@/lib/posts";
import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Barcha Maqolalar",
  description:
    "O‘zbekistonda kundalik hayotga oid barcha maqolalar va yo‘riqnomalar. ID karta, bank kartasi, my.gov.uz va boshqa mavzular bo‘yicha to‘liq ma‘lumotlar.",
  keywords:
    "maqolalar, blog, yo‘riqnomalar, o‘zbekiston, id karta, bank kartasi, mygov, davlat xizmatlari",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Barcha Maqolalar | Amaliy Hayot",
    description:
      "O‘zbekistonda kundalik hayotga oid barcha maqolalar va yo‘riqnomalar.",
    type: "website",
    url: "/blog",
    siteName: "Amaliy Hayot",
    locale: "uz_UZ",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Amaliy Hayot - Barcha Maqolalar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barcha Maqolalar | Amaliy Hayot",
    description:
      "O‘zbekistonda kundalik hayotga oid barcha maqolalar va yo‘riqnomalar.",
    images: ["/images/logo.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amaliyhayot.uz";

  // CollectionPage structured data
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Barcha Maqolalar",
    description:
      "O‘zbekistonda kundalik hayotga oid barcha maqolalar va yo‘riqnomalar.",
    url: `${baseUrl}/blog`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.slice(0, 10).map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: post.title,
          url: `${baseUrl}/blog/${post.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-linear-to-b from-white to-neutral-off-white overflow-hidden pt-32 md:pt-42 pb-16">
          {/* Decorative shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F97316]/5 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-neutral-text-dark leading-tight">
                Barcha <span className="gradient-text">Maqolalar</span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-text-gray mb-8 leading-relaxed">
                O‘zbekistonda kundalik hayotga oid barcha foydali ma’lumotlar va
                yo‘riqnomalar
              </p>

              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-full font-semibold">
                <span>📚</span>
                <span>{posts.length} ta maqola</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog List with Filters and Pagination */}
        <BlogList posts={posts} />
      </div>
    </>
  );
}
