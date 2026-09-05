import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, PhoneCall, Gift, CheckCircle } from "lucide-react";
import { siteSettings } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { CardBackground } from "@/components/ui/card";

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative card-elevation bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-8 sm:p-12 lg:p-16 overflow-hidden">
          <CardBackground tileClassName="border-white/10" className="opacity-20" />
          
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              Beri Si Kecil Pengalaman Belajar yang Cerdas & Menyenangkan!
            </h2>

            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Jadwalkan <strong>1 Sesi Coba Kelas Gratis (Free Trial)</strong> sekarang. Temukan potensi terbaik anak Anda bersama tim pengajar profesional Wissen Kids Center.
            </p>

            {/* Benefit Bullets */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs sm:text-sm font-semibold text-blue-100">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                <Gift className="w-4 h-4 text-amber-300" />
                <span>100% Free Trial Tanpa Biaya</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                <CheckCircle className="w-4 h-4 text-amber-300" />
                <span>Konsultasi & Assessment Gratis</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                <CheckCircle className="w-4 h-4 text-amber-300" />
                <span>Diskon Registrasi 30%</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                href="/daftar"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Klaim Free Trial Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                href={`https://wa.me/${siteSettings.whatsappNumber}`}
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>Tanya Dulu via WhatsApp</span>
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
