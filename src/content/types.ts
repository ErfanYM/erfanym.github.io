/** One row in the Work section — a job or a project, rendered identically. */
export interface WorkEntry {
  /** Stable anchor id, kebab-case. */
  id: string;
  /** Role title or project name. */
  title: string;
  /** Employer, or the project's one-line category. */
  subtitle: string;
  /** Mono date range, e.g. "AUG 2025 — FEB 2026". Null for undated projects. */
  span: string | null;
  /** Mono stack tags shown on the collapsed row. */
  stack: string[];
  /** Lead paragraph revealed on expand. Omitted where the bullets speak for themselves. */
  summary?: string;
  /** Bullets revealed on expand. Plain strings — metric highlighting happens at render time. */
  bullets: string[];
  /** Optional outbound link shown at the foot of the expanded row. */
  link?: { href: string; label: string };
}

export interface WorkGroup {
  /** Uppercase group label, e.g. "SELECTED PROJECTS". */
  label: string;
  entries: WorkEntry[];
}

export interface SkillGroup {
  /** Uppercase group label, e.g. "DATA & CLOUD". */
  label: string;
  items: { name: string; familiar?: boolean }[];
}
