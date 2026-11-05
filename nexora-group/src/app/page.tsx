import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustAndMetrics from "../components/TrustAndMetrics";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Ventures from "../components/Ventures";
import Contact from "../components/Contact";
import WorldClock from "../components/WorldClock";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-zinc-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustAndMetrics />
        <Portfolio />
        <Services />
        <About />
        <Ventures />
        <Contact />
        <WorldClock />
      </main>
      <Footer />
    </div>
  );
}