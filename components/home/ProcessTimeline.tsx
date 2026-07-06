import { Phone, Search, FileText, Wrench, ThumbsUp } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const steps = [
  { icon: Phone, title: "Call", description: "Reach a real person, any hour, any day." },
  { icon: Search, title: "Diagnosis", description: "We find the actual cause, not just the symptom." },
  { icon: FileText, title: "Upfront Quote", description: "A clear price before any work begins." },
  { icon: Wrench, title: "Professional Repair", description: "Done right, cleanly, on the first visit." },
  { icon: ThumbsUp, title: "Guaranteed Satisfaction", description: "Backed by our written workmanship guarantee." },
];

export function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From first call to finished job"
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <div
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block"
          />
          {steps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 0.08} className="relative text-center lg:text-left">
              <div className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border border-border bg-card text-primary lg:mx-0">
                <step.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {index + 1}. {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
