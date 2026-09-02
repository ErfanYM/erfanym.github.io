import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-sans">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
