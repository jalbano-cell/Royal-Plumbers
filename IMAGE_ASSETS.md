# Image Assets Checklist

Every image location on the site is backed by a typed entry in [`lib/images.ts`](lib/images.ts). Until a real photo exists, each slot renders an on-brand placeholder graphic (gradient + icon matching the subject) at the **exact same aspect ratio** the final photo will use — swapping in real photography is a **filename drop-in only**:

1. Save the client's photo into `/public/images/<folder>/<filename>` using the exact filename below.
2. Flip that entry's `status` from `"placeholder"` to `"final"` in `lib/images.ts`.
3. Done — no component, layout, or CSS changes required.

All images render through `components/shared/AssetImage.tsx` (or `AvatarImage.tsx` for circular testimonial avatars), which locks the aspect ratio, applies `object-fit: cover`, and never lets an image determine its container's height — so the layout is identical before and after real photos are added.

---

## Hero

| Filename | Section | Description | Aspect Ratio | Resolution | Alt Text | Status |
|---|---|---|---|---|---|---|
| `hero-plumber-working.jpg` | Hero (home page) | Licensed plumber repairing a kitchen sink inside a modern luxury home while interacting with the homeowner, bright natural lighting. | 16:9 | 1920×1080 | Licensed Royal Plumbing technician repairing a kitchen sink while talking with the homeowner. | Placeholder |

## About

| Filename | Section | Description | Aspect Ratio | Resolution | Alt Text | Status |
|---|---|---|---|---|---|---|
| `team-owner.jpg` | About — team | Company owner in branded uniform, confident and approachable, standing by the service van. | 4:5 | 1200×1500 | Royal Plumbing owner standing in front of a branded company service van. | Placeholder |
| `team-technician-01.jpg` | About — team | Plumbing technician portrait in navy uniform with tool belt, friendly studio-lit headshot. | 4:5 | 1200×1500 | Portrait of a licensed Royal Plumbing technician in uniform. | Placeholder |
| `team-technician-02.jpg` | About — team | Second plumbing technician portrait in navy uniform, friendly studio-lit headshot. | 4:5 | 1200×1500 | Portrait of a second licensed Royal Plumbing technician in uniform. | Placeholder |
| `team-vehicle.jpg` | About — team | Branded company service van parked in front of an upscale suburban home. | 4:5 | 1200×1500 | Royal Plumbing branded service van parked in a residential driveway. | Placeholder |

## Services

