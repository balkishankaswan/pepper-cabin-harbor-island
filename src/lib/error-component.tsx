import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <TriangleAlert className="size-8 text-danger" strokeWidth={1.75} />
      <h1 className="font-display text-2xl">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-muted">
        {error.message || "An unexpected error occurred. Try reloading the page."}
      </p>
      <Link to="/" className="mt-2 text-sm text-accent">
        Back to TRACE
      </Link>
    </main>
  );
}

export function AppNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="font-display text-3xl">No such node</h1>
      <p className="max-w-md text-sm text-muted">That page is not on the map.</p>
      <Link to="/" className="text-sm text-accent">
        Home
      </Link>
    </main>
  );
}
