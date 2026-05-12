import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Results } from "./sections/Results";
import { Process } from "./sections/Process";
import { About } from "./sections/About";
import { Testimonials } from "./sections/Testimonials";
import { CTABand } from "./sections/CTABand";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Process />
        <About />
        <Testimonials />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
