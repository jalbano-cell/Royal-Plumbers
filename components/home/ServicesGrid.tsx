import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { featuredServices } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Every plumbing need, one trusted team"
          description="From a leaking faucet to a full commercial retrofit, our licensed plumbers cover the complete range of residential and commercial plumbing work across the GTA."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <RevealOnScroll key={service.slug} delay={(index % 3) * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <service.icon className="size-5" />
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
