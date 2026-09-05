"use client";

import React, { useState } from "react";
import { faqsData, siteSettings } from "@/data/mockData";
import { formatWhatsAppUrl } from "@/lib/utils";
import { ChevronDown, HelpCircle, MessageCircle, Search } from "lucide-react";

const faqCategories = [
  "Semua",
  "Pendaftaran & Trial",
  "Program & Metode",
  "Biaya & Jadwal",
  "Fasilitas & Kehadiran",
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCat = activeCategory === "Semua" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Informasi lengkap seputar sistem pendaftaran, metode belajar, jadwal, dan fasilitas di Wissen-Kids.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Ketik kata kunci pertanyaan Anda..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-blue-300 transition-all"
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 transition-colors hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                        <HelpCircle className="w-4 h-4" />
                      </span>
                      <span className="font-bold text-sm sm:text-base text-slate-900">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-slate-50/50 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                      <div className="mt-3 pt-2 text-[11px] font-semibold text-blue-600">
                        Topik: {faq.category}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white p-8 text-center rounded-2xl border border-slate-200 text-xs text-slate-500">
              Tidak ada pertanyaan yang sesuai dengan kata kunci &ldquo;{search}&rdquo;.
            </div>
          )}
        </div>

        {/* Bottom Card for Custom Inquiries */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-emerald-50 border border-emerald-100 text-center space-y-3">
          <h3 className="text-lg font-bold text-emerald-950">
            Punya Pertanyaan Spesifik Mengenai Anak Anda?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto">
            Jangan ragu untuk menghubungi konsultan pendidikan kami. Kami siap mendengarkan cerita Ayah & Bunda kapan saja.
          </p>
          <div className="pt-2">
            <a
              href={formatWhatsAppUrl(siteSettings.whatsappNumber, "Halo Admin Wissen-Kids, saya ingin bertanya lebih lanjut seputar pendaftaran.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tanya Langsung via WhatsApp ({siteSettings.displayPhone})</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
