"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { siteConfig } from "@/lib/site-config";

export function HeroStatsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-xl shadow-primary/5 backdrop-blur">
        <p className="text-sm font-medium text-muted-foreground">Why GTA homeowners call us first</p>
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <p className="text-4xl font-semibold text-primary">
              <AnimatedCounter value={siteConfig.yearsInBusiness} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Years in the GTA</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-primary">
              <AnimatedCounter value={25} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Communities served</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-primary">24/7</p>
            <p className="mt-1 text-sm text-muted-foreground">Emergency dispatch</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-primary">$0</p>
            <p className="mt-1 text-sm text-muted-foreground">Trip fee for estimates</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
