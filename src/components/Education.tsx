import { education } from "../content/education";

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <div className="text-center mb-16">
        <div className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-accentInk text-white mb-4">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        </div>
        <h2 className="font-display text-3xl text-ink mb-3">Education</h2>
        <span className="inline-block w-16 h-1 rounded-full bg-accentInk" />
      </div>

      <div className="relative pl-10 md:pl-12">
        <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-line" />

        <div className="flex flex-col gap-10">
          {education.map((entry) => (
            <div key={entry.school} className="relative">
              <span className="absolute -left-10 md:-left-12 top-9 w-3 h-3 rounded-full bg-accentInk ring-4 ring-bg" />

              <div className="rounded-xl border border-line overflow-hidden max-w-md shadow-sm">
                <div className="relative bg-gradient-to-br from-accentInk to-accent text-white px-6 py-6">
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                      <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
                    </svg>
                  </div>
                  <div className="flex items-start gap-2 pr-14 mb-3">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-1 shrink-0">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                    </svg>
                    <h3 className="font-display text-lg leading-snug">{entry.degree}</h3>
                  </div>
                  <p className="text-sm opacity-90 mb-4">{entry.school}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/20">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    {entry.dates}
                  </span>
                </div>
                <div className="bg-bg px-6 py-4 flex items-center gap-1.5 text-sm text-muted">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {entry.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
