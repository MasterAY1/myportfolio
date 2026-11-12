"use strict";
"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2, FolderGit2, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<"all" | "ai" | "fullstack" | "fintech">("all");

  const filterTabs = [
    { label: "All Featured", value: "all" as const },
    { label: "AI & RAG Systems", value: "ai" as const },
    { label: "FinTech & Core Banking", value: "fintech" as const },
    { label: "Full-Stack & Web", value: "fullstack" as const },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.filterCategory === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-zinc-800/60 bg-[#0c0c0f]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Work & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured solutions engineered for real-world impact.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              From RAG-driven education engines and academic evaluation platforms to enterprise banking operations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeFilter === tab.value
                    ? "bg-zinc-800 text-white font-medium shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-8 sm:space-y-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative p-6 sm:p-9 rounded-2xl bg-[#111114] border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
                      {project.isCaseStudy && <ShieldCheck className="w-3 h-3 text-amber-400" />}
                      <span>{project.statusBadge}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1 group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-400">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Key Technical Architectural Features:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-zinc-300">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400/90 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Stack & Actions Column */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 pt-2 lg:pt-0 lg:pl-6 lg:border-l lg:border-zinc-800/80">
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Technologies & Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-200 border border-zinc-800 text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-mono font-medium transition-colors border border-zinc-700/60"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                      </a>
                    )}

                    {project.isCaseStudy && (
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Anonymized Enterprise Case Study</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
