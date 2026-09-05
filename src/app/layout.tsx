import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wissen-Kids | Bimbingan Belajar & Stimulasi Cerdas Usia 2 Tahun - SMP",
  description:
    "Lembaga bimbingan belajar dan stimulasi anak usia 2 tahun hingga SMP. Tersedia paket Simulation & Activity, Calistung, English, Sempoa, Bimbel SD, SMP, Mengaji, dan Art & Craft.",
  keywords: [
    "bimbel anak",
    "bimbel wissen kids",
    "les baca tulis hitung",
    "calistung toddler",
    "les sempoa",
    "bimbel sd smp",
    "les bahasa inggris anak",
    "les mengaji",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
