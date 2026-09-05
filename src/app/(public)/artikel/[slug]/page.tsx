import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articlesData, siteSettings } from "@/data/mockData";
import { formatDateIndo, formatWhatsAppUrl } from "@/lib/utils";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  MessageCircle, 
  Sparkles,
  BookOpen
} from "lucide-react";

export function generateStaticParams() {
  return articlesData.map((art) => ({
    slug: art.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const shareText = `Baca artikel menarik ini: "${article.title}" dari Wissen-Kids`;
  const shareWaUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Artikel</span>
          </Link>
        </div>

        {/* Article Card */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          
          {/* Metadata Top */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDateIndo(article.publishedAt)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center justify-between gap-4 py-4 border-y border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                WK
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{article.authorName}</p>
                <p className="text-[11px] text-slate-400">Tim Edukasi Wissen-Kids</p>
              </div>
            </div>

            <a
              href={shareWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Bagikan</span>
            </a>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src={article.coverImageUrl}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Summary Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium">
            💡 <strong>Intisari:</strong> {article.summary}
          </div>

          {/* Content Body */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line">
            {article.content}
          </div>

          {/* Bottom Card: Free Trial Promo */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-black text-lg">Ingin Si Kecil Cepat Lancar Belajar?</h3>
              <p className="text-xs text-blue-100">Daftarkan anak Anda untuk sesi Free Trial gratis di Wissen-Kids.</p>
            </div>
            <Link
              href="/daftar"
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shrink-0 shadow-sm"
            >
              Coba Kelas Gratis →
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}
