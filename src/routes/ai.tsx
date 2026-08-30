import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTitle, Panel, AiFlag } from "@/components/mark";
import { aiRows, aiRules } from "@/data/ai";

export const Route = createFileRoute("/ai")({ component: AiPage });

function AiPage() {
  return (
    <div className="space-y-10">
      <PageTitle
        kicker="2026, not 2019"
        title="AI already does the homework. It does not bring up the board."
        lede="If your plan is 'I will be better at MATLAB than ChatGPT', you lose. If your plan is 'I will be the person who can explain a ringing switch node', you are early. Use the models. Do not compete with them on the tasks they finished."
      />

      <div className="grid gap-3 md:grid-cols-2">
        {aiRules.map((r) => (
          <Panel key={r.title}>
            <h2 className="font-display text-xl">{r.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
          </Panel>
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="font-display text-2xl tracking-tight">Task by task</h2>
        <div className="grid gap-3">
          {aiRows.map((row) => (
            <Panel key={row.task}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                  {row.field}
                </p>
                <AiFlag level={row.level} />
              </div>
              <h3 className="mt-2 font-medium">{row.task}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{row.detail}</p>
            </Panel>
          ))}
        </div>
      </section>

      <Panel className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-sm text-muted">
          The practical response is the crash: a board you probed. That is the artefact AI cannot
          fake in a 20-minute interview.
        </p>
        <Link
          to="/crash"
          className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-4 text-sm font-medium text-primary-fg"
        >
          Open the 6-week crash
        </Link>
      </Panel>
    </div>
  );
}
