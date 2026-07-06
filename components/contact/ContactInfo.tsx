import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { AssetImage } from "@/components/shared/AssetImage";
import { siteConfig } from "@/lib/site-config";
import { contactImage } from "@/lib/images";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* FINAL ASSET: contact-office.jpg — dispatcher answering the phone at
          a bright office desk. Drop into /public/images/gallery/contact-office.jpg
          and set status: "final" in lib/images.ts — no code changes needed. */}
      <AssetImage asset={contactImage} className="rounded-2xl border border-border" />

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-text">Get in touch</h3>
        <div className="mt-4 space-y-4 text-sm">
          <a href={siteConfig.phoneHref} className="flex items-center gap-3 text-foreground hover:text-primary">
            <Phone className="size-4 text-primary" />
            {siteConfig.phone}
          </a>
          <p className="flex items-start gap-3 text-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            {siteConfig.address.street}, {siteConfig.address.city}{" "}
            {siteConfig.address.region} {siteConfig.address.postalCode}
          </p>
          <p className="flex items-center gap-3 text-foreground">
            <Clock className="size-4 text-primary" />
            Available 24/7, including holidays
          </p>
          <p className="flex items-center gap-3 text-foreground">
            <ShieldCheck className="size-4 text-primary" />
            Licensed &amp; insured
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border">
        <iframe
          title={`${siteConfig.name} location map`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
          )}&output=embed`}
          className="h-64 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
