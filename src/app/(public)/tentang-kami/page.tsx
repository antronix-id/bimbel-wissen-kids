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
  BookOpen,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Globe
} from "lucide-react";
import { siteSettings } from "@/data/mockData";
import { formatWhatsAppUrl } from "@/lib/utils";
import { WhatsAppIcon, InstagramIcon, TikTokIcon } from "@/components/shared/SocialIcons";
import { Button } from "@/components/ui/button";
import { CardBackground } from "@/components/ui/card";

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
  const waUrl = formatWhatsAppUrl(
    siteSettings.whatsappNumber,
    "Halo Admin Wissen Kids Center, saya ingin bertanya info alamat, jam buka & konsultasi program belajar."
  );

  return (
    <div className="py-12 sm:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Header Hero Profile */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mt-3 tracking-tight">
            Membangun Kecintaan Belajar Sejak Dini di{" "}
            <span className="text-blue-600">Wissen Kids Center</span>
          </h1>
          <p className="text-black font-semibold text-sm sm:text-base mt-3 leading-relaxed">
            Wissen Kids Center didirikan dengan keyakinan bahwa setiap anak memiliki potensi luar biasa yang dapat berkembang optimal bila didampingi dengan metode yang tepat, penuh kasih sayang, dan menyenangkan.
          </p>
        </div>

        {/* Visi & Misi Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="card-elevation p-5 sm:p-7 lg:p-9 space-y-4 relative overflow-hidden">
            <CardBackground rows={10} cols={8} tileSize="md" />
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-black">Visi Kami</h2>
              <p className="text-black font-medium text-sm sm:text-base leading-relaxed">
                Menjadi pusat stimulasi edukasi dan bimbingan belajar anak paling tepercaya, inovatif, dan ramah anak di Indonesia, mencetak generasi yang cerdas berpikir, berkarakter mulia, dan percaya diri menghadapi masa depan.
              </p>
            </div>
          </div>

          <div className="card-elevation p-5 sm:p-7 lg:p-9 space-y-4 relative overflow-hidden">
            <CardBackground rows={10} cols={8} tileSize="md" />
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-black">Misi Kami</h2>
              <ul className="text-black font-medium text-sm sm:text-base space-y-2.5">
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
        </div>

        {/* 4 Pilar Metodologi Belajar */}
        <div className="card-elevation p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 relative overflow-hidden">
          <CardBackground rows={14} cols={8} tileSize="md" />
          <div className="relative z-10 space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-black">
              Metodologi Belajar di Wissen Kids Center
            </h2>
            <p className="text-xs sm:text-sm text-black font-bold mt-2">
              4 pendekatan ilmiah yang kami gunakan di setiap sesi kelas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-blue-600 font-extrabold text-base sm:text-lg">01</div>
              <h3 className="font-black text-black text-sm sm:text-base">Fun & Multisensory</h3>
              <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">Melibatkan indra penglihatan, pendengaran, dan gerak fisik agar materi menempel kuat di ingatan.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-amber-500 font-extrabold text-base sm:text-lg">02</div>
              <h3 className="font-black text-black text-sm sm:text-base">Personalized Pace</h3>
              <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">Tidak menyamaratakan anak. Anak yang butuh waktu diberi penguatan, yang cepat diberi pengayaan.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-emerald-500 font-extrabold text-base sm:text-lg">03</div>
              <h3 className="font-black text-black text-sm sm:text-base">Positive Reinforcement</h3>
              <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">Apresiasi dan pujian terarah atas setiap usaha kecil anak demi membangun mentalitas juara.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-purple-500 font-extrabold text-base sm:text-lg">04</div>
              <h3 className="font-black text-black text-sm sm:text-base">Concept Mastery</h3>
              <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">Menghindari hafalan buta. Membimbing pemahaman mendalam atas logika di balik setiap rumus dan materi.</p>
            </div>
          </div>
          </div>
        </div>

        {/* Profil Tutor Pengajar */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-black">
              Tutor Sahabat Anak yang Berdedikasi
            </h2>
            <p className="text-xs sm:text-sm text-black font-bold mt-2">
              Seluruh pengajar Wissen Kids Center melalui proses seleksi ketat dan pelatihan berkala dalam psikologi anak.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {tutors.map((tutor, idx) => (
              <div
                key={idx}
                className="card-elevation card-elevation-hover relative overflow-hidden flex flex-col"
              >
                <CardBackground rows={10} cols={8} tileSize="md" />
                <div className="relative aspect-[4/5] sm:h-64 w-full z-10">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5 relative z-10">
                  <h3 className="font-black text-sm sm:text-base text-black">{tutor.name}</h3>
                  <p className="text-xs sm:text-sm font-bold text-blue-700 mt-0.5">{tutor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Kontak & Lokasi Belajar */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-black">
              Kontak & Lokasi Gedung Belajar
            </h2>
            <p className="text-xs sm:text-sm text-black font-bold mt-2">
              Kunjungi langsung fasilitas kami atau hubungi tim layanan untuk konsultasi program dan reservasi jadwal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Card: Dark Information Card */}
            <div className="lg:col-span-5 bg-[#0f1f38] rounded-3xl p-5 sm:p-7 lg:p-9 border border-slate-800 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-6 sm:space-y-7">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  Gedung Pusat Belajar
                </h3>

                <div className="space-y-5 sm:space-y-6">
                  {/* Jam Operasional */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-slate-500/30 flex items-center justify-center shrink-0 mt-0.5 text-slate-300">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-400">
                        JAM OPERASIONAL LAYANAN:
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed font-medium">
                        {siteSettings.operatingHours}
                      </p>
                    </div>
                  </div>

                  {/* Alamat Lengkap */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0 mt-0.5 text-rose-400">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-400">
                        ALAMAT LENGKAP:
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed font-medium">
                        {siteSettings.address}
                      </p>
                    </div>
                  </div>

                  {/* Telepon Kantor / WA */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 mt-0.5 text-pink-400">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-400">
                        TELEPON KANTOR:
                      </p>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-slate-200 hover:text-emerald-400 font-semibold mt-1 block transition-colors"
                      >
                        {siteSettings.displayPhone}
                      </a>
                    </div>
                  </div>

                  {/* Email Resmi */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-md bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5 text-indigo-300">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-400">
                        EMAIL RESMI:
                      </p>
                      <a
                        href={`mailto:${siteSettings.email}`}
                        className="text-xs sm:text-sm text-slate-200 hover:text-blue-300 font-medium mt-1 block transition-colors"
                      >
                        {siteSettings.email}
                      </a>
                    </div>
                  </div>

                  {/* Media Sosial & Website */}
                  <div className="pt-4 border-t border-slate-800/90">
                    <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-400 mb-3">
                      MEDIA SOSIAL & WEBSITE:
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      {/* WhatsApp */}
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/30"
                        title="Chat WhatsApp Resmi"
                        aria-label="WhatsApp"
                      >
                        <WhatsAppIcon className="w-5 h-5 fill-current" />
                      </a>

                      {/* Instagram */}
                      <a
                        href={siteSettings.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-rose-500/20 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-rose-400 hover:text-white border border-rose-500/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/30"
                        title="Instagram @wissenkids"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </a>

                      {/* TikTok */}
                      <a
                        href={siteSettings.tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
                        title="TikTok @wissenkids"
                        aria-label="TikTok"
                      >
                        <TikTokIcon className="w-5 h-5" />
                      </a>

                      {/* Website */}
                      <Link
                        href="/"
                        className="w-10 h-10 rounded-xl bg-blue-500/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
                        title="Website Resmi Wissen Kids Center"
                        aria-label="Website"
                      >
                        <Globe className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Right Card: Google Map Embed */}
            <div className="lg:col-span-7 card-elevation rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white relative min-h-[340px] sm:min-h-[460px] flex flex-col">
              {/* Floating Location Card (Top Left) */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-white/95 backdrop-blur-xs p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200/90 max-w-[calc(100%-1.5rem)] sm:max-w-xs space-y-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-black">
                      {siteSettings.siteName}
                    </h4>
                    <p className="text-[11px] text-black font-medium line-clamp-2 mt-0.5">
                      {siteSettings.address}
                    </p>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteSettings.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors shrink-0"
                    title="Buka di Google Maps"
                    aria-label="Buka di Google Maps"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-600 pt-0.5">
                  <span>4.9</span>
                  <span>★★★★★</span>
                  <span className="text-black font-semibold">(120+ Ulasan)</span>
                </div>
              </div>

              {/* Google Map iframe */}
              <iframe
                src={siteSettings.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "340px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full flex-1 rounded-3xl"
                title="Peta Lokasi Wissen Kids Center"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA to Visit */}
        <div className="card-elevation bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 sm:p-10 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold">Ingin Berkunjung & Melihat Langsung Fasilitas Kami?</h3>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Ayah & Bunda dipersilakan melakukan kunjungan ke lokasi (Open House) untuk berkonsultasi langsung dan mencoba kelas free trial.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Button
              href="/daftar"
              size="lg"
              className="w-full sm:w-auto"
            >
              Jadwalkan Kunjungan & Free Trial →
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
