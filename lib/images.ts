import {
  Droplet,
  User,
  Truck,
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
  Phone,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { testimonials } from "./testimonials";

export type AspectRatio = "16:9" | "4:5" | "1:1" | "3:2";

export type ImageAsset = {
  /** Unique key used to look up this asset from a component. */
  id: string;
  /** Site section this image belongs to (matches IMAGE_ASSETS.md). */
  section: string;
  /** Why this image exists on the page. */
  purpose: string;
  /** What the final photo should depict. */
  subject: string;
  aspectRatio: AspectRatio;
  /** Recommended pixel resolution for the final asset at this aspect ratio. */
  recommendedResolution: string;
  /** Folder under /public/images/. */
  folder:
    | "hero"
    | "about"
    | "services"
    | "projects"
    | "team"
    | "testimonials"
    | "gallery";
  /** Final filename the client's photo should be saved as — drop-in replacement, zero code changes. */
  filename: string;
  /** Real, meaningful alt text for the final photo (used even while a placeholder renders). */
  alt: string;
  /** Whether a final photo has been placed in /public/images/<folder>/<filename> yet. */
  status: "placeholder" | "final";
  /** Icon shown in the placeholder graphic — chosen to match the subject, not generic. */
  icon: LucideIcon;
  /** Placeholder gradient tone. */
  tone: "primary" | "gold" | "muted";
};

function path(asset: Pick<ImageAsset, "folder" | "filename">) {
  return `/images/${asset.folder}/${asset.filename}`;
}

export const heroImage: ImageAsset = {
  id: "hero-plumber-working",
  section: "Hero",
  purpose: "Primary hero visual establishing trust and professionalism above the fold.",
  subject:
    "Licensed plumber repairing a kitchen sink inside a modern luxury home while interacting with the homeowner, bright natural lighting.",
  aspectRatio: "16:9",
  recommendedResolution: "1920x1080",
  folder: "hero",
  filename: "hero-plumber-working.jpg",
  alt: "Licensed Royal Plumbing technician repairing a kitchen sink while talking with the homeowner.",
  status: "placeholder",
  icon: Droplet,
  tone: "primary",
};

export const aboutImages: ImageAsset[] = [
  {
    id: "team-owner",
    section: "About",
    purpose: "Introduces the company owner to build personal trust.",
    subject: "Company owner in branded uniform, confident and approachable, standing by the service van.",
    aspectRatio: "4:5",
    recommendedResolution: "1200x1500",
    folder: "team",
    filename: "team-owner.jpg",
    alt: "Royal Plumbing owner standing in front of a branded company service van.",
    status: "placeholder",
    icon: User,
    tone: "primary",
  },
  {
    id: "team-technician-01",
    section: "About",
    purpose: "Shows the team's licensed technicians as real, identifiable people.",
    subject: "Plumbing technician portrait in navy uniform with tool belt, friendly studio-lit headshot.",
    aspectRatio: "4:5",
    recommendedResolution: "1200x1500",
    folder: "team",
    filename: "team-technician-01.jpg",
    alt: "Portrait of a licensed Royal Plumbing technician in uniform.",
    status: "placeholder",
    icon: User,
    tone: "muted",
  },
  {
    id: "team-technician-02",
    section: "About",
    purpose: "Shows team diversity and depth beyond a single technician.",
    subject: "Second plumbing technician portrait in navy uniform, friendly studio-lit headshot.",
    aspectRatio: "4:5",
    recommendedResolution: "1200x1500",
    folder: "team",
    filename: "team-technician-02.jpg",
    alt: "Portrait of a second licensed Royal Plumbing technician in uniform.",
    status: "placeholder",
    icon: User,
    tone: "muted",
  },
  {
    id: "team-vehicle",
    section: "About",
    purpose: "Reinforces fleet presence and dispatch coverage across the GTA.",
    subject: "Branded company service van parked in front of an upscale suburban home.",
    aspectRatio: "4:5",
    recommendedResolution: "1200x1500",
    folder: "team",
    filename: "team-vehicle.jpg",
    alt: "Royal Plumbing branded service van parked in a residential driveway.",
    status: "placeholder",
    icon: Truck,
    tone: "gold",
  },
];

export const serviceImages: Record<string, ImageAsset> = {
  "emergency-plumbing": {
    id: "service-emergency-plumbing",
    section: "Services",
    purpose: "Illustrates urgent, after-hours emergency response.",
    subject: "Plumber responding to a burst pipe emergency under a kitchen sink at night with a flashlight.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-emergency-plumbing.jpg",
    alt: "Plumber responding to an emergency burst pipe under a kitchen sink.",
    status: "placeholder",
    icon: Siren,
    tone: "primary",
  },
  "drain-cleaning": {
    id: "service-drain-cleaning",
    section: "Services",
    purpose: "Illustrates drain cleaning / rooter service.",
    subject: "Plumber using a professional drain snake to clear a bathroom drain.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-drain-cleaning.jpg",
    alt: "Plumber using a drain snake to clear a blocked bathroom drain.",
    status: "placeholder",
    icon: Waves,
    tone: "muted",
  },
  "sewer-repair": {
    id: "service-sewer-repair",
    section: "Services",
    purpose: "Illustrates sewer line camera inspection and repair.",
    subject: "Plumber using a video camera inspection tool on a residential sewer line.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-sewer-repair.jpg",
    alt: "Plumber running a camera inspection on a residential sewer line.",
    status: "placeholder",
    icon: Construction,
    tone: "gold",
  },
  "water-heaters": {
    id: "service-water-heater",
    section: "Services",
    purpose: "Illustrates water heater installation and repair.",
    subject: "Plumber installing a modern tankless water heater unit on a utility room wall.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-water-heater.jpg",
    alt: "Plumber installing a modern tankless water heater.",
    status: "placeholder",
    icon: Flame,
    tone: "primary",
  },
  "leak-detection": {
    id: "service-leak-detection",
    section: "Services",
    purpose: "Illustrates non-invasive leak detection.",
    subject: "Plumber using an electronic acoustic leak-detection device against an interior wall.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-leak-detection.jpg",
    alt: "Plumber using an acoustic leak detector against a wall.",
    status: "placeholder",
    icon: Droplets,
    tone: "muted",
  },
  "pipe-repair": {
    id: "service-pipe-repair",
    section: "Services",
    purpose: "Illustrates pipe repair and repiping work.",
    subject: "Close-up of a plumber's hands soldering a copper pipe joint with a torch.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-pipe-repair.jpg",
    alt: "Close-up of a plumber soldering a copper pipe joint.",
    status: "placeholder",
    icon: Wrench,
    tone: "gold",
  },
  "waterproofing-wet-basement": {
    id: "service-waterproofing",
    section: "Services",
    purpose: "Illustrates wet basement waterproofing and sump pump work.",
    subject: "Plumber installing a sump pump system in a clean residential basement.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-waterproofing.jpg",
    alt: "Plumber installing a sump pump system in a residential basement.",
    status: "placeholder",
    icon: ShieldCheck,
    tone: "primary",
  },
  "bathroom-plumbing": {
    id: "service-bathroom-plumbing",
    section: "Services",
    purpose: "Illustrates bathroom fixture installation and renovation plumbing.",
    subject: "Plumber installing a modern bathroom vanity faucet during a renovation.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-bathroom-plumbing.jpg",
    alt: "Plumber installing a modern bathroom vanity faucet.",
    status: "placeholder",
    icon: Bath,
    tone: "muted",
  },
  "kitchen-plumbing": {
    id: "service-kitchen-plumbing",
    section: "Services",
    purpose: "Illustrates kitchen sink and disposal installation.",
    subject: "Plumber installing a kitchen sink and garbage disposal during a renovation.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-kitchen-plumbing.jpg",
    alt: "Plumber installing a kitchen sink and garbage disposal.",
    status: "placeholder",
    icon: ChefHat,
    tone: "gold",
  },
  "commercial-plumbing": {
    id: "service-commercial-plumbing",
    section: "Services",
    purpose: "Illustrates commercial and multi-unit plumbing service.",
    subject: "Plumber servicing commercial boiler equipment in an industrial mechanical room.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-commercial-plumbing.jpg",
    alt: "Plumber servicing commercial boiler equipment.",
    status: "placeholder",
    icon: Building2,
    tone: "primary",
  },
  "gas-fitting": {
    id: "service-gas-fitting",
    section: "Services",
    purpose: "Illustrates licensed gas line installation.",
    subject: "Licensed gas fitter connecting a gas line to a modern stove appliance.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-gas-fitting.jpg",
    alt: "Licensed gas fitter connecting a gas line to a stove.",
    status: "placeholder",
    icon: Gauge,
    tone: "muted",
  },
  heating: {
    id: "service-heating",
    section: "Services",
    purpose: "Illustrates furnace and boiler service.",
    subject: "Technician servicing a residential furnace unit in a utility room.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-heating.jpg",
    alt: "Technician servicing a residential furnace.",
    status: "placeholder",
    icon: Thermometer,
    tone: "gold",
  },
  "air-conditioning": {
    id: "service-air-conditioning",
    section: "Services",
    purpose: "Illustrates central air conditioning service.",
    subject: "Technician servicing an outdoor central air conditioning unit beside a house.",
    aspectRatio: "1:1",
    recommendedResolution: "1200x1200",
    folder: "services",
    filename: "service-air-conditioning.jpg",
    alt: "Technician servicing an outdoor central air conditioning unit.",
    status: "placeholder",
    icon: Snowflake,
    tone: "primary",
  },
};

export type ProjectAsset = {
  id: string;
  title: string;
  before: ImageAsset;
  after: ImageAsset;
  icon: LucideIcon;
};

export const projects: ProjectAsset[] = [
  {
    id: "bathroom-renovation",
    title: "Bathroom Renovation",
    icon: Bath,
    before: {
      id: "project-bathroom-before-01",
      section: "Projects",
      purpose: "Before photo for a bathroom renovation case study.",
      subject: "Outdated bathroom with old fixtures and dated tile before renovation.",
      aspectRatio: "3:2",
      recommendedResolution: "1500x1000",
      folder: "projects",
      filename: "project-bathroom-before-01.jpg",
      alt: "Outdated bathroom before Royal Plumbing's renovation work.",
      status: "placeholder",
      icon: Bath,
      tone: "muted",
    },
    after: {
      id: "project-bathroom-after-01",
      section: "Projects",
      purpose: "After photo for a bathroom renovation case study.",
      subject: "Newly renovated bathroom with modern fixtures and elegant tile.",
      aspectRatio: "3:2",
      recommendedResolution: "1500x1000",
      folder: "projects",
      filename: "project-bathroom-after-01.jpg",
      alt: "Newly renovated bathroom completed by Royal Plumbing.",
      status: "placeholder",
      icon: Bath,
      tone: "gold",
    },
  },
  {
    id: "repipe",
    title: "Whole-Home Repipe",
    icon: Wrench,
    before: {
      id: "project-repipe-before-01",
      section: "Projects",
      purpose: "Before photo for a repipe case study.",
      subject: "Old corroded copper pipes exposed in a basement ceiling.",
      aspectRatio: "3:2",
      recommendedResolution: "1500x1000",
      folder: "projects",
      filename: "project-repipe-before-01.jpg",
      alt: "Corroded old copper piping before Royal Plumbing's repipe work.",
      status: "placeholder",
      icon: Wrench,
      tone: "muted",
    },
    after: {
      id: "project-repipe-after-01",
      section: "Projects",
      purpose: "After photo for a repipe case study.",
      subject: "Clean new PEX piping neatly installed in a basement ceiling.",
      aspectRatio: "3:2",
      recommendedResolution: "1500x1000",
      folder: "projects",
      filename: "project-repipe-after-01.jpg",
      alt: "Newly installed PEX piping completed by Royal Plumbing.",
      status: "placeholder",
      icon: Wrench,
      tone: "gold",
    },
  },
  {
    id: "water-heater-install",
    title: "Water Heater Installation",
    icon: Flame,
    before: {
      id: "project-water-heater-before-01",
      section: "Projects",
      purpose: "Before photo for a water heater replacement case study.",
      subject: "Old rusted water heater tank in a cluttered utility closet.",
      aspectRatio: "3:2",
      recommendedResolution: "1500x1000",
      folder: "projects",
      filename: "project-water-heater-before-01.jpg",
      alt: "Old rusted water heater before Royal Plumbing's replacement.",
      status: "placeholder",
      icon: Flame,
      tone: "muted",
    },
    after: {
      id: "project-water-heater-after-01",
      section: "Projects",
      purpose: "After photo for a water heater replacement case study.",
      subject: "Brand new water heater tank installed cleanly in an organized utility closet.",
      aspectRatio: "3:2",
      recommendedResolution: "1500x1000",
      folder: "projects",
      filename: "project-water-heater-after-01.jpg",
      alt: "New water heater installed by Royal Plumbing.",
      status: "placeholder",
      icon: Flame,
      tone: "gold",
    },
  },
  {
    id: "drain-repair",
    title: "Drain Repair",
    icon: Waves,
    before: {
      id: "project-drain-before-01",
      section: "Projects",
      purpose: "Before photo for a drain repair case study.",
      subject: "Clogged, overflowing kitchen sink drain.",
      aspectRatio: "3:2",
      recommendedResolution: "1500x1000",
      folder: "projects",
      filename: "project-drain-before-01.jpg",
      alt: "Clogged kitchen sink drain before Royal Plumbing's repair.",
      status: "placeholder",
      icon: Waves,
      tone: "muted",
    },
    after: {
      id: "project-drain-after-01",
      section: "Projects",
      purpose: "After photo for a drain repair case study.",
      subject: "Clean kitchen sink with clear running water after repair.",
      aspectRatio: "3:2",
      recommendedResolution: "1500x1000",
      folder: "projects",
      filename: "project-drain-after-01.jpg",
      alt: "Clean, fully repaired kitchen sink drain by Royal Plumbing.",
      status: "placeholder",
      icon: Waves,
      tone: "gold",
    },
  },
];

export const contactImage: ImageAsset = {
  id: "contact-office",
  section: "Contact",
  purpose: "Humanizes the contact page with a real dispatch/office moment.",
  subject: "Friendly dispatcher answering the phone at a bright, modern office desk.",
  aspectRatio: "16:9",
  recommendedResolution: "1600x900",
  folder: "gallery",
  filename: "contact-office.jpg",
  alt: "Royal Plumbing dispatcher answering a customer call at the office.",
  status: "placeholder",
  icon: Phone,
  tone: "primary",
};

export const ctaImage: ImageAsset = {
  id: "cta-technician-customer",
  section: "Call to Action",
  purpose: "Reinforces trust and satisfaction at key conversion points sitewide.",
  subject: "Plumbing technician and satisfied homeowner shaking hands in front of a home.",
  aspectRatio: "16:9",
  recommendedResolution: "1600x900",
  folder: "gallery",
  filename: "cta-technician-customer.jpg",
  alt: "Royal Plumbing technician shaking hands with a satisfied homeowner.",
  status: "placeholder",
  icon: Handshake,
  tone: "gold",
};

function slugifyName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const testimonialAvatars: ImageAsset[] = testimonials.map((testimonial) => {
  const slug = slugifyName(testimonial.name);
  return {
    id: `testimonial-${slug}`,
    section: "Testimonials",
    purpose: `Circular customer avatar for ${testimonial.name}'s review.`,
    subject: `Professional, friendly headshot of ${testimonial.name}, a Royal Plumbing customer.`,
    aspectRatio: "1:1",
    recommendedResolution: "600x600",
    folder: "testimonials",
    filename: `testimonial-${slug}.jpg`,
    alt: `Photo of ${testimonial.name}, Royal Plumbing customer.`,
    status: "placeholder",
    icon: User,
    tone: "muted",
  };
});

export function getServiceImage(slug: string): ImageAsset | undefined {
  return serviceImages[slug];
}

export function getTestimonialAvatar(name: string): ImageAsset | undefined {
  const slug = slugifyName(name);
  return testimonialAvatars.find((avatar) => avatar.id === `testimonial-${slug}`);
}

export const allImageAssets: ImageAsset[] = [
  heroImage,
  ...aboutImages,
  ...Object.values(serviceImages),
  ...testimonialAvatars,
  ...projects.flatMap((p) => [p.before, p.after]),
  contactImage,
  ctaImage,
];

export function assetPath(asset: ImageAsset) {
  return path(asset);
}
