import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FinalCta } from "@/components/home/FinalCta";
import { faqs } from "@/lib/faqs";
import { pageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description: "Answers to common questions about booking, pricing, service areas, and our guarantee.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">FAQ</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Frequently asked questions
          </h1>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
