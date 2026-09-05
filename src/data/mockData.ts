import { Program, Article, GalleryItem, Testimonial, FAQItem, SiteSettings, Lead } from "@/types";

export const siteSettings: SiteSettings = {
  siteName: "Wissen Kids Center",
  tagline: "Bimbingan Belajar & Stimulasi Cerdas Anak Usia 2 Tahun hingga Lulus SMP",
  whatsappNumber: "6281234567890",
  displayPhone: "+62 812-3456-7890",
  email: "halo@wissenkids.id",
  address: "Jl. Cendrawasih Raya No. 45, Kebayoran Baru, Jakarta Selatan",
  operatingHours: "Senin - Sabtu: 08.00 - 18.00 WIB | Minggu: Tutup",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.297475143301!2d106.7972!3d-6.2244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMjcuOCJTIDEwNsKwNDcnNDkuOSJF!5e0!3m2!1sid!2sid!4v1620000000000",
  instagramUrl: "https://instagram.com/wissenkids",
  facebookUrl: "https://facebook.com/wissenkids",
  tiktokUrl: "https://tiktok.com/@wissenkids",
  announcementText: "🎉 Pendaftaran Periode Baru Dibuka! Dapatkan Diskon Registrasi 30% & Free Trial 1 Sesi untuk 20 Pendaftar Pertama Bulan Ini.",
  isAnnouncementActive: true,
};