| Filename | Section | Description | Aspect Ratio | Resolution | Alt Text | Status |
|---|---|---|---|---|---|---|
| `service-emergency-plumbing.jpg` | Services — Emergency Plumbing | Plumber responding to a burst pipe emergency under a kitchen sink at night with a flashlight. | 1:1 | 1200×1200 | Plumber responding to an emergency burst pipe under a kitchen sink. | Placeholder |
| `service-drain-cleaning.jpg` | Services — Drain Cleaning | Plumber using a professional drain snake to clear a bathroom drain. | 1:1 | 1200×1200 | Plumber using a drain snake to clear a blocked bathroom drain. | Placeholder |
| `service-sewer-repair.jpg` | Services — Sewer Repair | Plumber using a video camera inspection tool on a residential sewer line. | 1:1 | 1200×1200 | Plumber running a camera inspection on a residential sewer line. | Placeholder |
| `service-water-heater.jpg` | Services — Water Heater Repair & Install | Plumber installing a modern tankless water heater unit on a utility room wall. | 1:1 | 1200×1200 | Plumber installing a modern tankless water heater. | Placeholder |
| `service-leak-detection.jpg` | Services — Leak Detection | Plumber using an electronic acoustic leak-detection device against an interior wall. | 1:1 | 1200×1200 | Plumber using an acoustic leak detector against a wall. | Placeholder |
| `service-pipe-repair.jpg` | Services — Pipe Repair & Repiping | Close-up of a plumber's hands soldering a copper pipe joint with a torch. | 1:1 | 1200×1200 | Close-up of a plumber soldering a copper pipe joint. | Placeholder |
| `service-waterproofing.jpg` | Services — Wet Basement & Waterproofing | Plumber installing a sump pump system in a clean residential basement. | 1:1 | 1200×1200 | Plumber installing a sump pump system in a residential basement. | Placeholder |
| `service-bathroom-plumbing.jpg` | Services — Bathroom Plumbing | Plumber installing a modern bathroom vanity faucet during a renovation. | 1:1 | 1200×1200 | Plumber installing a modern bathroom vanity faucet. | Placeholder |
| `service-kitchen-plumbing.jpg` | Services — Kitchen Plumbing | Plumber installing a kitchen sink and garbage disposal during a renovation. | 1:1 | 1200×1200 | Plumber installing a kitchen sink and garbage disposal. | Placeholder |
| `service-commercial-plumbing.jpg` | Services — Commercial Plumbing | Plumber servicing commercial boiler equipment in an industrial mechanical room. | 1:1 | 1200×1200 | Plumber servicing commercial boiler equipment. | Placeholder |
| `service-gas-fitting.jpg` | Services — Gas Fitting | Licensed gas fitter connecting a gas line to a modern stove appliance. | 1:1 | 1200×1200 | Licensed gas fitter connecting a gas line to a stove. | Placeholder |
| `service-heating.jpg` | Services — Heating | Technician servicing a residential furnace unit in a utility room. | 1:1 | 1200×1200 | Technician servicing a residential furnace. | Placeholder |
| `service-air-conditioning.jpg` | Services — Air Conditioning | Technician servicing an outdoor central air conditioning unit beside a house. | 1:1 | 1200×1200 | Technician servicing an outdoor central air conditioning unit. | Placeholder |

## Why Choose Us

No photographs — this section uses Lucide line icons only (`components/home/WhyChooseUs.tsx`), per spec. Nothing to track here.

## Testimonials

Circular avatars (`components/shared/AvatarImage.tsx`). Until a real headshot is added, each renders the customer's initials in a branded circle rather than a generic silhouette.

| Filename | Section | Description | Aspect Ratio | Resolution | Alt Text | Status |
|---|---|---|---|---|---|---|
| `testimonial-kate-j.jpg` | Testimonials | Professional, friendly headshot of Kate J., a Royal Plumbing customer. | 1:1 | 600×600 | Photo of Kate J., Royal Plumbing customer. | Placeholder |
| `testimonial-mark-ludwig.jpg` | Testimonials | Professional, friendly headshot of Mark Ludwig, a Royal Plumbing customer. | 1:1 | 600×600 | Photo of Mark Ludwig, Royal Plumbing customer. | Placeholder |
| `testimonial-danielle-sullivan.jpg` | Testimonials | Professional, friendly headshot of Danielle Sullivan, a Royal Plumbing customer. | 1:1 | 600×600 | Photo of Danielle Sullivan, Royal Plumbing customer. | Placeholder |
| `testimonial-ayan-broomfield.jpg` | Testimonials | Professional, friendly headshot of Ayan Broomfield, a Royal Plumbing customer. | 1:1 | 600×600 | Photo of Ayan Broomfield, Royal Plumbing customer. | Placeholder |
| `testimonial-max-carter.jpg` | Testimonials | Professional, friendly headshot of Max Carter, a Royal Plumbing customer. | 1:1 | 600×600 | Photo of Max Carter, Royal Plumbing customer. | Placeholder |

## Projects / Portfolio (`/portfolio`)

