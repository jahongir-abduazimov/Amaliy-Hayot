import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import CookieBanner from "@/components/CookieBanner";
import ConditionalScripts from "@/components/ConditionalScripts";

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
    default: "Amaliy Hayot – O‘zbekistonda hayot uchun amaliy qo‘llanmalar",
    template: "%s | Amaliy Hayot",
  },
  description:
    "O‘zbekistonda hujjatlar, jarimalar, sog‘liqni saqlash, avtomobillar va davlat xizmatlari bo‘yicha amaliy qo‘llanmalar.",
  keywords:
    "o‘zbekiston, amaliy qo‘llanmalar, hujjatlar, jarimalar, sog‘liqni saqlash, avtomobil, davlat xizmatlari, hayot bo‘yicha maslahatlar",
  authors: [{ name: "Amaliy Hayot" }],
  creator: "Amaliy Hayot",
  publisher: "Amaliy Hayot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://amaliyhayot.uz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "/",
    title: "Amaliy Hayot – O‘zbekistonda hayot uchun amaliy qo‘llanmalar",
    description:
      "O‘zbekistonda hujjatlar, jarimalar, sog‘liqni saqlash, avtomobillar va davlat xizmatlari bo‘yicha amaliy qo‘llanmalar.",
    siteName: "Amaliy Hayot",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Amaliy Hayot – O‘zbekistonda hayot uchun amaliy qo‘llanmalar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaliy Hayot – O‘zbekistonda hayot uchun amaliy qo‘llanmalar",
    description:
      "O‘zbekistonda hujjatlar, jarimalar, sog‘liqni saqlash, avtomobillar va davlat xizmatlari bo‘yicha amaliy qo‘llanmalar.",
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
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amaliy Hayot",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description:
      "O‘zbekistonda hujjatlar, jarimalar, sog‘liqni saqlash, avtomobillar va davlat xizmatlari bo‘yicha amaliy qo‘llanmalar.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
    },
  };

  // WebSite structured data with SearchAction
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amaliy Hayot",
    url: baseUrl,
    description:
      "O‘zbekistonda hujjatlar, jarimalar, sog‘liqni saqlash, avtomobillar va davlat xizmatlari bo‘yicha amaliy qo‘llanmalar.",
    publisher: {
      "@type": "Organization",
      name: "Amaliy Hayot",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="uz">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Yandex.RTB */}
        <script>window.yaContextCb=window.yaContextCb||[]</script>
        <script src="https://yandex.ru/ads/system/context.js" async></script>
        {/* <meta name="google-adsense-account" content="ca-pub-4193324716237811"></meta> */}
        <meta name="yandex-verification" content="d89380f0851adb15" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Conditional Scripts - Only load if user has given consent */}
        <ConditionalScripts />

        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>

        {/* Cookie Banner - TEMPORARILY DISABLED for one-day experiment.
            To re-enable:
            1) Set COOKIE_CONSENT_TEMPORARILY_DISABLED = false in lib/cookieConsent.js
            2) Uncomment the <CookieBanner /> component below. */}
        {/*
        <CookieBanner />
        */}
      </body>
    </html>
  );
}
