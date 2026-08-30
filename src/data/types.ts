export type TrackId =
  | "embedded"
  | "power"
  | "drives"
  | "control"
  | "vlsi"
  | "comms"
  | "space"
  | "analog";

export type PriorityMode = "hireable" | "depth" | "founder";

export type CompanyKind = "startup" | "mnc" | "psu";

export type Sector =
  | "space"
  | "energy"
  | "ev"
  | "robotics"
  | "silicon"
  | "comms"
  | "ai"
  | "industrial"
  | "defence";

export type AiLevel = "easy" | "assist" | "human";

export type ElectiveTag = "take" | "consider" | "skip";

export interface Course {
  code: string;
  name: string;
  l: number | string;
  t: number;
  p: number;
  c: number | string;
  note?: string;
}

export interface Semester {
  id: number;
  label: string;
  credits: number;
  courses: Course[];
  why: string;
}

export interface Skill {
  id: string;
  name: string;
  kind: "eda" | "lang" | "lab" | "theory" | "soft" | "stack";
  blurb: string;
  ai: AiLevel;
  aiNote: string;
  start: string;
}

export interface Track {
  id: TrackId;
  name: string;
  short: string;
  thesis: string;
  forYou: string;
  courses: string[];
  electives: string[];
  skills: string[];
  edas: string[];
  companies: string[];
  internBar: string[];
  aiEasy: string[];
  aiCannot: string[];
  now: string[];
}

export interface Company {
  id: string;
  name: string;
  founders?: string;
  city: string;
  kind: CompanyKind;
  sectors: Sector[];
  tracks: TrackId[];
  blurb: string;
  build: string;
  roles: string[];
  skills: string[];
  how: string;
  stipend?: string;
}

export interface Elective {
  code: string;
  name: string;
  kind: "PE" | "PC/PE" | "PC";
  l: number;
  t: number;
  p: number;
  c: number;
  tracks: Partial<Record<TrackId, ElectiveTag>>;
  why: string;
  ai: string;
}

export interface RoadmapPhase {
  id: string;
  when: string;
  title: string;
  items: Record<PriorityMode, string[]>;
}

export interface CrashWeek {
  id: string;
  week: number;
  title: string;
  why: string;
  tasks: { id: string; text: string }[];
}

export interface AiRow {
  task: string;
  level: AiLevel;
  detail: string;
  field: string;
}
