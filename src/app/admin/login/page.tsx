"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, ShieldCheck, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@wissenkids.id");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === "admin@wissenkids.id" && password === "admin123") {
        router.push("/admin/dashboard");
      } else {
        setError("Email atau password yang Anda masukkan salah.");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-blue-600/30 p-1">
              <Image
                src="/logo.avif"
                alt="Logo Wissen Kids Center"
                width={56}
                height={56}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </Link>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Wissen Kids <span className="text-amber-400">Center</span> CMS
          </h1>
          <p className="text-xs text-slate-400">
            Masuk ke panel manajemen konten & data calon murid
          </p>
        </div>

        {/* Demo Credentials Alert */}
        <div className="p-3.5 rounded-2xl bg-blue-950/60 border border-blue-800/80 text-blue-200 text-xs flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-bold text-white">Akun Demo Terisi Otomatis</p>
            <p className="text-[11px] text-slate-300">
              Email: <code>admin@wissenkids.id</code> • Pass: <code>admin123</code>
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Alamat Email Pengelola
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full mt-2"
            >
              {loading ? (
                <span>Memverifikasi Akun...</span>
              ) : (
                <>
                  <span>Masuk ke Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Akses Terenkripsi</span>
            </span>
            <Link href="/" className="text-blue-400 hover:underline">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
