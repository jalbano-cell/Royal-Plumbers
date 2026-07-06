import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { HeroStatsPanel } from "@/components/home/HeroStatsPanel";
import { AssetImage } from "@/components/shared/AssetImage";
import { siteConfig } from "@/lib/site-config";
import { heroImage } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 10%, color-mix(in oklch, var(--gold), transparent 85%), transparent), radial-gradient(70% 60% at 10% 0%, color-mix(in oklch, var(--primary), transparent 88%), transparent)",
        }}
      />

      <Container className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-text">
            Toronto &amp; the GTA · Since {siteConfig.foundedYear}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Plumbing done with the precision it deserves.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Royal Plumbing has kept GTA homes and businesses running for over{" "}
            {siteConfig.yearsInBusiness} years — licensed plumbers, upfront pricing,
            and a team that shows up when they say they will.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={<Link href="/contact">Book Service Online</Link>}
            />
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              }
            />
          </div>
        </div>

        <HeroStatsPanel />
      </Container>

      <Container className="pb-20 lg:pb-28">
        {/* FINAL ASSET: hero-plumber-working.jpg — licensed plumber repairing a
            kitchen sink in a modern luxury home, interacting with the homeowner,
            bright natural light. Drop the real photo into
            /public/images/hero/hero-plumber-working.jpg and set status: "final"
            in lib/images.ts — no code changes needed. */}
        <AssetImage
          asset={heroImage}
          priority
          className="rounded-3xl border border-border shadow-xl shadow-primary/10"
        />
      </Container>
    </section>
  );
}
