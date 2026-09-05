import React from "react";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  Clock, 
  Users, 
  Sparkles,
  BookOpen,
  Calculator,
  Languages,
  GraduationCap,
  BookMarked,
  Compass,
  HeartHandshake,
  Palette,
  Puzzle
} from "lucide-react";
import { Program } from "@/types";
import { Button } from "@/components/ui/button";
import { CardBackground } from "@/components/ui/card";

interface ProgramCardProps {
  program: Program;
}

// Icon helper
const iconMap: Record<string, React.ReactNode> = {
  Puzzle: <Puzzle className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Calculator: <Calculator className="w-5 h-5" />,
  Languages: <Languages className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  BookMarked: <BookMarked className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
};

export default function ProgramCard({ program }: ProgramCardProps) {
  const icon = iconMap[program.iconName] || <Sparkles className="w-5 h-5" />;

  return (
    <div className="group relative card-elevation card-elevation-hover flex flex-col overflow-hidden">
      <CardBackground rows={10} cols={10} tileSize="md" />
      {/* Top Banner Accent */}
      <div className={`h-2.5 w-full ${program.colorScheme.badgeBg} relative z-10`} />

      <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col relative z-10">
        {/* Header Badge & Age */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3.5 sm:mb-4">
          <div className="flex items-center gap-2">
            <span className={`p-2 sm:p-2.5 rounded-2xl ${program.colorScheme.bg} ${program.colorScheme.accent} shadow-xs`}>
              {icon}
            </span>
            <span className={`text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full ${program.colorScheme.badgeBg} ${program.colorScheme.badgeText}`}>
              {program.badge}
            </span>
          </div>
          <span className="text-[11px] sm:text-xs font-extrabold text-black bg-slate-200/90 px-2.5 py-1 rounded-full whitespace-nowrap">
            {program.ageGroup}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-black text-black group-hover:text-blue-600 transition-colors mb-1.5 sm:mb-2 line-clamp-1">
          {program.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-black font-medium leading-relaxed line-clamp-2 mb-4 flex-1">
          {program.shortDesc}
        </p>

        {/* Highlights Bullets */}
        <div className="space-y-1.5 mb-4 sm:mb-5 border-t border-slate-200/90 pt-3">
          {program.features.slice(0, 3).map((hl, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-black font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="truncate">{hl}</span>
            </div>
          ))}
        </div>

        {/* Schedule & Format Info Badges */}
        <div className="space-y-2 py-3 border-t border-slate-200/90 text-xs text-black font-semibold mb-3">
          {program.scheduleInfo && (
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-black shrink-0" />
              <span className="truncate">{program.scheduleInfo}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-black shrink-0" />
            <span className="line-clamp-1">{program.classFormats.join(" • ")}</span>
          </div>
        </div>

        {/* Action Button CTA */}
        <div className="grid grid-cols-2 gap-2 pt-1 sm:pt-2">
          <Button
            href={`/program/${program.slug}`}
            variant="secondary"
            size="sm"
            className="w-full text-xs px-2 sm:px-3"
          >
            <span className="hidden xs:inline">Silabus Detail</span>
            <span className="xs:hidden">Silabus</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </Button>

          <Button
            href={`/daftar?program=${program.slug}`}
            size="sm"
            className="w-full text-xs px-2 sm:px-3"
          >
            <span>Coba Gratis</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
