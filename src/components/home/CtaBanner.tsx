import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, PhoneCall, Gift, CheckCircle } from "lucide-react";
import { siteSettings } from "@/data/mockData";

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Beri Si Kecil Pengalaman Belajar yang Cerdas & Menyenangkan!
            </h2>

            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Jadwalkan <strong>1 Sesi Coba Kelas Gratis (Free Trial)</strong> sekarang. Temukan potensi terbaik anak Anda bersama tim pengajar profesional Wissen-Kids.
            </p>

            {/* Benefit Bullets */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-blue-100">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-300" />
                <span>Tanpa Komitmen Awal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-300" />
                <span>Konsultasi & Assessment Gratis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-300" />
                <span>Diskon Registrasi 30%</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/daftar"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-amber-400/20 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Klaim Free Trial Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${siteSettings.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-sm border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Tanya Dulu via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
