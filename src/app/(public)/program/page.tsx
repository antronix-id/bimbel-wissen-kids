"use client";

import React, { useState } from "react";
import { programsData } from "@/data/mockData";
import ProgramCard from "@/components/shared/ProgramCard";
import { Search, Filter, Sparkles, BookOpen, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardBackground } from "@/components/ui/card";

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const filteredPrograms = programsData.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.ageGroup.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel =
      selectedLevel === "all" ||
      program.level === selectedLevel ||
      (selectedLevel === "sd" && (program.level === "sd" || program.ageGroup.includes("SD"))) ||
      (selectedLevel === "smp" && (program.level === "smp" || program.ageGroup.includes("SMP")));

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="py-12 sm:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight">
            10 Pilihan Program Terstruktur untuk Usia 2 Tahun - SMP
          </h1>
          <p className="text-black font-semibold text-sm sm:text-base mt-2.5 leading-relaxed">
            Temukan program yang dirancang khusus untuk memicu rasa ingin tahu, melatih keterampilan fondasi, dan meningkatkan prestasi akademik anak Anda.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="card-elevation relative overflow-hidden p-3.5 sm:p-5 mb-8 sm:mb-10 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <CardBackground />
          {/* Search Box */}
          <div className="relative z-10 flex-1">
            <Search className="w-5 h-5 text-slate-700 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari program (contoh: calistung, sempoa, smp, english)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 rounded-2xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-black font-medium placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Level Filter Dropdown / Buttons */}
          <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: "all", label: "Semua" },
              { id: "toddler", label: "Toddler (2-4 Thn)" },
              { id: "prasekolah", label: "Prasekolah (4-7 Thn)" },
              { id: "sd", label: "SD (Kelas 1-6)" },
              { id: "smp", label: "SMP (Kelas 7-9)" },
            ].map((btn) => (
              <Button
                key={btn.id}
                onClick={() => setSelectedLevel(btn.id)}
                size="sm"
                variant={selectedLevel === btn.id ? "default" : "secondary"}
                className="whitespace-nowrap text-xs px-3 py-1.5"
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-5 sm:mb-6 flex items-center justify-between text-xs sm:text-sm text-black font-bold px-1">
          <p>
            Ditemukan <strong className="text-black font-black">{filteredPrograms.length}</strong> program belajar
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-blue-700 hover:underline font-bold"
            >
              Reset Pencarian
            </button>
          )}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="card-elevation relative overflow-hidden p-12 text-center space-y-4">
            <CardBackground />
            <div className="relative z-10 space-y-4">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-bold text-lg text-slate-800">Program Tidak Ditemukan</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Tidak ada paket belajar yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;. Silakan coba kata kunci lain atau hubungi admin.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLevel("all");
                }}
                size="sm"
              >
                Tampilkan Semua Program
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
