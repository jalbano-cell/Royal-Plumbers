import { AssetImage } from "@/components/shared/AssetImage";
import type { ProjectAsset } from "@/lib/images";

export function BeforeAfterCard({ project }: { project: ProjectAsset }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2.5">
        <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <project.icon className="size-4" />
        </span>
        <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
      </div>

      {/* Final assets (filenames, subjects, alt) are defined per-project in
          lib/images.ts (projects) — drop real before/after photos into
          /public/images/projects/<filename> and flip status to "final"
          there, no changes needed here. */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <AssetImage asset={project.before} className="rounded-xl" />
          <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Before
          </p>
        </div>
        <div>
          <AssetImage asset={project.after} className="rounded-xl" />
          <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-gold-text">
            After
          </p>
        </div>
      </div>
    </div>
  );
}
