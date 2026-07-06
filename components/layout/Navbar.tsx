"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/guarantee", label: "Guarantee" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-4 py-3">
        <Logo />

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[560px] grid-cols-2 gap-1 p-2">
                  {services.map((service) => (
                    <NavigationMenuLink
                      key={service.slug}
                      closeOnClick
                      render={<Link href={`/services/${service.slug}`} />}
                      className="flex items-start gap-3 rounded-lg p-3 hover:bg-accent"
                    >
                      <service.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>
                        <span className="block text-sm font-medium text-foreground">
                          {service.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground line-clamp-1">
                          {service.summary}
                        </span>
                      </span>
                    </NavigationMenuLink>
                  ))}
                </div>
                <div className="border-t border-border p-2">
                  <NavigationMenuLink
                    closeOnClick
                    render={<Link href="/services" />}
                    className="block rounded-lg p-3 text-sm font-medium text-primary hover:bg-accent"
                  >
                    View all services →
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {primaryLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  render={<Link href={link.href} />}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" />
                {siteConfig.phone}
              </a>
            }
          />
          <Button
            nativeButton={false}
            render={<Link href="/contact">Book Service</Link>}
          />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
