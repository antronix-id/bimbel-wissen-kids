"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import { faqsData, siteSettings } from "@/data/mockData";
import { formatWhatsAppUrl } from "@/lib/utils";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Temukan jawaban cepat seputar metode, jadwal kelas, dan sistem bimbingan belajar kami.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-blue-300"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left p-5 sm:p-6 bg-slate-50/70 hover:bg-slate-50 flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-lg bg-blue-100 text-blue-600 shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-slate-900 text-sm">Masih punya pertanyaan lain seputar kebutuhan si kecil?</p>
            <p className="text-xs text-slate-600 mt-0.5">Tim konsultan pendidikan kami siap berdiskusi langsung melalui WhatsApp.</p>
          </div>
          <a
            href={formatWhatsAppUrl(siteSettings.whatsappNumber, "Halo Admin Wissen-Kids, saya ingin berkonsultasi mengenai program belajar yang paling pas untuk anak saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Langsung ke WA</span>
          </a>
        </div>

      </div>
    </section>
  );
}
