"use client";

import React, { useState } from "react";
import { siteSettings as initialSettings } from "@/data/mockData";
import { SiteSettings } from "@/types";
import { 
  Settings, 
  Save, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles,
  Bell
} from "lucide-react";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/shared/SocialIcons";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Pengaturan Website & Kontak
          </h2>
          <p className="text-xs text-slate-500">
            Perbarui nomor WhatsApp resmi, alamat kantor bimbel, jam operasional, dan banner promo
          </p>
        </div>

        {savedSuccess && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-bold animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>Pengaturan Berhasil Disimpan!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Banner Pengumuman Promo */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-500" />
              <h3 className="font-bold text-sm text-slate-900">Banner Pengumuman & Promo (Paling Atas Web)</h3>
            </div>
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
              <span>Status:</span>
              <input
                type="checkbox"
                checked={settings.isAnnouncementActive}
                onChange={(e) => setSettings({ ...settings, isAnnouncementActive: e.target.checked })}
                className="w-4 h-4 accent-blue-600 rounded"
              />
              <span className={settings.isAnnouncementActive ? "text-emerald-600" : "text-slate-400"}>
                {settings.isAnnouncementActive ? "Aktif" : "Nonaktif"}
              </span>
            </label>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Teks Pengumuman Promo</label>
            <input
              type="text"
              value={settings.announcementText}
              onChange={(e) => setSettings({ ...settings, announcementText: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Informasi Kontak & WhatsApp */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Phone className="w-4 h-4 text-emerald-600" />
            <h3 className="font-bold text-sm text-slate-900">Kontak WhatsApp & Layanan</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nomor WhatsApp Penerima (Format 62xxx tanpa simbol) *
              </label>
              <input
                type="text"
                required
                value={settings.whatsappNumber}
                onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
              />
              <p className="text-[10px] text-slate-400 mt-1">Nomor tujuan tombol WA mengambang dan pendaftaran.</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tampilan Nomor Telepon di Teks
              </label>
              <input
                type="text"
                value={settings.displayPhone}
                onChange={(e) => setSettings({ ...settings, displayPhone: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Alamat Email Resmi</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Jam Operasional Layanan</label>
              <input
                type="text"
                value={settings.operatingHours}
                onChange={(e) => setSettings({ ...settings, operatingHours: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Alamat Lengkap Lokasi Bimbel</label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
            />
          </div>
        </div>

        {/* Media Sosial */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <h3 className="font-bold text-sm text-slate-900">Tautan Akun Media Sosial</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                <span>Instagram URL</span>
              </label>
              <input
                type="url"
                value={settings.instagramUrl}
                onChange={(e) => setSettings({ ...settings, instagramUrl: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <TikTokIcon className="w-3.5 h-3.5 text-slate-800" />
                <span>TikTok URL</span>
              </label>
              <input
                type="url"
                value={settings.tiktokUrl}
                onChange={(e) => setSettings({ ...settings, tiktokUrl: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Facebook URL</span>
              </label>
              <input
                type="url"
                value={settings.facebookUrl}
                onChange={(e) => setSettings({ ...settings, facebookUrl: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Simpan Seluruh Pengaturan</span>
          </button>
        </div>

      </form>
    </div>
  );
}
