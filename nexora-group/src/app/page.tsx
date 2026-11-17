import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorldClock from "../components/WorldClock";
import TrustAndMetrics from "../components/TrustAndMetrics";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import FlagshipLab from "../components/FlagshipLab";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen text-[#1E1B2E]">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <WorldClock />
        <Services />
        <TrustAndMetrics />
        <FlagshipLab />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}