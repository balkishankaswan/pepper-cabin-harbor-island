import { createFileRoute } from "@tanstack/react-router";
import { PageTitle, Panel, AiFlag } from "@/components/mark";
import { edaStart, skills } from "@/data/skills";

export const Route = createFileRoute("/skills")({ component: SkillsPage });

const kinds = [
  { id: "eda", label: "EDA & tools" },
  { id: "lang", label: "Languages" },
  { id: "stack", label: "Stacks" },
  { id: "theory", label: "Theory you must feel" },
  { id: "lab", label: "Lab" },
  { id: "soft", label: "Adult skills" },
] as const;

function SkillsPage() {
  return (
    <div className="space-y-10">
      <PageTitle
        kicker="Start with free tools"
        title="EDA, languages, and the skills college will not stamp"
        lede="You do not need Cadence on day one. You need KiCad, LTspice, Verilator, a scope, and git. Industry tools come when a team hands you a license. AI is labelled on every skill — easy means do not build your identity on it."
      />

      <section className="space-y-3">
        <h2 className="font-display text-2xl tracking-tight">Install these this week</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {edaStart.map((e) => (
            <a
              key={e.name}
              href={e.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="font-medium">{e.name}</p>
              <p className="mt-1 text-sm text-muted">{e.use}</p>
            </a>
          ))}
        </div>
      </section>

      {kinds.map((k) => {
        const list = skills.filter((s) => s.kind === k.id);
        if (!list.length) return null;
        return (
          <section key={k.id} className="space-y-3">
            <h2 className="font-display text-2xl tracking-tight">{k.label}</h2>
            <div className="grid gap-3">
              {list.map((s) => (
                <Panel key={s.id}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-medium">{s.name}</h3>
                    <AiFlag level={s.ai} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.blurb}</p>
                  <p className="mt-3 text-xs leading-relaxed text-subtle">{s.aiNote}</p>
                  <p className="mt-3 text-sm text-fg">
                    <span className="text-subtle">Start · </span>
                    {s.start}
                  </p>
                </Panel>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
