import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site-config";
import type { Service } from "@/lib/services";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="size-3.5" />
          <Link href="/services" className="hover:text-primary">Services</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">{service.name}</span>
        </nav>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <service.icon className="size-6" />
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={<Link href="/contact">Book This Service</Link>}
            />
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
        </div>
      </Container>
    </section>
  );
}
