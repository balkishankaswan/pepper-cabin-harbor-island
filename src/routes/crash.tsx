import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageTitle, Panel } from "@/components/mark";
import { crashWeeks } from "@/data/crash";
import { useTrace } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/crash")({ component: CrashPage });

function CrashPage() {
  const done = useTrace((s) => s.done);
  const toggle = useTrace((s) => s.toggleDone);
  const total = crashWeeks.flatMap((w) => w.tasks).length;
  const n = crashWeeks.flatMap((w) => w.tasks).filter((t) => done[t.id]).length;

  return (
    <div className="space-y-10">
      <PageTitle
        kicker="You said you don't know EDA"
        title="Six weeks. Free tools. One board."
        lede="This is the bottleneck, not CGPA. Do it in parallel with 5th-sem labs. Budget: a Nucleo or ESP32 (₹800–2,000), maybe five PCBs (₹500–1,500), optional RTL-SDR later. Do not wait for a club to teach you."
      />

      <Panel>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Progress</p>
        <p className="mt-2 font-display text-3xl tabular-nums">
          {n} / {total}
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full bg-accent transition-[width] duration-300"
            style={{ width: `${(n / total) * 100}%` }}
          />
        </div>
      </Panel>

      <ol className="space-y-8">
        {crashWeeks.map((w) => {
          const wDone = w.tasks.filter((t) => done[t.id]).length;
          return (
            <li key={w.id} className="space-y-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  Week {w.week} · {wDone}/{w.tasks.length}
                </p>
                <h2 className="mt-1 font-display text-2xl tracking-tight">{w.title}</h2>
                <p className="mt-1 text-sm text-muted">{w.why}</p>
              </div>
              <ul className="space-y-2">
                {w.tasks.map((t) => {
                  const on = !!done[t.id];
                  return (
                    <li key={t.id}>
                      <button
                        type="button"
                        onClick={() => toggle(t.id)}
                        className={cn(
                          "flex w-full items-start gap-3 rounded-lg px-4 py-3 text-left shadow-[var(--shadow-border)]",
                          on ? "bg-surface-2" : "bg-surface",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm",
                            on ? "bg-primary text-primary-fg" : "shadow-[var(--shadow-border)]",
                          )}
                        >
                          {on ? <Check className="size-3" /> : null}
                        </span>
                        <span className={cn("text-sm leading-relaxed", on ? "text-muted" : "text-fg")}>
                          {t.text}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
