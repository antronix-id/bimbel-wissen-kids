"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/mockData";
import { GalleryItem } from "@/types";
import { X, ZoomIn, Calendar, Filter } from "lucide-react";
import { formatDateIndo } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CardBackground } from "@/components/ui/card";

const categories = ["Semua", "Aktivitas Belajar", "Fasilitas", "Event & Pentas"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = galleryData.filter((item) => {
    if (activeCategory === "Semua") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="py-12 sm:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight">
            Aktivitas & Fasilitas Belajar di Wissen Kids Center
          </h1>
          <p className="text-black font-semibold text-sm sm:text-base mt-2.5 leading-relaxed">
            Momen keceriaan anak-anak dalam bereksplorasi, berkarya, dan berinteraksi di lingkungan kelas yang kondusif.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center sm:justify-center overflow-x-auto sm:flex-wrap gap-2 mb-8 sm:mb-10 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              size="sm"
              variant={activeCategory === cat ? "default" : "secondary"}
              className="shrink-0"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group card-elevation card-elevation-hover relative overflow-hidden cursor-pointer flex flex-col"
            >
              <CardBackground rows={10} cols={8} tileSize="md" />
              <div className="relative aspect-[4/3] sm:h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.mediaUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-slate-900 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs font-bold px-3 py-1 rounded-full bg-white/90 text-blue-700 backdrop-blur-xs shadow-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-base sm:text-lg text-black mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black font-medium line-clamp-2">
                    {item.caption}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs text-black font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDateIndo(item.date)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative card-elevation overflow-hidden max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-800"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors"
              aria-label="Tutup foto"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] sm:h-96 w-full bg-slate-900">
              <Image
                src={selectedPhoto.mediaUrl}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 bg-white space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-black font-semibold">
                  {formatDateIndo(selectedPhoto.date)}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-black">{selectedPhoto.title}</h3>
              <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
