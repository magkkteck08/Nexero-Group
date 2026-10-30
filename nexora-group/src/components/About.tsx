import React from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
        {/* Corporate Profile */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <Building2 className="w-4 h-4" />
            <span>About The Company</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Practical Problem-Solving Backed by Strategic Execution
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed pt-2">
            Nexora Group is a multi-sector business focused on technology, digital innovation and commercial opportunities. We combine practical problem-solving, creativity and strategic thinking to develop solutions that help businesses and individuals move forward.
          </p>
        </div>

        {/* Founder & Leadership Pillar */}
        <div className="lg:col-span-5 bg-zinc-900/60 border border-zinc-800 rounded-lg p-7 space-y-5">
          
          <div className="flex items-center gap-4">
            {/* Founder Image Box */}
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-800 shrink-0 shadow-inner">
              <Image 
                src="/founder.jpg" 
                alt="Founder & CTO" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Leadership &amp; Direction
              </p>
              <h3 className="text-base font-bold text-white mt-1">
                Founder &amp; CTO
              </h3>
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Spearheading product development, technology architecture, and commercial business strategy across Nexora Group. Focused on translating complex technical and market challenges into sustainable digital products and real-world commercial ventures.
          </p>

          {/* Technical Strategy Tags */}
          <div className="pt-4 border-t border-zinc-800 flex flex-wrap gap-2 text-xs text-zinc-300">
            <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800">
              CTO
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800">
              Product Architecture
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800">
              Technical Strategy
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800">
              Game Enthusiast
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800">
              Commercial Operations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}