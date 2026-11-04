import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustAndMetrics from "../components/TrustAndMetrics";
import Services from "../components/Services";
import WorldClock from "../components/WorldClock";
import Portfolio from "../components/Portfolio";
import FlagshipLab from "../components/FlagshipLab";
import About from "../components/About";
import Ventures from "../components/Ventures";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-blue-600 selection:text-white">
      {/* Global Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-full bg-blue-400/5 blur-[100px]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <TrustAndMetrics />
          <Services />
          <WorldClock />
          <Portfolio />
          <FlagshipLab />
          <About />
          <Ventures />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}