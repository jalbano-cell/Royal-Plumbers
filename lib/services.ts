import {
  Siren,
  Waves,
  Construction,
  Flame,
  Droplets,
  Wrench,
  ShieldCheck,
  Bath,
  ChefHat,
  Building2,
  Gauge,
  Thermometer,
  Snowflake,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  features: string[];
  featuredOnHome: boolean;
};

export const services: Service[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    icon: Siren,
    summary: "A burst pipe or overflowing toilet doesn't wait for business hours — neither do we.",
    description:
      "Water damage compounds by the minute. Our on-call plumbers are dispatched from locations across the GTA, so when you call, help is already close by. We arrive equipped to diagnose and stop the problem on the first visit, day or night, weekday or holiday.",
    features: [
      "24/7 live dispatch, every day of the year",
      "Multiple GTA locations for faster arrival",
      "Fully stocked trucks for first-visit repairs",
      "Upfront pricing before any work begins",
    ],
    featuredOnHome: true,
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    icon: Waves,
    summary: "Slow or blocked drains, cleared for good — not just pushed further down the line.",
    description:
      "From a single sluggish sink to a fully blocked main line, we use camera inspection and professional-grade rooter equipment to find the actual cause of a clog and clear it completely, rather than offering a temporary fix.",
    features: [
      "Camera inspection to confirm the root cause",
      "Rooter and hydro-jetting equipment on every truck",
      "Kitchen, bathroom, and main line drains",
      "Recommendations to prevent repeat blockages",
    ],
    featuredOnHome: true,
  },
  {
    slug: "sewer-repair",
    name: "Sewer Repair",
    icon: Construction,
    summary: "Sewer line issues diagnosed with cameras first, so you only pay for the fix you need.",
    description:
      "Tree roots, aging clay pipe, and shifting soil are the most common causes of sewer line failure in older GTA homes. We locate the exact issue with video inspection before recommending a repair, and offer trenchless options where the site allows it.",
    features: [
      "Video camera line inspection and locating",
      "Trenchless repair options where possible",
      "Full replacement for severely damaged lines",
      "Clear, itemized quotes before digging starts",
    ],
    featuredOnHome: true,
  },
  {
    slug: "water-heaters",
    name: "Water Heater Repair & Install",
    icon: Flame,
    summary: "Tank and tankless water heaters — repaired fast, or replaced with the right fit.",
    description:
      "No hot water is a same-day priority for us. We repair most major tank brands on the spot, and if replacement makes more sense, we'll walk you through tank versus tankless options sized correctly for your household or building.",
    features: [
      "Same-day repair for most major brands",
      "Tank and tankless installation",
      "Sizing guidance based on real usage",
      "Manufacturer warranty-registered installs",
    ],
    featuredOnHome: true,
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    icon: Droplets,
    summary: "Hidden leaks found without tearing open walls or floors to look for them.",
    description:
      "A rising water bill or a damp patch on the ceiling is often the only sign of a leak hiding behind a wall or under a slab. We use acoustic and moisture-detection equipment to pinpoint the source precisely, minimizing the repair footprint.",
    features: [
      "Acoustic and thermal leak detection tools",
      "Precise location before any wall is opened",
      "Slab leak and hidden pipe specialists",
      "Documentation for insurance claims",
    ],
    featuredOnHome: true,
  },
  {
    slug: "pipe-repair",
    name: "Pipe Repair & Repiping",
    icon: Wrench,
    summary: "From a single leaking joint to a full home repipe, done with minimal disruption.",
    description:
      "Older copper and galvanized piping eventually corrodes or fails at the joints. We repair isolated leaks quickly, and for homes ready for a full upgrade, we plan repiping projects to keep disruption and downtime to a minimum.",
    features: [
      "Copper, PEX, and galvanized pipe experience",
      "Spot repairs and full-home repiping",
      "Work scheduled around your household",
      "Clean job sites, protected floors and walls",
    ],
    featuredOnHome: true,
  },
  {
    slug: "waterproofing-wet-basement",
    name: "Wet Basement & Waterproofing",
    icon: ShieldCheck,
    summary: "Basement flooding solved at the source, with rebate-eligible protection options.",
    description:
      "Recurring basement flooding is usually a sign the sump system, weeping tile, or backwater valve needs attention. We assess the whole system, not just the symptom, and can advise on City flooding-protection subsidy programs where eligible.",
    features: [
      "Sump pump install, repair, and battery backup",
      "Backwater valve installation",
      "Weeping tile assessment and repair",
      "Guidance on flooding protection rebates",
    ],
    featuredOnHome: true,
  },
  {
    slug: "bathroom-plumbing",
    name: "Bathroom Plumbing",
    icon: Bath,
    summary: "Toilets, tubs, showers, and vanities — installed and repaired to last.",
    description:
      "Whether it's a running toilet, a shower valve that won't hold temperature, or a full bathroom renovation, we handle fixture-level repairs and full rough-in plumbing for remodels with the same attention to detail.",
    features: [
      "Toilet, tub, and shower repair and install",
      "Renovation rough-in and fixture set",
      "Leak-free valve and faucet replacement",
      "Accessibility and low-flow fixture options",
    ],
    featuredOnHome: true,
  },
  {
    slug: "kitchen-plumbing",
    name: "Kitchen Plumbing",
    icon: ChefHat,
    summary: "Sinks, disposals, and dishwasher lines — installed right the first time.",
    description:
      "Kitchen plumbing sees more daily use than any other system in the house. We install and repair sinks, faucets, garbage disposals, and dishwasher and fridge water lines with fittings built to handle the load.",
    features: [
      "Sink and faucet installation and repair",
      "Garbage disposal install and troubleshooting",
      "Dishwasher and fridge water line hookups",
      "Renovation and new-build kitchen rough-in",
    ],
    featuredOnHome: true,
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing",
    icon: Building2,
    summary: "Minimal-downtime plumbing and boiler service for GTA businesses and properties.",
    description:
      "Commercial properties can't afford extended downtime. We work with property managers and business owners on planned maintenance, emergency response, and boiler service, scheduled to minimize disruption to tenants and operations.",
    features: [
      "Property management and multi-unit experience",
      "Commercial boiler service and repair",
      "Scheduled maintenance programs",
      "Priority emergency response for businesses",
    ],
    featuredOnHome: true,
  },
  {
    slug: "gas-fitting",
    name: "Gas Fitting",
    icon: Gauge,
    summary: "Licensed gas line installation and repair for appliances, BBQ lines, and more.",
    description:
      "Gas work requires licensing and precision. Our licensed gas fitters install and service lines for stoves, dryers, BBQ hookups, and fireplaces, with every job completed to code and properly documented.",
    features: [
      "Licensed gas fitters on every job",
      "Appliance, BBQ, and fireplace line installation",
      "Gas leak inspection and repair",
      "Code-compliant documentation on completion",
    ],
    featuredOnHome: false,
  },
  {
    slug: "heating",
    name: "Heating",
    icon: Thermometer,
    summary: "Furnace and boiler repair, maintenance, and installation for GTA winters.",
    description:
      "A heating failure in a Toronto winter is an emergency. We service and install furnaces and boilers, and offer seasonal maintenance plans designed to catch small issues before they become a cold house at 2am.",
    features: [
      "Furnace and boiler repair and install",
      "Seasonal maintenance plans",
      "Same-day emergency heating response",
      "Straightforward, upfront system quotes",
    ],
    featuredOnHome: false,
  },
  {
    slug: "air-conditioning",
    name: "Air Conditioning",
    icon: Snowflake,
    summary: "Cooling system repair, maintenance, and installation, done by the same trusted team.",
    description:
      "We service central air systems end to end — from a unit that's stopped cooling to a full system replacement — with the same upfront pricing and licensed technicians you'd expect from our plumbing and heating work.",
    features: [
      "Central AC repair and diagnostics",
      "Full system installation and replacement",
      "Seasonal tune-ups to protect efficiency",
      "One team for heating and cooling",
    ],
    featuredOnHome: false,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const featuredServices = services.filter((service) => service.featuredOnHome);
