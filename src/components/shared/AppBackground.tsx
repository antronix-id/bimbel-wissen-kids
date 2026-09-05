"use client";

import React from "react";
import { GradientWave } from "@/components/ui/gradient-wave";

interface AppBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * AppBackground
 * -------------------------------------------------------------
 * Komponen sentral untuk background seluruh halaman website.
 * Menampilkan WebGL interactive Gradient Wave yang dinamis di semua halaman:
 * Beranda, Program, Galeri, Tentang Kami, Artikel, Pendaftaran, dll.
 * -------------------------------------------------------------
 */
export default function AppBackground({
  children,
  className = "",
}: AppBackgroundProps) {
  return (
    <div
      id="app-central-background"
      className={`relative min-h-screen w-full ${className}`}
    >
      {/* WebGL Gradient Wave Canvas Layer (Fixed full-screen background) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        <GradientWave
          colors={["#38bdf8", "#ffffff", "#818cf8", "#ffffff", "#60a5fa", "#ffffff"]}
          noiseSpeed={0.00001}
          deform={{ incline: 0.45, noiseAmp: 260, noiseFlow: 4.5 }}
          className="w-full h-full opacity-85"
        />
        {/* Soft protective overlay to keep cards and texts crisp */}
        <div className="absolute inset-0 bg-white/15 pointer-events-none" />
      </div>

      {/* Konten Halaman (Z-10 agar selalu berada di atas kanvas) */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
