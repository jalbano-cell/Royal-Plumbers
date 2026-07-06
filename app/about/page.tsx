import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { StatsSection } from "@/components/about/StatsSection";
import { StorySection } from "@/components/about/StorySection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { FinalCta } from "@/components/home/FinalCta";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: `${siteConfig.yearsInBusiness}+ years of licensed, family-owned plumbing service across Toronto and the GTA.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-text">About us</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            A family-owned team the GTA has trusted for {siteConfig.yearsInBusiness}+ years
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We built Royal Plumbing on the belief that good plumbing work and good
            service shouldn&rsquo;t be separate things.
          </p>
        </Container>
      </section>

      <StatsSection />
      <StorySection />
      <ValuesSection />
      <FinalCta />
    </>
  );
}
