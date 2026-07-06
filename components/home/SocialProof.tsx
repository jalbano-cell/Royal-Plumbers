import Link from "next/link";
import { Star } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { allAreaSlugs, siteConfig } from "@/lib/site-config";

const stats = [
  { value: siteConfig.yearsInBusiness, suffix: "+", label: "Years serving the GTA" },
  { value: allAreaSlugs.length, suffix: "+", label: "Communities covered" },
  { value: 24, suffix: "/7", label: "Emergency availability" },
];

export function SocialProof() {
  return (
    <section className="py-20">
      <Container>
        <RevealOnScroll className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/reviews"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 transition-colors hover:border-primary/40"
          >
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              Read real reviews from GTA homeowners →
            </span>
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
