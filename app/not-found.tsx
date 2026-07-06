import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-text">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          The page you&rsquo;re looking for may have moved. Try heading back home, or
          reach out if you need a hand.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="h-12 px-6 text-base" nativeButton={false} render={<Link href="/">Back to Home</Link>} />
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-6 text-base"
            nativeButton={false}
            render={
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" />
                {siteConfig.phone}
              </a>
            }
          />
        </div>
      </Container>
    </section>
  );
}
