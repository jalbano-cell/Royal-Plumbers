import { HeartHandshake, Receipt, ShieldCheck, Timer } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const values = [
  {
    icon: HeartHandshake,
    title: "Respect for your home",
    description: "Protected floors, tidy job sites, and technicians who clean up after themselves.",
  },
  {
    icon: Receipt,
    title: "Honesty on price",
    description: "You see the price before we start, and it doesn't change once the job is underway.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description: "Every plumber is licensed and insured, and every job is backed by our written guarantee.",
  },
  {
    icon: Timer,
    title: "Showing up",
    description: "When we say we'll be there, we're there — emergencies included.",
  },
];

export function ValuesSection() {
  return (
    <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="What we stand for" title="The standard behind every job" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <RevealOnScroll key={value.title} delay={(index % 4) * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
