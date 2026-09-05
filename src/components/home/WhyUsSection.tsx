import React from "react";
import { 
  Smile, 
  Target, 
  ShieldCheck, 
  LineChart, 
  GraduationCap, 
  Home 
} from "lucide-react";

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
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Mengapa Ratusan Orang Tua Mempercayakan Anaknya di{" "}
            <span className="text-blue-600">Wissen-Kids</span>?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Kombinasi kurikulum teruji, tutor telaten, dan atmosfer ceria yang membuat proses belajar terasa seperti petualangan menyenangkan.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
            >
              <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center mb-5 shadow-xs`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
