import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taxpoint.uz"),
  title: "TaxPoint — Buxgalteriya va soliq xizmatlari",
  description:
    "TaxPoint tadbirkorlar uchun buxgalteriya hisobini yuritish, soliq hisobotlari, YATT va MCHJ ro‘yxatdan o‘tkazish, E-IMZO va elektron tizimlarni sozlash xizmatlarini taqdim etadi.",
  openGraph: {
    title: "TaxPoint — Buxgalteriya va soliq xizmatlari",
    description:
      "Buxgalteriya hisobi, soliq hisobotlari, biznesni ro‘yxatdan o‘tkazish va elektron tizimlarni sozlash xizmatlari.",
    type: "website",
    locale: "uz_UZ",
    siteName: "TaxPoint"
  },
  alternates: {
    canonical: "/",
    languages: {
      uz: "/",
      ru: "/ru"
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
