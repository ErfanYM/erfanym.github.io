import Rail from "./components/Rail";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import { profile } from "./content/profile";

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-ink">
      <div className="mx-auto flex w-full max-w-content gap-8 px-6">
        <Rail />
        <main className="min-w-0 flex-1 pt-16 lg:mr-[12%] lg:pt-0">
          <Intro />
          <Work />
          <About />
          <Contact />
        </main>
      </div>
      <footer className="mx-auto flex w-full max-w-content flex-col justify-between gap-2 border-t border-line px-6 pt-6 pb-6 sm:flex-row lg:mr-[12%]">
        <p className="meta text-muted">
          {profile.name} <span className="px-2 text-line">·</span> {profile.location}
        </p>
        <p className="meta text-muted">
          Built with React, Vite &amp; Tailwind
        </p>
      </footer>
    </div>
  );
}
