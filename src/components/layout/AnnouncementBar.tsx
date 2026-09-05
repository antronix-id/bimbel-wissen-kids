"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { siteSettings } from "@/data/mockData";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!siteSettings.isAnnouncementActive || !isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-600 text-white text-[11px] sm:text-xs md:text-sm py-2 px-3 sm:px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-1.5 sm:gap-2 mx-auto text-center font-medium overflow-hidden">
          <span className="flex h-2 w-2 rounded-full bg-amber-300 animate-ping shrink-0" />
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0 hidden sm:inline" />
          <p className="truncate">{siteSettings.announcementText}</p>
          <Link
            href="/daftar"
            className="inline-flex items-center gap-1 font-bold text-amber-200 hover:text-white underline underline-offset-2 ml-1 shrink-0 transition-colors text-[11px] sm:text-xs"
          >
            <span>Daftar</span> <ArrowRight className="w-3 h-3 inline" />
          </Link>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Tutup pengumuman"
          className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