export const programsData: Program[] = [
  {
    id: "prog-1",
    title: "Simulation & Activity",
    slug: "simulation-activity",
    ageGroup: "2 – 4 Tahun",
    level: "toddler",
    badge: "Toddler & PAUD",
    shortDesc: "Program stimulasi sensori-motorik, eksplorasi tekstur, fokus gerak, dan adaptasi sosialisasi pertama bagi si kecil.",
    fullDesc: "Program Simulation & Activity dirancang khusus untuk memfasilitasi masa emas (golden age) batita usia 2 hingga 4 tahun. Lewat aktivitas bermain terarah (sensory bin, balance beam, manipulative toys), anak dilatih mengembangkan koordinasi mata-tangan, kekuatan motorik halus, kebiasaan mendengar instruksi sederhana, dan rasa percaya diri berinteraksi dengan teman sebaya.",
    features: [
      "Stimulasi 7 sensori (taktil, proprioseptif, vestibular, visual, auditori)",
      "Latihan motorik halus (memegang, meremas, menjepit)",
      "Interaksi sosial terbimbing & pembiasaan mandiri",
      "Rasio guru-anak maksimal 1:3 untuk pengawasan intensif",
      "Ruang bermain beralas matras higienis & bebas sudut tajam"
    ],
    curriculumPoints: [
      { title: "Sensory Play Day", desc: "Eksplorasi tekstur alami (water beads, pasta aman, tepung warna, busa lembut)." },
      { title: "Gross Motor & Balance", desc: "Jalur rintangan mini yang melatih keseimbangan, merangkak, dan melompat." },
      { title: "Fine Motor Training", desc: "Menyusun balok, memasukkan manik besar, dan melatih kekuatan cengkeraman jari." },
      { title: "Circle Time & Songs", desc: "Lagu interaktif bertema anggota tubuh, hewan, warna, dan rutinitas berbagi." }
    ],
    classFormats: ["Kelas Kelompok Mini (Maks 4 Anak)", "Kelas Pendampingan Ortu (Mom & Baby)"],
    iconName: "Puzzle",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-800",
      accent: "text-amber-600"
    },
    priceInfo: "Mulai dari Rp 350.000 / bulan",
    scheduleInfo: "2x seminggu @ 45 menit",
    isActive: true,
    orderIndex: 1
  },
  {
    id: "prog-2",
    title: "Baca Tulis",
    slug: "baca-tulis",
    ageGroup: "4 – 7 Tahun",
    level: "prasekolah",
    badge: "Prasekolah & Transisi SD",
    shortDesc: "Metode fonik menyenangkan tanpa mengeja kaku, melatih kesiapan membaca kata, kalimat, dan kelenturan motorik menulis.",
    fullDesc: "Bukan sekadar hafalan huruf, metode Baca Tulis Wissen Kids Center menggunakan pendekatan fonik visual & audio interaktif yang membimbing anak mengenali bunyi huruf, menggabungkan suku kata, hingga membaca kalimat utuh secara natural. Dilengkapi pendampingan pencil grip agar jari si kecil tidak cepat lelah saat menulis.",
    features: [
      "Metode Fonik Menyenangkan (tanpa mengeja terbata-bata)",
      "Flashcard bergambar & buku bacaan bertingkat",
      "Koreksi cara memegang pensil (ergonomic pencil grip)",
      "Pengenalan dikte kata dasar bertahap",
      "Garansi anak mampu membaca buku cerita pendek"
    ],
    curriculumPoints: [
      { title: "Tahap 1: Pengenalan Bunyi Huruf (Phonics)", desc: "Mengenal simbol alfabet melalui asosiasi bunyi dan gerakan tangan interaktif." },
      { title: "Tahap 2: Rangkai 2 & 3 Huruf", desc: "Menggabungkan konsonan-vokal (ba, bi, bu) dan membaca kata tertutup (tas, jam, bis)." },
      { title: "Tahap 3: Diftong & Konsonan Ganda", desc: "Menguasai sengau 'ng', 'ny', dan diftong 'ai', 'au', 'oi'." },
      { title: "Tahap 4: Membaca Pemahaman & Menulis Kalimat", desc: "Menjawab pertanyaan dari teks pendek dan menulis cerita harian sederhana." }
    ],
    classFormats: ["Kelas Privat 1-on-1", "Kelas Reguler (3-5 Anak)"],
    iconName: "BookOpen",
    colorScheme: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-800",
      accent: "text-blue-600"
    },
    priceInfo: "Mulai dari Rp 400.000 / bulan",
    scheduleInfo: "3x seminggu @ 60 menit",
    isActive: true,
    orderIndex: 2
  },
  {
    id: "prog-3",
    title: "Berhitung",
    slug: "berhitung",
    ageGroup: "4 – 7 Tahun",
    level: "prasekolah",
    badge: "Prasekolah & Transisi SD",
    shortDesc: "Fondasi logika matematika dini menggunakan benda konkret, menjadikan angka teman yang asyik bukan momok menakutkan.",
    fullDesc: "Menanamkan pengertian jumlah, perbandingan, dan operasi hitung dasar menggunakan media peraga nyata (counting bears, stik kayu, angka magnet). Mempersiapkan daya nalar anak agar tangkas menghadapi soal matematika di bangku Sekolah Dasar.",
    features: [
      "Konsep kuantitas konkret sebelum simbol abstrak",
      "Operasi penjumlahan & pengurangan hingga 100",
      "Pengenalan pola, geometri sederhana, dan perbandingan",
      "Latihan soal cerita bergambar kontekstual",
      "Game matematika interaktif yang memacu semangat"
    ],
    curriculumPoints: [
      { title: "Number Sense & Quantity", desc: "Memahami hubungan angka 1-20 dengan jumlah benda sesungguhnya." },
      { title: "Penjumlahan Konkret ke Abstrak", desc: "Teknik 'simpan di kepala, hitung di jari' yang runut dan mudah dipahami." },
      { title: "Pengurangan Logis", desc: "Konsep selisih dan pengurangan melalui cerita benda yang berkurang." },
      { title: "Kesiapan Tes Masuk SD", desc: "Latihan soal logika, urutan deret, dan logika perbandingan ukuran/berat." }
    ],
    classFormats: ["Kelas Privat 1-on-1", "Kelas Reguler (Maks 5 Anak)"],
    iconName: "Calculator",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-800",
      accent: "text-emerald-600"
    },
    priceInfo: "Mulai dari Rp 400.000 / bulan",
    scheduleInfo: "2x / 3x seminggu @ 60 menit",
    isActive: true,
    orderIndex: 3
  },
  {
    id: "prog-4",
    title: "English for Kids",
    slug: "english-for-kids",
    ageGroup: "3 – 12 Tahun",
    level: "umum",
    badge: "Bahasa Asing Interaktif",
    shortDesc: "Belajar percakapan, kosakata harian, dan pelafalan alami bahasa Inggris lewat lagu, game, dan role-play seru.",
    fullDesc: "Menggunakan kurikulum komunikatif berbasis Cambridge Young Learners (Starters, Movers, Flyers). Anak diajak terbiasa mendengar dan melafalkan bahasa Inggris dengan aksen natural tanpa canggung, didukung media cerita bergambar dan simulasi situasi nyata.",
    features: [
      "Total Physical Response (TPR) & multisensory learning",
      "Fokus Listening & Speaking sebelum Grammar formal",
      "Praktek percakapan berpasangan & presentasi mini",
      "Materi disesuaikan usia (Toddler English vs Primary English)",
      "Sesi native speaker guest rutin berkala"
    ],
    curriculumPoints: [
      { title: "Daily Vocabulary Immersion", desc: "Warna, angka, bagian tubuh, keluarga, makanan, dan aktivitas sehari-hari." },
      { title: "Natural Phonics & Pronunciation", desc: "Latihan pelafalan konsonan dan vokal bahasa Inggris dengan tepat." },
      { title: "Conversational Role Play", desc: "Simulasi belanja di toko mainan, memesan makanan, dan menyapa teman baru." },
      { title: "Reading & Writing Expression", desc: "Menulis paragraf singkat dan menceritakan kembali kisah dongeng favorit." }
    ],
    classFormats: ["Kelas Reguler (4-6 Anak)", "Kelas Privat 1-on-1"],
    iconName: "Languages",
    colorScheme: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      badgeBg: "bg-indigo-100",
      badgeText: "text-indigo-800",
      accent: "text-indigo-600"
    },
    priceInfo: "Mulai dari Rp 450.000 / bulan",
    scheduleInfo: "2x seminggu @ 60 menit",
    isActive: true,
    orderIndex: 4
  },
  {
    id: "prog-5",
    title: "Sempoa (Mental Aritmatika)",
    slug: "sempoa",
    ageGroup: "5 – 12 Tahun",
    level: "umum",
    badge: "Matematika Otak Kanan",
    shortDesc: "Metode mental aritmatika sempoa Jepang (Soroban) yang mengoptimalkan keseimbangan fungsi otak kiri dan kanan, fokus, serta memori visual.",
    fullDesc: "Sempoa Wissen Kids Center mengintegrasikan manipulasi manik sempoa fisik (soroban) dengan teknik 'bayangan sempoa' di pikiran (mental arithmetic). Metode ini terbukti melatih sinergi otak kiri (analisis logika) dan otak kanan (imajinasi visual), menghasilkan kemampuan berhitung secepat kilat dengan ketelitian tinggi.",
    features: [
      "Alat sempoa fisik 13/17 tiang berkualitas",
      "Latihan kecepatan mata & refleks motorik",
      "Peningkatan konsentrasi belajar di semua mapel",
      "Ujian kenaikan tingkat (grade sertifikasi)",
      "Persiapan mengikuti lomba dan olimpiade sempoa"
    ],
    curriculumPoints: [
      { title: "Dasar Manik Sempoa (Level 1-3)", desc: "Mengenal nilai manik atas/bawah, teman kecil (+/- 5) dan teman besar (+/- 10)." },
      { title: "Penjumlahan & Pengurangan Cepat", desc: "Menyelesaikan 10-20 baris angka secara simultan dalam hitungan detik." },
      { title: "Mental Bayangan (Anzan)", desc: "Menghitung tanpa menyentuh alat, murni menggerakkan manik di dalam imajinasi." },
      { title: "Perkalian & Pembagian Sempoa", desc: "Penerapan teknik sempoa tingkat lanjut untuk operasi matematika multi-digit." }
    ],
    classFormats: ["Kelas Reguler (4-6 Siswa)", "Kelas Privat Intensif"],
    iconName: "Sparkles",
    colorScheme: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      badgeBg: "bg-purple-100",
      badgeText: "text-purple-800",
      accent: "text-purple-600"
    },
    priceInfo: "Mulai dari Rp 420.000 / bulan",
    scheduleInfo: "2x seminggu @ 60 menit",
    isActive: true,
    orderIndex: 5
  },
  {
    id: "prog-6",
    title: "Bimbel SD",
    slug: "bimbel-sd",
    ageGroup: "Kelas 1 – 6 SD",
    level: "sd",
    badge: "Akademik Sekolah Dasar",
    shortDesc: "Bimbingan lengkap seluruh mata pelajaran SD, pendampingan PR, ulangan harian, PTS, dan ujian kenaikan kelas.",
    fullDesc: "Pendampingan intensif kurikulum Merdeka / K13 untuk siswa SD. Guru membantu membedah konsep Matematika, IPAS, Bahasa Indonesia, dan PKn dengan bahasa yang mudah dicerna, menyelesaikan tugas sekolah tanpa stres, serta memberikan drilling soal berkala.",
    features: [
      "Pendampingan PR & tugas sekolah setiap sesi",
      "Bank soal latihan ulangan harian, PTS, & PAS lengkap",
      "Kelas interaktif dengan diskusi dan eksperimen mini",
      "Laporan hasil evaluasi belajar mingguan ke orang tua",
      "Fokus penguasaan konsep, bukan sekadar menghafal rumus"
    ],
    curriculumPoints: [
      { title: "Matematika SD Esensial", desc: "Pecahan, desimal, persen, FPB/KPK, bangun ruang, dan pemecahan soal cerita." },
      { title: "IPAS (Sains & Sosial)", desc: "Konsep sains alam, anatomi sederhana, sejarah lokal, dan peta konsep visual." },
      { title: "Bahasa Indonesia Terampil", desc: "Pemahaman bacaan panjang, menulis karangan, dan analisis ide pokok paragraf." },
      { title: "Strategi Ulangan & Ujian", desc: "Simulasi try out berjangka dengan pembahasan mendalam sampai tuntas." }
    ],
    classFormats: ["Kelas Reguler (Maks 5 Siswa per Tingkat)", "Kelas Privat 1-on-1"],
    iconName: "GraduationCap",
    colorScheme: {
      bg: "bg-sky-50",
      border: "border-sky-200",
      badgeBg: "bg-sky-100",
      badgeText: "text-sky-800",
      accent: "text-sky-600"
    },
    priceInfo: "Mulai dari Rp 450.000 / bulan",
    scheduleInfo: "3x seminggu @ 75 menit",
    isActive: true,
    orderIndex: 6
  },
  {
    id: "prog-7",
    title: "Bimbel SD English",
    slug: "bimbel-sd-english",
    ageGroup: "Kelas 1 – 6 SD",
    level: "sd",
    badge: "Kurikulum Nasional & Bilingual",
    shortDesc: "Penguatan tata bahasa (grammar), reading comprehension, writing essay pendek, dan persiapan ujian sekolah berstandar tinggi.",
    fullDesc: "Dikhususkan untuk siswa SD yang ingin unggul dalam mata pelajaran Bahasa Inggris sekolah, baik sekolah negeri, swasta unggulan, maupun sekolah berlabel bilingual/national plus. Program ini mengkombinasikan penguasaan grammar yang tepat dengan pemahaman teks bacaan kompleks.",
    features: [
      "Sinkronisasi materi buku teks sekolah murid",
      "Struktur Grammar terarah (Tenses, Parts of Speech, Modals)",
      "Reading Comprehension strategi menjawab soal cerita",
      "Writing Clinic: menyusun paragraf deskripsi dan narasi",
      "Latihan soal ulangan tengah semester & akhir semester"
    ],
    curriculumPoints: [
      { title: "Grammar Mastery", desc: "Present, Past, Future, Continuous Tenses, Preposition, dan Subject-Verb Agreement." },
      { title: "Reading Strategy", desc: "Skimming, scanning, mengidentifikasi main idea, dan vocabulary in context." },
      { title: "Writing Skills", desc: "Menulis paragraf berstruktur runtut dengan variasi kata sifat dan kata sambung." },
      { title: "Exam Preparation", desc: "Bedah soal ujian sekolah, olimpiade bahasa Inggris anak, dan tes formatif." }
    ],
    classFormats: ["Kelas Privat 1-on-1", "Kelas Kelompok (3-5 Siswa)"],
    iconName: "BookMarked",
    colorScheme: {
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      badgeBg: "bg-cyan-100",
      badgeText: "text-cyan-800",
      accent: "text-cyan-600"
    },
    priceInfo: "Mulai dari Rp 450.000 / bulan",
    scheduleInfo: "2x seminggu @ 75 menit",
    isActive: true,
    orderIndex: 7
  },
  {
    id: "prog-8",
    title: "Bimbel SMP",
    slug: "bimbel-smp",
    ageGroup: "Kelas 7 – 9 SMP",
    level: "smp",
    badge: "Akademik SMP & Masuk SMA",
    shortDesc: "Pemantapan konsep Matematika, IPA (Fisika & Biologi), Bahasa Inggris, persiapan Asesmen Nasional (ANBK) & ujian masuk SMA favorit.",
    fullDesc: "Tingkat SMP adalah fase krusial pendalaman sains dan matematika abstrak. Di Bimbel SMP Wissen Kids Center, para pengajar membimbing siswa memahami logika rumus, membiasakan berpikir kritis (*Higher Order Thinking Skills / HOTS*), serta mempersiapkan portofolio nilai rapor untuk seleksi masuk SMA/SMK impian.",
    features: [
      "Fokus pada Matematika, IPA Terpadu (Fisika & Biologi), Bahasa Inggris",
      "Teknik cepat penyelesaian soal HOTS & analisis logika",
      "Bimbingan PR, tugas proyek sekolah, dan praktikum teori",
      "Simulasi Asesmen Nasional Berbasis Komputer (ANBK)",
      "Konsultasi pemetaan minat dan pemilihan jurusan SMA"
    ],
    curriculumPoints: [
      { title: "Matematika SMP", desc: "Aljabar, persamaan linier, teorema Pythagoras, transformasi geometri, peluang & statistika." },
      { title: "Fisika & Kimia Dasar", desc: "Gerak lurus, gaya, energi, fluida, optik, kelistrikan, dan zat aditif/adiktif." },
      { title: "Biologi & Ekosistem", desc: "Sistem organ manusia, fotosintesis, bioteknologi, pewarisan sifat, dan ekologi." },
      { title: "Drilling Ujian & Tryout", desc: "Simulasi berkala dengan analisis kelemahan per topik (diagnostic report)." }
    ],
    classFormats: ["Kelas Reguler (Maks 6 Siswa)", "Kelas Privat Intensif"],
    iconName: "Compass",
    colorScheme: {
      bg: "bg-rose-50",
      border: "border-rose-200",
      badgeBg: "bg-rose-100",
      badgeText: "text-rose-800",
      accent: "text-rose-600"
    },
    priceInfo: "Mulai dari Rp 550.000 / bulan",
    scheduleInfo: "3x seminggu @ 90 menit",
    isActive: true,
    orderIndex: 8
  },
  {
    id: "prog-9",
    title: "Mengaji & Pendidikan Karakter",
    slug: "mengaji",
    ageGroup: "4 – 15 Tahun",
    level: "umum",
    badge: "Keagamaan & Adab Mulia",
    shortDesc: "Belajar membaca Al-Qur'an dari nol dengan metode Iqra', tajwid benar, hafalan surat-surat pendek (Juz 'Amma), dan doa harian.",
    fullDesc: "Program Mengaji Wissen Kids Center memberikan bimbingan membaca Al-Qur'an secara tartil dengan suasana penuh kasih sayang. Pengajar bersanad/tersertifikasi membimbing anak melafalkan makharijul huruf dengan fasih, menghafal doa-doa sehari-hari, serta menanamkan nilai adab dan akhlak terpuji.",
    features: [
      "Metode Iqra’ 1 sampai 6 hingga Al-Qur'an Tartil",
      "Bimbingan makhraj huruf dan hukum tajwid terstruktur",
      "Target hafalan Juz 'Amma dan doa harian",
      "Praktek tata cara wudhu dan shalat yang benar",
      "Kisah teladan nabi & pembiasaan sopan santun"
    ],
    curriculumPoints: [
      { title: "Iqra' Bertahap (Jilid 1-6)", desc: "Mengenal huruf hijaiyah tunggal, sambung, mad (panjang-pendek), hingga tanwin." },
      { title: "Tajwid Praktis Al-Qur'an", desc: "Idzhar, idgham, ikhfa, iqlab, hukum mim mati, dan tanda waqaf bacaan." },
      { title: "Tahfidz Juz 'Amma", desc: "Bimbingan setoran hafalan surat pendek (An-Nas sampai An-Naba') dengan muraja'ah." },
      { title: "Adab & Fiqih Ibadah", desc: "Praktek shalat fardhu, doa sebelum makan/tidur, dan penghormatan kepada orang tua." }
    ],
    classFormats: ["Kelas Privat 1-on-1", "Kelas Kelompok Kecil (3-4 Anak)"],
    iconName: "HeartHandshake",
    colorScheme: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      badgeBg: "bg-teal-100",
      badgeText: "text-teal-800",
      accent: "text-teal-600"
    },
    priceInfo: "Mulai dari Rp 350.000 / bulan",
    scheduleInfo: "2x / 3x seminggu @ 60 menit",
    isActive: true,
    orderIndex: 9
  },
  {
    id: "prog-10",
    title: "Mewarnai - Art & Craft",
    slug: "mewarnai-art-craft",
    ageGroup: "3 – 10 Tahun",
    level: "umum",
    badge: "Kreativitas & Seni Anak",
    shortDesc: "Mengasah imajinasi, teknik gradasi warna krayon, melipat kertas (origami), dan kerajinan tangan yang melatih ketelitian.",
    fullDesc: "Media penyaluran ekspresi dan kebahagiaan anak lewat seni rupa. Murid diajarkan cara memegang krayon dengan tepat, teknik mewarnai gradasi 3-4 warna agar gambar tampak hidup, teknik kerik/ukir warna, hingga kreasi kerajinan tangan 3 dimensi berbahan daur ulang yang membanggakan.",
    features: [
      "Teknik gradasi warna krayon (blending & shading)",
      "Teknik kerik/scraping tekstur artistik",
      "Origami, clay modeling, & kreasi prakarya 3D",
      "Melatih kesabaran, fokus mata-tangan, dan kerapian",
      "Pameran karya murid berkala & apresiasi karya"
    ],
    curriculumPoints: [
      { title: "Pengenalan Roda Warna & Kontras", desc: "Mengenal warna primer, sekunder, dan kombinasi warna serasi." },
      { title: "Teknik Mewarnai Rapi Tanpa Coretan", desc: "Melatih batas garis gambar, tekanan krayon, dan kebersihan kertas." },
      { title: "Gradasi & Efek Cahaya", desc: "Membuat transisi warna gelap ke terang pada dedaunan, langit, dan karakter kartun." },
      { title: "Handmade Craft Project", desc: "Membuat bingkai foto hias, topeng hewan, dan kartu ucapan buatan tangan sendiri." }
    ],
    classFormats: ["Kelas Reguler Kreatif (4-6 Anak)", "Kelas Privat"],
    iconName: "Palette",
    colorScheme: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      badgeBg: "bg-pink-100",
      badgeText: "text-pink-800",
      accent: "text-pink-600"
    },
    priceInfo: "Mulai dari Rp 380.000 / bulan",
    scheduleInfo: "2x seminggu @ 75 menit",
    isActive: true,
    orderIndex: 10
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "testi-1",
    parentName: "Ibu Amanda Putri",
    childNameAndAge: "Rafa (5 tahun)",
    programTaken: "Baca Tulis & Berhitung",
    rating: 5,
    reviewText: "Awalnya Rafa susah banget disuruh duduk belajar baca di rumah. Setelah 2 bulan gabung di Wissen Kids Center, sekarang tiap nemu plang toko atau buku cerita dia langsung eja sendiri dengan antusias. Gurunya sabar dan telaten banget!",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-2",
    parentName: "Bapak Hendra Kusuma",
    childNameAndAge: "Kirana (Kelas 5 SD)",
    programTaken: "Sempoa & Bimbel SD",
    rating: 5,
    reviewText: "Nilai matematika Kirana naik drastis dari 65 jadi 95 di ujian semester kemarin. Program sempoa di Wissen Kids Center beneran bikin anak saya jadi cepet dan teliti ngitung tanpa ketergantungan kalkulator.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-3",
    parentName: "Ibu dr. Nadia Faradiba",
    childNameAndAge: "Kenzie (3 tahun)",
    programTaken: "Simulation & Activity",
    rating: 5,
    reviewText: "Kelas Simulation & Activity penyelamat banget untuk anak toddler saya. Sensori motoriknya terlatih, nggak gampang tantrum, dan sekarang gampang berbaur sama teman-teman baru. Ruangannya juga bersih dan aman banget.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-4",
    parentName: "Ibu Siska Wulandari",
    childNameAndAge: "Aldo (Kelas 8 SMP)",
    programTaken: "Bimbel SMP & English",
    rating: 5,
    reviewText: "Tutor SMP di Wissen Kids Center sangat komunikatif, cara ngajarin rumus fisika dan aljabar pakai logika sederhana bukan hafalan buta. Aldo yang tadinya malas belajar sekarang jadi proaktif ngerjain PR.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-5",
    parentName: "Bapak Denny Pratama",
    childNameAndAge: "Alvaro (6 tahun)",
    programTaken: "English for Kids",
    rating: 5,
    reviewText: "Kosakata bahasa Inggris Alvaro bertambah pesat. Dia sekarang percaya diri menyapa dengan full English saat ketemu turis. Metode belajarnya santai tapi ilmunya nancep!",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-6",
    parentName: "Ibu Maya Kartika",
    childNameAndAge: "Naura (4 tahun)",
    programTaken: "Art & Craft Kids",
    rating: 5,
    reviewText: "Kreativitas Naura terlatih luar biasa di kelas Art & Craft. Tiap pulang selalu bawa karya lukisan atau origami buatan sendiri dengan bangga. Daya fokusnya jadi jauh lebih lama.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-7",
    parentName: "Bapak Faisal Anwar",
    childNameAndAge: "Fathan (7 tahun)",
    programTaken: "Tahsin & Mengaji Kids",
    rating: 5,
    reviewText: "Alhamdulillah tajwid dan makhraj huruf Fathan makin rapi. Ustadzah di Wissen Kids membimbing dengan lemah lembut sehingga anak tidak takut salah saat belajar tilawah.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-8",
    parentName: "Ibu Rina Oktaviani",
    childNameAndAge: "Zahra (Kelas 3 SD)",
    programTaken: "Bimbel Tematik SD",
    rating: 5,
    reviewText: "Ranking Zahra naik ke 3 besar di kelasnya! Pembahasan kisi-kisi ulangan dan PR di Wissen Kids sangat terarah, tutornya selalu sigap membantu konsep yang belum paham.",
    avatarUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-9",
    parentName: "Bapak Wahyu Hidayat",
    childNameAndAge: "Daffa (5 tahun)",
    programTaken: "Sempoa Cilik (Fingermath)",
    rating: 5,
    reviewText: "Daffa belajar sempoa jari dengan sangat antusias. Berhitung cepat tanpa jarum jam sekarang jadi kebiasaan seru buat dia. Recomended banget untuk melatih otak kiri dan kanan!",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-10",
    parentName: "Ibu Citra Lestari",
    childNameAndAge: "Arka (6 tahun)",
    programTaken: "Transisi Masuk SD",
    rating: 5,
    reviewText: "Persiapan masuk SD jadi tenang berkat bimbingan intensif di Wissen Kids. Arka yang pemalu sekarang berani presentasi di depan kelas dan mandiri mengatur jadwal belajarnya.",
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-11",
    parentName: "Bapak Agung Wicaksono",
    childNameAndAge: "Reina (Kelas 7 SMP)",
    programTaken: "English & Matematika SMP",
    rating: 5,
    reviewText: "Nilai rapor Reina meningkat signifikan terutama di mata pelajaran IPA dan Matematika. Penjelasan gurunya to-the-point dan banyak tips trik menjawab soal HOTS.",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  },
  {
    id: "testi-12",
    parentName: "Ibu Felicia Gunawan",
    childNameAndAge: "Kenzo (4 tahun)",
    programTaken: "Calistung Ceria",
    rating: 5,
    reviewText: "Metode fonik di Wissen Kids benar-benar menyenangkan untuk anak kecil. Kenzo tidak merasa sedang 'belajar berat' karena diselingi sensory play dan flashcard lucu.",
    avatarUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=200",
    isFeatured: true
  }
];

