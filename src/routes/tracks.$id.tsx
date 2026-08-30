import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageTitle, Panel, AiFlag } from "@/components/mark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { trackById, tracks } from "@/data/tracks";
import { companies } from "@/data/companies";
import { electives } from "@/data/electives";
import { skillById } from "@/data/skills";
import { useTrace } from "@/lib/store";
import type { TrackId } from "@/data/types";

export const Route = createFileRoute("/tracks/$id")({
  component: TrackDetail,
});

function TrackDetail() {
  const { id } = Route.useParams();
  const track = trackById[id as TrackId];
  if (!track) throw notFound();
  const setTrack = useTrace((s) => s.setTrack);
  const selected = useTrace((s) => s.trackId) === track.id;
  const firms = companies.filter((c) => track.companies.includes(c.id));
  const takes = electives.filter((e) => e.tracks[track.id] === "take");

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <PageTitle kicker="Field" title={track.name} lede={track.thesis} />
        <Button variant={selected ? "secondary" : "default"} onClick={() => setTrack(track.id)}>
          {selected ? "Your field" : "Make this my field"}
        </Button>
      </div>

      <Panel>
        <h2 className="font-display text-xl">For you if</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{track.forYou}</p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          Courses you already have
        </p>
        <p className="mt-1 text-sm text-fg">{track.courses.join(" · ")}</p>
      </Panel>

      <section className="space-y-3">
        <h2 className="font-display text-2xl tracking-tight">Do this from 5th sem, now</h2>
        <ol className="space-y-2">
          {track.now.map((line) => (
            <li
              key={line}
              className="rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-fg shadow-[var(--shadow-border)]"
            >
              {line}
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl tracking-tight">Skill stack</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {track.skills.map((sid) => {
            const s = skillById[sid];
            if (!s) return null;
            return (
              <Panel key={sid}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium">{s.name}</h3>
                  <AiFlag level={s.ai} />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.blurb}</p>
                <p className="mt-3 text-xs leading-relaxed text-subtle">{s.aiNote}</p>
              </Panel>
            );
          })}
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        <Panel>
          <h2 className="font-display text-xl">EDA / tools</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {track.edas.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <h2 className="font-display text-xl">Take these electives</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {takes.map((e) => (
              <li key={e.code}>
                <span className="font-mono text-accent">{e.code}</span>
                <span className="text-muted"> · {e.name}</span>
              </li>
            ))}
          </ul>
          <Link to="/electives" className="mt-4 inline-block text-sm text-accent">
            Full recommender
          </Link>
        </Panel>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        <Panel>
          <div className="flex items-center gap-2">
            <h2 className="font-display text-xl">AI already does</h2>
            <Badge variant="ai">easy</Badge>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {track.aiEasy.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <div className="flex items-center gap-2">
            <h2 className="font-display text-xl">Still a human</h2>
            <Badge variant="ok">moat</Badge>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {track.aiCannot.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Panel>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl tracking-tight">Intern bar</h2>
        <ul className="space-y-2">
          {track.internBar.map((x) => (
            <li key={x} className="text-sm leading-relaxed text-muted">
              — {x}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl tracking-tight">Teams that hire this</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {firms.map((c) => (
            <Link
              key={c.id}
              to="/companies/$id"
              params={{ id: c.id }}
              className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="font-medium">{c.name}</p>
              <p className="mt-1 text-xs text-subtle">
                {c.city} · {c.kind}
              </p>
              <p className="mt-2 text-sm text-muted">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {tracks
          .filter((t) => t.id !== track.id)
          .map((t) => (
            <Link
              key={t.id}
              to="/tracks/$id"
              params={{ id: t.id }}
              className="rounded-full px-3 py-2 text-xs text-muted shadow-[var(--shadow-border)] hover:text-fg"
            >
              {t.name}
            </Link>
          ))}
      </div>
    </div>
  );
}
