import type { Metadata, Viewport } from "next";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taxpoint.uz"),
  title: "TAXPOINT — Buxgalteriya va soliq xizmatlari",
  description:
    "TAXPOINT tadbirkorlar uchun buxgalteriya hisobini yuritish, soliq hisobotlari, YATT va MCHJ ro‘yxatdan o‘tkazish, E-IMZO va elektron tizimlarni sozlash xizmatlarini taqdim etadi.",
  openGraph: {
    title: "TAXPOINT — Buxgalteriya va soliq xizmatlari",
    description:
      "Buxgalteriya hisobi, soliq hisobotlari, biznesni ro‘yxatdan o‘tkazish va elektron tizimlarni sozlash xizmatlari.",
    type: "website",
    locale: "uz_UZ",
    siteName: "TAXPOINT"
  },
  alternates: {
    canonical: "/",
    languages: {
      uz: "/",
      ru: "/ru"
    }
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
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#0b1f3a"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
