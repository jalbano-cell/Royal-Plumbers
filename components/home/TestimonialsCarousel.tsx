import { Quote } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/testimonials";

export function TestimonialsCarousel() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Reviews"
            title="What GTA homeowners tell us"
          />
        </div>

        <Carousel className="mt-12" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="sm:basis-1/2 lg:basis-1/3">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-center gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
}
