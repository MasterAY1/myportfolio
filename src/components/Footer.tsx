"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Mail, MessageSquare } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 border-t border-zinc-800/80 bg-[#070709] text-zinc-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-6 h-6 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-300 font-bold">
            AY
          </div>
          <div>
            <span className="text-zinc-200 font-medium">{profile.fullName}</span> ({profile.publicName})
            <span className="text-zinc-600 mx-2">•</span>
            <span>{profile.handle}</span>
          </div>
        </div>

        {/* Center: Quick links */}
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 flex items-center gap-1.5 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-zinc-200 flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <a
            href={profile.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 flex items-center gap-1.5 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-4">
          <span>© 2026 Master_AY</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
