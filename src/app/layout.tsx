import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const siteDescription =
  "TAXPOINT Farg'ona va O'zbekistondagi tadbirkorlar uchun buxgalteriya xizmatlari, soliq hisobotlari, YATT ochish, MCHJ ro'yxatdan o'tkazish va elektron tizimlarni sozlash xizmatlarini taqdim etadi.";

export const metadata: Metadata = {
  metadataBase: new URL("https://taxpoint.uz"),
  title: {
    default: "TAXPOINT — Buxgalteriya xizmatlari va soliq hisobotlari",
    template: "%s | TAXPOINT"
  },
  description: siteDescription,
  keywords: [
    "buxgalteriya xizmatlari",
    "soliq hisobotlari",
    "YATT ochish",
    "MCHJ ro'yxatdan o'tkazish",
    "Farg'ona buxgalteriya xizmatlari",
    "buxgalter Farg'ona",
    "QQS hisoboti",
    "0 hisobot topshirish",
    "E-IMZO olish",
    "TAXPOINT"
  ],
  applicationName: "TAXPOINT",
  authors: [{ name: "TAXPOINT" }],
  creator: "TAXPOINT",
  publisher: "TAXPOINT",
  category: "Accounting services",
  alternates: {
    canonical: "/",
    languages: {
      uz: "/",
      ru: "/ru"
    }
  },
  openGraph: {
    title: "TAXPOINT — Buxgalteriya xizmatlari va soliq hisobotlari",
    description:
      "Farg'ona va O'zbekistonda buxgalteriya xizmatlari, soliq hisobotlari, YATT ochish va MCHJ ro'yxatdan o'tkazish bo'yicha ishonchli yordam.",
    url: "https://taxpoint.uz/",
    type: "website",
    locale: "uz_UZ",
    siteName: "TAXPOINT",
    images: [
      {
        url: "/brand/logo-main-horizontal.png",
        width: 1600,
        height: 371,
        alt: "TAXPOINT"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TAXPOINT — Buxgalteriya xizmatlari va soliq hisobotlari",
    description:
      "Farg'ona buxgalteriya xizmatlari, soliq hisobotlari, YATT ochish va MCHJ ro'yxatdan o'tkazish xizmatlari.",
    images: ["/brand/logo-main-horizontal.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  other: {
    "geo.region": "UZ-FA",
    "geo.placename": "Farg'ona, O'zbekiston",
    "business:contact_data:locality": "Farg'ona",
    "business:contact_data:country_name": "Uzbekistan"
  }
};

export const viewport: Viewport = {
  themeColor: "#0A2342"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={manrope.className}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
