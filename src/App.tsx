import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-sans">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <footer className="max-w-5xl mx-auto px-6 py-10 text-center text-muted text-xs">
        © {new Date().getFullYear()} Erfan YousefMoumji
      </footer>
    </div>
  );
}
