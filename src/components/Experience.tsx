import { experience } from "../content/experience";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <h2 className="font-display text-3xl text-ink mb-8">Experience</h2>
      <div className="flex flex-col gap-10">
        {experience.map((entry) => (
          <div key={entry.title + entry.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div>
                <p className="font-semibold text-ink">{entry.title}</p>
                <p className="italic text-muted">{entry.company}</p>
              </div>
              <p className="text-sm text-muted">
                {entry.location} · {entry.dates}
              </p>
            </div>
            <ul className="list-disc list-inside text-ink space-y-1 max-w-3xl">
              {entry.bullets.slice(0, 3).map((bullet) => (
                <li key={bullet} className="text-sm leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
