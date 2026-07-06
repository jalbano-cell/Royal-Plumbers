"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { siteConfig } from "@/lib/site-config";

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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-xl shadow-primary/5 backdrop-blur">
            <p className="text-sm font-medium text-muted-foreground">Why GTA homeowners call us first</p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-semibold text-primary">
                  <AnimatedCounter value={siteConfig.yearsInBusiness} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Years in the GTA</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-primary">
                  <AnimatedCounter value={25} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Communities served</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-primary">24/7</p>
                <p className="mt-1 text-sm text-muted-foreground">Emergency dispatch</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-primary">$0</p>
                <p className="mt-1 text-sm text-muted-foreground">Trip fee for estimates</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
