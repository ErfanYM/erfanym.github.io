import { projects } from "../content/projects";
import { profile } from "../content/profile";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <h2 className="font-display text-3xl text-ink mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="block p-6 rounded-xl border border-line hover:border-accent transition-colors"
          >
            <h3 className="font-display text-lg text-ink mb-2">{project.title}</h3>
            <p className="text-muted text-sm mb-4 leading-relaxed">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-line/60 text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <p className="text-muted text-sm mt-8">
        More on{" "}
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-accent underline">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
