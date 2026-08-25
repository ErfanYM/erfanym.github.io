import { useState, type FormEvent } from "react";
import { profile } from "../content/profile";

const infoRows = [
  {
    label: "Email",
    value: profile.email,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: profile.phone,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: profile.location,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `${message}${name ? `\n\n— ${name}` : ""}${email ? `\n${email}` : ""}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl text-ink mb-3">Get In Touch</h2>
        <span className="inline-block w-16 h-1 rounded-full bg-accentInk mb-4" />
        <p className="text-muted">Have a role, project, or question in mind? I'd love to hear from you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-xl text-ink mb-6">Contact Information</h3>
          <div className="flex flex-col gap-5 mb-8">
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-accentInk/10 text-accentInk shrink-0">
                  {row.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{row.label}</p>
                  <p className="text-sm text-muted">{row.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-accentInk/10 border border-accentInk/20 p-5">
            <p className="font-semibold text-ink mb-1">Let's Connect!</p>
            <p className="text-sm text-muted leading-relaxed">
              Whether it's a data engineering role, a collaboration idea, or just a question about
              one of my projects — send a message and I'll get back to you soon.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-ink mb-1.5">
              Your Name (Optional)
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className="w-full px-4 py-2.5 rounded-lg border border-line bg-bg text-ink placeholder:text-muted/60 focus:outline-none focus:border-accentInk transition-colors"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-ink mb-1.5">
              Your Email *
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-line bg-bg text-ink placeholder:text-muted/60 focus:outline-none focus:border-accentInk transition-colors"
            />
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-ink mb-1.5">
              Subject *
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Let's work together"
              className="w-full px-4 py-2.5 rounded-lg border border-line bg-bg text-ink placeholder:text-muted/60 focus:outline-none focus:border-accentInk transition-colors"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-ink mb-1.5">
              Message *
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me a bit about what you have in mind..."
              className="w-full px-4 py-2.5 rounded-lg border border-line bg-bg text-ink placeholder:text-muted/60 focus:outline-none focus:border-accentInk transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accentInk text-white font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
          <p className="text-xs text-muted text-center">
            Opens your email client with this message pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}
