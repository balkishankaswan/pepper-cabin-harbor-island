import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageTitle, Panel } from "@/components/mark";
import { Badge } from "@/components/ui/badge";
import { tracks } from "@/data/tracks";
import { useTrace } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/tracks/")({ component: TracksPage });

function TracksPage() {
  const trackId = useTrace((s) => s.trackId);
  const setTrack = useTrace((s) => s.setTrack);

  return (
    <div className="space-y-10">
      <PageTitle
        kicker="Eight fields"
        title="Skills you actually need, by kind of engineering"
        lede="College is one degree. Hiring is eight jobs. Each field below maps to your courses, the EDA you should open, the electives that are not a waste, and the Indian teams that hire it."
      />
      <div className="grid gap-4">
        {tracks.map((t) => (
          <Panel key={t.id} className={cn(trackId === t.id && "shadow-[var(--shadow-border-hover)]")}>
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-2xl tracking-tight">{t.name}</h2>
                  <Badge variant={trackId === t.id ? "solid" : "default"}>{t.short}</Badge>
                </div>
                <p className="text-sm leading-relaxed text-muted">{t.thesis}</p>
                <p className="text-sm leading-relaxed text-fg/90">
                  <span className="text-subtle">For you if · </span>
                  {t.forYou}
                </p>
                <p className="font-mono text-[11px] text-subtle">{t.edas.join(" · ")}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => setTrack(t.id)}
                  className="h-11 rounded-sm px-4 text-sm text-muted shadow-[var(--shadow-border)] hover:text-fg"
                >
                  {trackId === t.id ? "Selected" : "Select"}
                </button>
                <Link
                  to="/tracks/$id"
                  params={{ id: t.id }}
                  className="inline-flex h-11 items-center gap-2 rounded-sm bg-primary px-4 text-sm font-medium text-primary-fg"
                >
                  Open
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
