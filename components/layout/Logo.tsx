import Link from "next/link";
import { Droplet } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Droplet className="size-4" fill="currentColor" />
      </span>
      Royal Plumbing
    </Link>
  );
}
