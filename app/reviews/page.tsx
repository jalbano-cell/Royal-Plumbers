import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { FinalCta } from "@/components/home/FinalCta";
import { testimonials } from "@/lib/testimonials";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Customer Reviews",
  description: "Real feedback from GTA homeowners and businesses who've worked with Royal Plumbing.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-text">Reviews</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            What GTA homeowners say about us
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We&rsquo;d rather let the people we&rsquo;ve worked with do the talking.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <RevealOnScroll key={testimonial.name} delay={(index % 3) * 0.05}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <Quote className="size-6 text-gold" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold text-foreground">{testimonial.name}</span>
                    {testimonial.location ? (
                      <span className="text-muted-foreground"> · {testimonial.location}</span>
                    ) : null}
                    {testimonial.service ? (
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {testimonial.service}
                      </span>
                    ) : null}
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
