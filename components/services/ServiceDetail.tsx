import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import type { Service } from "@/lib/services";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <section className="py-16 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What to expect
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-text">
            Included with every visit
          </h3>
          <ul className="mt-4 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
