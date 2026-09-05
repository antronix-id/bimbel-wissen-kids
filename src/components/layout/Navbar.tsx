"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles, 
  PhoneCall, 
  GraduationCap, 
  ChevronRight
} from "lucide-react";
import { siteSettings } from "@/data/mockData";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/program", label: "Program Belajar" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/galeri", label: "Galeri & Fasilitas" },
  { href: "/artikel", label: "Tips Edukasi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-white py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            Wissen<span className="text-amber-500">-Kids</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? "text-blue-600 bg-blue-50/80 font-bold"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/daftar"
            className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200 gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Coba Kelas Gratis</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/daftar"
            className="text-xs font-bold px-3 py-1.5 bg-blue-600 text-white rounded-full shadow-sm"
          >
            Free Trial
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-auto bg-white border-b border-slate-200 shadow-2xl px-6 py-6 transition-all duration-300 animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-1.5 pb-4 border-b border-slate-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-bold"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/daftar"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-center font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Daftar Coba Kelas Gratis</span>
            </Link>

            <a
              href={`https://wa.me/${siteSettings.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-center font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Chat WhatsApp: {siteSettings.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
