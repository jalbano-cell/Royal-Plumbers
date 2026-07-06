import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms of service for booking and using ${siteConfig.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-text">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: 2026</p>

        <div className="prose-sm mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-base font-semibold text-foreground">Estimates &amp; pricing</h2>
            <p className="mt-2">
              Estimates are provided free of charge and with no trip fee. Final
              pricing is confirmed and approved by you before any work begins.
              Additional work discovered once a job is underway will always be
              quoted and approved separately before proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Our guarantee</h2>
            <p className="mt-2">
              Workmanship is covered by our written satisfaction guarantee as
              described on our{" "}
              <a href="/guarantee" className="text-primary underline underline-offset-4">
                Guarantee page
              </a>
              . Manufacturer parts and equipment are covered under the applicable
              manufacturer warranty.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Scheduling &amp; cancellations</h2>
            <p className="mt-2">
              We ask for as much notice as possible if you need to reschedule or
              cancel a booked appointment, so we can offer that time to another
              customer.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Payment</h2>
            <p className="mt-2">
              Payment is due on completion of work unless otherwise agreed in
              writing. We accept major credit cards, e-transfer, and cheque.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Website use</h2>
            <p className="mt-2">
              This website is provided for informational purposes about our
              services. Content is updated periodically and may not reflect
              real-time pricing or availability — please contact us directly to
              confirm current details.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Contact us</h2>
            <p className="mt-2">
              Questions about these terms can be directed to us at{" "}
              <a href={siteConfig.phoneHref} className="text-primary underline underline-offset-4">
                {siteConfig.phone}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
