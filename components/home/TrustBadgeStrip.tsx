import { ShieldCheck, Clock, BadgeCheck, MapPinned } from "lucide-react";
import { Container } from "@/components/shared/Container";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Clock, label: "24/7 Emergency Response" },
  { icon: BadgeCheck, label: "Written Satisfaction Guarantee" },
  { icon: MapPinned, label: "Multiple GTA Dispatch Locations" },
];

export function TrustBadgeStrip() {
  return (
    <div className="border-b border-border bg-secondary/40">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6 sm:justify-between">
        {badges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
            <badge.icon className="size-4 text-primary" />
            {badge.label}
          </div>
        ))}
      </Container>
    </div>
  );
}
