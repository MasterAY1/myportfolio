"use strict";

import { portfolioData } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function Hero() {
  const { profile } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-subtle">
      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/40 via-transparent to-[#09090b] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-8 backdrop-blur-sm">
          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
          <span>{profile.location}</span>
          <span className="text-zinc-600">•</span>
          <span className="text-emerald-400 font-medium">{profile.availability}</span>
        </div>

        {/* Main Headings */}
        <div className="max-w-4xl space-y-6">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-400">
              {profile.fullName} ({profile.publicName})
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              {profile.tagline}
            </h1>
          </div>

          <p className="text-xl sm:text-2xl font-light text-zinc-300 italic tracking-tight">
            &ldquo;{profile.headline}&rdquo;
          </p>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
            Specializing in modern web applications, AI-powered solutions, and high-impact digital products. 
            Bridging frontend polish with resilient backend engineering using Next.js, Python, FastAPI, and PostgreSQL.
          </p>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-white font-medium text-sm font-mono transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5"
            >
              <span>Explore Featured Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-800 border border-zinc-800 text-sm font-mono transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-transparent text-zinc-400 hover:text-zinc-100 text-sm font-mono transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Stats & Capabilities Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {profile.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
