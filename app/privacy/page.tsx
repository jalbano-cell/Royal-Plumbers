import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-text">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: 2026</p>

        <div className="prose-sm mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-base font-semibold text-foreground">Information we collect</h2>
            <p className="mt-2">
              When you contact us through our website, by phone, or by booking a
              service, we collect the information you provide — such as your name,
              phone number, email address, service address, and details about the
              work you need done.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">How we use your information</h2>
            <p className="mt-2">
              We use this information to respond to your request, schedule and
              perform service calls, send invoices, and follow up on completed work.
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Information sharing</h2>
            <p className="mt-2">
              We may share information with third parties who help us operate our
              business — such as scheduling, payment processing, or communication
              tools — solely for the purpose of providing our services to you.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Your choices</h2>
            <p className="mt-2">
              You can ask us to correct or delete your personal information at any
              time by contacting us using the details on our{" "}
              <a href="/contact" className="text-primary underline underline-offset-4">
                Contact page
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Contact us</h2>
            <p className="mt-2">
              Questions about this policy can be directed to us at{" "}
              <a href={siteConfig.phoneHref} className="text-primary underline underline-offset-4">
                {siteConfig.phone}
              </a>{" "}
              or {siteConfig.address.street}, {siteConfig.address.city}{" "}
              {siteConfig.address.region} {siteConfig.address.postalCode}.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
