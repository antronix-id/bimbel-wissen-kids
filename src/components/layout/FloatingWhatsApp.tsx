"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Send, ShieldCheck, Clock } from "lucide-react";
import { siteSettings } from "@/data/mockData";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function WhatsAppIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.176.201-.301.302-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.635-.929-2.239-.244-.588-.493-.509-.678-.518-.176-.009-.376-.009-.577-.009-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9-.12.58-.352 1.78-1.282 2.03-2.52.25-1.238.25-2.298.175-2.424-.075-.126-.276-.201-.577-.351z" />
      <path d="M12.004 0C5.373 0 0 5.373 0 12.004c0 2.115.549 4.181 1.595 6.002L.051 23.95l6.096-1.6c1.761.96 3.754 1.468 5.857 1.468 6.631 0 12.004-5.373 12.004-12.004C24.008 5.373 18.635 0 12.004 0zm0 21.996c-1.892 0-3.743-.51-5.352-1.472l-.384-.228-3.978 1.043 1.062-3.877-.25-.398a9.96 9.96 0 0 1-1.528-5.36C1.574 6.262 6.257 1.579 12.004 1.579c5.747 0 10.43 4.683 10.43 10.425 0 5.742-4.683 10.392-10.43 10.392z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultText = message.trim()
      ? message
      : "Halo Admin Wissen Kids Center, saya ingin tanya info program bimbingan belajar & jadwal free trial untuk anak saya.";
    const url = formatWhatsAppUrl(siteSettings.whatsappNumber, defaultText);
    window.open(url, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  const quickQuestions = [
    "Mau tanya jadwal Free Trial untuk anak 3-5 tahun",
    "Info les Calistung & Berhitung SD",
    "Berapa biaya program Sempoa & Bahasa Inggris?",
    "Konsultasi program Bimbel SMP persiapan ujian"
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Popup Consultation Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm card-elevation overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header Card */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden shadow-xs">
                  <Image
                    src="/logo.avif"
                    alt="Logo Wissen Kids Center"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
              </div>
              <div>
                <p className="font-bold text-sm leading-none">Admin Wissen Kids Center</p>
                <div className="flex items-center gap-1 text-[11px] text-emerald-100 mt-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Online • Respon Cepat</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors"
              aria-label="Tutup chat konsultasi"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-xs border border-slate-100 text-xs text-slate-700 leading-relaxed">
              👋 Halo Ayah & Bunda! Selamat datang di <strong>Wissen Kids Center</strong>. Ada yang bisa kami bantu seputar program belajar anak usia 2 tahun hingga SMP?
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Pertanyaan Cepat:
              </p>
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const url = formatWhatsAppUrl(siteSettings.whatsappNumber, q);
                    window.open(url, "_blank");
                  }}
                  className="w-full text-left text-xs bg-white hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 px-3 py-2 rounded-lg border border-slate-200/70 hover:border-emerald-200 transition-all line-clamp-1"
                >
                  💬 {q}
                </button>
              ))}
            </div>

            {/* Custom text form */}
            <form onSubmit={handleSend} className="pt-2 flex gap-2">
              <input
                type="text"
                placeholder="Ketik pesan Anda..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm transition-colors shrink-0"
                aria-label="Kirim ke WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Trigger Button: Round Icon-Only */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Konsultasi via WhatsApp"
        variant="whatsapp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0 flex items-center justify-center shadow-xl shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all relative"
      >
        <span className="absolute top-0 right-0 flex h-3 w-3 sm:h-3.5 sm:w-3.5 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-white border-2 border-[#2b9413]"></span>
        </span>
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
        ) : (
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        )}
      </Button>
    </div>
  );
}
