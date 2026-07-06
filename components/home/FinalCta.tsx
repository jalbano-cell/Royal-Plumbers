import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { AssetImage } from "@/components/shared/AssetImage";
import { siteConfig } from "@/lib/site-config";
import { ctaImage } from "@/lib/images";

const content = (
  <>
    <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
      Plumbing problem? Let&rsquo;s fix it properly.
    </h2>
    <p className="max-w-xl text-lg text-primary-foreground/80">
      Call now for 24/7 emergency service, or book a visit online in under a minute.
    </p>
    <div className="mt-2 flex flex-wrap items-center gap-3">
      <Button
        size="lg"
        className="h-12 bg-gold px-6 text-base text-gold-foreground hover:bg-gold/90"
        nativeButton={false}
        render={<Link href="/contact">Book Service Online</Link>}
      />
      <Button
        size="lg"
        variant="outline"
        className="h-12 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10"
        nativeButton={false}
        render={
          <a href={siteConfig.phoneHref}>
            <Phone className="size-4" />
            {siteConfig.phone}
          </a>
        }
      />
    </div>
  </>
);

/**
 * Sitewide closing CTA. Pass `showImage` on the single highest-impact
 * instance (home page) to include the CTA photo — repeating the same
 * placeholder tile on every page that reuses this component would read as
 * template stamping rather than premium, so it's opt-in.
 */
export function FinalCta({ showImage = false }: { showImage?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 90% 0%, color-mix(in oklch, var(--gold), transparent 80%), transparent)",
        }}
      />
      <Container className="relative">
        {showImage ? (
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* FINAL ASSET: cta-technician-customer.jpg — technician and
                satisfied homeowner shaking hands in front of a home. Drop into
                /public/images/gallery/cta-technician-customer.jpg and set
                status: "final" in lib/images.ts — no code changes needed. */}
            <AssetImage
              asset={ctaImage}
              className="rounded-3xl border border-primary-foreground/10"
            />
            <div className="flex flex-col items-start gap-6 text-left">{content}</div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 text-center">{content}</div>
        )}
      </Container>
    </section>
  );
}
