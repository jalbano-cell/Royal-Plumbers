import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/layout/Logo";
import { services } from "@/lib/services";
import { regions, siteConfig } from "@/lib/site-config";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/guarantee", label: "Our Guarantee" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <Container className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-primary">
              <Phone className="size-4 text-primary" />
              {siteConfig.phone}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {siteConfig.address.street}, {siteConfig.address.city}{" "}
              {siteConfig.address.region} {siteConfig.address.postalCode}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              24/7 Emergency Service
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 7).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm font-medium text-primary">
                View all →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Service Areas</h3>
          <ul className="mt-4 space-y-2.5">
            {regions.map((region) => (
              <li key={region.name}>
                <Link
                  href={`/areas#${region.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {region.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
