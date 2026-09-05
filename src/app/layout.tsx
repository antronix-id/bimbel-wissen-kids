import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppBackground from "@/components/shared/AppBackground";
import ScrollToTop from "@/components/shared/ScrollToTop";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wissen Kids Center | Bimbingan Belajar & Stimulasi Cerdas Usia 2 Tahun - SMP",
  description:
    "Lembaga bimbingan belajar dan stimulasi anak usia 2 tahun hingga SMP. Tersedia paket Simulation & Activity, Calistung, English, Sempoa, Bimbel SD, SMP, Mengaji, dan Art & Craft di Wissen Kids Center.",
  keywords: [
    "bimbel anak",
    "wissen kids center",
    "bimbel wissen kids",
    "les baca tulis hitung",
    "calistung toddler",
    "les sempoa",
    "bimbel sd smp",
    "les bahasa inggris anak",
    "les mengaji",
  ],
  icons: {
    icon: "/logo.avif",
    shortcut: "/logo.avif",
    apple: "/logo.avif",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen text-black selection:bg-blue-600 selection:text-white flex flex-col">
        <ScrollToTop />
        <AppBackground>
          {children}
        </AppBackground>
      </body>
    </html>
  );
}
