import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { WorkEntry } from "../content/types";
import { highlightMetrics } from "../lib/metrics";

/** Stack tags in this set render at full ink weight — the on-target vocabulary. */
const DATA_TAGS = new Set([
  "PySpark",
  "Delta Lake",
  "Databricks",
  "Unity Catalog",
  "T-SQL",
  "SQL Server",
  "Star Schema",
  "ETL",
  "PostgreSQL",
  "MySQL",
  "Pandas",
  "Data Modeling",
  "AWS",
]);

/** The sheet printing: the hairline draws left-to-right… */
const LINE_VARIANTS = {
  hidden: { scaleX: 0 },
  shown: {
    scaleX: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

/** …and the row's text rises in just behind its own line. */
const CONTENT_VARIANTS = {
  hidden: { opacity: 0, y: 12 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.08, ease: [0, 0, 0.2, 1] as const },
  },
};

interface Props {
  entry: WorkEntry;
  /** 1-based display index within its group. */
  index: number;
}

export default function WorkRow({ entry, index }: Props) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();

  return (
    <div className="relative">
      {/* Under reduced motion no variant is applied at all, so the line renders
          at its CSS default — fully drawn, never stranded at scaleX(0). */}
      <motion.span
        aria-hidden="true"
        variants={reduced ? undefined : LINE_VARIANTS}
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-line"
      />
      <motion.div variants={reduced ? undefined : CONTENT_VARIANTS}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((v) => !v)}
        className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 py-5 text-left transition-colors duration-150 hover:bg-surface md:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,14rem)_9rem_2rem] md:items-center"
      >
        <span className="meta pt-1 text-muted md:pt-0">
          {String(index).padStart(2, "0")}
        </span>

        <span className="min-w-0">
          <span className="block text-row font-medium text-ink">{entry.title}</span>
          <span className="mt-1 block text-sm text-muted">{entry.subtitle}</span>
        </span>

        <span className="col-start-2 mt-3 flex flex-wrap gap-x-3 gap-y-1 md:col-start-3 md:mt-0">
          {entry.stack.map((tag) => (
            <span
              key={tag}
              className={`meta ${DATA_TAGS.has(tag) ? "text-ink" : "text-muted"}`}
            >
              {tag}
            </span>
          ))}
        </span>

        <span className="col-start-2 mt-2 meta text-muted md:col-start-4 md:mt-0">
          {entry.span ?? ""}
        </span>

        <span
          aria-hidden="true"
          className={`col-start-3 row-start-1 self-start text-lg text-muted transition-transform duration-200 ease-out group-hover:text-ink md:col-start-5 md:row-start-auto md:self-center ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      </motion.div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduced
                ? { duration: 0 }
                : { type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.15 } }
            }
            className="overflow-hidden"
          >
            <div className="grid gap-4 pb-8 pl-0 pt-1 md:grid-cols-[2.5rem_minmax(0,1fr)] md:pl-0">
              <div aria-hidden="true" className="hidden md:block" />
              <div className="max-w-measure">
                {entry.summary && (
                  <p className="mb-4 text-[0.95rem] leading-relaxed text-muted">
                    {highlightMetrics(entry.summary)}
                  </p>
                )}
                <ul className="space-y-3">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={`${entry.id}-${i}`}
                      className="relative pl-5 text-[0.95rem] leading-relaxed text-ink before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-line"
                    >
                      {highlightMetrics(bullet)}
                    </li>
                  ))}
                </ul>
                {entry.link && (
                  <a
                    href={entry.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="meta mt-5 inline-block text-accentInk underline decoration-line underline-offset-4 transition-colors hover:decoration-current"
                  >
                    {entry.link.label} ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
