import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorldClock from "../components/WorldClock";
import TrustAndMetrics from "../components/TrustAndMetrics";
import Ventures from "../components/Ventures";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import FlagshipLab from "../components/FlagshipLab";
import About from "../components/About";
import VirtualHQ from "../components/VirtualHQ";
import Partnerships from "../components/Partnerships";
import NewsAndInsights from "../components/NewsAndInsights";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen text-[#1E1B2E]">
      {/* 01. Header & Navigation */}
      <Navbar />

      <main>
        {/* 02 & 03. Hero + 3 Business Identities */}
        <Hero />
        {/* 04. Our Venture Ecosystem (#ventures) */}
        <Ventures />  
        {/* 05. What We Do (#services) */}
        <Services />
        {/* 09. Nexora Virtual Headquarters (#headquarters) */}
        <VirtualHQ />
        <Portfolio />
        <WorldClock />
        <TrustAndMetrics />
        {/* 06. Innovation & Technology Showcase (#work) */}
        <FlagshipLab />
        {/* 07 & 08. About Nexora Group + Mission, Vision & Core Values (#about) */}
        <About />
        {/* 10. Partnerships & Investment (#partnerships) */}
        <Partnerships />
        {/* 11. News & Insights (#news) */}
        <NewsAndInsights />
        {/* 12. Contact & Project Enquiries (#contact) */}
        <Contact />
        {/* 13. Newsletter Subscription */}
        <Newsletter />
      </main>

      {/* 14. Comprehensive 5-Column Corporate Footer */}
      <Footer />
    </div>
  );
}