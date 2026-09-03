import Rail from "./components/Rail";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

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
    </div>
  );
}
