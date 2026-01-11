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
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaliy Hayot - O'zbekistonda kundalik hayot yo'riqnomalari",
    description: "O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar.",
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
  return (
    <html lang="uz">
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
