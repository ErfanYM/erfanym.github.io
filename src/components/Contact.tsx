import { profile } from "../content/profile";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <h2 className="font-display text-3xl text-ink mb-8">Contact</h2>
      <div className="flex flex-col gap-2 text-ink">
        <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
          {profile.email}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
          {profile.linkedin.replace("https://", "")}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
          {profile.github.replace("https://", "")}
        </a>
      </div>
    </section>
  );
}
