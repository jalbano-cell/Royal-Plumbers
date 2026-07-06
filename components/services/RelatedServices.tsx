import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services, type Service } from "@/lib/services";

export function RelatedServices({ current }: { current: Service }) {
  const related = services.filter((service) => service.slug !== current.slug).slice(0, 3);

  return (
    <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Also popular" title="Other services homeowners request" />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {related.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <service.icon className="size-5" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{service.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
