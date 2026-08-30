import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bot,
  Building2,
  Cpu,
  GraduationCap,
  House,
  Layers,
  ListChecks,
  Map,
  Menu,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTrace } from "@/lib/store";
import { trackById } from "@/data/tracks";

const primary = [
  { to: "/", label: "Home", icon: House },
  { to: "/tracks", label: "Fields", icon: Layers },
  { to: "/companies", label: "Firms", icon: Building2 },
  { to: "/roadmap", label: "Plan", icon: Map },
] as const;

const more = [
  { to: "/crash", label: "6-week crash", icon: Zap },
  { to: "/curriculum", label: "Degree map", icon: GraduationCap },
  { to: "/electives", label: "Electives", icon: ListChecks },
  { to: "/skills", label: "EDA & skills", icon: Cpu },
  { to: "/ai", label: "What AI eats", icon: Bot },
] as const;

function NavLink({
  to,
  label,
  icon: Icon,
  onClick,
}: {
  to: string;
  label: string;
  icon: typeof House;
  onClick?: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex h-11 items-center gap-3 rounded-md px-3 text-sm transition-colors duration-150",
        active ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface-2 hover:text-fg",
      )}
    >
      <Icon className="size-4 shrink-0" strokeWidth={1.75} />
      <span>{label}</span>
    </Link>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const trackId = useTrace((s) => s.trackId);
  const track = trackId ? trackById[trackId] : null;
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-border bg-bg px-3 py-5 md:flex">
        <Link to="/" className="mb-8 px-3">
          <p className="font-display text-2xl tracking-tight">TRACE</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            EE · deeptech
          </p>
        </Link>
        <nav className="flex flex-1 flex-col gap-1">
          {primary.map((item) => (
            <NavLink key={item.to} {...item} />
          ))}
          <div className="my-3 h-px bg-border" />
          {more.map((item) => (
            <NavLink key={item.to} {...item} />
          ))}
        </nav>
        <div className="rounded-md bg-surface-2 px-3 py-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-subtle">Semester</p>
          <p className="mt-1 text-sm text-fg">5 of 8 · 18 cr</p>
          <p className="mt-1 text-xs text-muted">{track ? track.name : "No field picked"}</p>
        </div>
      </aside>

      <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border bg-bg/90 px-4 backdrop-blur-sm md:hidden">
        <Link to="/" className="font-display text-xl">
          TRACE
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </header>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="bg-bg">
          <SheetHeader>
            <SheetTitle>TRACE</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-3 pb-8">
            {[...primary, ...more].map((item) => (
              <NavLink key={item.to} {...item} onClick={() => setOpen(false)} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <main className="md:pl-56">
        <div className="mx-auto max-w-5xl px-4 pb-28 pt-8 md:px-8 md:pb-16 md:pt-10">{children}</div>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] md:hidden">
        {[...primary, { to: "/crash", label: "Crash", icon: Zap }].map((item) => {
          const Icon = item.icon;
          const active =
            item.to === "/"
              ? pathname === "/"
              : pathname === item.to || pathname.startsWith(`${item.to}/`);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] uppercase tracking-wide",
                active ? "text-fg" : "text-muted",
              )}
            >
              <Icon className="size-4" strokeWidth={1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
