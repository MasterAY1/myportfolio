"use strict";

import { portfolioData } from "@/data/portfolio";
import { Layers, Cpu, Code2, Compass } from "lucide-react";

export function AboutSection() {
  const { profile } = portfolioData;

  const pillars = [
    {
      icon: Layers,
      title: "Full-Stack Development",
      description:
        "Architecting clean, type-safe web applications across Next.js, React, Python, and FastAPI with robust database schemas in PostgreSQL."
    },
    {
      icon: Cpu,
      title: "AI & RAG Solutions",
      description:
        "Building practical Retrieval-Augmented Generation systems, vector embedding pipelines with pgvector, and seamless multimodal LLM integrations."
    },
    {
      icon: Code2,
      title: "Pragmatic Engineering",
      description:
        "Writing clean, maintainable code with strict attention to performance, security, and intuitive user experiences that scale gracefully."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-zinc-800/60 bg-[#0c0c0f]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Compass className="w-3.5 h-3.5" />
            <span>About The Builder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering products that bridge intelligent ideas with practical utility.
          </h2>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Bio Story */}
          <div className="lg:col-span-6 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed">
            {profile.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                Primary: Next.js + React
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                Backend: Python + FastAPI
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                Storage: PostgreSQL + pgvector
              </span>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors space-y-2.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center text-zinc-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-zinc-100">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed pl-12">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
