import { Container } from "@/components/shared/Container";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { allAreaSlugs, siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

const stats = [
  { value: siteConfig.yearsInBusiness, suffix: "+", label: "Years in business" },
  { value: allAreaSlugs.length, suffix: "+", label: "GTA communities served" },
  { value: services.length, suffix: "", label: "Services offered" },
  { value: 24, suffix: "/7", label: "Emergency availability" },
];

export function StatsSection() {
  return (
    <section className="py-16">
      <Container className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
