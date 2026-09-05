import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import { siteSettings, programsData } from "@/data/mockData";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/shared/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Kolom 1 & 2: Identitas & Visi */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-amber-400 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Wissen<span className="text-amber-400">-Kids</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Lembaga bimbingan belajar dan stimulasi edukasi ramah anak. Kami mendampingi masa emas tumbuh kembang dan pencapaian akademik anak mulai dari usia 2 tahun hingga tingkat 9 SMP dengan kurikulum interaktif dan menyenangkan.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rasio tutor ideal & berpendekatan ramah anak</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kelas ber-AC, higienis, dan dilengkapi peraga edukatif</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tersedia kelas Reguler, Privat 1-on-1, dan Home Visit</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={siteSettings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Wissen-Kids"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteSettings.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Wissen-Kids"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={siteSettings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Wissen-Kids"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Kolom 3: 10 Program Belajar */}
          <div className="space-y-3">
            <p className="text-white font-bold text-sm tracking-wide uppercase">
              Paket Belajar
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              {programsData.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/program/${p.slug}`}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <span>{p.title}</span>
                    <span className="text-[10px] text-slate-500">({p.ageGroup})</span>
                  </Link>
                </li>
              ))}
              {programsData.slice(5, 10).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/program/${p.slug}`}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Navigasi Cepat */}
          <div className="space-y-3">
            <p className="text-white font-bold text-sm tracking-wide uppercase">
              Informasi Bimbel
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/tentang-kami" className="hover:text-blue-400 transition-colors">
                  Tentang Wissen-Kids
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-blue-400 transition-colors">
                  Daftar Semua Paket Belajar
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-blue-400 transition-colors">
                  Galeri & Fasilitas Kelas
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-blue-400 transition-colors">
                  Tips Parenting & Edukasi
                </Link>
              </li>
              <li>
                <Link href="/testimoni" className="hover:text-blue-400 transition-colors">
                  Kisah & Testimoni Wali Murid
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors">
                  Pertanyaan Sering Diajukan (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/daftar" className="text-amber-400 font-semibold hover:underline flex items-center gap-1">
                  <span>Coba Kelas Gratis (Free Trial)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/admin/login" className="text-slate-500 hover:text-slate-400 text-[11px]">
                  Portal Pengelola (Admin CMS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 5: Kontak & Alamat */}
          <div className="space-y-3">
            <p className="text-white font-bold text-sm tracking-wide uppercase">
              Hubungi Kami
            </p>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteSettings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${siteSettings.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-semibold text-white transition-colors"
                >
                  {siteSettings.displayPhone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${siteSettings.email}`} className="hover:text-blue-400 transition-colors">
                  {siteSettings.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{siteSettings.operatingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Wissen-Kids. All rights reserved. Bimbingan Belajar Usia 2 Tahun - SMP.</p>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="hover:text-slate-400 transition-colors">Syarat & Ketentuan</Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-slate-400 transition-colors">Kebijakan Privasi</Link>
            <span>•</span>
            <Link href="/daftar" className="hover:text-slate-400 transition-colors">Booking Konsultasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
