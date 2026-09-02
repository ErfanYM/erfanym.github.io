import { useState } from "react";
import { profile } from "../content/profile";
import realHeadshot from "../assets/realHeadshot.webp";
import emoji from "../assets/emoji.webp";

interface Props {
  className?: string;
}

export default function HeadshotSwap({ className = "" }: Props) {
  const [swapped, setSwapped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setSwapped((s) => !s)}
      aria-label={swapped ? "Show photo" : "Show avatar"}
      className={`group relative block aspect-square w-40 shrink-0 cursor-pointer rounded-full shadow-[0_0_50px_-10px_rgb(var(--accent)/0.55)] md:w-52 ${className}`}
    >
      <img src={emoji} alt="" className="absolute inset-0 h-full w-full rounded-full object-cover" />
      <img
        src={realHeadshot}
        alt={profile.name}
        className={`absolute inset-0 h-full w-full rounded-full object-cover transition-opacity duration-300 ease-out group-hover:opacity-0 ${
          swapped ? "opacity-0" : "opacity-100"
        }`}
      />
    </button>
  );
}
