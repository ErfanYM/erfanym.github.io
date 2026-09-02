import { motion, useReducedMotion } from "motion/react";
import { workGroups } from "../content/work";
import WorkRow from "./WorkRow";

export default function Work() {
  const reduced = useReducedMotion();

  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <h2 className="font-display text-section text-ink">Work</h2>
      <p className="meta mt-3 text-muted">
        Projects first — the data engineering evidence. Employment follows.
      </p>

      <div className="mt-16 space-y-16">
        {workGroups.map((group) => (
          <div key={group.label}>
            <h3 className="meta mb-2 text-accentInk">{group.label}</h3>
            <motion.div
              initial={reduced ? false : "hidden"}
              whileInView="shown"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                shown: { transition: { staggerChildren: 0.06 } },
              }}
              className="border-b border-line"
            >
              {group.entries.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    shown: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
                    },
                  }}
                >
                  <WorkRow entry={entry} index={i + 1} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
