import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import FacilitiesTeaser from "@/components/home/FacilitiesTeaser";
import TestimonialSection from "@/components/home/TestimonialSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Why Choose Wissen-Kids */}
      <WhyUsSection />

      {/* 3. Facilities & Atmosphere Teaser */}
      <FacilitiesTeaser />

      {/* 4. Parent Testimonials */}
      <TestimonialSection />

      {/* 5. FAQ Accordion */}
      <FaqSection />

      {/* 6. High Converting CTA Banner */}
      <CtaBanner />
    </div>
  );
}
