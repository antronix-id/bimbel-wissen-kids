# Product Requirements Document (PRD)
# Wissen-Kids: Official Website & Content Management System

---

## 1. Ringkasan Eksekutif & Gambaran Proyek

### 1.1 Latar Belakang
**Wissen-Kids** adalah lembaga bimbingan belajar (bimbel) dan pusat stimulasi edukasi anak yang berfokus pada pendidikan komprehensif mulai dari anak usia dini (usia 2 tahun) hingga tingkat Sekolah Menengah Pertama (SMP). Untuk memperluas jangkauan ke publik, membangun kredibilitas merek, serta memfasilitasi pendaftaran calon murid baru secara efisien, Wissen-Kids memerlukan sebuah website modern, profesional, interaktif, dan mudah diakses oleh orang tua (wali murid).

Website ini terdiri dari dua bagian utama:
1. **Public Website:** Portal informasi interaktif berestetika tinggi yang memaparkan profil, seluruh paket belajar, aktivitas, galeri, testimoni, dan jalur pendaftaran/konsultasi instan (WhatsApp & Form).
2. **Admin CMS (Dashboard):** Panel kendali terproteksi untuk mengelola seluruh konten website (CRUD paket belajar, artikel/edukasi, galeri, testimoni, FAQ, dan data prospek/pendaftar) tanpa perlu mengubah kode sumber.

### 1.2 Visi & Misi Produk
* **Visi:** Menjadi portal informasi bimbingan belajar anak paling tepercaya, interaktif, dan ramah pengguna di kelasnya.
* **Misi:**
  * Mempermudah orang tua menemukan program belajar yang paling tepat berdasarkan kelompok usia anak (2 tahun - tingkat SMP).
  * Memberikan transparansi informasi terkait kurikulum, metode belajar, fasilitas, dan biaya/konsultasi.
  * Mempercepat konversi pengunjung menjadi pendaftar murid baru (*lead conversion*).
  * Memberikan fleksibilitas bagi tim operasional Wissen-Kids dalam memperbarui konten promosi, jadwal, dan galeri kegiatan setiap saat.

### 1.3 Target Pengguna (*Target Audience*)
1. **Orang Tua Anak Usia Dini (Toddler & Prasekolah: Usia 2–6 Tahun):** Mencari stimulasi motorik/sensorik, pengenalan membaca-menulis-berhitung (calistung) tanpa stres, dan kelas kreasi.
2. **Orang Tua Siswa Sekolah Dasar (SD: Usia 7–12 Tahun):** Membutuhkan pendampingan akademik kurikulum nasional/Cambridge, les Bahasa Inggris, matematika/sempoa, dan mengaji.
3. **Orang Tua & Siswa Sekolah Menengah Pertama (SMP: Usia 12–15 Tahun):** Memerlukan persiapan ujian sekolah, pemantapan konsep mata pelajaran saintek/soshum, dan peningkatan kemampuan bahasa asing.
4. **Administrator & Pengelola Wissen-Kids:** Mengelola publikasi konten, promosi, dan memantau formulir pendaftaran/konsultasi yang masuk.

---

## 2. Tech Stack & Arsitektur Sistem

| Komponen | Teknologi | Keterangan & Alasan Pemilihan |
| :--- | :--- | :--- |
| **Framework Frontend & SSR** | **Next.js (App Router)** | Performa tinggi, SEO-friendly (*Server Components* & *Dynamic Metadata*), arsitektur routing modern, dan transisi halaman instan. |
| **Styling & Design System** | **Tailwind CSS** | Styling fleksibel, responsif mobile-first, dan ekosistem utility modern. |
| **Komponen UI** | **shadcn/ui + Radix UI + Lucide Icons** | Komponen UI accessible, modern, elegan, mudah dikustomisasi sesuai palet warna brand edukasi anak. |
| **Database** | **PostgreSQL (via Supabase)** | Database relasional kuat, integritas data tinggi, performa kueri cepat. |
| **Backend & Backend-as-a-Service** | **Supabase** | Layanan database PostgreSQL terkelola, Supabase Auth (otentikasi admin), dan Supabase Storage (media/foto). |
| **Data Fetching / ORM** | **Supabase JS Client + Server Actions** | Type-safe query dengan Next.js Server Actions dan React cache. |
| **Form Handling & Validation** | **React Hook Form + Zod** | Validasi skema formulir klien dan server yang ketat dan aman. |
| **Rich Text Editor (Admin CMS)**| **Tiptap** atau **MDEditor / Markdown** | Untuk pembuatan artikel berita/tips edukasi dengan format rapi. |
| **Hosting & Deployment** | **Vercel** (Frontend/API) & **Supabase Cloud** | Integrasi CI/CD otomatis, zero-configuration deployment, global edge network. |

