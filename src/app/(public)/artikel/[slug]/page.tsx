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
import { Button } from "@/components/ui/button";
import { CardBackground } from "@/components/ui/card";

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

  const shareText = `Baca artikel menarik ini: "${article.title}" dari Wissen Kids Center`;
  const shareWaUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="py-10 sm:py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-black hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Artikel</span>
          </Link>
        </div>

        {/* Article Card */}
        <article className="card-elevation relative overflow-hidden p-5 sm:p-8 lg:p-10 space-y-6">
          <CardBackground />
          <div className="relative z-10 space-y-6">
          {/* Metadata Top */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-black font-semibold">
            <span className="font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              {formatDateIndo(article.publishedAt)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-snug">
            {article.title}
          </h1>

          {/* Author Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full bg-white p-0.5 overflow-hidden ring-1 ring-slate-300 shrink-0">
                <Image
                  src="/logo.avif"
                  alt="Logo Wissen Kids Center"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-black text-black">{article.authorName}</p>
                <p className="text-xs text-black font-semibold">Tim Edukasi Wissen Kids Center</p>
              </div>
            </div>

            <Button
              href={shareWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
              className="self-start sm:self-auto"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Bagikan</span>
            </Button>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/10] sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src={article.coverImageUrl}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Summary Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-black leading-relaxed font-medium">
            💡 <strong className="font-black">Intisari:</strong> {article.summary}
          </div>

          {/* Content Body */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-black font-medium whitespace-pre-line">
            {article.content}
          </div>

          {/* Bottom Card: Free Trial Promo */}
          <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-black text-base sm:text-lg">Ingin Si Kecil Cepat Lancar Belajar?</h3>
              <p className="text-xs text-blue-100">Daftarkan anak Anda untuk sesi Free Trial gratis di Wissen Kids Center.</p>
            </div>
            <Button
              href="/daftar"
              size="md"
              className="w-full sm:w-auto shrink-0"
            >
              Coba Kelas Gratis →
            </Button>
          </div>
          </div>
        </article>

      </div>
    </div>
  );
}
