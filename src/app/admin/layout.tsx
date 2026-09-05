"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Image as ImageIcon, 
  Star, 
  UserCheck, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Globe, 
  ShieldCheck 
} from "lucide-react";

const adminNav: Array<{
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}> = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Pendaftar & Leads", icon: UserCheck, badge: "Baru" },
  { href: "/admin/programs", label: "Program Belajar", icon: BookOpen, badge: "10" },
  { href: "/admin/articles", label: "Artikel / Tips", icon: FileText },
  { href: "/admin/gallery", label: "Galeri Foto", icon: ImageIcon },
  { href: "/admin/testimonials", label: "Testimoni", icon: Star },
  { href: "/admin/faqs", label: "FAQ", icon: HelpCircle },
  { href: "/admin/settings", label: "Pengaturan Website", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If on login page, render children cleanly without sidebar
  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-slate-900">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col lg:flex-row text-slate-800">
      
      {/* Mobile Header */}
      <div className="lg:hidden bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-white p-0.5 flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.avif"
              alt="Logo Wissen Kids Center"
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-extrabold text-sm tracking-tight">Wissen Kids Center CMS</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
          aria-label="Toggle admin sidebar"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 flex flex-col justify-between border-r border-slate-800 transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Brand Logo Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-white p-0.5 flex items-center justify-center overflow-hidden shadow-sm">
                <Image
                  src="/logo.avif"
                  alt="Logo Wissen Kids Center"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-white tracking-tight">
                  Wissen Kids <span className="text-amber-400">Center</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  Admin Panel
                </span>
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1.5 overflow-y-auto">
            {adminNav.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 font-bold"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-800 text-amber-400 border border-slate-700"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom User / Portal Links */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Lihat Website Publik ↗</span>
          </Link>

          <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600/30 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold text-xs">
                AD
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-white truncate">Admin Wissen Kids</p>
                <p className="text-[10px] text-emerald-400">Superadmin</p>
              </div>
            </div>

            <Link
              href="/admin/login"
              title="Keluar"
              className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top bar on desktop */}
        <header className="hidden lg:flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
          <div>
            <h1 className="text-lg font-extrabold text-slate-900">
              Content Management System
            </h1>
            <p className="text-xs text-slate-500">
              Kelola seluruh konten, program belajar, dan data calon murid Wissen Kids Center
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Pratinjau Website</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Mode Terproteksi</span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}
