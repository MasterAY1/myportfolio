"use strict";
"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, MessageSquare, Copy, Check, Send, ArrowUpRight, Sparkles } from "lucide-react";

export function ContactSection() {
  const { profile } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web Application",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending inquiry and mailto trigger
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      
      // Optionally open user default email client with structured pre-filled draft
      const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
        `[${formData.projectType}] ${formData.subject || "Project Inquiry"}`
      )}&body=${encodeURIComponent(
        `Hello Master_AY,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n`
      )}`;
      
      window.location.href = mailtoLink;
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Let&apos;s build something intelligent together.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Have a project in mind, an AI solution to build, or a full-stack platform to engineer? 
                Reach out directly or send a message through the form.
              </p>
            </div>

            {/* Quick Action Cards */}
            <div className="space-y-3">
              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-200 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      Direct Email
                    </div>
                    <div className="text-sm font-mono text-zinc-100 truncate">
                      {profile.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 flex items-center gap-1.5 transition-colors shrink-0 border border-zinc-700/50"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Chat Card */}
              <a
                href={profile.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-emerald-700/50 flex items-center justify-between gap-4 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      WhatsApp Messaging
                    </div>
                    <div className="text-sm font-mono text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {profile.whatsapp}
                    </div>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-zinc-800 group-hover:bg-emerald-900/40 text-xs font-mono text-zinc-200 group-hover:text-emerald-300 flex items-center gap-1.5 transition-colors border border-zinc-700/50">
                  <span>Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>

            {/* Location & Status */}
            <div className="pt-2 text-xs font-mono text-zinc-400 space-y-1.5">
              <p>📍 Location: {profile.location}</p>
              <p className="text-emerald-400">⚡ Status: {profile.availability}</p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#111114] border border-zinc-800/90 shadow-xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-800 flex items-center justify-center text-emerald-400 mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Message Prepared!
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-zinc-200">{formData.name}</strong>. 
                  Your inquiry draft has been initialized to <span className="font-mono text-zinc-300">{profile.email}</span>. 
                  I look forward to discussing your project!
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="projectType" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
                  >
                    <option value="Full-Stack Web Application">Full-Stack Web Application (Next.js / FastAPI)</option>
                    <option value="AI & RAG System">AI & RAG Knowledge Engine (Gemini / pgvector)</option>
                    <option value="Mobile / Enterprise Platform">Mobile / Enterprise Core Banking (Flutter / Supabase)</option>
                    <option value="Technical Consultation">Technical Consultation & Code Architecture</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Brief outline of what you're building"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="message" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Message *
                    </label>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your goals, timelines, and technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-white font-medium text-sm font-mono flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? (
                    <span>Preparing inquiry...</span>
                  ) : (
                    <>
                      <span>Send Direct Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
