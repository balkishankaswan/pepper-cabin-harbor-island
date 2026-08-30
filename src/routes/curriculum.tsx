import { createFileRoute } from "@tanstack/react-router";
import { PageTitle, Panel } from "@/components/mark";
import { Badge } from "@/components/ui/badge";
import { CURRENT_SEM, openElectiveIdeas, semesters, TOTAL_CREDITS } from "@/data/curriculum";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/curriculum")({ component: CurriculumPage });

function CurriculumPage() {
  return (
    <div className="space-y-10">
      <PageTitle
        kicker={`${TOTAL_CREDITS} credits`}
        title="The degree, with the semester that actually matters labelled"
        lede="You are in V. VI is power electronics + embedded — treat it as a job. VII is the applications window. VIII is EE442 internship unless you are doing a thesis on purpose."
      />

      <ol className="space-y-4">
        {semesters.map((s) => {
          const here = s.id === CURRENT_SEM;
          return (
            <li key={s.id}>
              <Panel className={cn(here && "shadow-[var(--shadow-border-hover)]")}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-2xl tracking-tight">
                    Semester {s.label}
                  </h2>
                  <div className="flex items-center gap-2">
                    {here ? <Badge variant="solid">You are here</Badge> : null}
                    <span className="font-mono text-xs tabular-nums text-subtle">{s.credits} cr</span>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.why}</p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[28rem] text-left text-sm">
                    <thead className="text-[11px] uppercase tracking-wide text-subtle">
                      <tr>
                        <th className="py-1 font-medium">Code</th>
                        <th className="py-1 font-medium">Course</th>
                        <th className="py-1 font-medium">L-T-P</th>
                        <th className="py-1 font-medium">C</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.courses.map((c) => (
                        <tr key={c.code + c.name} className="border-t border-border">
                          <td className="py-2 font-mono text-xs text-accent">{c.code}</td>
                          <td className="py-2 text-fg">
                            {c.name}
                            {c.note ? (
                              <span className="block text-xs text-subtle">{c.note}</span>
                            ) : null}
                          </td>
                          <td className="py-2 tabular-nums text-muted">
                            {c.l}-{c.t}-{c.p}
                          </td>
                          <td className="py-2 tabular-nums text-muted">{c.c}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Panel>
            </li>
          );
        })}
      </ol>

      <section className="space-y-3">
        <h2 className="font-display text-2xl tracking-tight">Open electives that are not a dump</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {openElectiveIdeas.map((o) => (
            <Panel key={o.title}>
              <h3 className="font-medium">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{o.why}</p>
            </Panel>
          ))}
        </div>
      </section>
    </div>
  );
}
