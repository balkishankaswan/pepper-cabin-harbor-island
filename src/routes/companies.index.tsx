import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Bookmark } from "lucide-react";
import { PageTitle } from "@/components/mark";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { companies } from "@/data/companies";
import { useTrace } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { CompanyKind, Sector } from "@/data/types";

export const Route = createFileRoute("/companies/")({ component: CompaniesPage });

const sectors: { id: Sector | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "space", label: "Space" },
  { id: "ev", label: "EV" },
  { id: "energy", label: "Energy" },
  { id: "silicon", label: "Silicon" },
  { id: "robotics", label: "Robotics" },
  { id: "comms", label: "Comms" },
  { id: "industrial", label: "Industrial" },
  { id: "ai", label: "AI" },
  { id: "defence", label: "Defence" },
];

const kinds: { id: CompanyKind | "all"; label: string }[] = [
  { id: "all", label: "Any" },
  { id: "startup", label: "Startup" },
  { id: "mnc", label: "MNC" },
  { id: "psu", label: "PSU" },
];

function CompaniesPage() {
  const [q, setQ] = useState("");
  const [sector, setSector] = useState<Sector | "all">("all");
  const [kind, setKind] = useState<CompanyKind | "all">("all");
  const saved = useTrace((s) => s.saved);
  const toggleSaved = useTrace((s) => s.toggleSaved);
  const trackId = useTrace((s) => s.trackId);

  const list = useMemo(() => {
    return companies.filter((c) => {
      if (kind !== "all" && c.kind !== kind) return false;
      if (sector !== "all" && !c.sectors.includes(sector)) return false;
      if (q.trim()) {
        const hay = `${c.name} ${c.city} ${c.blurb} ${c.founders ?? ""} ${c.skills.join(" ")}`.toLowerCase();
        if (!hay.includes(q.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [q, sector, kind]);

  return (
    <div className="space-y-8">
      <PageTitle
        kicker="Indian deeptech"
        title="Who hires an EE intern"
        lede="Not only the Twitter list. Space, EV, silicon, drones, hydrogen — plus Qualcomm and TI as the paid backup. Filter by what you want to touch. Save a shortlist."
      />

      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search name, city, skill, founder"
        aria-label="Search companies"
      />

      <div className="flex flex-wrap gap-2">
        {sectors.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSector(s.id)}
            className={cn(
              "h-9 rounded-full px-3 text-xs uppercase tracking-wide whitespace-nowrap",
              sector === s.id ? "bg-primary text-primary-fg" : "text-muted shadow-[var(--shadow-border)]",
            )}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {kinds.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setKind(s.id)}
            className={cn(
              "h-9 rounded-full px-3 text-xs uppercase tracking-wide whitespace-nowrap",
              kind === s.id ? "bg-surface-2 text-fg" : "text-subtle shadow-[var(--shadow-border)]",
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted">
        {list.length} teams
        {trackId ? " · your field is used on each profile, not as a hard filter" : null}
      </p>

      <div className="grid gap-3">
        {list.map((c) => (
          <div
            key={c.id}
            className="flex gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:p-5"
          >
            <Link to="/companies/$id" params={{ id: c.id }} className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-medium text-fg">{c.name}</h2>
                <Badge>{c.kind}</Badge>
                {c.sectors.slice(0, 2).map((s) => (
                  <Badge key={s} variant="accent">
                    {s}
                  </Badge>
                ))}
              </div>
              <p className="mt-1 text-xs text-subtle">
                {c.city}
                {c.founders ? ` · ${c.founders}` : ""}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.blurb}</p>
            </Link>
            <button
              type="button"
              aria-label={saved.includes(c.id) ? "Unsave" : "Save"}
              onClick={() => toggleSaved(c.id)}
              className={cn(
                "flex size-11 shrink-0 items-center justify-center rounded-sm",
                saved.includes(c.id) ? "text-accent" : "text-subtle hover:text-fg",
              )}
            >
              <Bookmark className={cn("size-4", saved.includes(c.id) && "fill-accent")} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
