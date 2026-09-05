import React from "react";
import Image from "next/image";
import Link from "next/link";
import { articlesData } from "@/data/mockData";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import { formatDateIndo } from "@/lib/utils";

export default function ArticlesPage() {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Panduan Parenting & Tips Belajar Anak
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Kumpulan artikel bermanfaat dari tim pengajar dan psikolog anak Wissen-Kids untuk mendampingi tumbuh kembang si kecil.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={art.coverImageUrl}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full bg-blue-600 text-white shadow-xs">
                  {art.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDateIndo(art.publishedAt)}
                    </span>
                  </div>

                  <Link href={`/artikel/${art.slug}`}>
                    <h2 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2 mb-2 leading-snug">
                      {art.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-500" />
                    {art.authorName}
                  </span>

                  <Link
                    href={`/artikel/${art.slug}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>Baca</span>
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
