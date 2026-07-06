import Image from "next/image";
import { cn } from "@/lib/utils";
import { assetPath, type ImageAsset } from "@/lib/images";

const ratioMap: Record<ImageAsset["aspectRatio"], string> = {
  "16:9": "16/9",
  "4:5": "4/5",
  "1:1": "1/1",
  "3:2": "3/2",
};

const toneGradient: Record<ImageAsset["tone"], string> = {
  primary: "from-primary/90 via-primary/70 to-[#0a1c3d]",
  gold: "from-primary/80 via-[#8a6a1f]/70 to-gold/60",
  muted: "from-slate-500/70 via-slate-600/70 to-slate-800/80",
};

/**
 * Fixed-aspect-ratio image container. Renders the real photo once one exists
 * at /public/images/<folder>/<filename> (asset.status === "final"); until
 * then it renders an accessible, on-brand placeholder graphic in the exact
 * same box. Swapping in the client's photography is a filename drop-in —
 * no layout or component changes required.
 */
export function AssetImage({
  asset,
  className,
  priority = false,
  sizes,
}: {
  asset: ImageAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: ratioMap[asset.aspectRatio] }}
    >
      {asset.status === "final" ? (
        <Image
          src={assetPath(asset)}
          alt={asset.alt}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={asset.alt}
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gradient-to-br",
            toneGradient[asset.tone],
          )}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative flex size-[28%] min-h-10 min-w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
            <asset.icon className="size-[45%] text-white/90" strokeWidth={1.5} />
          </div>
        </div>
      )}
    </div>
  );
}
