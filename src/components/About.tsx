import { skills } from "../content/skills";
import SkillIconBadge from "./SkillIcon";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <h2 className="font-display text-3xl text-ink mb-8">About</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillIconBadge key={skill.slug} slug={skill.slug} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
