import { profile } from "../content/profile";
import { siGithub } from "simple-icons";

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const socialLinks = [
  { href: profile.github, label: "GitHub", icon: siGithub.path },
  { href: profile.linkedin, label: "LinkedIn", icon: LINKEDIN_PATH },
  { href: "#projects", label: "Projects", icon: null, kind: "code" as const },
  { href: `mailto:${profile.email}`, label: "Email", icon: null, kind: "mail" as const },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h1 className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl text-ink mb-4">
        {profile.name}
      </h1>
       <h1 className="text-accentInk font-medium text-3xl mb-3">{profile.title}</h1>
      <p className="text-muted text-lg max-w-xl mb-10">{profile.tagline}</p>

      <div className="flex items-center gap-4 mb-10">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={link.label}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-line text-ink hover:border-accentInk hover:text-accentInk transition-colors"
          >
            {link.icon ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d={link.icon} />
              </svg>
            ) : link.kind === "code" ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            )}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-ink text-bg font-medium hover:opacity-90 transition-opacity"
        >
          Get In Touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 rounded-full border border-ink text-ink font-medium hover:bg-ink hover:text-bg transition-colors"
        >
          View My Work
        </a>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-line flex items-start justify-center pt-2"
      >
        <span className="w-1 h-2 rounded-full bg-muted" />
      </a>
    </section>
  );
}
