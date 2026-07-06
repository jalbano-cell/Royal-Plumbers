"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/guarantee", label: "Guarantee" },
  { href: "/faq", label: "FAQ" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" />}>
        <Menu className="size-5" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4">
          <button
            type="button"
            onClick={() => setServicesOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-base font-medium text-foreground hover:bg-accent"
            aria-expanded={servicesOpen}
          >
            Services
            <ChevronDown
              className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {servicesOpen ? (
            <div className="flex flex-col gap-0.5 pb-2 pl-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-primary hover:bg-accent"
              >
                View all services →
              </Link>
            </div>
          ) : null}

          <Separator className="my-2" />

          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-foreground hover:bg-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <SheetFooter>
          <Button
            variant="outline"
            className="w-full"
            render={
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" />
                {siteConfig.phone}
              </a>
            }
          />
          <Button
            className="w-full"
            render={
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book Service
              </Link>
            }
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
