"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { faqsData, siteSettings } from "@/data/mockData";
import { formatWhatsAppUrl } from "@/lib/utils";

export const BlurredStagger = ({
  text,
}: {
  text: string;
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.007,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 2,
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  return (
    <div className="w-full">
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="text-sm sm:text-base leading-relaxed text-black font-medium break-words whitespace-normal"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const waUrl = formatWhatsAppUrl(
    siteSettings.whatsappNumber,
    "Halo Admin Wissen Kids Center, saya ingin berkonsultasi mengenai pertanyaan seputar bimbingan belajar anak saya."
  );

  return (
    <section id="faq" className="py-16 md:py-24 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5 md:gap-14 items-start">
          
          {/* Left Column: Heading & Contact info */}
          <div className="md:col-span-2 space-y-4 md:sticky md:top-28">
            <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-white px-3.5 py-1 text-xs font-bold shadow-[2px_2px_0px_#000]">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Tanya Jawab (FAQs)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-black leading-tight">
              Pertanyaan yang Sering Diajukan
            </h2>

            <p className="text-black font-semibold text-sm sm:text-base leading-relaxed">
              Semua hal penting yang perlu Ayah & Bunda ketahui tentang program, metode, fasilitas, dan jadwal di Wissen Kids Center.
            </p>

            <div className="pt-2 hidden md:block border-t border-slate-200/80">
              <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">
                Belum menemukan jawaban yang dicari? Silakan hubungi langsung{" "}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-700 hover:text-blue-800 underline underline-offset-2 inline-flex items-center gap-1"
                >
                  Tim Edukasi Kami via WA →
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Accordion with BlurredStagger */}
          <div className="md:col-span-3 space-y-1">
            {faqsData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-slate-200/90 transition-colors"
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full text-left py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-extrabold text-sm sm:text-base text-black group-hover:text-blue-600 transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-700 shrink-0 transition-transform duration-200 group-hover:text-blue-600 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pt-1">
                          <BlurredStagger text={item.answer} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Mobile Bottom Contact Callout */}
          <div className="md:hidden col-span-full pt-4 border-t border-slate-200/80">
            <p className="text-xs sm:text-sm text-black font-medium">
              Belum menemukan jawaban yang dicari? Hubungi{" "}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Tim Edukasi Kami via WhatsApp →
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export { FaqSection };
