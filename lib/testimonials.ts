export type Testimonial = {
  name: string;
  location?: string;
  quote: string;
  service?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Kate J.",
    location: "Toronto",
    quote:
      "Mike called within ten minutes and gave me a real arrival window instead of a vague 'sometime today.' He had the toilet running properly in under an hour. One of the smoothest service calls I've ever had, plumbing or otherwise.",
    service: "Emergency Plumbing",
  },
  {
    name: "Mark Ludwig",
    quote:
      "I thought I had a decent handle on home plumbing until Jorge walked me through what was actually going on. Fair pricing, straight answers, and the work matched exactly what he quoted.",
    service: "Pipe Repair",
  },
  {
    name: "Danielle Sullivan",
    quote:
      "George and Matthew explained the full scope and cost before touching anything, then showed me the finished work and walked through what they'd done. That kind of transparency is rare in this industry.",
    service: "Drain Cleaning",
  },
  {
    name: "Ayan Broomfield",
    quote:
      "Mark took the time to actually understand the issue before recommending anything, then did exactly the work required to fix the leak — nothing added, nothing upsold.",
    service: "Leak Detection",
  },
  {
    name: "Max Carter",
    quote:
      "The plumber they sent, Mark, went well beyond what I expected for a routine repair. Professional, tidy, and clearly good at the job.",
    service: "Bathroom Plumbing",
  },
];
