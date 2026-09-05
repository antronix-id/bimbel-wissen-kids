"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles, 
  PhoneCall, 
  ChevronRight
} from "lucide-react";
import { siteSettings } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import BrutalButton from "@/components/ui/brutal-button";
import { cn } from "@/lib/utils";

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
      className={`sticky top-0 z-40 transition-all duration-300 bg-transparent ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
          <div className="relative h-9 w-9 sm:h-11 sm:w-11 shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.avif"
              alt="Logo Wissen Kids Center"
              width={44}
              height={44}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <span className="text-base sm:text-xl font-black tracking-tight text-black group-hover:text-blue-600 transition-colors">
            Wissen Kids <span className="text-amber-500">Center</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <BrutalButton
                key={link.href}
                href={link.href}
                color={isActive ? "#dc2626" : "#ffffff"}
                textColor={isActive ? "#ffffff" : "#0f172a"}
                borderColor="#000000"
                shadowColor="#000000"
                radius={12}
                className={cn(
                  "px-3 py-1.5 text-xs xl:text-sm font-bold",
                  !isActive && "hover:bg-red-50 hover:text-red-700"
                )}
              >
                {link.label}
              </BrutalButton>
            );
          })}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <BrutalButton
            href="/daftar"
            color="#dc2626"
            textColor="#ffffff"
            borderColor="#000000"
            shadowColor="#000000"
            radius={12}
            className="px-4 py-2 text-sm font-bold gap-2 hover:brightness-110"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Coba Kelas Gratis</span>
          </BrutalButton>
        </div>

        {/* Mobile Hamburger Toggle & Compact CTA */}
        <div className="flex items-center gap-2 lg:hidden">
          <BrutalButton
            href="/daftar"
            color="#dc2626"
            textColor="#ffffff"
            borderColor="#000000"
            shadowColor="#000000"
            radius={10}
            className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold"
          >
            Free Trial
          </BrutalButton>
          <BrutalButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            color="#ffffff"
            textColor="#0f172a"
            borderColor="#000000"
            shadowColor="#000000"
            radius={10}
            className="p-2 min-w-[38px] min-h-[38px] flex items-center justify-center"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </BrutalButton>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-auto bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl px-4 sm:px-6 py-6 transition-all duration-300 animate-in slide-in-from-top-4 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="flex flex-col gap-2.5 pb-4 border-b border-slate-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <BrutalButton
                  key={link.href}
                  href={link.href}
                  color={isActive ? "#dc2626" : "#ffffff"}
                  textColor={isActive ? "#ffffff" : "#0f172a"}
                  borderColor="#000000"
                  shadowColor="#000000"
                  radius={12}
                  className="w-full justify-between px-4 py-2.5 text-sm font-bold"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </BrutalButton>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <BrutalButton
              href="/daftar"
              color="#dc2626"
              textColor="#ffffff"
              borderColor="#000000"
              shadowColor="#000000"
              radius={12}
              className="w-full py-3 text-base font-bold gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Daftar Coba Kelas Gratis</span>
            </BrutalButton>

            <Button
              href={`https://wa.me/${siteSettings.whatsappNumber}`}
              variant="whatsapp"
              size="md"
              className="w-full"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Chat WhatsApp: {siteSettings.displayPhone}</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
