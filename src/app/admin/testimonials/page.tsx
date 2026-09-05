"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/data/mockData";
import { Testimonial } from "@/types";
import { Plus, Star, Trash2, X, MessageSquareQuote } from "lucide-react";

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    parentName: "",
    childNameAndAge: "",
    programTaken: "Baca Tulis",
    rating: 5,
    reviewText: "",
  });

  const handleDelete = (id: string) => {
    if (confirm("Hapus ulasan ini?")) {
      setTestimonials(testimonials.filter((t) => t.id !== id));
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.parentName || !form.reviewText) return;

    const newT: Testimonial = {
      id: `testi-${Date.now()}`,
      parentName: form.parentName,
      childNameAndAge: form.childNameAndAge,
      programTaken: form.programTaken,
      rating: Number(form.rating),
      reviewText: form.reviewText,
      isFeatured: true,
    };

    setTestimonials([newT, ...testimonials]);
    setIsModalOpen(false);
    setForm({
      parentName: "",
      childNameAndAge: "",
      programTaken: "Baca Tulis",
      rating: 5,
      reviewText: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Testimoni & Ulasan Ortu ({testimonials.length})
          </h2>
          <p className="text-xs text-slate-500">Kelola cerita kepuasan wali murid yang tampil di website</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Testimoni</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  {t.programTaken}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                &ldquo;{t.reviewText}&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-xs text-slate-900">{t.parentName}</p>
                <p className="text-[11px] text-slate-400">{t.childNameAndAge}</p>
              </div>

              <button
                onClick={() => handleDelete(t.id)}
                className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-black text-slate-900">Tambah Ulasan Wali Murid</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Orang Tua *</label>
                <input
                  type="text"
                  required
                  value={form.parentName}
                  onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                  placeholder="Contoh: Ibu Amanda"
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Anak & Usia</label>
                <input
                  type="text"
                  value={form.childNameAndAge}
                  onChange={(e) => setForm({ ...form, childNameAndAge: e.target.value })}
                  placeholder="Contoh: Rafa (5 tahun)"
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Program yang Diikuti</label>
                <input
                  type="text"
                  value={form.programTaken}
                  onChange={(e) => setForm({ ...form, programTaken: e.target.value })}
                  placeholder="Contoh: Sempoa & Calistung"
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Rating Bintang (1 - 5)</label>
                <select
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5 Bintang)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 Bintang)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Teks Ulasan *</label>
                <textarea
                  rows={3}
                  required
                  value={form.reviewText}
                  onChange={(e) => setForm({ ...form, reviewText: e.target.value })}
                  placeholder="Kesan dan pesan selama belajar di Wissen-Kids..."
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
                  Simpan Ulasan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
