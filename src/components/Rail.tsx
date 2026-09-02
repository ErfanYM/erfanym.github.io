import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

/** Stable identity so the observer effect does not re-run every render. */
const IDS = SECTIONS.map((s) => s.id);

export default function Rail() {
  const active = useActiveSection(IDS);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });
  const progress = reduced ? scrollYProgress : smoothProgress;

  return (
    <>
      {/* Desktop: sticky index rail */}
      <aside className="hidden w-rail shrink-0 lg:block">
        <nav
          aria-label="Sections"
          className="sticky top-0 flex h-screen flex-col justify-center gap-1"
        >
          {SECTIONS.map((section, i) => {
            const isActive = active === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`meta relative py-1 pl-4 transition-colors duration-200 ease-out ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="rail-indicator"
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 bg-accent"
                    transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="px-2 text-muted">/</span>
                {section.label}
              </a>
            );
          })}
          <div className="mt-8 border-t border-line pl-4 pt-4">
            <ThemeToggle />
          </div>
        </nav>
      </aside>

      {/* Mobile / tablet: progress line + anchor row */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur lg:hidden">
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="h-0.5 origin-left bg-accent"
        />
        <nav
          aria-label="Sections"
          className="flex items-center justify-between gap-4 px-6 py-2"
        >
          <div className="flex gap-4 overflow-x-auto">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={active === section.id ? "location" : undefined}
                className={`meta whitespace-nowrap transition-colors ${
                  active === section.id ? "text-ink" : "text-muted"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </>
  );
}
