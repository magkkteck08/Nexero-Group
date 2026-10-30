import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorldClock from "../components/WorldClock";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Ventures from "../components/Ventures";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WorldClock />
        <Services />
        <Portfolio />
        <About />
        <Ventures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}