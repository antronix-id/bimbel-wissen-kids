import React from "react";
import Image from "next/image";
import Link from "next/link";
import { testimonialsData } from "@/data/mockData";
import { Star, Quote, Sparkles, CheckCircle2, Heart } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Cerita Nyata dari Para Wali Murid Wissen-Kids
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Mulai dari anak yang awalnya pemalu menjadi percaya diri membaca, hingga peningkatan nilai ujian yang membanggakan.
          </p>
        </div>

        {/* Rating Trust Overview Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-12 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-around text-center sm:text-left gap-6">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-black text-slate-900">4.9</div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-1">Berdasarkan 500+ ulasan wali murid</p>
            </div>
          </div>

          <div className="h-10 w-px bg-slate-200 hidden sm:block" />

          <div className="text-xs text-slate-600 space-y-1">
            <p className="flex items-center gap-1.5 font-bold text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>98% Tingkat Kepuasan Belajar</span>
            </p>
            <p className="flex items-center gap-1.5 font-bold text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>92% Anak Mampu Membaca dalam 3 Bulan</span>
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((testi) => (
            <div
              key={testi.id}
              className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testi.reviewText}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                {testi.avatarUrl ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200">
                    <Image
                      src={testi.avatarUrl}
                      alt={testi.parentName}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-base">
                    {testi.parentName.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {testi.parentName}
                  </p>
                  <p className="text-xs text-slate-500">
                    Orang tua {testi.childNameAndAge}
                  </p>
                  <span className="inline-block text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mt-1">
                    {testi.programTaken}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-black text-slate-900">
            Ingin Putra-Putri Anda Mengalami Kemajuan yang Sama?
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Daftarkan anak Anda hari ini untuk sesi free trial gratis dan konsultasi belajar bersama tim kami.
          </p>
          <Link
            href="/daftar"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Klaim Sesi Coba Kelas Gratis</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
