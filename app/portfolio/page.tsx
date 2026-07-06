import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { BeforeAfterCard } from "@/components/gallery/BeforeAfterCard";
import { FinalCta } from "@/components/home/FinalCta";
import { projects } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Work",
  description: "Before-and-after plumbing project photos from real Royal Plumbing jobs across the GTA.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our work"
            title="Real jobs, real results"
            description="A look at the kind of work our licensed plumbers do every day — from full bathroom renovations to emergency repairs done right."
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <RevealOnScroll key={project.id} delay={(index % 2) * 0.08}>
                <BeforeAfterCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
