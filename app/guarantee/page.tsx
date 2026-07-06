import type { Metadata } from "next";
import { BadgeCheck, ShieldCheck, Receipt, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { FinalCta } from "@/components/home/FinalCta";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Written satisfaction guarantee",
    description:
      "Every repair and installation comes with a written guarantee. If something isn't right, we return and make it right at no extra charge.",
  },
  {
    icon: ShieldCheck,
    title: "Fully licensed & insured",
    description:
      "Every plumber we send is licensed, insured, and background-checked before they're ever dispatched to a job.",
  },
  {
    icon: Receipt,
    title: "Upfront pricing, always",
    description:
      "You'll see and approve the price before any work begins. No surprise line items on the invoice, ever.",
  },
  {
    icon: Clock,
    title: "We show up when we say we will",
    description:
      "Free estimates with no trip fee, and real arrival windows — not a vague promise of 'sometime today.'",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Our Guarantee",
  description: "Royal Plumbing's written satisfaction guarantee, upfront pricing promise, and licensing commitment.",
  path: "/guarantee",
});

export default function GuaranteePage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-text">Guarantee</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Backed by a written guarantee, not just a promise
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {siteConfig.yearsInBusiness}+ years in the GTA has taught us that trust is
            earned job by job. Here&rsquo;s exactly what we stand behind.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <RevealOnScroll key={pillar.title} delay={(index % 2) * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <pillar.icon className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-foreground">{pillar.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
