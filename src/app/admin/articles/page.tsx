"use client";

import React, { useState } from "react";
import { articlesData } from "@/data/mockData";
import { Article } from "@/types";
import { Plus, Edit, Trash2, Eye, FileText, CheckCircle, X } from "lucide-react";
import Link from "next/link";
import { formatDateIndo } from "@/lib/utils";

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>(articlesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  const [form, setForm] = useState({
    title: "",
    category: "Tips Parenting",
    summary: "",
    content: "",
    authorName: "Tim Pendidik Wissen Kids Center",
    coverImageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
  });

  const togglePublish = (id: string) => {
    setArticles(
      articles.map((a) => (a.id === id ? { ...a, isPublished: !a.isPublished } : a))
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("Hapus artikel ini?")) {
      setArticles(articles.filter((a) => a.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingArticle) {
      setArticles(
        articles.map((a) =>
          a.id === editingArticle.id
            ? {
                ...a,
                title: form.title,
                slug: form.title.toLowerCase().replace(/\s+/g, "-"),
                category: form.category,
                summary: form.summary,
                content: form.content,
                authorName: form.authorName,
                coverImageUrl: form.coverImageUrl,
              }
            : a
        )
      );
    } else {
      const newArt: Article = {
        id: `art-${Date.now()}`,
        title: form.title,
        slug: form.title.toLowerCase().replace(/\s+/g, "-"),
        category: form.category,
        summary: form.summary,
        content: form.content,
        coverImageUrl: form.coverImageUrl,
        authorName: form.authorName,
        readTime: "4 menit baca",
        isPublished: true,
        publishedAt: new Date().toISOString().split("T")[0],
      };
      setArticles([newArt, ...articles]);
    }
    setIsModalOpen(false);
    setEditingArticle(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Artikel & Tips Edukasi ({articles.length})
          </h2>
          <p className="text-xs text-slate-500">Kelola artikel panduan parenting dan berita bimbel</p>
        </div>

        <button
          onClick={() => {
            setEditingArticle(null);
            setForm({
              title: "",
              category: "Tips Parenting",
              summary: "",
              content: "",
              authorName: "Tim Pendidik Wissen Kids Center",
              coverImageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
            });
            setIsModalOpen(true);
          }}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Tulis Artikel Baru</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs text-slate-600">
          <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100">
            <tr>
              <th className="px-6 py-3.5">Judul Artikel</th>
              <th className="px-6 py-3.5">Kategori</th>
              <th className="px-6 py-3.5">Tanggal Terbit</th>
              <th className="px-6 py-3.5">Status</th>
              <th className="px-6 py-3.5 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {articles.map((art) => (
              <tr key={art.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-900">{art.title}</p>
                  <p className="text-[11px] text-slate-400">Penulis: {art.authorName}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[10px] font-bold">
                    {art.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500">
                  {formatDateIndo(art.publishedAt)}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => togglePublish(art.id)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-colors ${
                      art.isPublished
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-slate-100 text-slate-400 border-slate-200"
                    }`}
                  >
                    {art.isPublished ? "Terbit di Web" : "Draft"}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/artikel/${art.slug}`}
                      target="_blank"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => {
                        setEditingArticle(art);
                        setForm({
                          title: art.title,
                          category: art.category,
                          summary: art.summary,
                          content: art.content,
                          authorName: art.authorName,
                          coverImageUrl: art.coverImageUrl,
                        });
                        setIsModalOpen(true);
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-slate-100"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(art.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-slate-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Editor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingArticle ? "Edit Artikel" : "Tulis Artikel Baru"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1.5 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Judul Artikel *</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Kategori</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <option value="Tips Parenting">Tips Parenting</option>
                    <option value="Edukasi Matematika">Edukasi Matematika</option>
                    <option value="Perkembangan Anak">Perkembangan Anak</option>
                    <option value="Bahasa Asing">Bahasa Asing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Penulis</label>
                  <input
                    type="text"
                    value={form.authorName}
                    onChange={(e) => setForm({ ...form, authorName: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Ringkasan Singkat</label>
                <textarea
                  rows={2}
                  value={form.summary}
                  onChange={(e) => setForm({ ...form, summary: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Konten Lengkap</label>
                <textarea
                  rows={6}
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="Tulis artikel dengan format paragraf rapi..."
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 font-mono"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Simpan & Publikasikan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
