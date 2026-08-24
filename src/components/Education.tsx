import { education } from "../content/education";

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <h2 className="font-display text-3xl text-ink mb-8">Education</h2>
      {education.map((entry) => (
        <div key={entry.school}>
          <h3 className="font-display text-xl text-ink">{entry.school}</h3>
          <p className="text-muted text-sm mb-1">{entry.location}</p>
          <p className="text-ink mb-3">{entry.degree}</p>
          <p className="text-muted text-sm">
            Relevant coursework: {entry.coursework.join(", ")}
          </p>
        </div>
      ))}
    </section>
  );
}
