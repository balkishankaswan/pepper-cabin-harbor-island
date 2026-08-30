import { createFileRoute } from "@tanstack/react-router";
import { PageTitle, Panel } from "@/components/mark";
import { Badge } from "@/components/ui/badge";
import { electiveAdvice, electives } from "@/data/electives";
import { tracks } from "@/data/tracks";
import { useTrace } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/electives")({ component: ElectivesPage });

function ElectivesPage() {
  const trackId = useTrace((s) => s.trackId) ?? "embedded";
  const setTrack = useTrace((s) => s.setTrack);
  const advice = electiveAdvice(trackId);
  const track = tracks.find((t) => t.id === trackId);

  return (
    <div className="space-y-10">
      <PageTitle
        kicker="Program electives"
        title="Take fewer, finish them, ship something"
        lede="You get a handful of PEs across 6th and 7th. Two unrelated 3-credit courses is how people graduate 'interested in everything' with nothing to show. Pick a field, then take the take-list."
      />

      <div className="flex flex-wrap gap-2">
        {tracks.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTrack(t.id)}
            className={cn(
              "h-9 rounded-full px-3 text-xs whitespace-nowrap",
              t.id === trackId ? "bg-primary text-primary-fg" : "text-muted shadow-[var(--shadow-border)]",
            )}
          >
            {t.name}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted">
        Showing advice for <span className="text-fg">{track?.name}</span>. EE622 (EMC) is a take
        on almost every hardware path — the sleeper on your list.
      </p>

      <Bucket title="Take" variant="ok" items={advice.take} />
      <Bucket title="Consider" variant="warn" items={advice.consider} />
      <Bucket title="Skip unless that is the job" variant="danger" items={advice.skip} />

      <Panel>
        <h2 className="font-display text-xl">All 23, if you want the catalogue</h2>
        <ul className="mt-4 divide-y divide-border">
          {electives.map((e) => (
            <li key={e.code} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between">
              <p>
                <span className="font-mono text-xs text-accent">{e.code}</span>
                <span className="ml-2 text-sm">{e.name}</span>
              </p>
              <p className="text-xs text-subtle">
                {e.kind} · {e.c} cr
              </p>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

function Bucket({
  title,
  variant,
  items,
}: {
  title: string;
  variant: "ok" | "warn" | "danger";
  items: typeof electives;
}) {
  if (!items.length) return null;
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="font-display text-2xl tracking-tight">{title}</h2>
        <Badge variant={variant}>{items.length}</Badge>
      </div>
      <div className="grid gap-3">
        {items.map((e) => (
          <Panel key={e.code}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">
                <span className="font-mono text-xs text-accent">{e.code}</span>
                <span className="ml-2">{e.name}</span>
              </h3>
              <span className="font-mono text-[11px] text-subtle">
                {e.kind} · {e.c} cr
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{e.why}</p>
            <p className="mt-2 text-xs leading-relaxed text-subtle">{e.ai}</p>
          </Panel>
        ))}
      </div>
    </section>
  );
}
