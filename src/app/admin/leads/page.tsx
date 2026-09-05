"use client";

import React, { useState } from "react";
import { initialLeads } from "@/data/mockData";
import { Lead, LeadStatus } from "@/types";
import { 
  Users, 
  Search, 
  Download, 
  MessageCircle, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Filter,
  Edit3
} from "lucide-react";
import { formatWhatsAppUrl, formatDateIndo } from "@/lib/utils";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const filtered = leads.filter((lead) => {
    const matchesSearch =
      lead.childName.toLowerCase().includes(search.toLowerCase()) ||
      lead.parentName.toLowerCase().includes(search.toLowerCase()) ||
      lead.whatsappNumber.includes(search);
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id: string, newStatus: LeadStatus) => {
    setLeads(
      leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    );
    if (selectedLead?.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  const updateNotes = (id: string, notes: string) => {
    setLeads(
      leads.map((l) => (l.id === id ? { ...l, adminNotes: notes } : l))
    );
  };

  const exportCSV = () => {
    const headers = ["ID", "Nama Anak", "Usia", "Nama Ortu", "WhatsApp", "Program Diminati", "Tipe Kelas", "Status", "Catatan Ortu", "Catatan Admin"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.childName}"`,
      `"${l.childAge}"`,
      `"${l.parentName}"`,
      `"${l.whatsappNumber}"`,
      `"${l.interestedPrograms.join(", ")}"`,
      `"${l.classPreference}"`,
      `"${l.status}"`,
      `"${l.notes || ""}"`,
      `"${l.adminNotes || ""}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `wissen-kids-leads-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: LeadStatus) => {
    switch (status) {
      case "baru":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "dihubungi":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "dijadwalkan_trial":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "murid_aktif":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "batal":
        return "bg-rose-100 text-rose-800 border-rose-200";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Data Calon Murid / Leads ({leads.length})
          </h2>
          <p className="text-xs text-slate-500">
            Daftar pengajuan coba kelas gratis (Free Trial) dan pendaftaran murid baru dari website
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
        >
          <Download className="w-4 h-4" />
          <span>Ekspor ke CSV</span>
        </button>
      </div>

      {/* Filter and Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari nama anak, nama orang tua, atau nomor telepon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          {[
            { id: "all", label: "Semua" },
            { id: "baru", label: "Baru" },
            { id: "dihubungi", label: "Dihubungi" },
            { id: "dijadwalkan_trial", label: "Jadwal Trial" },
            { id: "murid_aktif", label: "Murid Aktif" },
          ].map((st) => (
            <button
              key={st.id}
              onClick={() => setStatusFilter(st.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                statusFilter === st.id
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100">
              <tr>
                <th className="px-6 py-3.5">Nama Anak & Usia</th>
                <th className="px-6 py-3.5">Orang Tua / WA</th>
                <th className="px-6 py-3.5">Pilihan Program</th>
                <th className="px-6 py-3.5">Format Kelas</th>
                <th className="px-6 py-3.5">Status Follow-up</th>
                <th className="px-6 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((lead) => {
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
                      <p className="font-semibold text-slate-800">{lead.parentName}</p>
                      <p className="text-[11px] text-slate-400">{lead.whatsappNumber}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {lead.interestedPrograms.map((pr, i) => (
                          <span
                            key={i}
                            className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px] font-semibold"
                          >
                            {pr}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-slate-700 uppercase text-[10px] bg-slate-100 px-2 py-0.5 rounded">
                        {lead.classPreference}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value as LeadStatus)}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none capitalize cursor-pointer ${getStatusBadge(
                          lead.status
                        )}`}
                      >
                        <option value="baru">Baru</option>
                        <option value="dihubungi">Dihubungi</option>
                        <option value="dijadwalkan_trial">Jadwal Trial</option>
                        <option value="murid_aktif">Murid Aktif</option>
                        <option value="batal">Batal</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                          title="Chat WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          title="Detail & Catatan"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail & Notes Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">
              Detail Pendaftar: {selectedLead.childName}
            </h3>

            <div className="space-y-2 text-xs text-slate-600">
              <p><strong>Orang Tua:</strong> {selectedLead.parentName}</p>
              <p><strong>WhatsApp:</strong> {selectedLead.whatsappNumber}</p>
              <p><strong>Usia Anak:</strong> {selectedLead.childAge}</p>
              <p><strong>Program:</strong> {selectedLead.interestedPrograms.join(", ")}</p>
              <p><strong>Catatan Orang Tua:</strong> {selectedLead.notes || "Tidak ada catatan."}</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Catatan Internal Admin / Follow-up:
              </label>
              <textarea
                rows={3}
                value={selectedLead.adminNotes || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setSelectedLead({ ...selectedLead, adminNotes: val });
                  updateNotes(selectedLead.id, val);
                }}
                placeholder="Tulis jadwal yang disepakati atau hasil trial..."
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
