import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageTitle, Panel } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tracks } from "@/data/tracks";
import { crashWeeks } from "@/data/crash";
import { CREDITS_THROUGH_4, TOTAL_CREDITS } from "@/data/curriculum";
import { useTrace } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const trackId = useTrace((s) => s.trackId);
  const setTrack = useTrace((s) => s.setTrack);
  const done = useTrace((s) => s.done);
  const crashTotal = crashWeeks.flatMap((w) => w.tasks).length;
  const crashDone = crashWeeks.flatMap((w) => w.tasks).filter((t) => done[t.id]).length;
  const remaining = TOTAL_CREDITS - CREDITS_THROUGH_4;

  return (
    <div className="space-y-12">
      <PageTitle
        kicker="Semester 5 of 8"
        title="You have never opened an EDA tool. That is the actual problem."
        lede="Internship is 8th sem. You are in control, DSP, digital comms, and EM waves right now. Power electronics and embedded arrive in 6th — the money semester. Sixteen months is enough if you pick a field and ship one board."
      />

      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Credits left" value={`${remaining}`} hint={`of ${TOTAL_CREDITS} total`} />
        <Stat label="Until intern" value="~16 mo" hint="EE442, not a BTP" />
        <Stat
          label="EDA crash"
          value={`${crashDone}/${crashTotal}`}
          hint={crashDone === 0 ? "Not started" : "tasks checked"}
        />
      </div>

      <Panel className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            First move
          </p>
          <h2 className="font-display text-2xl tracking-tight">Six weeks to not be a tourist</h2>
          <p className="text-sm leading-relaxed text-muted">
            KiCad, a cheap STM32 or ESP32, LTspice, git. Free tools. After this you can say
            “EDA” in an interview without lying. AI will write the HAL. It will not hold the
            probe.
          </p>
        </div>
        <Button asChild className="shrink-0">
          <Link to="/crash">
            Open the crash
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Panel>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl tracking-tight">Pick a field this month</h2>
          {trackId ? (
            <Link to="/tracks/$id" params={{ id: trackId }} className="text-sm text-accent">
              Open {tracks.find((t) => t.id === trackId)?.name}
            </Link>
          ) : null}
        </div>
        <p className="max-w-2xl text-sm text-muted">
          Startups do not hire “EE”. They hire embedded, power, DSP, silicon. Hedge later. Empty
          hands plus “open to everything” is how 7th sem feels late.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {tracks.map((t) => {
            const on = trackId === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTrack(t.id)}
                className={cn(
                  "rounded-xl p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150",
                  on ? "bg-surface-2 shadow-[var(--shadow-border-hover)]" : "bg-surface hover:shadow-[var(--shadow-border-hover)]",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-fg">{t.name}</p>
                  {on ? (
                    <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-fg">
                      <Check className="size-3.5" />
                    </span>
                  ) : (
                    <Badge>{t.short}</Badge>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.thesis}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <Jump
          to="/roadmap"
          kicker="Priority"
          title="Hireable, depth, or founder"
          body="Three modes, same calendar. Default is hireable: one artefact, one intern."
        />
        <Jump
          to="/companies"
          kicker="India"
          title="Who actually hires EE"
          body="Space, EV, silicon, drones — plus Qualcomm/TI as the paid backup. Not only the Twitter list."
        />
        <Jump
          to="/ai"
          kicker="2026"
          title="What AI already eats"
          body="Boilerplate, homeworks, first-draft schematics. Bring-up, EMC, and a dead board: still you."
        />
      </section>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <Panel>
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{label}</p>
      <p className="mt-2 font-display text-3xl tabular-nums tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-muted">{hint}</p>
    </Panel>
  );
}

function Jump({
  to,
  kicker,
  title,
  body,
}: {
  to: string;
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      to={to}
      className="group rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{kicker}</p>
      <p className="mt-2 font-medium text-fg group-hover:text-primary">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </Link>
  );
}
