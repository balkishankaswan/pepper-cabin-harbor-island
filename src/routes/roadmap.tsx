import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTitle, Panel } from "@/components/mark";
import { modeCopy, phases } from "@/data/roadmap";
import { useTrace } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { PriorityMode } from "@/data/types";

export const Route = createFileRoute("/roadmap")({ component: RoadmapPage });

const modes: PriorityMode[] = ["hireable", "depth", "founder"];

function RoadmapPage() {
  const mode = useTrace((s) => s.mode);
  const setMode = useTrace((s) => s.setMode);

  return (
    <div className="space-y-10">
      <PageTitle
        kicker="Priority mode"
        title="Sixteen months, three ways to spend them"
        lede="You are in 5th. 8th is the intern. The calendar does not change. The mode changes what you refuse."
      />

      <div className="grid gap-3 md:grid-cols-3">
        {modes.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              "rounded-xl p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150",
              mode === m ? "bg-surface-2 shadow-[var(--shadow-border-hover)]" : "bg-surface",
            )}
          >
            <p className="font-display text-xl">{modeCopy[m].title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{modeCopy[m].line}</p>
          </button>
        ))}
      </div>

      <Panel>
        <p className="text-sm leading-relaxed text-muted">
          All three modes start with the{" "}
          <Link to="/crash" className="text-accent">
            6-week EDA crash
          </Link>
          . Founder mode is not “skip KiCad and pitch”. Depth mode is not “only theory”. If you
          pick nothing, the app treats you as hireable — the honest default for an 8th-sem intern.
        </p>
      </Panel>

      <ol className="space-y-6">
        {phases.map((p, i) => (
          <li key={p.id} className="relative pl-8">
            <span className="absolute left-0 top-1 font-mono text-xs tabular-nums text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{p.when}</p>
            <h2 className="mt-1 font-display text-2xl tracking-tight">{p.title}</h2>
            <ul className="mt-3 space-y-2">
              {p.items[mode].map((line) => (
                <li
                  key={line}
                  className="rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-muted shadow-[var(--shadow-border)]"
                >
                  {line}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
