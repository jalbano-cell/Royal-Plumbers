import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site-config";

export function StorySection() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">Our story</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Built in the GTA, on a simple idea
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Since {siteConfig.foundedYear}, Royal Plumbing has worked on the idea that a
            plumber should be someone you trust in your home, not just someone who shows
            up to fix a pipe. That means showing up when we say we will, pricing the job
            honestly before we start, and standing behind the work after we leave.
          </p>
          <p>
            We&rsquo;re a family owned business, which means the name on the truck is
            the same one that answers for the work. As the GTA has grown, so has our
            team — but the standard hasn&rsquo;t changed: every plumber we send is
            licensed, insured, and treats your home like it&rsquo;s their own.
          </p>
          <p>
            Today that means {siteConfig.yearsInBusiness}+ years of experience across
            residential and commercial plumbing, heating, and cooling — with dispatch
            locations placed across the region so help is never far away.
          </p>
        </div>
      </Container>
    </section>
  );
}
