"use client";

import React, { useState } from "react";
import { Program, ProgramLevel } from "@/types";
import ProgramCard from "@/components/shared/ProgramCard";
import { Sparkles, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto sm:flex-wrap gap-2 sm:gap-3 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
        {filterOptions.map((opt) => {
          const isSelected = activeFilter === opt.id;
          return (
            <Button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              variant={isSelected ? "default" : "secondary"}
              className="h-auto py-2 sm:py-2.5 px-3.5 sm:px-4 flex flex-col items-center gap-0.5 rounded-2xl whitespace-nowrap shrink-0 sm:shrink"
            >
              <span className="text-xs sm:text-sm">{opt.label}</span>
              <span
                className={`text-[10px] sm:text-xs font-medium ${
                  isSelected ? "text-white" : "text-white/80"
                }`}
              >
                {opt.ageDesc}
              </span>
            </Button>
          );
        })}
      </div>

      {/* Counter text */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-black font-bold px-1 sm:px-2">
        <p>
          Menampilkan <strong className="text-black font-black">{filteredPrograms.length}</strong> pilihan program belajar
        </p>
      </div>

      {/* Grid of Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
        {filteredPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
