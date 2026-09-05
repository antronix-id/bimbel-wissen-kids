"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  BookOpen, 
  FileText, 
  Image as ImageIcon, 
  ArrowUpRight, 
  Phone, 
  MessageCircle, 
  Sparkles,
  CheckCircle2,
  Clock,
  Plus
} from "lucide-react";
import { initialLeads, programsData, articlesData, galleryData } from "@/data/mockData";
import { formatWhatsAppUrl, formatDateIndo } from "@/lib/utils";
import { CardBackground } from "@/components/ui/card";

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState(initialLeads);

  const stats = [
    {
      title: "Total Pendaftar / Leads",
      value: leads.length.toString(),
      subtext: "2 pendaftar baru minggu ini",
      icon: Users,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      title: "Program Belajar",
      value: programsData.length.toString(),
      subtext: "Semua 10 program aktif",
      icon: BookOpen,
      color: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      title: "Artikel Edukasi",
      value: articlesData.length.toString(),
      subtext: "Tips parenting & panduan",
      icon: FileText,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      title: "Dokumentasi Galeri",
      value: galleryData.length.toString(),
      subtext: "Foto kegiatan & fasilitas",
      icon: ImageIcon,
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "baru":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "dihubungi":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "dijadwalkan_trial":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "murid_aktif":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Welcome Banner */}
      <div className="card-elevation relative overflow-hidden p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <CardBackground />
        <div className="relative z-10 space-y-1">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Dashboard Pengelola Wissen Kids Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Pantau arus calon murid baru, jadwal free trial, dan pembaruan konten website secara langsung.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Users className="w-4 h-4" />
            <span>Lihat Semua Pendaftar</span>
          </Link>
          <Link
            href="/admin/programs"
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Kelola Program</span>
          </Link>
        </div>
      </div>

      {/* 4 Metric Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((st, i) => {
          const Icon = st.icon;
          return (
            <div
              key={i}
              className="card-elevation relative overflow-hidden p-6 space-y-3"
            >
              <CardBackground />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">{st.title}</span>
                  <span className={`p-2 rounded-xl border ${st.color}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-3xl font-black text-slate-900 tracking-tight">{st.value}</p>
                <p className="text-xs text-slate-400">{st.subtext}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Leads Table */}
      <div className="card-elevation relative overflow-hidden">
        <CardBackground />
        <div className="relative z-10">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Pendaftar Free Trial Terbaru
              </h3>
              <p className="text-xs text-slate-400">
                Calon murid yang mengajukan coba kelas melalui formulir website
              </p>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>Selengkapnya</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100">
              <tr>
                <th className="px-6 py-3.5">Nama Murid & Usia</th>
                <th className="px-6 py-3.5">Orang Tua / Kontak</th>
                <th className="px-6 py-3.5">Program Diminati</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Aksi Cepat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.map((lead) => {
                const waUrl = formatWhatsAppUrl(
                  lead.whatsappNumber,
                  `Halo Bapak/Ibu ${lead.parentName}, kami dari Wissen Kids Center ingin mengonfirmasi jadwal free trial untuk ananda ${lead.childName}.`
                );

                return (
                  <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-900">{lead.childName}</p>
                      <p className="text-[11px] text-slate-400">{lead.childAge}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-800">{lead.parentName}</p>
                      <p className="text-[11px] text-slate-400">{lead.whatsappNumber}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {lead.interestedPrograms.map((slug, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-semibold"
                          >
                            {slug}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full border capitalize ${getStatusBadge(
                          lead.status
                        )}`}
                      >
                        {lead.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-[11px] transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat WA</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
      </div>

    </div>
  );
}
