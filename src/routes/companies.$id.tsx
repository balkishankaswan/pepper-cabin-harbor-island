import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { PageTitle, Panel } from "@/components/mark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { companyById, companies } from "@/data/companies";
import { trackById } from "@/data/tracks";
import { useTrace } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/companies/$id")({
  component: CompanyDetail,
});

function CompanyDetail() {
  const { id } = Route.useParams();
  const c = companyById[id];
  if (!c) throw notFound();
  const saved = useTrace((s) => s.saved).includes(c.id);
  const toggleSaved = useTrace((s) => s.toggleSaved);
  const related = companies.filter((x) => x.id !== c.id && x.sectors.some((s) => c.sectors.includes(s))).slice(0, 4);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <PageTitle
          kicker={`${c.city} · ${c.kind}`}
          title={c.name}
          lede={c.founders ? `Founded / co-founded by ${c.founders}.` : c.blurb}
        />
        <Button variant={saved ? "secondary" : "default"} onClick={() => toggleSaved(c.id)}>
          <Bookmark className={cn("size-4", saved && "fill-current")} />
          {saved ? "Saved" : "Save"}
        </Button>
      </div>

      <p className="max-w-2xl text-base leading-relaxed text-muted">{c.blurb}</p>

      <div className="flex flex-wrap gap-2">
        {c.sectors.map((s) => (
          <Badge key={s} variant="accent">
            {s}
          </Badge>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <Panel>
          <h2 className="font-display text-xl">What they actually build</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{c.build}</p>
        </Panel>
        <Panel>
          <h2 className="font-display text-xl">How an intern gets in</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{c.how}</p>
          {c.stipend ? <p className="mt-3 text-sm text-accent">{c.stipend}</p> : null}
        </Panel>
      </div>

      <Panel>
        <h2 className="font-display text-xl">Roles that fit an EE</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {c.roles.map((r) => (
            <li key={r}>
              <Badge>{r}</Badge>
            </li>
          ))}
        </ul>
        <h3 className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          Skills they want
        </h3>
        <ul className="mt-2 space-y-1 text-sm text-muted">
          {c.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Panel>

      <section className="space-y-3">
        <h2 className="font-display text-xl">Fields this maps to</h2>
        <div className="flex flex-wrap gap-2">
          {c.tracks.map((tid) => (
            <Link
              key={tid}
              to="/tracks/$id"
              params={{ id: tid }}
              className="rounded-full px-3 py-2 text-sm text-muted shadow-[var(--shadow-border)] hover:text-fg"
            >
              {trackById[tid].name}
            </Link>
          ))}
        </div>
      </section>

      {related.length ? (
        <section className="space-y-3">
          <h2 className="font-display text-xl">Nearby</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((x) => (
              <Link
                key={x.id}
                to="/companies/$id"
                params={{ id: x.id }}
                className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]"
              >
                <p className="font-medium">{x.name}</p>
                <p className="mt-1 text-sm text-muted">{x.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
