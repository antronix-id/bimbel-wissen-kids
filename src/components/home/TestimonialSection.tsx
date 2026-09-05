import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "@/data/mockData";

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-blue-50/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Kata Orang Tua Tentang{" "}
            <span className="text-blue-600">Wissen-Kids</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Kepuasan nyata dari Ayah & Bunda yang telah menyaksikan langsung transformasi positif putra-putrinya.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((testi) => (
            <div
              key={testi.id}
              className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & quote icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testi.reviewText}&rdquo;
                </p>
              </div>

              {/* Author details */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                {testi.avatarUrl ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200">
                    <Image
                      src={testi.avatarUrl}
                      alt={testi.parentName}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-sm">
                    {testi.parentName.charAt(0)}
                  </div>
                )}
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-slate-900 truncate">
                    {testi.parentName}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    Ortu dari {testi.childNameAndAge}
                  </p>
                  <span className="inline-block text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mt-1 truncate max-w-full">
                    {testi.programTaken}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
