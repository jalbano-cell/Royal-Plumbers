"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { cn } from "@/lib/utils";
import { regions, allAreaSlugs } from "@/lib/site-config";

export function ServiceAreasSection() {
  const [activeRegion, setActiveRegion] = useState<(typeof regions)[number]["name"]>(
    regions[0].name,
  );
  const cities = allAreaSlugs.filter((area) => area.region === activeRegion);

  return (
    <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Where we work"
            title="Serving Toronto and every corner of the GTA"
            description="Our plumbers are based across the region, so we can dispatch the nearest available team to your door."
          />
          <Link href="/areas" className="text-sm font-semibold text-primary hover:underline">
            View full coverage map →
          </Link>
        </div>

        <RevealOnScroll className="mt-10 flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region.name}
              type="button"
              onClick={() => setActiveRegion(region.name)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeRegion === region.name
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {region.name}
            </button>
          ))}
        </RevealOnScroll>

        <div className="mt-8 flex flex-wrap gap-2">
          {cities.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {area.city}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
