import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PriorityMode, TrackId } from "@/data/types";

interface TraceState {
  trackId: TrackId | null;
  mode: PriorityMode;
  done: Record<string, boolean>;
  saved: string[];
  setTrack: (id: TrackId) => void;
  setMode: (mode: PriorityMode) => void;
  toggleDone: (id: string) => void;
  toggleSaved: (id: string) => void;
}

export const useTrace = create<TraceState>()(
  persist(
    (set, get) => ({
      trackId: null,
      mode: "hireable",
      done: {},
      saved: [],
      setTrack: (trackId) => set({ trackId }),
      setMode: (mode) => set({ mode }),
      toggleDone: (id) =>
        set({ done: { ...get().done, [id]: !get().done[id] } }),
      toggleSaved: (id) => {
        const saved = get().saved.includes(id)
          ? get().saved.filter((x) => x !== id)
          : [...get().saved, id];
        set({ saved });
      },
    }),
    { name: "trace-ee" },
  ),
);
