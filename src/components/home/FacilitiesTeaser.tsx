import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Camera } from "lucide-react";
import { galleryData } from "@/data/mockData";

export default function FacilitiesTeaser() {
  const previewItems = galleryData.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Lingkungan Belajar yang Nyaman, Ceria & Higienis
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Kami mendesain setiap sudut ruang kelas dengan standar keamanan tinggi dan peraga belajar lengkap agar anak merasa betah bereksplorasi.
            </p>
          </div>

          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors shrink-0"
          >
            <span>Buka Galeri Foto Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-blue-500 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                  src={item.mediaUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-blue-600/90 text-white backdrop-blur-sm shadow-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