---

## 3. Brand Identity & Prinsip Desain UI/UX

1. **Karakter Visual:**
   * *Playful yet Professional & Trustworthy:* Ceria, hangat, dan ramah anak, namun tetap rapi, modern, dan memberikan rasa aman bagi orang tua.
   * *Palette Warna Rekomendasi:*
     * **Primary:** Warna biru cerdas / royal cerah (`#2563EB` / `#1D4ED8`) melambangkan kecerdasan, pengetahuan, dan integritas.
     * **Secondary / Accent 1:** Warna kuning keemasan / oranye hangat (`#F59E0B` / `#F97316`) melambangkan kreativitas, kehangatan, dan keceriaan anak.
     * **Secondary / Accent 2:** Warna hijau toska / mint pastel (`#10B981` / `#06B6D4`) melambangkan pertumbuhan, eksplorasi, dan kesehatan anak.
     * **Background & Surface:** Off-white lembut (`#F8FAFC` / `#FFFDF9`) dengan kartu-kartu putih bersih dan bayangan halus (*soft elevation*).
2. **Tipografi:**
   * Menggunakan Google Fonts modern dengan sentuhan ramah dan terbaca jelas di perangkat seluler:
     * *Heading:* `Plus Jakarta Sans` / `Outfit` / `Fredoka` (untuk aksen judul yang ramah).
     * *Body Text:* `Inter` / `Plus Jakarta Sans` (keterbacaan teks tingkat tinggi).
3. **Micro-Interactions & Ilustrasi:**
   * Badges kategori usia dengan warna pastel yang berbeda.
   * Animasi halus (*fade up*, *hover scale* pada kartu paket).
   * Floating Action Button (FAB) WhatsApp untuk konsultasi cepat sekali klik.

---

## 4. Struktur Navigasi & Peta Situs (Sitemap)

```
Wissen-Kids Web System
│
├── [PUBLIC INTERFACE]
│   ├── / (Home Page)
│   ├── /tentang-kami (About Us)
│   ├── /program (Daftar Semua Paket Belajar)
│   │   └── /program/[slug] (Detail Paket & Silabus)
│   ├── /galeri (Aktivitas & Fasilitas)
│   ├── /artikel (Tips Parenting & Berita Bimbel)
│   │   └── /artikel/[slug] (Detail Artikel)
│   ├── /testimoni (Ulasan Orang Tua & Prestasi Murid)
│   ├── /faq (Tanya Jawab Seputar Belajar)
│   └── /daftar (Formulir Pendaftaran & Free Trial / Booking Konsultasi)
│
└── [ADMIN DASHBOARD - /admin]
    ├── /admin/login (Otentikasi Akun Pengelola)
    ├── /admin/dashboard (Statistik Pengunjung & Leads Masuk)
    ├── /admin/programs (CRUD Paket Belajar & Kurikulum)
    ├── /admin/articles (CRUD Artikel, Kategori, & Publikasi)
    ├── /admin/gallery (CRUD Dokumentasi Kegiatan & Fasilitas)
    ├── /admin/testimonials (CRUD Ulasan & Rating Orang Tua)
    ├── /admin/faqs (CRUD Pertanyaan yang Sering Diajukan)
    ├── /admin/leads (Daftar Pendaftar & Pengajuan Free Trial)
    └── /admin/settings (Pengaturan Kontak WhatsApp, Alamat, Hero Banner)
```

---

## 5. Rincian Fitur: Public Website

