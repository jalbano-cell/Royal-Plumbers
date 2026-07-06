import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { FinalCta } from "@/components/home/FinalCta";
import { AssetImage } from "@/components/shared/AssetImage";
import { services } from "@/lib/services";
import { getServiceImage } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Plumbing Services in Toronto & the GTA",
  description:
    "Emergency plumbing, drain cleaning, water heaters, leak detection, and more — licensed plumbers serving Toronto and the GTA.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Every plumbing service, one licensed team"
            description="From urgent repairs to full installations, browse the complete range of residential and commercial plumbing services we provide across the GTA."
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const image = getServiceImage(service.slug);
              return (
                <RevealOnScroll key={service.slug} delay={(index % 3) * 0.05}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {image ? (
                      <AssetImage asset={image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                    ) : null}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between">
                        <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                          <service.icon className="size-5" />
                        </span>
                        <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                      </div>
                      <h2 className="mt-5 text-lg font-semibold text-foreground">{service.name}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.summary}
                      </p>
                    </div>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
