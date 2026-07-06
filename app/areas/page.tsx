import Link from "next/link";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FinalCta } from "@/components/home/FinalCta";
import { regions, allAreaSlugs } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas | Toronto & the GTA",
  description: `Royal Plumbing serves ${allAreaSlugs.length}+ communities across Toronto, Peel, York, Halton, and Durham regions.`,
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where we work"
            title="Proudly serving Toronto and the entire GTA"
            description="Our plumbers are based across the region, so we can dispatch the nearest available team — usually faster than you'd expect."
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="space-y-14">
          {regions.map((region) => {
            const id = region.name.toLowerCase().replace(/\s+/g, "-");
            const cities = allAreaSlugs.filter((area) => area.region === region.name);

            return (
              <div key={region.name} id={id} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {region.name}
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cities.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <MapPin className="size-3.5 text-primary" />
                      {area.city}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