### 5.1 Beranda (Home Page)
* **Top Bar / Notification Banner:** Pengumuman pendaftaran periode baru / penawaran kelas gratis (*Free Trial*).
* **Header & Navigasi:** Logo Wissen-Kids, Menu Utama, Tombol CTA: *"Coba Kelas Gratis"* & *"Hubungi Kami"*.
* **Hero Section:**
  * Headline memikat: Menemani Tumbuh Kembang & Prestasi Belajar Anak dari Usia 2 Tahun hingga Lulus SMP.
  * Visual menarik: Foto murid-murid Wissen-Kids yang aktif, riang, dan bersemangat.
  * Quick CTA: Tombol *"Daftar Free Trial"* & *"Lihat Program Belajar"*.
  * Nilai Plus Cepat (*Trust Indicators*): Tutor tersertifikasi & ramah, rasio murid-guru ideal, ruang kelas ber-AC & interaktif.
* **Filter Interaktif Berdasarkan Jenjang Usia:**
  * Tab filter cepat:
    1. *Early Childhood (2 - 6 Tahun / Toddler & TK)*
    2. *Primary School (SD: Kelas 1 - 6)*
    3. *Junior High (SMP: Kelas 7 - 9)*
* **Grid 10 Program Belajar Unggulan:** Menampilkan kartu ringkasan program dengan badge usia, poin manfaat, dan tautan detail.
* **Mengapa Memilih Wissen-Kids (Why Choose Us):**
  * Metode belajar interaktif & menyenangkan (*Fun Learning & Active Learning*).
  * Kurikulum terstruktur disesuaikan kemampuan anak (*Personalized Pace*).
  * Laporan berkala perkembangan anak kepada orang tua.
  * Lingkungan aman, nyaman, dan ramah anak.
* **Sekilas Galeri & Fasilitas:** Carousel foto kelas, alat peraga, area bermain anak, dan perlengkapan sains/seni.
* **Ulasan / Testimoni Orang Tua:** Komentar asli wali murid mengenai peningkatan minat baca, matematika, atau kepercayaan diri anak.
* **Call to Action (CTA) Banner & Peta Lokasi:** Ajakan menjadwalkan kunjungan ke lokasi (*Open House*) atau konsultasi via WhatsApp.
* **Footer:** Identitas bimbel, jam operasional, alamat lengkap dengan tautan Google Maps, kanal media sosial, dan tautan kebijakan privasi.

### 5.2 Halaman Program Belajar & Rincian Paket
Menampilkan seluruh paket belajar lengkap dengan filter kategori usia dan pencarian program:

#### Daftar 10 Program Belajar Wissen-Kids:
1. **Simulation & Activity (Usia 2–4 Tahun)**
   * *Fokus:* Stimulasi sensorik dan motorik halus/kasar, pengenalan warna, bentuk, sosialisasi teman sebaya, dan pembiasaan kemandirian.
2. **Baca Tulis (Usia 4–7 Tahun / Prasekolah & Transisi SD)**
   * *Fokus:* Pengenalan fonik alfabet, suku kata, menyusun kalimat sederhana tanpa mengeja kaku, melatih genggaman pensil (*pencil grip*), dan pemahaman teks dasar.
3. **Berhitung (Usia 4–7 Tahun)**
   * *Fokus:* Konsep logika angka konkret dengan media visual, penjumlahan/pengurangan dasar, pengelompokan benda, dan persiapan mental matematika SD.
4. **English for Kids (Usia 3 Tahun – SD)**
   * *Fokus:* Kosakata sehari-hari (*vocabulary building*), pelafalan (*pronunciation*), bernyanyi dan bercerita (*storytelling*), serta keberanian berbicara bahasa Inggris dasar.
5. **Sempoa (Usia 5–12 Tahun)**
   * *Fokus:* Teknik menghitung cepat menggunakan sempoa fisik dan bayangan (mental aritmatika), melatih daya konsentrasi, memori visual, dan ketelitian otak kanan-kiri.
6. **Bimbel SD (Kelas 1–6 SD)**
   * *Fokus:* Pendampingan pelajaran sekolah (Tematik, Matematika, IPA, IPS, Bahasa Indonesia), bimbingan PR/tugas harian, dan persiapan Penilaian Harian/Semester.
7. **Bimbel SD English (Kelas 1–6 SD)**
   * *Fokus:* Peningkatan *Grammar*, *Reading Comprehension*, *Writing*, dan persiapan ujian sekolah atau kurikulum bertaraf nasional-plus / internasional.
