import Image from "next/image";
import { cn } from "@/lib/utils";
import { assetPath, type ImageAsset } from "@/lib/images";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Circular avatar for a testimonial. Renders the real headshot once one
 * exists at /public/images/testimonials/<filename> (asset.status ===
 * "final"); until then it renders the customer's initials in a branded
 * circle — a deliberate, professional stand-in rather than a generic
 * silhouette icon.
 */
export function AvatarImage({
  asset,
  name,
  size = 48,
  className,
}: {
  asset: ImageAsset;
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("relative shrink-0 overflow-hidden rounded-full", className)}
      style={{ width: size, height: size }}
    >
      {asset.status === "final" ? (
        <Image src={assetPath(asset)} alt={asset.alt} fill className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={asset.alt}
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-[#0a1c3d] text-sm font-semibold text-white"
        >
          {initials(name)}
        </div>
      )}
    </div>
  );
}
