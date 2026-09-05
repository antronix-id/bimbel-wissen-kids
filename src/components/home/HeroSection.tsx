import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Users, 
  CheckCircle2, 
  Heart,
  Award,
  PlayCircle
} from "lucide-react";
import { siteSettings } from "@/data/mockData";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-blue-50/60 via-indigo-50/30 to-slate-50">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-amber-300/25 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Teks Kiri */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Tempat Belajar Cerdas & Ceria{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500">
                Usia 2 Tahun s/d Lulus SMP
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Mulai dari stimulasi sensori batita, calistung fonik tanpa stres, mental sempoa, bahasa Inggris, hingga bimbingan intensif kurikulum SD & SMP. Kami menciptakan suasana belajar aktif yang membuat anak rindu untuk belajar lagi!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/daftar"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Daftar Coba Kelas Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/program"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex items-center justify-center gap-2"
              >
                <span>Lihat 10 Paket Belajar</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Tutor Ramah & Telaten</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Rasio Ideal 1:3 - 1:5</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Kelas Privat / Reguler</span>
              </div>
            </div>
          </div>

          {/* Kolom Visual Kanan */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-100 rounded-bl-full -z-0 opacity-60" />
                
                {/* Header Banner Inside Card */}
                <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Free Trial Tersedia
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.9 / 5.0 Rating Ortu</span>
                  </div>
                </div>

                {/* Hero Feature Showcase */}
                <div className="space-y-4 relative z-10">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-md">
                      10+
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-slate-900">Program Belajar Lengkap</p>
                      <p className="text-xs text-slate-600">Stimulasi Sensori, Calistung, Sempoa, Mengaji, SD & SMP</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                      2-15
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-slate-900">Kelompok Usia Fleksibel</p>
                      <p className="text-xs text-slate-600">Pendampingan disesuaikan dengan tahapan tumbuh kembang anak</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                      100%
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-slate-900">Metode Fun Learning</p>
                      <p className="text-xs text-slate-600">Belajar aktif tanpa paksaan, menumbuhkan rasa ingin tahu</p>
                    </div>
                  </div>
                </div>

                {/* Quick Consultation CTA */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-2 relative z-10">
                  <div>
                    <p className="text-xs text-slate-500">Konsultasi cepat wali murid:</p>
                    <p className="text-sm font-black text-slate-800">{siteSettings.displayPhone}</p>
                  </div>
                  <Link
                    href="/daftar"
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs transition-colors shadow-xs"
                  >
                    Booking Sesi →
                  </Link>
                </div>
              </div>

              {/* Floating Achievement Tag 1 */}
              <div className="absolute -bottom-5 -left-5 bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-900">98% Murid Naik Nilai</p>
                  <p className="text-[10px] text-slate-500">Evaluasi Rapor Semester</p>
                </div>
              </div>

              {/* Floating Achievement Tag 2 */}
              <div className="absolute -top-4 -right-4 bg-white py-2 px-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <div className="p-1.5 rounded-lg bg-pink-100 text-pink-600">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <span className="text-xs font-bold text-slate-800">Tutor Bersertifikasi</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