8. **Bimbel SMP (Kelas 7–9 SMP)**
   * *Fokus:* Penguasaan konsep esensial Matematika, IPA (Fisika, Biologi), Bahasa Inggris, persiapan Asesmen Nasional (ANBK), Ujian Sekolah, dan pemantapan masuk SMA favorit.
9. **Mengaji (Usia 4 Tahun – SMP)**
   * *Fokus:* Belajar Iqra’ hingga Al-Qur'an, makhraj huruf, tajwid dasar, hafalan surat-surat pendek (Juz ‘Amma), doa harian, dan adab islami.
10. **Mewarnai - Art & Craft (Usia 3–10 Tahun)**
    * *Fokus:* Eksplorasi kreativitas seni rupa, teknik gradasi warna (krayon/pensil warna), kerajinan tangan melipat/menempel (*crafting*), serta melatih kesabaran dan estetika.

* **Halaman Detail Tiap Program (`/program/[slug]`):**
  * Target usia & prasyarat.
  * Deskripsi program & capaian pembelajaran (*Learning Outcomes*).
  * Silabus ringkas / agenda pertemuan.
  * Format kelas (Kelas Privat 1-on-1 atau Kelas Kelompok Kecil maks 4–6 anak).
  * Tombol CTA: *"Daftar Program Ini"* (otomatis mengisi pilihan program di formulir).

### 5.3 Halaman Galeri & Dokumentasi Kegiatan (`/galeri`)
* Tampilan masonry / grid responsif foto dan video kegiatan.
* Filter berdasarkan kategori: *Kelas Toddler, Praktik Sains, Lomba/Pentas Anak, Fasilitas Belajar*.
* Modal lightbox untuk melihat foto resolusi tinggi beserta deskripsi singkat.

### 5.4 Halaman Artikel & Tips Edukasi (`/artikel`)
* Artikel panduan pola asuh (*parenting tips*), trik belajar anak, dan pengumuman kegiatan bimbel.
* Fitur pencarian artikel dan filter kategori.
* Tampilan artikel bersih dengan estimasi waktu baca (*reading time*) dan tombol bagikan ke WhatsApp/Sosial Media.

### 5.5 Halaman Pendaftaran / Coba Kelas Gratis (`/daftar`)
* Formulir registrasi calon murid baru / pengajuan *Free Trial*:
  * Nama Lengkap Orang Tua / Wali
  * Nomor WhatsApp Aktif (dengan validasi format Indonesia)
  * Nama Lengkap & Nama Panggilan Anak
  * Tanggal Lahir / Usia Anak
  * Pilihan Paket Belajar yang Diminati (dropdown multi-select dari 10 paket di atas)
  * Opsi Tipe Kelas (Privat di Tempat / Kelas Reguler / Home Visit)
  * Catatan Tambahan (kebutuhan khusus anak / hari dan jam yang diinginkan)
* Feedback instan setelah kirim:
  * Notifikasi sukses tersimpan di database.
  * Tautan instan *"Konfirmasi Langsung ke WhatsApp Admin"* dengan template pesan yang otomatis terisi data formulir.

---

## 6. Rincian Fitur: Admin Content Management System (CMS)

### 6.1 Autentikasi & Keamanan Admin (`/admin/login`)
* Login menggunakan Supabase Auth (Email & Password terenkripsi).
* Perlindungan rute menggunakan Next.js Middleware; pengguna non-admin yang mencoba membuka `/admin/*` otomatis diarahkan ke `/admin/login`.
* Sesi aman dengan HttpOnly Cookies.

### 6.2 Dasbor Utama (`/admin/dashboard`)
* Kartu Metrik Ringkas:
  * Total Pendaftar Baru (Bulan Ini vs Total Keseluruhan).
  * Status Pendaftar: *Menunggu Dihubungi, Dijadwalkan Trial, Terdaftar Jadi Murid, Dibatalkan*.
  * Total Program Aktif.
  * Total Artikel yang Terbit.
* Tabel 5 Pendaftar Terbaru dengan aksi cepat: Tombol "Kirim WhatsApp" untuk langsung menyapa calon wali murid.

