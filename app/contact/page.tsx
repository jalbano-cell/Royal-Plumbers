import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Book Service",
  description: "Book a plumbing service online or contact Royal Plumbing for a free estimate.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-text">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Book service or ask a question
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Fill out the form and we&rsquo;ll get back to you shortly, or call us
            directly for anything urgent.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </section>
  );
}
