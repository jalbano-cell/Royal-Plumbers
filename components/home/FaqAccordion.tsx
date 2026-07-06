import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { homeFaqs } from "@/lib/faqs";

export function FaqAccordion() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions, answered plainly"
          align="center"
          className="mx-auto"
        />

        <Accordion className="mt-10 w-full">
          {homeFaqs.map((faq, index) => (
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

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Have another question?{" "}
          <Link href="/faq" className="font-medium text-primary hover:underline">
            See the full FAQ
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-medium text-primary hover:underline">
            contact us directly
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
