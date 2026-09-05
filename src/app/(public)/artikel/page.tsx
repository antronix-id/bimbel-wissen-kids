import React from "react";
import Image from "next/image";
import Link from "next/link";
import { articlesData } from "@/data/mockData";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import { formatDateIndo } from "@/lib/utils";
import { CardBackground } from "@/components/ui/card";

export default function ArticlesPage() {
  return (
    <div className="py-12 sm:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight">
            Panduan Parenting & Tips Belajar Anak
          </h1>
          <p className="text-black font-semibold text-sm sm:text-base mt-2.5 leading-relaxed">
            Kumpulan artikel bermanfaat dari tim pengajar dan psikolog anak Wissen Kids Center untuk mendampingi tumbuh kembang si kecil.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {articlesData.map((art) => (
            <article
              key={art.id}
              className="card-elevation card-elevation-hover relative overflow-hidden flex flex-col"
            >
              <CardBackground rows={10} cols={8} tileSize="md" />
              <div className="relative aspect-[16/10] sm:h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={art.coverImageUrl}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs font-bold px-3 py-1 rounded-full bg-blue-600 text-white shadow-xs">
                  {art.category}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-black font-semibold mb-2.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {art.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {formatDateIndo(art.publishedAt)}
                    </span>
                  </div>

                  <Link href={`/artikel/${art.slug}`}>
                    <h2 className="text-base sm:text-lg font-black text-black hover:text-blue-600 transition-colors line-clamp-2 mb-2 leading-snug">
                      {art.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-black font-medium line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold text-black flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    {art.authorName}
                  </span>

                  <Link
                    href={`/artikel/${art.slug}`}
                    className="text-xs sm:text-sm font-extrabold text-blue-700 hover:text-blue-800 flex items-center gap-1 shrink-0"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
