import { useEffect, useState } from "react";
import { projects } from "../content/projects";
import { profile } from "../content/profile";

const SLIDE_DURATION = 6000;
const STATUS_COLOR = "#6B7F5E";

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const tick = 50;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (tick / SLIDE_DURATION) * 100;
        if (next >= 100) {
          setCurrent((c) => (c + 1) % projects.length);
          return 0;
        }
        return next;
      });
    }, tick);
    return () => clearInterval(id);
  }, [playing, current]);

  function goTo(i: number) {
    setCurrent(i);
    setProgress(0);
  }

  function prev() {
    goTo((current - 1 + projects.length) % projects.length);
  }

  function next() {
    goTo((current + 1) % projects.length);
  }

  const project = projects[current];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <div className="text-center mb-10">
        <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br from-accentInk to-accent text-white mb-4">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold bg-gradient-to-r from-accentInk to-accent bg-clip-text text-transparent mb-3">
          Featured Projects
        </h2>
        <p className="text-muted">Showcasing real systems across data, backend, and full-stack work</p>
      </div>

      <div
        className="relative rounded-2xl overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${hexToRgba(project.color, 0.95)}, rgba(20, 15, 12, 0.92))`,
        }}
      >
        <span
          className="absolute -top-4 left-6 font-display font-bold text-[7rem] leading-none opacity-10 select-none pointer-events-none"
          aria-hidden="true"
        >
          {String(current + 1).padStart(2, "0")}
        </span>

        <div className="relative px-6 py-8 md:px-10 md:py-12">
          <div className="flex items-start justify-between mb-6">
            <span className="inline-flex items-center text-xs px-3 py-1.5 rounded-full bg-white/15 font-medium">
              {current + 1} / {projects.length}
            </span>
            <button
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause autoplay" : "Resume autoplay"}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors"
            >
              {playing ? (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" />
                  <rect x="14" y="5" width="4" height="14" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <polygon points="6 4 20 12 6 20" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            <span
              className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ backgroundColor: hexToRgba("#000000", 0.25) }}
            >
              {project.category}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ backgroundColor: hexToRgba(STATUS_COLOR, 0.9) }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              {project.status}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-4xl font-semibold mb-4 max-w-2xl">
            {project.title}
          </h3>
          <p className="text-white/85 max-w-2xl leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: hexToRgba("#000000", 0.25) }}
              >
                {t}
              </span>
            ))}
          </div>

          <ul className="flex flex-col gap-2 max-w-2xl">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-white/85 leading-relaxed">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" className="mt-0.5 shrink-0 text-white/70">
                  <path d="M12 2l1.9 5.8L20 9l-5.8 1.9L12 17l-1.9-6.1L4 9l6.1-1.2L12 2z" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={prev}
          aria-label="Previous project"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next project"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="relative flex items-center justify-center gap-2 pb-4">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => goTo(i)}
              aria-label={`Go to ${p.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-6 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="h-1 bg-white/10">
          <div
            className="h-full bg-white/80 transition-[width] duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-6">
        {projects.map((p, i) => (
          <button
            key={p.title}
            onClick={() => goTo(i)}
            className="rounded-lg overflow-hidden border-2 transition-colors text-left"
            style={{ borderColor: i === current ? p.color : "transparent" }}
          >
            <div
              className="h-14 flex items-center justify-center text-white text-xs font-semibold px-2 text-center"
              style={{ background: `linear-gradient(135deg, ${p.color}, rgba(20,15,12,0.85))` }}
            >
              {p.title.split(" ").slice(0, 2).join(" ")}
            </div>
          </button>
        ))}
      </div>

      <p className="text-muted text-sm mt-8 text-center">
        More on{" "}
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-accentInk underline">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
