import { useState } from "react";
import { profile } from "../content/profile";
import realHeadshot from "../assets/realHeadshot.png";
import emoji from "../assets/emoji.png";

export default function Hero() {
  const [swapped, setSwapped] = useState(false);

  return (
    <section
      id="home"
      className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12"
    >
      <div
        className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full shadow-[0_0_40px_-8px_var(--accent)] group cursor-pointer"
        onClick={() => setSwapped((s) => !s)}
      >
        <img
          src={emoji}
          alt={`${profile.name} memoji avatar`}
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
      <div>
        <p className="text-accent font-medium mb-2">{profile.title}</p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-4">
          {profile.name}
        </h1>
        <p className="text-muted max-w-xl leading-relaxed">{profile.blurb}</p>
      </div>
    </section>
  );
}
