import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-20 bg-transparent">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-[280px] h-[280px] bg-amber-300/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Kolom Teks Kiri */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] xl:text-5xl font-black text-black tracking-tight leading-[1.2]">
              Tempat Belajar Cerdas & Ceria{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                Usia 2 Tahun s/d SMP
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-black font-semibold leading-relaxed max-w-xl mx-auto lg:mx-0">
              Mulai dari stimulasi sensori batita, calistung fonik tanpa stres, mental sempoa, bahasa Inggris, hingga bimbingan kurikulum SD & SMP. Kami menciptakan suasana belajar aktif yang membuat anak bahagia dan percaya diri!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <Button
                href="/daftar"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Daftar Coba Kelas Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                href="/program"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Lihat 10 Paket Belajar</span>
              </Button>
            </div>
          </div>

          {/* Kolom Visual Kanan */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Backing Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-amber-400/20 rounded-3xl blur-xl" />

              {/* Main Photo Card */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[420px] w-full card-elevation overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000"
                  alt="Suasana belajar cerdas dan ceria anak-anak di Wissen Kids Center"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

