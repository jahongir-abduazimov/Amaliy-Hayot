import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amaliy Hayot - O'zbekistonda kundalik hayot yo'riqnomalari",
    template: "%s | Amaliy Hayot",
  },
  description: "O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar. ID karta, bank kartasi, davlat xizmatlari va boshqalar haqida to'liq ma'lumot.",
  keywords: "o'zbekiston, yo'riqnoma, id karta, bank kartasi, mygov, davlat xizmatlari, hayot maslahatlari",
  authors: [{ name: "Amaliy Hayot" }],
  creator: "Amaliy Hayot",
  publisher: "Amaliy Hayot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://amaliy-hayot.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "/",
    title: "Amaliy Hayot - O'zbekistonda kundalik hayot yo'riqnomalari",
    description: "O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar.",
    siteName: "Amaliy Hayot",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Amaliy Hayot - O'zbekistonda kundalik hayot yo'riqnomalari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaliy Hayot - O'zbekistonda kundalik hayot yo'riqnomalari",
    description: "O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar.",
    images: ["/images/logo.png"],
    creator: "@amaliyhayot",
    site: "@amaliyhayot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amaliy-hayot.vercel.app";

  // Organization structured data
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Amaliy Hayot',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: "O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar beruvchi blog sayt.",
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
    },
  };

  // WebSite structured data with SearchAction
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Amaliy Hayot',
    url: baseUrl,
    description: "O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar.",
    publisher: {
      '@type': 'Organization',
      name: 'Amaliy Hayot',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="uz">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
