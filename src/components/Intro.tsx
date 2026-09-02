import { profile } from "../content/profile";
import HeadshotSwap from "./HeadshotSwap";

export default function Intro() {
  return (
    <section
      id="intro"
      className="flex min-h-[88vh] scroll-mt-24 flex-col justify-center py-24"
    >
      <p className="meta mb-6 text-accentInk">Open to data engineering roles</p>

      <h1 className="font-display text-display text-ink lg:-mr-[16%]">
        {profile.name}
      </h1>

      <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-measure">
          <p className="text-xl text-ink md:text-2xl">{profile.title}</p>
          <p className="mt-3 leading-relaxed text-muted">{profile.tagline}</p>
          <p className="meta mt-8 text-muted">
            Toronto, ON <span className="px-2 text-line">·</span> B.Sc CS, York
            <span className="px-2 text-line">·</span> Available now
          </p>
          <a
            href="#work"
            className="group mt-8 inline-flex items-center gap-2 text-ink"
          >
            <span className="relative">
              See the work
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-250 ease-out group-hover:scale-x-100" />
            </span>
            <span aria-hidden="true" className="transition-transform duration-200 ease-out group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <HeadshotSwap className="self-start md:self-end" />
      </div>
    </section>
  );
}