export const articlesData: Article[] = [
  {
    id: "art-1",
    title: "5 Cara Menyenangkan Melatih Anak Membaca Tanpa Paksaan",
    slug: "cara-menyenangkan-melatih-anak-membaca",
    category: "Tips Parenting",
    summary: "Panduan praktis bagi orang tua untuk menumbuhkan kecintaan membaca pada anak usia 4-7 tahun dengan metode fonik dan bermain peran.",
    content: `
Membaca bukanlah bakat bawaan, melainkan keterampilan yang dilatih secara bertahap. Ketika anak dipaksa menghafal abjad dengan cara mengeja yang kaku, mereka kerap merasa tertekan dan justru menghindari buku.

### 1. Mulai dari Asosiasi Bunyi (Metode Fonik)
Alih-alih mengenalkan nama huruf "B", perkenalkan bunyinya terlebih dahulu (/b/ seperti bola). Saat anak memahami bunyi setiap huruf, merangkai dua huruf menjadi suku kata akan terasa lebih masuk akal dan alami bagi pikiran mereka.

### 2. Bacakan Dongeng Setiap Hari (Bedtime Story)
Luangkan 10 hingga 15 menit setiap malam untuk membaca buku cerita bergambar bersama. Tunjuk kata-kata yang sedang dibaca agar anak menyadari bahwa tulisan memiliki makna.

### 3. Jadikan Membaca Bagian dari Permainan Harian
Ajak anak mencari huruf di kotak sereal, rambu lalu lintas, atau papan nama jalan saat bepergian. Apresiasi setiap usaha kecil yang mereka tunjukkan.

### 4. Sediakan Pojok Baca yang Nyaman di Rumah
Bantal lembut, rak buku rendah setinggi jangkauan anak, dan penerangan yang baik akan memicu inisiatif anak mengambil buku sendiri.
    `,
    coverImageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    authorName: "Tim Pendidik Wissen Kids Center",
    readTime: "4 menit baca",
    isPublished: true,
    publishedAt: "2026-03-01"
  },
  {
    id: "art-2",
    title: "Mengapa Sempoa Masih Menjadi Metode Terbaik Mengasah Otak Kanan Anak?",
    slug: "mengapa-sempoa-terbaik-mengasah-otak-kanan",
    category: "Edukasi Matematika",
    summary: "Bagaimana pergerakan manik sempoa merangsang daya visualisasi, konsentrasi, dan kecepatan berpikir anak di era serba digital.",
    content: `
Di era gadget dan kecerdasan buatan, banyak orang tua bertanya: *"Apakah anak masih perlu belajar sempoa?"* Jawabannya adalah **sangat perlu**. Sempoa bukan sekadar alat menghitung kuno, melainkan instrumen olahraga otak (*brain gym*) yang luar biasa.

### 1. Mengaktifkan Otak Kiri dan Kanan Secara Seimbang
Otak kiri memproses angka dan logika hitungan, sedangkan otak kanan membayangkan pergerakan manik sempoa sebagai gambar. Ketika anak melakukan *Mental Aritmatika*, kedua belahan otak bekerja secara harmonis.

### 2. Memperpanjang Rentang Fokus (Attention Span)
Untuk menghitung 10 baris angka secara cepat, anak harus berkonsentrasi penuh tanpa terdistraksi. Latihan rutin ini melatih ketahanan fokus mereka saat belajar mata pelajaran lain di sekolah.

### 3. Menghilangkan Phobia Matematika
Anak yang terbiasa dengan sempoa melihat angka bukan sebagai rumus abstrak, melainkan pola visual yang menyenangkan.
    `,
    coverImageUrl: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800",
    authorName: "Coach Hendra - Master Sempoa",
    readTime: "5 menit baca",
    isPublished: true,
    publishedAt: "2026-02-20"
  },
  {
    id: "art-3",
    title: "Mengenal Fase Golden Age Anak Usia 2–4 Tahun: Apa yang Harus Distimulasi?",
    slug: "mengenal-fase-golden-age-anak-usia-2-4-tahun",
    category: "Perkembangan Anak",
    summary: "Simak aspek sensori motorik, perkembangan bahasa, dan kemandirian emosional yang wajib diperhatikan di usia toddler.",
    content: `
Pada usia 2 hingga 4 tahun, otak anak membentuk jutaan koneksi saraf baru setiap detik. Stimulasi yang tepat pada fase ini menjadi fondasi karakter, kecerdasan kognitif, dan kemampuan adaptasi sosial seumur hidup.

Fokus stimulasi utama meliputi eksplorasi sensori tekstur, melatih keseimbangan tubuh, mengajarkan pengenalan emosi dasar, dan memberikan kesempatan anak mencoba memakai sepatu atau merapikan mainan sendiri.
    `,
    coverImageUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800",
    authorName: "Psikolog Anak Wissen Kids Center",
    readTime: "3 menit baca",
    isPublished: true,
    publishedAt: "2026-02-10"
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sesi Eksplorasi Sensori Toddler (Classroom A)",
    category: "Aktivitas Belajar",
    mediaUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800",
    caption: "Anak-anak antusias bermain sensory bin dan mencocokkan tekstur warna.",
    date: "2026-03-02"
  },
  {
    id: "gal-2",
    title: "Ruang Kelas Interaktif Ber-AC & Ergonomis",
    category: "Fasilitas",
    mediaUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800",
    caption: "Meja dan kursi ramah anak dengan sudut bulat demi kenyamanan dan keamanan maksimal.",
    date: "2026-02-28"
  },
  {
    id: "gal-3",
    title: "Latihan Mental Aritmatika Sempoa Berkecepatan Tinggi",
    category: "Aktivitas Belajar",
    mediaUrl: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800",
    caption: "Siswa kelas sempoa melatih fokus dan koordinasi gerak manik.",
    date: "2026-02-25"
  },
  {
    id: "gal-4",
    title: "Pentas Kreasi & Pameran Karya Art & Craft",
    category: "Event & Pentas",
    mediaUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
    caption: "Apresiasi hasil lukisan gradasi dan kerajinan tangan murid Wissen Kids Center.",
    date: "2026-02-15"
  },
  {
    id: "gal-5",
    title: "English Storytelling & Role Play Session",
    category: "Aktivitas Belajar",
    mediaUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
    caption: "Belajar kosakata baru dengan boneka tangan dan interaksi dialog santai.",
    date: "2026-02-10"
  },
  {
    id: "gal-6",
    title: "Area Bermain Edukatif & Perpustakaan Mini",
    category: "Fasilitas",
    mediaUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    caption: "Pojok baca dengan ratusan buku bergambar pilihan untuk melatih literasi anak.",
    date: "2026-02-01"
  }
];

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah tersedia program Free Trial (Coba Kelas Gratis) sebelum mendaftar?",
    answer: "Ya, Wissen Kids Center menyediakan 1 sesi Free Trial gratis untuk calon murid baru. Tujuannya agar anak dapat merasakan langsung suasana kelas, berinteraksi dengan guru, dan tim kami dapat melakukan pemetaan kemampuan (diagnostic assessment) untuk merekomendasikan level yang paling sesuai.",
    category: "Pendaftaran & Trial",
    orderIndex: 1
  },
  {
    id: "faq-2",
    question: "Mulai usia berapa anak bisa bergabung di Wissen Kids Center?",
    answer: "Anak dapat bergabung mulai usia 2 tahun di program 'Simulation & Activity'. Kami memiliki rentang program lengkap dan terstruktur hingga siswa tingkat 9 SMP (usia 15 tahun).",
    category: "Program & Metode",
    orderIndex: 2
  },
  {
    id: "faq-3",
    question: "Berapa rasio jumlah murid dan guru dalam satu kelas?",
    answer: "Untuk kelas balita/toddler rasio maksimal adalah 1 guru untuk 3-4 anak. Untuk kelas reguler calistung, sempoa, dan bimbel SD/SMP maksimal 4-6 siswa per sesi agar setiap anak mendapatkan atensi dan bimbingan yang optimal.",
    category: "Program & Metode",
    orderIndex: 3
  },
  {
    id: "faq-4",
    question: "Apakah tersedia pilihan kelas privat 1-on-1?",
    answer: "Tentu saja! Kami menyediakan program Kelas Privat 1 Guru 1 Murid baik belajar di cabang Wissen Kids Center maupun opsi Home Visit (guru datang ke rumah) dengan jadwal fleksibel.",
    category: "Biaya & Jadwal",
    orderIndex: 4
  },
  {
    id: "faq-5",
    question: "Bagaimana jika anak berhalangan hadir karena sakit atau ada acara keluarga?",
    answer: "Orang tua cukup mengonfirmasi izin ketidakhadiran minimal 2 jam sebelum kelas dimulai kepada admin. Murid berhak mendapatkan sesi pengganti (make-up class) sesuai jadwal yang disepakati bersama.",
    category: "Fasilitas & Kehadiran",
    orderIndex: 5
  },
  {
    id: "faq-6",
    question: "Bagaimana sistem pembayaran biaya les di Wissen Kids Center?",
    answer: "Pembayaran dilakukan secara bulanan atau paket semester via transfer bank/QRIS resmi bimbel. Kami tidak membebankan biaya tersembunyi; modul buku belajar dan lembar kerja sudah termasuk dalam paket.",
    category: "Biaya & Jadwal",
    orderIndex: 6
  }
];

