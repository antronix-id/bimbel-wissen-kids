import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AgeCategoryFilter from "@/components/home/AgeCategoryFilter";
import WhyUsSection from "@/components/home/WhyUsSection";
import FacilitiesTeaser from "@/components/home/FacilitiesTeaser";
import TestimonialSection from "@/components/home/TestimonialSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";
import { programsData } from "@/data/mockData";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Program Section with Age Filter */}
      <section id="program-section" className="py-16 sm:py-24 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              10 Program Unggulan untuk Setiap Jenjang Usia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Pilih kelompok usia anak Anda untuk melihat rekomendasi program stimulasi dan bimbingan belajar yang paling tepat.
            </p>
          </div>

          <AgeCategoryFilter programs={programsData} />

          <div className="mt-12 text-center">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-colors"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Lihat Rincian Kurikulum & Silabus 10 Program Lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Why Choose Wissen-Kids */}
      <WhyUsSection />

      {/* 4. Facilities & Atmosphere Teaser */}
      <FacilitiesTeaser />

      {/* 5. Parent Testimonials */}
      <TestimonialSection />

      {/* 6. FAQ Accordion */}
      <FaqSection />

      {/* 7. High Converting CTA Banner */}
      <CtaBanner />
    </div>
  );
}
