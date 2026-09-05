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
    <div className="group relative bg-white rounded-3xl border border-slate-200/80 hover:border-blue-400/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Top Banner Accent */}
      <div className={`h-2.5 w-full ${program.colorScheme.badgeBg}`} />

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        {/* Header Badge & Age */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className={`p-2.5 rounded-2xl ${program.colorScheme.bg} ${program.colorScheme.accent} shadow-xs`}>
              {icon}
            </span>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${program.colorScheme.badgeBg} ${program.colorScheme.badgeText}`}>
              {program.badge}
            </span>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            {program.ageGroup}
          </span>
        </div>

        {/* Title & Short Description */}
        <Link href={`/program/${program.slug}`} className="block group-hover:text-blue-600 transition-colors">
          <h3 className="text-xl font-bold text-slate-900 mb-2.5 tracking-tight">
            {program.title}
          </h3>
        </Link>
        <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
          {program.shortDesc}
        </p>

        {/* Key Features List */}
        <div className="space-y-2 mb-6 flex-1">
          {program.features.slice(0, 3).map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
              <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Metadata info: Schedule & Class formats */}
        <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500 mb-5">
          {program.scheduleInfo && (
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{program.scheduleInfo}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span className="line-clamp-1">{program.classFormats.join(" • ")}</span>
          </div>
        </div>

        {/* Action Button CTA */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Link
            href={`/program/${program.slug}`}
            className="w-full py-2.5 px-3 text-center text-xs font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-xl transition-colors flex items-center justify-center gap-1"
          >
            <span>Silabus Detail</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <Link
            href={`/daftar?program=${program.slug}`}
            className="w-full py-2.5 px-3 text-center text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1"
          >
            <span>Coba Gratis</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