export const initialLeads: Lead[] = [
  {
    id: "lead-101",
    parentName: "Ibu Ratna Dewi",
    whatsappNumber: "081298765432",
    childName: "Arsya Pramudya",
    childAge: "4 tahun",
    interestedPrograms: ["baca-tulis", "berhitung"],
    classPreference: "reguler",
    notes: "Ingin coba trial hari Sabtu pagi jam 10.00.",
    status: "dijadwalkan_trial",
    adminNotes: "Sudah dikonfirmasi jadwal trial Sabtu ini jam 10.00 WIB bersama Kak Sarah.",
    createdAt: "2026-03-04T09:30:00Z"
  },
  {
    id: "lead-102",
    parentName: "Bapak Budi Santoso",
    whatsappNumber: "081311223344",
    childName: "Gibran",
    childAge: "Kelas 4 SD",
    interestedPrograms: ["bimbel-sd", "sempoa"],
    classPreference: "privat",
    notes: "Perlu bimbingan intensif persiapan ujian sekolah semester genap.",
    status: "baru",
    adminNotes: "Perlu dihubungi untuk penawaran jadwal tutor privat.",
    createdAt: "2026-03-05T08:15:00Z"
  },
  {
    id: "lead-103",
    parentName: "Ibu Maya Kartika",
    whatsappNumber: "085712348900",
    childName: "Alesha",
    childAge: "2.5 tahun",
    interestedPrograms: ["simulation-activity"],
    classPreference: "reguler",
    notes: "Anak agak pemalu, ingin melatih sensori dan sosialisasi.",
    status: "dihubungi",
    adminNotes: "Sudah dijelaskan modul sensori, menunggu konfirmasi ortu untuk jadwal trial.",
    createdAt: "2026-03-03T14:20:00Z"
  },
  {
    id: "lead-104",
    parentName: "Bapak Ferry Salim",
    whatsappNumber: "081809871234",
    childName: "Darren",
    childAge: "Kelas 8 SMP",
    interestedPrograms: ["bimbel-smp"],
    classPreference: "reguler",
    notes: "Ingin fokus IPA Fisika & Matematika.",
    status: "murid_aktif",
    adminNotes: "Sudah registrasi resmi kelas reguler Senin & Kamis.",
    createdAt: "2026-02-28T11:00:00Z"
  }
];
