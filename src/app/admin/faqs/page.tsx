"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/mockData";
import { FAQItem } from "@/types";
import { Plus, Trash2, X, HelpCircle, Edit } from "lucide-react";

export default function AdminFaqsPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>(faqsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);

  const [form, setForm] = useState({
    question: "",
    answer: "",
    category: "Pendaftaran & Trial" as FAQItem["category"],
  });

  const handleDelete = (id: string) => {
    if (confirm("Hapus pertanyaan FAQ ini?")) {
      setFaqs(faqs.filter((f) => f.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.question || !form.answer) return;

    if (editingFaq) {
      setFaqs(
        faqs.map((f) =>
          f.id === editingFaq.id
            ? { ...f, question: form.question, answer: form.answer, category: form.category }
            : f
        )
      );
    } else {
      const newFaq: FAQItem = {
        id: `faq-${Date.now()}`,
        question: form.question,
        answer: form.answer,
        category: form.category,
        orderIndex: faqs.length + 1,
      };
      setFaqs([newFaq, ...faqs]);
    }

    setIsModalOpen(false);
    setEditingFaq(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Tanya Jawab FAQ ({faqs.length})
          </h2>
          <p className="text-xs text-slate-500">Kelola pertanyaan umum yang sering ditanyakan wali murid</p>
        </div>

        <button
          onClick={() => {
            setEditingFaq(null);
            setForm({ question: "", answer: "", category: "Pendaftaran & Trial" });
            setIsModalOpen(true);
          }}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Pertanyaan Baru</span>
        </button>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                  {faq.category}
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900">{faq.question}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => {
                  setEditingFaq(faq);
                  setForm({ question: faq.question, answer: faq.answer, category: faq.category });
                  setIsModalOpen(true);
                }}
                className="p-1.5 text-slate-400 hover:text-amber-600 rounded-lg hover:bg-slate-100"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(faq.id)}
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
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-black text-slate-900">
                {editingFaq ? "Edit Pertanyaan FAQ" : "Tambah Pertanyaan FAQ"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Kategori Topik</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as any })}
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                >
                  <option value="Pendaftaran & Trial">Pendaftaran & Trial</option>
                  <option value="Program & Metode">Program & Metode</option>
                  <option value="Biaya & Jadwal">Biaya & Jadwal</option>
                  <option value="Fasilitas & Kehadiran">Fasilitas & Kehadiran</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pertanyaan *</label>
                <input
                  type="text"
                  required
                  value={form.question}
                  onChange={(e) => setForm({ ...form, question: e.target.value })}
                  placeholder="Contoh: Apakah bisa les privat di rumah?"
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Jawaban Lengkap *</label>
                <textarea
                  rows={4}
                  required
                  value={form.answer}
                  onChange={(e) => setForm({ ...form, answer: e.target.value })}
                  placeholder="Berikan penjelasan yang ramah dan informatif..."
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
                  Simpan FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
