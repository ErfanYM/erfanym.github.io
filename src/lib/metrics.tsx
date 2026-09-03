import type { ReactNode } from "react";

/**
 * Matches a standalone numeric token, optionally an en-dash range, optionally
 * carrying a %/K/M unit and a trailing +. Lookaround rejects digits that are
 * part of an identifier (SHA256), a part number (MPU-6050), or a compound
 * (2-hop) — those are not metrics and highlighting them reads as noise.
 */
const METRIC_RE = /(?<![\w-])(\$?\d[\d,.]*(?:–\d[\d,.]*)?(?:%|K|M)?\+?)(?![\w-])/g;

/** A bare four-digit year — no currency prefix, unit suffix or trailing "+". */
const CALENDAR_YEAR_RE = /^(?:19|20)\d{2}$/;

/**
 * Splits prose into alternating plain strings and highlighted metric spans.
 * Pure and render-time only — content files stay free of markup.
 */
export function highlightMetrics(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(METRIC_RE)) {
    // A bare 19xx/20xx token with no unit, currency or "+" is a calendar year,
    // not an impact metric — leave it as prose.
    if (CALENDAR_YEAR_RE.test(match[1])) continue;
    const start = match.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    out.push(
      <span className="metric" data-metric key={key++}>
        {match[0]}
      </span>,
    );
    last = start + match[0].length;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}
