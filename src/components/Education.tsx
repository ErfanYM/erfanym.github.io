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

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-line -translate-x-1/2" />

        <div className="grid gap-10 md:grid-cols-2">
          {education.map((entry, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={entry.school}
                className={`relative w-full md:max-w-md ${
                  isLeft
                    ? "md:col-start-1 md:justify-self-end md:pr-10"
                    : "md:col-start-2 md:justify-self-start md:pl-10 md:-mt-24"
                }`}
              >
                <span
                  className={`hidden md:block absolute top-9 w-4 h-4 rounded-full border-2 border-accentInk bg-bg z-10 ${
                    isLeft ? "-right-[42px]" : "-left-[42px]"
                  }`}
                />

                <div className="rounded-xl border border-line overflow-hidden shadow-sm">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
