"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardBackground } from "@/components/ui/card";

type Testimonial = {
  quote: string;
  image: string;
  name: string;
  role: string;
  company?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Awalnya Rafa susah banget disuruh duduk belajar baca di rumah. Setelah 2 bulan gabung di Wissen Kids Center, sekarang tiap nemu plang toko atau buku cerita dia langsung eja sendiri dengan antusias. Gurunya sabar dan telaten banget!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    name: "Ibu Amanda Putri",
    role: "Ortu dari Rafa (5 thn)",
    company: "Baca Tulis & Hitung",
  },
  {
    quote:
      "Nilai matematika Kirana naik drastis dari 65 jadi 95 di ujian semester kemarin. Program sempoa di Wissen Kids Center beneran bikin anak saya jadi cepet dan teliti ngitung tanpa ketergantungan kalkulator.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    name: "Bapak Hendra Kusuma",
    role: "Ortu dari Kirana (Kelas 5 SD)",
    company: "Sempoa & Bimbel SD",
  },
  {
    quote:
      "Kelas Simulation & Activity penyelamat banget untuk anak toddler saya. Sensori motoriknya terlatih, nggak gampang tantrum, dan sekarang gampang berbaur sama teman-teman baru. Ruangannya juga bersih dan aman banget.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    name: "Ibu dr. Nadia Faradiba",
    role: "Ortu dari Kenzie (3 thn)",
    company: "Simulation & Activity",
  },
  {
    quote:
      "Tutor SMP di Wissen Kids Center sangat komunikatif, cara ngajarin rumus fisika dan aljabar pakai logika sederhana bukan hafalan buta. Aldo yang tadinya malas belajar sekarang jadi proaktif ngerjain PR.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    name: "Ibu Siska Wulandari",
    role: "Ortu dari Aldo (Kelas 8 SMP)",
    company: "Bimbel SMP & English",
  },
  {
    quote:
      "Kosakata bahasa Inggris Alvaro bertambah pesat. Dia sekarang percaya diri menyapa dengan full English saat ketemu turis. Metode belajarnya santai tapi ilmunya nancep!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    name: "Bapak Denny Pratama",
    role: "Ortu dari Alvaro (6 thn)",
    company: "English for Kids",
  },
  {
    quote:
      "Kreativitas Naura terlatih luar biasa di kelas Art & Craft. Tiap pulang selalu bawa karya lukisan atau origami buatan sendiri dengan bangga. Daya fokusnya jadi jauh lebih lama.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    name: "Ibu Maya Kartika",
    role: "Ortu dari Naura (4 thn)",
    company: "Art & Craft Kids",
  },
  {
    quote:
      "Alhamdulillah tajwid dan makhraj huruf Fathan makin rapi. Ustadzah di Wissen Kids membimbing dengan lemah lembut sehingga anak tidak takut salah saat belajar tilawah.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    name: "Bapak Faisal Anwar",
    role: "Ortu dari Fathan (7 thn)",
    company: "Tahsin & Mengaji",
  },
  {
    quote:
      "Ranking Zahra naik ke 3 besar di kelasnya! Pembahasan kisi-kisi ulangan dan PR di Wissen Kids sangat terarah, tutornya selalu sigap membantu konsep yang belum paham.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200",
    name: "Ibu Rina Oktaviani",
    role: "Ortu dari Zahra (Kelas 3 SD)",
    company: "Bimbel Tematik SD",
  },
  {
    quote:
      "Daffa belajar sempoa jari dengan sangat antusias. Berhitung cepat tanpa jarum jam sekarang jadi kebiasaan seru buat dia. Recomended banget untuk melatih otak kiri dan kanan!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    name: "Bapak Wahyu Hidayat",
    role: "Ortu dari Daffa (5 thn)",
    company: "Sempoa Cilik",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="relative py-14 sm:py-20 bg-transparent">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-4">
          <div className="flex justify-center">
            <div className="rounded-lg border border-slate-200/80 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-xs">
              Testimonials
            </div>
          </div>

          <h2 className="font-black text-3xl tracking-tighter lg:text-4xl text-black text-center">
            Apa Kata Orang Tua Murid
          </h2>
          <p className="text-center text-black font-bold text-sm">
            Simak ulasan nyata Ayah & Bunda tentang pengalaman belajar anak di Wissen Kids Center.
          </p>
        </div>

        <div
          className={cn(
            "mt-8 sm:mt-10 flex max-h-[480px] sm:max-h-[560px] lg:max-h-[640px] justify-center gap-4 sm:gap-6 overflow-hidden",
            "mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
            "[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
            "[-webkit-mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
          )}
        >
          <InfiniteSlider direction="vertical" speed={30} speedOnHover={15}>
            {firstColumn.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </InfiniteSlider>
          <InfiniteSlider
            className="hidden md:block"
            direction="vertical"
            speed={50}
            speedOnHover={25}
          >
            {secondColumn.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </InfiniteSlider>
          <InfiniteSlider
            className="hidden lg:block"
            direction="vertical"
            speed={35}
            speedOnHover={17}
          >
            {thirdColumn.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}

function TestimonialsCard({
  testimonial,
  className,
  ...props
}: React.ComponentProps<"figure"> & {
  testimonial: Testimonial;
}) {
  const { quote, image, name, role, company } = testimonial;
  return (
    <figure
      className={cn(
        "w-full max-w-xs rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-slate-900/10 shadow-lg dark:bg-card/20 relative overflow-hidden flex flex-col justify-between",
        className
      )}
      {...props}
    >
      <CardBackground rows={10} cols={8} tileSize="md" />
      <div className="relative z-10 flex flex-col justify-between h-full">
        <blockquote className="text-black font-semibold text-sm leading-relaxed">{quote}</blockquote>
        <figcaption className="mt-5 flex items-center gap-2">
          <Avatar className="size-8 rounded-full">
            <AvatarImage alt={`${name}'s profile picture`} src={image} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <cite className="font-black not-italic leading-5 tracking-tight text-black text-sm">
              {name}
            </cite>
            <span className="text-black font-bold text-xs leading-5 tracking-tight">
              {role} {company && `, ${company}`}
            </span>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default TestimonialsSection;
