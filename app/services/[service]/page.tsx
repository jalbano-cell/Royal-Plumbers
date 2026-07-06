import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/lib/services";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { RelatedServices } from "@/components/services/RelatedServices";
import { FinalCta } from "@/components/home/FinalCta";

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: `${service.name} in Toronto & the GTA`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: service.name,
              description: service.description,
              path: `/services/${service.slug}`,
            }),
          ),
        }}
      />
      <ServiceHero service={service} />
      <ServiceDetail service={service} />
      <RelatedServices current={service} />
      <FinalCta />
    </>
  );
}
