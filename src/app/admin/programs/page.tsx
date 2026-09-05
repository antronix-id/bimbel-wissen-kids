"use client";

import React, { useState } from "react";
import { programsData } from "@/data/mockData";
import { Program } from "@/types";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  CheckCircle2, 
  X, 
  Sparkles,
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function AdminProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>(programsData);
  const [search, setSearch] = useState("");
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // New program state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    ageGroup: "",
    badge: "Paket Baru",
    shortDesc: "",
    fullDesc: "",
    features: "Modul Lengkap\nEvaluasi Berkala\nTutor Ramah",
  });

  const filtered = programs.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.ageGroup.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = (id: string) => {
    setPrograms(
      programs.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p))
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus program ini?")) {
      setPrograms(programs.filter((p) => p.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.ageGroup) return;

    if (editingProgram) {
      setPrograms(
        programs.map((p) =>
          p.id === editingProgram.id
            ? {
                ...p,
                title: formData.title,
                slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-"),
                ageGroup: formData.ageGroup,
                badge: formData.badge,
                shortDesc: formData.shortDesc,
                fullDesc: formData.fullDesc,
                features: formData.features.split("\n").filter(Boolean),
              }
            : p
        )
      );
      setEditingProgram(null);
    } else {
      const newProg: Program = {
        id: `prog-${Date.now()}`,
        title: formData.title,
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-"),
        ageGroup: formData.ageGroup,
        level: "umum",
        badge: formData.badge,
        shortDesc: formData.shortDesc,
        fullDesc: formData.fullDesc,
        features: formData.features.split("\n").filter(Boolean),
        curriculumPoints: [
          { title: "Sesi Pengenalan", desc: "Membangun kenyamanan dan pemetaan kemampuan awal anak." }
        ],
        classFormats: ["Kelas Reguler", "Kelas Privat"],
        iconName: "Sparkles",
        colorScheme: {
          bg: "bg-blue-50",
          border: "border-blue-200",
          badgeBg: "bg-blue-100",
          badgeText: "text-blue-800",
          accent: "text-blue-600"
        },
        isActive: true,
        orderIndex: programs.length + 1
      };
      setPrograms([newProg, ...programs]);
      setIsCreating(false);
    }

    setFormData({
      title: "",
      slug: "",
      ageGroup: "",
      badge: "Paket Baru",
      shortDesc: "",
      fullDesc: "",
      features: "Modul Lengkap\nEvaluasi Berkala\nTutor Ramah",
    });
  };

  const openEdit = (prog: Program) => {
    setEditingProgram(prog);
    setFormData({
      title: prog.title,
      slug: prog.slug,
      ageGroup: prog.ageGroup,
      badge: prog.badge,
      shortDesc: prog.shortDesc,
      fullDesc: prog.fullDesc,
      features: prog.features.join("\n"),
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Manajemen Program Belajar ({programs.length})
          </h2>
          <p className="text-xs text-slate-500">
            Kelola 10 paket belajar, kelompok usia, silabus, dan status tampilan publik
          </p>
        </div>

        <button
          onClick={() => {
            setIsCreating(true);
            setEditingProgram(null);
            setFormData({
              title: "",
              slug: "",
              ageGroup: "",
              badge: "Paket Baru",
              shortDesc: "",
              fullDesc: "",
              features: "Modul Lengkap\nEvaluasi Berkala\nTutor Ramah",
            });
          }}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Program Baru</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari program belajar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Programs Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100">
              <tr>
                <th className="px-6 py-3.5">Nama Program</th>
                <th className="px-6 py-3.5">Kelompok Usia</th>
                <th className="px-6 py-3.5">Kategori / Badge</th>
                <th className="px-6 py-3.5">Status Tampil</th>
                <th className="px-6 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((prog) => (
                <tr key={prog.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900">{prog.title}</p>
                    <p className="text-[11px] text-slate-400 line-clamp-1 max-w-xs">{prog.shortDesc}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full text-[11px]">
                      {prog.ageGroup}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${prog.colorScheme.badgeBg} ${prog.colorScheme.badgeText}`}>
                      {prog.badge}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleStatus(prog.id)}
                      className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-colors ${
                        prog.isActive
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-slate-100 text-slate-400 border-slate-200"
                      }`}
                    >
                      {prog.isActive ? "● Aktif di Web" : "○ Draft Nonaktif"}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/program/${prog.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                        title="Lihat Halaman Publik"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => openEdit(prog)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-slate-100 transition-colors"
                        title="Edit Program"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(prog.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition-colors"
                        title="Hapus Program"
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
      </div>

      {/* Modal Dialog for Add / Edit */}
      {(isCreating || editingProgram) && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingProgram ? "Edit Program Belajar" : "Tambah Program Baru"}
              </h3>
              <button
                onClick={() => {
                  setIsCreating(false);
                  setEditingProgram(null);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Program *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Contoh: Robotik & Sains Anak"
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kelompok Usia *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ageGroup}
                    onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                    placeholder="Contoh: 5 – 10 Tahun"
                    className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Label / Badge
                  </label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    placeholder="Contoh: Kreativitas Anak"
                    className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ringkasan Singkat (Muncul di Kartu)
                </label>
                <input
                  type="text"
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  placeholder="Deskripsi 1 kalimat untuk menarik minat ortu..."
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Deskripsi Lengkap Program
                </label>
                <textarea
                  rows={3}
                  value={formData.fullDesc}
                  onChange={(e) => setFormData({ ...formData, fullDesc: e.target.value })}
                  placeholder="Jelaskan tujuan dan keunggulan program secara komprehensif..."
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Poin Keunggulan (1 baris per poin)
                </label>
                <textarea
                  rows={3}
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsCreating(false);
                    setEditingProgram(null);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
