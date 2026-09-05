"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles, Send, ShieldCheck } from "lucide-react";
import { siteSettings } from "@/data/mockData";
import { formatWhatsAppUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultText = message.trim()
      ? message
      : "Halo Admin Wissen-Kids, saya ingin tanya info program bimbingan belajar & jadwal free trial untuk anak saya.";
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popup Consultation Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header Card */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                  WK
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
              </div>
              <div>
                <p className="font-bold text-sm leading-none">Admin Wissen-Kids</p>
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
              👋 Halo Ayah & Bunda! Selamat datang di <strong>Wissen-Kids</strong>. Ada yang bisa kami bantu seputar program belajar anak usia 2 tahun hingga SMP?
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

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Konsultasi via WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
        <span className="font-bold text-sm hidden sm:inline">Tanya Kami di WhatsApp</span>
      </button>
    </div>
  );
}
