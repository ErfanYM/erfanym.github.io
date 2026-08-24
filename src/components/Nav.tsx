import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../content/profile";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const brandInitials = profile.name
  .split(" ")
  .map((n) => n[0])
  .join("");

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-bg/80 border-b border-line">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="font-display text-lg text-ink">
          {brandInitials}
        </a>
        <div className="flex items-center gap-3 md:gap-6">
          {links.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden sm:inline text-sm text-muted hover:text-accentInk transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="sm:hidden text-xl leading-none text-ink px-2 py-1 rounded-md hover:text-accentInk transition-colors"
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="sm:hidden border-t border-line bg-bg">
          <div className="flex flex-col px-6 py-3 gap-3">
            {links.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-accentInk transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
