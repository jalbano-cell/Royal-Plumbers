import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { AssetImage } from "@/components/shared/AssetImage";
import { aboutImages } from "@/lib/images";

const captions: Record<string, string> = {
  "team-owner": "Owner",
  "team-technician-01": "Licensed Technician",
  "team-technician-02": "Licensed Technician",
  "team-vehicle": "Our Fleet",
};

export function TeamSection() {
  return (
    <section className="border-t border-border py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Our team" title="The people behind the work" />

        {/* Each tile's final asset (filename, subject, alt) is defined in
            lib/images.ts (aboutImages) — drop a real photo into
            /public/images/team/<filename> and flip status to "final" there,
            no changes needed here. */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutImages.map((asset, index) => (
            <RevealOnScroll key={asset.id} delay={(index % 4) * 0.05}>
              <div>
                <AssetImage asset={asset} className="rounded-2xl border border-border" />
                <p className="mt-3 text-sm font-medium text-foreground">{captions[asset.id]}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
