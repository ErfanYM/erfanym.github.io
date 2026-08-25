import { useState } from "react";
import { profile } from "../content/profile";
import { skills } from "../content/skills";
import SkillIconBadge from "./SkillIcon";
import realHeadshot from "../assets/realHeadshot.webp";
import emoji from "../assets/emoji.webp";

export default function About() {
  const [swapped, setSwapped] = useState(false);

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <h2 className="font-display text-3xl text-ink mb-8">About</h2>
      <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
        <div
          className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full shadow-[0_0_40px_-8px_rgb(var(--accent))] group cursor-pointer"
          onClick={() => setSwapped((s) => !s)}
        >
          <img
            src={emoji}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
          <img
            src={realHeadshot}
            alt={profile.name}
            className={`absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ${
              swapped ? "opacity-0" : "opacity-100"
            } group-hover:opacity-0`}
          />
        </div>
        <p className="text-muted max-w-xl leading-relaxed">{profile.blurb}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillIconBadge key={skill.slug} slug={skill.slug} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
