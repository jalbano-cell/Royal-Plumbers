import { Hero } from "@/components/home/Hero";
import { TrustBadgeStrip } from "@/components/home/TrustBadgeStrip";
import { SocialProof } from "@/components/home/SocialProof";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadgeStrip />
      <SocialProof />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessTimeline />
      <TestimonialsCarousel />
      <ServiceAreasSection />
      <FaqAccordion />
      <FinalCta />
    </>
  );
}
