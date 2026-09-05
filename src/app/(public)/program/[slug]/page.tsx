import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { programsData, siteSettings } from "@/data/mockData";
import { formatWhatsAppUrl } from "@/lib/utils";
import { 
  Check, 
  ArrowLeft, 
  Sparkles, 
  Clock, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  MessageCircle, 
  Calendar,
  CheckCircle2,
  GraduationCap
} from "lucide-react";

export function generateStaticParams() {
  return programsData.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const waMessage = `Halo Admin Wissen-Kids, saya ingin informasi lebih lanjut dan menjadwalkan free trial untuk program ${program.title} (${program.ageGroup}).`;
  const waUrl = formatWhatsAppUrl(siteSettings.whatsappNumber, waMessage);

  return (
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Back Link */}
        <div className="mb-6">
          <Link
            href="/program"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Program</span>
          </Link>
        </div>

        {/* Program Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${program.colorScheme.badgeBg} ${program.colorScheme.badgeText}`}>
                {program.badge}
              </span>
              <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                Target Usia: {program.ageGroup}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              {program.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {program.fullDesc}
            </p>
          </div>

          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Main Content (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Keunggulan Program */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-blue-100 text-blue-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Keunggulan & Capaian Belajar
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {program.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <span className="p-1 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Silabus / Agenda Pembelajaran */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Alur & Silabus Pembelajaran
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">Tahapan materi yang terukur dan bertahap</p>
                </div>
              </div>

              <div className="space-y-4">
                {program.curriculumPoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pilihan Format Kelas */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-600">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Pilihan Tipe Kelas yang Tersedia
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.classFormats.map((fmt, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">{fmt}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar CTA Card (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl sticky top-24 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Informasi Investasi Belajar
                </span>
                <p className="text-2xl font-black text-slate-900 mt-1">
                  {program.priceInfo || "Biaya Terjangkau"}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  *Modul belajar & lembar kerja sudah termasuk
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Jadwal: <strong>{program.scheduleInfo || "2x seminggu"}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Rasio Murid: <strong>Ideal & Terpantau</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tutor Bersertifikat & Ramah Anak</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <Link
                  href={`/daftar?program=${program.slug}`}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm shadow-md shadow-blue-500/25 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Daftar Kelas Free Trial</span>
                </Link>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasi Program via WA</span>
                </a>
              </div>

              {/* Mini Info */}
              <div className="bg-slate-50 p-3.5 rounded-2xl text-[11px] text-slate-500 space-y-1">
                <p className="font-semibold text-slate-700">📍 Lokasi Belajar:</p>
                <p>{siteSettings.address}</p>
                <p className="pt-1 font-semibold text-slate-700">⏰ Jam Layanan:</p>
                <p>{siteSettings.operatingHours}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
