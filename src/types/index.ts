export type ProgramLevel = 'toddler' | 'prasekolah' | 'sd' | 'smp' | 'umum';

export interface Program {
  id: string;
  title: string;
  slug: string;
  ageGroup: string;
  level: ProgramLevel;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  features: string[];
  curriculumPoints: { title: string; desc: string }[];
  classFormats: string[]; // e.g. ["Privat 1-on-1", "Kelompok Kecil (3-5 Anak)"]
  iconName: string;
  colorScheme: {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
  priceInfo?: string;
  scheduleInfo?: string;
  isActive: boolean;
  orderIndex: number;
}

export type LeadStatus = 'baru' | 'dihubungi' | 'dijadwalkan_trial' | 'murid_aktif' | 'batal';

export interface Lead {
  id: string;
  parentName: string;
  whatsappNumber: string;
  childName: string;
  childAge: string;
  interestedPrograms: string[];
  classPreference: 'reguler' | 'privat' | 'home-visit';
  notes?: string;
  status: LeadStatus;
  adminNotes?: string;
  createdAt: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  coverImageUrl: string;
  authorName: string;
  readTime: string;
  isPublished: boolean;
  publishedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Aktivitas Belajar' | 'Fasilitas' | 'Event & Pentas';
  mediaUrl: string;
  caption: string;
  date: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childNameAndAge: string;
  programTaken: string;
  rating: number;
  reviewText: string;
  avatarUrl?: string;
  isFeatured: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Pendaftaran & Trial' | 'Program & Metode' | 'Biaya & Jadwal' | 'Fasilitas & Kehadiran';
  orderIndex: number;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  whatsappNumber: string;
  displayPhone: string;
  email: string;
  address: string;
  operatingHours: string;
  googleMapsEmbed: string;
  instagramUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
  announcementText: string;
  isAnnouncementActive: boolean;
}
