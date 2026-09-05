"use client";

import React, { useState } from "react";
import { programsData } from "@/data/mockData";
import ProgramCard from "@/components/shared/ProgramCard";
import { Search, Filter, Sparkles, BookOpen, Layers } from "lucide-react";

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
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            10 Pilihan Program Terstruktur untuk Usia 2 Tahun - SMP
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Temukan program yang dirancang khusus untuk memicu rasa ingin tahu, melatih keterampilan fondasi, dan meningkatkan prestasi akademik anak Anda.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari program (contoh: calistung, sempoa, smp, english)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Level Filter Dropdown / Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: "all", label: "Semua" },
              { id: "toddler", label: "Toddler (2-4 Thn)" },
              { id: "prasekolah", label: "Prasekolah (4-7 Thn)" },
              { id: "sd", label: "SD (Kelas 1-6)" },
              { id: "smp", label: "SMP (Kelas 7-9)" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedLevel(btn.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedLevel === btn.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500 px-1">
          <p>
            Ditemukan <strong>{filteredPrograms.length}</strong> program belajar
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-blue-600 hover:underline font-semibold"
            >
              Reset Pencarian
            </button>
          )}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded-3xl border border-slate-200 space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-bold text-lg text-slate-800">Program Tidak Ditemukan</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Tidak ada paket belajar yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;. Silakan coba kata kunci lain atau hubungi admin.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLevel("all");
              }}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
            >
              Tampilkan Semua Program
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