| Filename | Section | Description | Aspect Ratio | Resolution | Alt Text | Status |
|---|---|---|---|---|---|---|
| `project-bathroom-before-01.jpg` | Projects — Bathroom Renovation (before) | Outdated bathroom with old fixtures and dated tile before renovation. | 3:2 | 1500×1000 | Outdated bathroom before Royal Plumbing's renovation work. | Placeholder |
| `project-bathroom-after-01.jpg` | Projects — Bathroom Renovation (after) | Newly renovated bathroom with modern fixtures and elegant tile. | 3:2 | 1500×1000 | Newly renovated bathroom completed by Royal Plumbing. | Placeholder |
| `project-repipe-before-01.jpg` | Projects — Whole-Home Repipe (before) | Old corroded copper pipes exposed in a basement ceiling. | 3:2 | 1500×1000 | Corroded old copper piping before Royal Plumbing's repipe work. | Placeholder |
| `project-repipe-after-01.jpg` | Projects — Whole-Home Repipe (after) | Clean new PEX piping neatly installed in a basement ceiling. | 3:2 | 1500×1000 | Newly installed PEX piping completed by Royal Plumbing. | Placeholder |
| `project-water-heater-before-01.jpg` | Projects — Water Heater Installation (before) | Old rusted water heater tank in a cluttered utility closet. | 3:2 | 1500×1000 | Old rusted water heater before Royal Plumbing's replacement. | Placeholder |
| `project-water-heater-after-01.jpg` | Projects — Water Heater Installation (after) | Brand new water heater tank installed cleanly in an organized utility closet. | 3:2 | 1500×1000 | New water heater installed by Royal Plumbing. | Placeholder |
| `project-drain-before-01.jpg` | Projects — Drain Repair (before) | Clogged, overflowing kitchen sink drain. | 3:2 | 1500×1000 | Clogged kitchen sink drain before Royal Plumbing's repair. | Placeholder |
| `project-drain-after-01.jpg` | Projects — Drain Repair (after) | Clean kitchen sink with clear running water after repair. | 3:2 | 1500×1000 | Clean, fully repaired kitchen sink drain by Royal Plumbing. | Placeholder |

## Contact

| Filename | Section | Description | Aspect Ratio | Resolution | Alt Text | Status |
|---|---|---|---|---|---|---|
| `contact-office.jpg` | Contact | Friendly dispatcher answering the phone at a bright, modern office desk. | 16:9 | 1600×900 | Royal Plumbing dispatcher answering a customer call at the office. | Placeholder |

## Call to Action

| Filename | Section | Description | Aspect Ratio | Resolution | Alt Text | Status |
|---|---|---|---|---|---|---|
| `cta-technician-customer.jpg` | Final CTA (home page only — `<FinalCta showImage />`) | Plumbing technician and satisfied homeowner shaking hands in front of a home. | 16:9 | 1600×900 | Royal Plumbing technician shaking hands with a satisfied homeowner. | Placeholder |

---

## Folder Structure

```
/public/images/
  hero/          hero-plumber-working.jpg
  about/         (reserved — team photos currently live in /team)
  team/          team-owner.jpg, team-technician-01.jpg, team-technician-02.jpg, team-vehicle.jpg
  services/      service-*.jpg (13 files)
  testimonials/  testimonial-*.jpg (5 files)
  projects/      project-*-before-01.jpg / project-*-after-01.jpg (8 files)
  gallery/       contact-office.jpg, cta-technician-customer.jpg
  logos/         (reserved for partner/press logos, none yet)
  icons/         (reserved — UI icons are Lucide components, not image files)
```

## Notes

- **33 image slots** are tracked in total, all defined in `lib/images.ts` as the single source of truth (`allImageAssets`).
- Every slot is currently a **placeholder**: a branded gradient tile (deep royal blue / gold, matching the site palette) with a subject-matched icon — never a generic gray box or stock photo. Before/after project pairs use a deliberate muted-gray → gold gradient shift to visually reinforce the transformation even before real photos exist.
- Real photos should be genuine job-site photography of licensed Royal Plumbing technicians, real equipment, and (with permission) real customers — see each row's Description for what to shoot.
- Testimonial avatars are the one exception to "no fake photos": until real headshots exist, they show the customer's initials in a colored circle rather than an icon, which is honest and still feels intentional/personalized.
