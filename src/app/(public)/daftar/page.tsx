"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { programsData, siteSettings } from "@/data/mockData";
import { formatWhatsAppUrl } from "@/lib/utils";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  User, 
  Phone, 
  Smile, 
  Calendar,
  Gift
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardBackground } from "@/components/ui/card";

function RegisterFormContent() {
  const searchParams = useSearchParams();
  const preselectedSlug = searchParams.get("program");

  const [parentName, setParentName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [classPreference, setClassPreference] = useState<string>("reguler");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWaUrl, setGeneratedWaUrl] = useState("");

  // Preselect program from query param
  useEffect(() => {
    if (preselectedSlug) {
      setSelectedPrograms((prev) => 
        prev.includes(preselectedSlug) ? prev : [...prev, preselectedSlug]
      );
    }
  }, [preselectedSlug]);

  const toggleProgram = (slug: string) => {
    setSelectedPrograms((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!parentName || !whatsapp || !childName || selectedPrograms.length === 0) {
      alert("Mohon lengkapi nama orang tua, WhatsApp, nama anak, dan minimal 1 pilihan program belajar.");
      return;
    }

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Ignore if unsupported
    }

    const programTitles = selectedPrograms
      .map((slug) => programsData.find((p) => p.slug === slug)?.title || slug)
      .join(", ");

    const text = `Halo Admin Wissen Kids Center! Saya ingin mendaftarkan anak saya untuk sesi Free Trial:
• Nama Orang Tua: ${parentName}
• No. WhatsApp: ${whatsapp}
• Nama Anak: ${childName} (${childAge})
• Pilihan Program: ${programTitles}
• Tipe Kelas: ${classPreference.toUpperCase()}
• Catatan: ${notes || "-"}

Mohon informasi jadwal yang tersedia ya, terima kasih!`;

    const waUrl = formatWhatsAppUrl(siteSettings.whatsappNumber, text);
    setGeneratedWaUrl(waUrl);
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight">
            Pendaftaran & Booking Coba Kelas
          </h1>
          <p className="text-black font-semibold text-sm sm:text-base mt-2.5 leading-relaxed">
            Isi formulir singkat di bawah ini. Tim kami akan segera mengonfirmasi jadwal coba kelas gratis untuk ananda tercinta.
          </p>
        </div>

        {/* Success State */}
        {isSubmitted ? (
          <div className="card-elevation p-6 sm:p-10 lg:p-12 text-center space-y-6 animate-in zoom-in-95 duration-300 relative overflow-hidden">
            <CardBackground rows={14} cols={10} tileSize="md" />
            <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">
                Pendaftaran Berhasil Terkirim! 🎉
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-lg mx-auto">
                Terima kasih Bunda / Ayah <strong>{parentName}</strong>. Data ananda <strong>{childName}</strong> telah kami terima.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50 border border-blue-100 max-w-md mx-auto text-left text-xs text-slate-700 space-y-1.5">
              <p className="font-bold text-blue-900">Ringkasan Pendaftaran:</p>
              <p>• Anak: {childName} ({childAge})</p>
              <p>• Pilihan Program: {selectedPrograms.join(", ")}</p>
              <p>• Tipe Kelas: {classPreference}</p>
            </div>

            <div className="space-y-3 pt-2">
              <Button
                href={generatedWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Konfirmasi Langsung ke WhatsApp Admin</span>
              </Button>
              <p className="text-xs text-slate-400">
                Klik tombol di atas untuk membuka pesan otomatis di WhatsApp admin kami.
              </p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setParentName("");
                setChildName("");
                setChildAge("");
                setWhatsapp("");
                setSelectedPrograms([]);
                setNotes("");
              }}
              className="text-xs font-semibold text-blue-600 hover:underline pt-4"
            >
              ← Isi Formulir untuk Anak Lainnya
            </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form
            onSubmit={handleSubmit}
            className="card-elevation p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 relative overflow-hidden"
          >
            <CardBackground rows={16} cols={10} tileSize="md" />
            <div className="relative z-10 space-y-6 sm:space-y-8">
            {/* Step 1: Data Orang Tua */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">
                  1
                </span>
                <span>Data Orang Tua / Wali Murid</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Lengkap Bunda / Ayah *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Amanda Putri"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nomor WhatsApp Aktif *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 081234567890"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Data Anak */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">
                  2
                </span>
                <span>Data Calon Murid</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Panggilan Anak *
                  </label>
                  <div className="relative">
                    <Smile className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Rafa"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Usia / Tingkat Kelas Sekarang *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: 4 Tahun / Kelas 3 SD"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Pilihan 10 Program Belajar */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">
                    3
                  </span>
                  <span>Pilihan Program Belajar yang Diminati *</span>
                </h2>
                <span className="text-xs text-blue-600 font-semibold">
                  (Bisa pilih lebih dari 1)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {programsData.map((prog) => {
                  const isChecked = selectedPrograms.includes(prog.slug);
                  return (
                    <label
                      key={prog.id}
                      onClick={() => toggleProgram(prog.slug)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isChecked
                          ? "border-blue-600 bg-blue-50/80 shadow-xs"
                          : "border-slate-200 bg-slate-50/50 hover:bg-slate-50"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm font-black text-black truncate">
                          {prog.title}
                        </p>
                        <p className="text-[11px] text-black font-semibold">
                          {prog.ageGroup}
                        </p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                          isChecked
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Preferensi Tipe Kelas & Catatan */}
            <div className="space-y-4">
              <h2 className="text-lg font-black text-black border-b border-slate-200 pb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">
                  4
                </span>
                <span>Preferensi Format Kelas & Jadwal</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "reguler", title: "Kelas Reguler", desc: "Kelompok 3-5 anak di bimbel" },
                  { id: "privat", title: "Kelas Privat", desc: "1 guru 1 anak di bimbel" },
                  { id: "home-visit", title: "Home Visit", desc: "Guru datang ke rumah murid" },
                ].map((item) => (
                  <label
                    key={item.id}
                    onClick={() => setClassPreference(item.id)}
                    className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                      classPreference === item.id
                        ? "border-blue-600 bg-blue-50 text-black font-black shadow-xs"
                        : "border-slate-300 bg-slate-50 text-black font-bold hover:bg-slate-100"
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-black">{item.title}</p>
                    <p className="text-[11px] text-black font-medium mt-0.5">{item.desc}</p>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-xs font-black text-black mb-1.5">
                  Catatan Tambahan (Hari yang diinginkan / Karakter anak)
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Anak agak pemalu, lebih leluasa di jadwal sore jam 15.00 WIB."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-black font-medium placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-black font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Privasi data Anda terjamin aman & tanpa spam</span>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Kirim Pendaftaran Free Trial</span>
              </Button>
            </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Memuat formulir pendaftaran...</div>}>
      <RegisterFormContent />
    </Suspense>
  );
}
