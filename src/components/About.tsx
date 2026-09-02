import { useState } from "react";
import { profile } from "../content/profile";
import realHeadshot from "../assets/realHeadshot.webp";
import emoji from "../assets/emoji.webp";

const firstName = profile.name.split(" ")[0];

const contactRows = [
  { label: "Email", value: profile.email },
  { label: "Location", value: profile.location },
];

export default function About() {
  const [swapped, setSwapped] = useState(false);

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl text-ink mb-3">About Me</h2>
        <span className="inline-block w-16 h-1 rounded-full bg-accentInk" />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
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

        <div className="flex-1">
          <h3 className="font-display text-2xl text-ink mb-4">Hi, I'm {firstName}</h3>
          <div className="flex flex-col gap-4 mb-6">
            {profile.aboutParagraphs.map((paragraph, i) => (
              <p key={i} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {contactRows.map((row) => (
              <p key={row.label} className="text-sm">
                <span className="text-accentInk font-medium">{row.label}: </span>
                <span className="text-ink">{row.value}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