### 6.3 Manajemen Program Belajar (`/admin/programs`)
* **List:** Tabel seluruh program dengan kolom: Gambar, Nama Program, Kelompok Usia, Tipe Kelas, Status (Aktif/Draft), Aksi (Edit/Hapus).
* **Create/Edit:**
  * Nama Program & Slug otomatis.
  * Kategori Usia (dropdown/tags).
  * Upload Gambar Thumbnail (langsung ke Supabase Storage Bucket `programs`).
  * Deskripsi Singkat & Deskripsi Lengkap.
  * Poin-Poin Fasilitas & Capaian (Dynamic list input).
  * Status Tampil (Toggle switch).

### 6.4 Manajemen Pendaftar / Leads (`/admin/leads`)
* Tabel lengkap data calon murid yang mengisi formulir web.
* Filter berdasarkan status proses: *Baru, Dihubungi, Selesai Trial, Murid Aktif*.
* Fitur pencarian nama anak / nomor telepon orang tua.
* Ekspor data ke format spreadsheet (.csv / .xlsx) untuk kebutuhan arsip dan administrasi offline.
* Tombol aksi: Update status & Catatan internal admin (misal: "Ibu ingin trial hari Sabtu jam 10 pagi").

### 6.5 Manajemen Artikel & Tips Edukasi (`/admin/articles`)
* CRUD artikel blog dengan editor teks kaya (*Rich-Text/Markdown*).
* Upload cover artikel ke Supabase Storage Bucket `articles`.
* Pengaturan status: *Draft* atau *Published*.
* Input Meta Description untuk optimasi SEO Google.

### 6.6 Manajemen Galeri & Fasilitas (`/admin/gallery`)
* Multi-upload foto kegiatan ke Supabase Storage Bucket `gallery`.
* Input judul foto, kategori (Kegiatan Belajar, Fasilitas, Acara), dan tanggal kegiatan.
* Drag-and-drop / hapus media yang sudah tidak relevan.

### 6.7 Manajemen Testimoni & FAQ (`/admin/testimonials` & `/admin/faqs`)
* **Testimoni:** Tambah nama orang tua, foto anak/orang tua, nama program yang diambil, rating bintang (1–5), dan ulasan teks.
* **FAQ:** Tambah pertanyaan dan jawaban seputar pendaftaran, biaya, sistem izin, dan perlengkapan belajar.

### 6.8 Pengaturan Website (`/admin/settings`)
* Nomor WhatsApp resmi admin (nomor tujuan tombol WhatsApp mengambang dan pendaftaran).
* Jam operasional kantor & bimbel.
* Alamat lengkap dan koordinat embed Google Maps.
* Link akun media sosial (Instagram, TikTok, YouTube, Facebook).

---

## 7. Skema Database PostgreSQL (Supabase)

