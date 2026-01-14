import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://amaliyhayot.uz"),
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amaliyhayot.uz";

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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C0V2H81380"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C0V2H81380');
          `}
        </Script>

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106256595', 'ym');

            ym(106256595, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/106256595" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}

        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
