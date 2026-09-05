import React from "react";
import { 
  Smile, 
  Target, 
  ShieldCheck, 
  LineChart, 
  GraduationCap, 
  Home 
} from "lucide-react";
import { CardBackground } from "@/components/ui/card";

const reasons = [
  {
    icon: <Smile className="w-6 h-6 text-amber-500" />,
    bg: "bg-amber-50",
    border: "border-amber-100",
    title: "Metode Fun & Active Learning",
    desc: "Belajar dikemas lewat permainan edukatif, lagu, peraga konkret, dan eksperimen mini sehingga anak tidak merasa tertekan."
  },
  {
    icon: <Target className="w-6 h-6 text-blue-500" />,
    bg: "bg-blue-50",
    border: "border-blue-100",
    title: "Kurikulum Personal Sesuai Ritme Anak",
    desc: "Kami menghargai keunikan tiap anak. Pembelajaran disesuaikan dengan kecepatan pemahaman tanpa paksaan atau perbandingan."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    title: "Ruang Kelas Aman, Ber-AC & Higienis",
    desc: "Lingkungan ramah anak bebas sudut tajam, dilengkapi pojok baca, playground sensori, dan protokol kebersihan teratur."
  },
  {
    icon: <LineChart className="w-6 h-6 text-indigo-500" />,
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    title: "Laporan Berkala ke Orang Tua",
    desc: "Evaluasi capaian anak dilaporkan secara transparan tiap modul agar Ayah & Bunda dapat memantau perkembangan di rumah."
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
    bg: "bg-purple-50",
    border: "border-purple-100",
    title: "Tutor Terpilih & Berjiwa Ramah Anak",
    desc: "Pengajar berlatar belakang pendidikan & psikologi anak yang sabar, telaten, dan terlatih membangkitkan rasa percaya diri."
  },
  {
    icon: <Home className="w-6 h-6 text-rose-500" />,
    bg: "bg-rose-50",
    border: "border-rose-100",
    title: "Format Kelas Fleksibel",
    desc: "Tersedia pilihan Kelas Reguler kelompok kecil (3-5 anak), Kelas Privat di bimbel, hingga layanan Home Visit ke rumah."
  }
];

export default function WhyUsSection() {
  return (
    <section className="py-16 sm:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            Mengapa Ratusan Orang Tua Mempercayakan Anaknya di{" "}
            <span className="text-blue-600">Wissen Kids Center</span>?
          </h2>
          <p className="text-black font-semibold text-sm sm:text-base mt-2.5 leading-relaxed">
            Kombinasi kurikulum teruji, tutor telaten, dan atmosfer ceria yang membuat proses belajar terasa seperti petualangan menyenangkan.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 card-elevation card-elevation-hover relative overflow-hidden flex flex-col"
            >
              <CardBackground rows={10} cols={8} tileSize="md" />
              <div className="relative z-10">
                <div className={`w-11 h-11 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center mb-4 shadow-xs`}>
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-black text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
