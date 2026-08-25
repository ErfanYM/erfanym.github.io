import { profile } from "../content/profile";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-lg text-ink mb-2">{profile.name}</p>
          <p className="text-sm text-muted leading-relaxed">{profile.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink mb-3">Quick Links</p>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-accentInk transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink mb-3">Contact Info</p>
          <div className="flex flex-col gap-2 text-sm text-muted">
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="text-center text-xs text-muted py-6">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
