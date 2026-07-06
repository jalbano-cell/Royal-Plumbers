import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Phone, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { FinalCta } from "@/components/home/FinalCta";
import { allAreaSlugs, siteConfig } from "@/lib/site-config";
import { getAreaBySlug } from "@/lib/areas";
import { featuredServices } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return allAreaSlugs.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return pageMetadata({
    title: `Plumber in ${area.city} | ${area.region}`,
    description: `Licensed, insured plumbers serving ${area.city} and the surrounding ${area.region} — 24/7 emergency response and upfront pricing.`,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const nearby = allAreaSlugs
    .filter((a) => a.region === area.region && a.slug !== area.slug)
    .slice(0, 6);

  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/areas" className="hover:text-primary">Service Areas</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{area.city}</span>
          </nav>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                {area.region}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Plumbers serving {area.city}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Royal Plumbing dispatches licensed, insured plumbers to {area.city} for
                everything from emergency repairs to full installations — with upfront
                pricing and a written satisfaction guarantee on every job.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="h-12 px-6 text-base"
                nativeButton={false}
                render={<Link href="/contact">Book Service in {area.city}</Link>}
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

      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Popular services in {area.city}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <service.icon className="size-4 text-primary" />
                  {service.name}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>
            ))}
          </div>

          {nearby.length > 0 ? (
            <div className="mt-16 border-t border-border pt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Also serving nearby in {area.region}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearby.map((nearbyArea) => (
                  <Link
                    key={nearbyArea.slug}
                    href={`/areas/${nearbyArea.slug}`}
                    className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {nearbyArea.city}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