```sql
-- 1. ENUM TYPES
CREATE TYPE lead_status AS ENUM ('baru', 'dihubungi', 'dijadwalkan_trial', 'murid_aktif', 'batal');
CREATE TYPE program_level AS ENUM ('toddler', 'prasekolah', 'sd', 'smp', 'umum');

-- 2. TABEL PROFIL ADMIN
CREATE TABLE public.admin_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    role TEXT DEFAULT 'admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. TABEL PROGRAM BELAJAR
CREATE TABLE public.programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    age_group TEXT NOT NULL,           -- Contoh: "2 - 4 Tahun", "Kelas 1 - 6 SD"
    level program_level NOT NULL DEFAULT 'umum',
    short_desc TEXT NOT NULL,
    full_desc TEXT NOT NULL,
    features TEXT[] DEFAULT '{}',       -- Array string poin keunggulan
    curriculum_points TEXT[] DEFAULT '{}',
    thumbnail_url TEXT,
    order_index INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. TABEL PENDAFTARAN & LEADS
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_name TEXT NOT NULL,
    whatsapp_number TEXT NOT NULL,
    child_name TEXT NOT NULL,
    child_age TEXT NOT NULL,
    interested_programs TEXT[] NOT NULL DEFAULT '{}',
    class_preference TEXT DEFAULT 'reguler', -- reguler, privat, home-visit
    notes TEXT,
    status lead_status DEFAULT 'baru',
    admin_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. TABEL ARTIKEL & TIPS EDUKASI
CREATE TABLE public.articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL DEFAULT 'Tips Edukasi',
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image_url TEXT,
    author_name TEXT DEFAULT 'Tim Wissen-Kids',
    is_published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. TABEL GALERI & KEGIATAN
CREATE TABLE public.gallery_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,            -- 'Fasilitas', 'Aktivitas Belajar', 'Event'
    media_url TEXT NOT NULL,
    caption TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. TABEL TESTIMONI
CREATE TABLE public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_name TEXT NOT NULL,
    child_name_and_age TEXT,
    program_taken TEXT,
    rating INT CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
    review_text TEXT NOT NULL,
    avatar_url TEXT,
    is_featured BOOLEAN DEFAULT TRUE,
    order_index INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. TABEL FAQ
CREATE TABLE public.faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category TEXT DEFAULT 'Umum',
    order_index INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. TABEL PENGATURAN WEBSITE (SINGLE ROW)
CREATE TABLE public.site_settings (
    id INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
    site_name TEXT DEFAULT 'Wissen-Kids',
    tagline TEXT DEFAULT 'Tempat Belajar Cerdas & Ceria Usia 2 Tahun - SMP',
    whatsapp_number TEXT NOT NULL,
    email TEXT,
    address TEXT NOT NULL,
    google_maps_embed TEXT,
    hero_title TEXT,
    hero_subtitle TEXT,
    instagram_url TEXT,
    facebook_url TEXT,
    tiktok_url TEXT,
    announcement_text TEXT,
    is_announcement_active BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Publik: Bisa membaca data yang dipublikasikan
CREATE POLICY "Public read programs" ON public.programs FOR SELECT USING (is_active = true);
CREATE POLICY "Public read articles" ON public.articles FOR SELECT USING (is_published = true);
CREATE POLICY "Public read gallery" ON public.gallery_items FOR SELECT USING (true);
CREATE POLICY "Public read testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Public read faqs" ON public.faqs FOR SELECT USING (is_active = true);
CREATE POLICY "Public read settings" ON public.site_settings FOR SELECT USING (true);

-- Publik: Bisa memasukkan data pendaftaran baru
CREATE POLICY "Public insert leads" ON public.leads FOR INSERT WITH CHECK (true);

-- Admin: Akses penuh CRUD untuk seluruh tabel bila pengguna telah diautentikasi (authenticated)
CREATE POLICY "Admin full access programs" ON public.programs FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access articles" ON public.articles FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access gallery" ON public.gallery_items FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access testimonials" ON public.testimonials FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access faqs" ON public.faqs FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access settings" ON public.site_settings FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access leads" ON public.leads FOR ALL TO authenticated USING (true);
```

---

## 8. Persyaratan Non-Fungsional (NFR)

### 8.1 Kinerja & Aksesibilitas
* **Core Web Vitals:** First Contentful Paint (FCP) < 1.2 detik, Largest Contentful Paint (LCP) < 2.5 detik pada jaringan 4G mobile.
* **Optimasi Aset:** Penggunaan format gambar WebP/AVIF secara otomatis menggunakan komponen `next/image`.
* **Mobile-First Design:** Desain dioptimalkan untuk layar ponsel pintar (layar 360px - 430px) mengingat mayoritas orang tua mengakses media sosial dan situs melalui smartphone.

### 8.2 SEO & Social Sharing
* **Metadata Dinamis:** Judul halaman, deskripsi, kata kunci terstruktur (contoh: *"Bimbel Anak Usia 2 Tahun - SMP | Wissen-Kids"*).
* **OpenGraph & Twitter Card:** Pratinjau banner dan deskripsi otomatis saat tautan dibagikan ke WhatsApp, Facebook, atau Twitter.
* **Schema Markup (JSON-LD):** Format `EducationalOrganization` dan `LocalBusiness` agar mudah diindeks oleh Google Search dan Google Maps.

### 8.3 Keamanan & Privasi
* Enkripsi data komunikasi menggunakan HTTPS/TLS.
* Validasi input formulir menggunakan Zod untuk mencegah serangan XSS dan SQL Injection.
* Proteksi rute admin panel dengan middleware token otentikasi JWT Supabase.
* Pengamanan Supabase Storage dengan bucket privat untuk dokumen internal dan bucket publik terbatas hanya untuk aset gambar web.

