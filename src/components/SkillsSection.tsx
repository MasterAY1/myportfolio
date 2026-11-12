"use strict";

import { portfolioData } from "@/data/portfolio";
import { Terminal, Database, Sparkles, Wrench } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;

  const categoryIcons = [
    Terminal,
    Database,
    Sparkles,
    Wrench
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-14 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tested skills & genuine production tools.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Technologies, frameworks, and AI workflows verified in shipped projects and active repositories.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((item) => (
                    <div
                      key={item.name}
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 transition-colors text-xs font-mono text-zinc-200"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-[10px] text-zinc-400 group-hover:text-zinc-300 transition-colors font-sans">
                        • {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
