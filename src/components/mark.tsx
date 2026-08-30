import type { ReactNode } from "react";
import type { AiLevel } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function AiFlag({ level }: { level: AiLevel }) {
  if (level === "easy") return <Badge variant="ai">AI does this</Badge>;
  if (level === "assist") return <Badge variant="warn">AI assists</Badge>;
  return <Badge variant="ok">Still human</Badge>;
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
      {children}
    </p>
  );
}

export function PageTitle({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="max-w-2xl space-y-3">
      <Kicker>{kicker}</Kicker>
      <h1 className="font-display text-4xl leading-tight tracking-tight text-fg md:text-5xl">
        {title}
      </h1>
      {lede ? <p className="text-base leading-relaxed text-muted">{lede}</p> : null}
    </header>
  );
}

export function Panel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
