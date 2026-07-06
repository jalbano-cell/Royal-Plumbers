"use client";

import Link from "next/link";
import { Phone, MessageSquareText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FloatingActions() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center gap-3 px-4 sm:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform active:scale-95"
      >
        <Phone className="size-4" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-gold-foreground shadow-lg shadow-gold/25 transition-transform active:scale-95"
      >
        <MessageSquareText className="size-4" />
        Get a Quote
      </Link>
    </div>
  );
}
