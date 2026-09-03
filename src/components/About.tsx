import { profile } from "../content/profile";
import { skillGroups } from "../content/skills";
import { education } from "../content/education";

const hasFamiliar = skillGroups.some((g) => g.items.some((i) => i.familiar));

export default function About() {
  const [lead, ...rest] = profile.aboutParagraphs;

  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <h2 className="font-display text-section text-ink">About</h2>

      <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-20">
        <div className="max-w-measure">
          <p className="leading-relaxed text-ink [&::first-letter]:float-left [&::first-letter]:mr-2 [&::first-letter]:font-display [&::first-letter]:text-5xl [&::first-letter]:leading-[0.85]">
            {lead}
          </p>
          {rest.map((paragraph, i) => (
            <p key={`about-p-${i}`} className="mt-5 leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <dt className="meta mb-3 text-accentInk">{group.label}</dt>
              <dd className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-ink">
                {group.items.map((item) => (
                  <span key={item.name} className="whitespace-nowrap">
                    {item.name}
                    {item.familiar && (
                      <span aria-hidden="true" className="pl-0.5 text-muted">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          ))}

          <div>
            <dt className="meta mb-3 text-accentInk">Education</dt>
            {education.map((entry) => (
              <dd key={entry.school} className="mb-4 text-sm">
                <span className="block text-ink">{entry.degree}</span>
                <span className="block text-muted">{entry.school}</span>
                <span className="meta mt-1 block text-muted">{entry.dates}</span>
              </dd>
            ))}
          </div>

          {hasFamiliar && (
            <div>
              <p className="border-t border-line pt-4 text-xs leading-relaxed text-muted">
                <span aria-hidden="true">·</span> marks working knowledge rather than
                hands-on project experience.
              </p>
            </div>
          )}
        </dl>
      </div>
    </section>
  );
}
