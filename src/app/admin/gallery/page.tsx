"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/mockData";
import { GalleryItem } from "@/types";
import { Plus, Trash2, X, Image as ImageIcon } from "lucide-react";
import { formatDateIndo } from "@/lib/utils";

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>(galleryData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "Aktivitas Belajar" as 'Aktivitas Belajar' | 'Fasilitas' | 'Event & Pentas',
    mediaUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800",
    caption: "",
  });

  const handleDelete = (id: string) => {
    if (confirm("Hapus dokumentasi foto ini?")) {
      setItems(items.filter((it) => it.id !== id));
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.mediaUrl) return;

    const newItem: GalleryItem = {
      id: `gal-${Date.now()}`,
      title: form.title,
      category: form.category,
      mediaUrl: form.mediaUrl,
      caption: form.caption,
      date: new Date().toISOString().split("T")[0],
    };

    setItems([newItem, ...items]);
    setIsModalOpen(false);
    setForm({
      title: "",
      category: "Aktivitas Belajar",
      mediaUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800",
      caption: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Galeri & Fasilitas Bimbel ({items.length})
          </h2>
          <p className="text-xs text-slate-500">Kelola album foto kegiatan belajar dan suasana ruang kelas</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Foto Baru</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div className="relative h-48 w-full bg-slate-100">
              <Image src={item.mediaUrl} alt={item.title} fill className="object-cover" />
              <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                {item.category}
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.caption}</p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">{formatDateIndo(item.date)}</span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100"
                  title="Hapus"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-black text-slate-900">Tambah Dokumentasi Foto</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Judul Kegiatan *</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Contoh: Sesi Eksplorasi Sensori"
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Kategori</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as any })}
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                >
                  <option value="Aktivitas Belajar">Aktivitas Belajar</option>
                  <option value="Fasilitas">Fasilitas Ruang Kelas</option>
                  <option value="Event & Pentas">Event & Pentas Kreasi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">URL Foto (Unsplash / Storage)</label>
                <input
                  type="url"
                  required
                  value={form.mediaUrl}
                  onChange={(e) => setForm({ ...form, mediaUrl: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Keterangan / Caption</label>
                <textarea
                  rows={2}
                  value={form.caption}
                  onChange={(e) => setForm({ ...form, caption: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Simpan Foto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
