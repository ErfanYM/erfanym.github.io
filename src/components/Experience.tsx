import { useState } from "react";
import { experience } from "../content/experience";

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const entry = experience[selected];

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl text-ink mb-3">Professional Journey</h2>
        <p className="text-muted">Timeline of roles, projects, and growth</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-72 shrink-0 rounded-xl border border-line overflow-hidden">
          {experience.map((e, i) => {
            const isSelected = i === selected;
            return (
              <button
                key={e.title + e.company}
                onClick={() => setSelected(i)}
                style={
                  isSelected
                    ? { backgroundColor: hexToRgba(e.color, 0.12), borderLeftColor: e.color }
                    : { borderLeftColor: "transparent" }
                }
                className={`w-full text-left px-4 py-3 border-l-2 transition-colors ${
                  isSelected ? "" : "hover:bg-line/40"
                } ${i > 0 ? "border-t border-t-line" : ""}`}
              >
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: e.color }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">{e.company}</p>
                    <p className="text-xs text-muted">{e.dates}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex-1 rounded-xl border border-line p-6">
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors"
              style={{
                background: `linear-gradient(135deg, ${entry.color}, ${hexToRgba(entry.color, 0.6)})`,
              }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xl text-ink">{entry.title}</h3>
              <p className="font-medium" style={{ color: entry.color }}>
                {entry.company}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-line text-muted">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {entry.dates}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-line text-muted">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {entry.location}
            </span>
            <span
              className="inline-flex items-center text-xs px-3 py-1.5 rounded-full text-white font-medium"
              style={{ backgroundColor: entry.color }}
            >
              {entry.employmentType}
            </span>
          </div>

          {entry.techStack.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {entry.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: hexToRgba(entry.color, 0.14), color: entry.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
              Key Achievements
            </p>
            <div className="columns-1 sm:columns-2 gap-3">
              {entry.achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="break-inside-avoid mb-3 flex items-start gap-2 rounded-lg border border-line px-3 py-2.5"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: entry.color }}
                  />
                  <p className="text-sm text-muted leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
