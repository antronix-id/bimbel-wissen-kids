"use client";

import React, { useState } from "react";
import { Program, ProgramLevel } from "@/types";
import ProgramCard from "@/components/shared/ProgramCard";
import { Sparkles, Layers } from "lucide-react";

interface AgeCategoryFilterProps {
  programs: Program[];
}

type FilterOption = {
  id: string;
  label: string;
  ageDesc: string;
  levelFilter?: ProgramLevel | "all";
};

const filterOptions: FilterOption[] = [
  { id: "all", label: "Semua Program", ageDesc: "Usia 2 Thn - SMP", levelFilter: "all" },
  { id: "toddler", label: "Toddler & PAUD", ageDesc: "Usia 2 – 4 Tahun", levelFilter: "toddler" },
  { id: "prasekolah", label: "Prasekolah & TK", ageDesc: "Usia 4 – 7 Tahun", levelFilter: "prasekolah" },
  { id: "sd", label: "Sekolah Dasar (SD)", ageDesc: "Kelas 1 – 6 SD", levelFilter: "sd" },
  { id: "smp", label: "Sekolah Menengah (SMP)", ageDesc: "Kelas 7 – 9 SMP", levelFilter: "smp" },
];

export default function AgeCategoryFilter({ programs }: AgeCategoryFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredPrograms = programs.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "toddler") return p.level === "toddler";
    if (activeFilter === "prasekolah") return p.level === "prasekolah";
    if (activeFilter === "sd") return p.level === "sd" || (p.level === "umum" && p.ageGroup.includes("SD"));
    if (activeFilter === "smp") return p.level === "smp" || (p.level === "umum" && p.ageGroup.includes("SMP"));
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Category Pills / Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
        {filterOptions.map((opt) => {
          const isSelected = activeFilter === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex flex-col items-center gap-0.5 ${
                isSelected
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 shadow-xs"
              }`}
            >
              <span>{opt.label}</span>
              <span
                className={`text-[10px] font-medium ${
                  isSelected ? "text-blue-100" : "text-slate-400"
                }`}
              >
                {opt.ageDesc}
              </span>
            </button>
          );
        })}
      </div>

      {/* Counter text */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-2">
        <p>
          Menampilkan <strong>{filteredPrograms.length}</strong> pilihan program belajar
        </p>
      </div>

      {/* Grid of Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
