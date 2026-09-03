import { profile } from "../content/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const links = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <h2 className="font-display text-section text-ink">
        Let&rsquo;s build something.
      </h2>

      <a
        href={`mailto:${profile.email}`}
        className="group mt-10 inline-block text-xl text-ink md:text-3xl"
      >
        <span className="relative">
          {profile.email}
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-250 ease-out group-hover:scale-x-100" />
        </span>
      </a>

      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2">
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="meta flex items-center gap-2 p-2 text-muted transition-colors duration-150 hover:text-ink"
          >
            <Icon />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
