import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  Target, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Award,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { siteSettings } from "@/data/mockData";

const tutors = [
  {
    name: "Kak Sarah Maulida, S.Pd",
    role: "Koordinator Program Toddler & Calistung",
    bio: "Berpengalaman 6+ tahun dalam stimulasi sensori batita dan metode fonik interaktif.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Coach Hendra, S.Si",
    role: "Spesialis Sempoa & Matematika Logika",
    bio: "Master trainer sempoa mental aritmatika tingkat nasional, mengantar puluhan murid juara lomba.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Miss Jessica Tan, B.Ed",
    role: "Koordinator English for Kids & SD English",
    bio: "Lulusan Pendidikan Bahasa Inggris dengan sertifikasi Cambridge TKT Young Learners.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Ustadz Ahmad Fauzi, S.Ag",
    role: "Pembimbing Mengaji & Adab Karakter",
    bio: "Hafizh Al-Qur'an bersanad, telaten mendampingi anak melafalkan makhraj dengan sabar.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  }
];

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Header Hero Profile */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Membangun Kecintaan Belajar Sejak Dini di{" "}
            <span className="text-blue-600">Wissen-Kids</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg mt-4 leading-relaxed">
            Wissen-Kids didirikan dengan keyakinan bahwa setiap anak memiliki potensi luar biasa yang dapat berkembang optimal bila didampingi dengan metode yang tepat, penuh kasih sayang, dan menyenangkan.
          </p>
        </div>

        {/* Visi & Misi Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Visi Kami</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Menjadi pusat stimulasi edukasi dan bimbingan belajar anak paling tepercaya, inovatif, dan ramah anak di Indonesia, mencetak generasi yang cerdas berpikir, berkarakter mulia, dan percaya diri menghadapi masa depan.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Misi Kami</h2>
            <ul className="text-slate-600 text-sm space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>Menghadirkan kurikulum berjenjang dari usia 2 tahun hingga 15 tahun (SMP) yang aplikatif dan menyenangkan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>Membina tenaga pendidik yang berjiwa sabar, menguasai psikologi perkembangan anak, dan terus berinovasi.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>Menjalin sinergi kemitraan aktif dengan orang tua dalam memantau tumbuh kembang akademik dan karakter buah hati.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Pilar Metodologi Belajar */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
              Metodologi Belajar di Wissen-Kids
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              4 pendekatan ilmiah yang kami gunakan di setiap sesi kelas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-blue-600 font-extrabold text-lg">01</div>
              <h3 className="font-bold text-slate-900 text-sm">Fun & Multisensory</h3>
              <p className="text-xs text-slate-600">Melibatkan indra penglihatan, pendengaran, dan gerak fisik agar materi menempel kuat di ingatan.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-amber-500 font-extrabold text-lg">02</div>
              <h3 className="font-bold text-slate-900 text-sm">Personalized Pace</h3>
              <p className="text-xs text-slate-600">Tidak menyamaratakan anak. Anak yang butuh waktu diberi penguatan, yang cepat diberi pengayaan.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-emerald-500 font-extrabold text-lg">03</div>
              <h3 className="font-bold text-slate-900 text-sm">Positive Reinforcement</h3>
              <p className="text-xs text-slate-600">Apresiasi dan pujian terarah atas setiap usaha kecil anak demi membangun mentalitas juara.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-purple-500 font-extrabold text-lg">04</div>
              <h3 className="font-bold text-slate-900 text-sm">Concept Mastery</h3>
              <p className="text-xs text-slate-600">Menghindari hafalan buta. Membimbing pemahaman mendalam atas logika di balik setiap rumus dan materi.</p>
            </div>
          </div>
        </div>

        {/* Profil Tutor Pengajar */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
              Tutor Sahabat Anak yang Berdedikasi
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Seluruh pengajar Wissen-Kids melalui proses seleksi ketat dan pelatihan berkala dalam psikologi anak.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutors.map((tutor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-slate-900">{tutor.name}</h3>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">{tutor.role}</p>
                    <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">{tutor.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Visit */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black">Ingin Berkunjung & Melihat Langsung Fasilitas Kami?</h3>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto">
            Ayah & Bunda dipersilakan melakukan kunjungan ke lokasi (Open House) untuk berkonsultasi langsung dan mencoba kelas free trial.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/daftar"
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors"
            >
              Jadwalkan Kunjungan & Free Trial →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
