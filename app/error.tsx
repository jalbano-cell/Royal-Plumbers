"use client";

import { useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site-config";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-text">Error</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Sorry about that. You can try again, or call us directly if you need help
          right away.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="h-12 px-6 text-base" onClick={() => reset()}>
            Try Again
          </Button>
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