---

## 9. Rencana Implementasi & Milestone Pengembangan

```
Phase 1: Setup & Design System
├── Inisialisasi Next.js (App Router, Tailwind CSS, shadcn/ui)
├── Konfigurasi Database Supabase, tabel DDL, RLS, & Storage Buckets
└── Setup palet warna brand Wissen-Kids, tipografi, & komponen global (Header, Footer, Floating WhatsApp)

Phase 2: Pengembangan Halaman Publik (Frontend)
├── Implementasi Home Page (Hero, Value Proposition, Age Filter, Testimonials, FAQ)
├── Implementasi Halaman Program & Detail 10 Program Belajar
├── Implementasi Halaman Galeri, Artikel & Detail Artikel
└── Implementasi Formulir Pendaftaran / Free Trial dengan integrasi WhatsApp

Phase 3: Pengembangan Admin CMS Panel
├── Autentikasi Admin (Supabase Auth) & Proteksi Middleware
├── CRUD Program Belajar & Manajemen Upload Media
├── CRUD Artikel & Galeri Kegiatan
├── Manajemen Testimoni, FAQ, & Pengaturan Website
└── Modul Leads Management (Tabel calon murid, ubah status, ekspor CSV)

Phase 4: Integrasi, Pengujian, & Seeding Data
├── Seeding data awal 10 program belajar Wissen-Kids lengkap
├── Pengujian responsivitas layar (Mobile, Tablet, Desktop)
├── Pengujian alur pendaftaran dari formulir web sampai data masuk ke admin
└── Optimasi SEO, Favicon, OpenGraph, dan Core Web Vitals

Phase 5: Peluncuran & Handover
├── Setup Domain kustom (misal: wissenkids.com / bimbelwissenkids.id)
├── Deployment ke platform Vercel & konfigurasi Environment Variables
└── Dokumentasi panduan penggunaan Admin Panel bagi tim operasional
```

---

## 10. Data Awal 10 Program Belajar (Seed Data Reference)

Berikut ringkasan data yang siap diisi ke dalam sistem:

| No | Nama Program | Target Usia | Kategori Utama | Ringkasan Manfaat Utama |
| :---: | :--- | :--- | :--- | :--- |
| 1 | **Simulation & Activity** | 2 – 4 Tahun | Toddler / PAUD | Stimulasi sensori-motorik, melatih fokus, motorik halus & sosialisasi dini anak. |
| 2 | **Baca Tulis** | 4 – 7 Tahun | Prasekolah & SD | Pengenalan fonik, merangkai suku kata, lancar membaca & menulis tanpa beban. |
| 3 | **Berhitung** | 4 – 7 Tahun | Prasekolah & SD | Fondasi logika angka, penjumlahan & pengurangan dengan media visual menyenangkan. |
| 4 | **English for Kids** | 3 – 12 Tahun | Bahasa Asing | Percakapan dasar, kosakata aktif, pelafalan natural lewat lagu & cerita. |
| 5 | **Sempoa** | 5 – 12 Tahun | Matematika / Logika | Menghitung cepat tanpa kalkulator, mengasah konsentrasi & daya ingat otak kanan. |
| 6 | **Bimbel SD** | 7 – 12 Tahun (Kelas 1–6) | Akademik SD | Pendampingan kurikulum sekolah, bimbingan PR, persiapan ulangan & ujian harian. |
| 7 | **Bimbel SD English** | 7 – 12 Tahun (Kelas 1–6) | Bahasa Asing / Akademik | Penguatan grammar, reading, writing, dan persiapan kurikulum internasional/bilingual. |
| 8 | **Bimbel SMP** | 12 – 15 Tahun (Kelas 7–9) | Akademik SMP | Penguasaan konsep Matematika, IPA, Bahasa Inggris, persiapan ANBK & ujian masuk SMA. |
| 9 | **Mengaji** | 4 – 15 Tahun | Karakter & Agama | Belajar membaca Iqra' & Al-Qur'an, tajwid benar, hafalan surat pendek & doa harian. |
| 10 | **Mewarnai - Art & Craft** | 3 – 10 Tahun | Kreativitas & Seni | Teknik mewarnai gradasi, melipat, menggunting, menempel, melatih kesabaran & imajinasi. |
