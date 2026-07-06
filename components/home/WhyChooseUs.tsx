import {
  Clock,
  ShieldCheck,
  Receipt,
  BadgeCheck,
  Zap,
  Home,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Dispatched from multiple GTA locations, day or night, holidays included.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed Plumbers",
    description: "Every technician is fully licensed, insured, and background-checked.",
  },
  {
    icon: Receipt,
    title: "Upfront Pricing",
    description: "You approve the price before we start — no surprises on the invoice.",
  },
  {
    icon: BadgeCheck,
    title: "Written Guarantee",
    description: "Every repair is backed by a written satisfaction guarantee.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Local dispatch means a plumber is usually closer than you'd expect.",
  },
  {
    icon: Home,
    title: "Family Owned",
    description: "Built in the GTA, run by people who answer for their own work.",
  },
  {
    icon: Sparkles,
    title: "Clean Workmanship",
    description: "Protected floors, tidy job sites, and respect for your home.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Royal"
          title="The difference is in how the job gets done"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <RevealOnScroll key={reason.title} delay={(index % 4) * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <reason.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
