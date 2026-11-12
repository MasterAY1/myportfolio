import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Master_AY (Adenuga Ayomide) — Full-Stack Developer & AI Solutions Builder",
  description:
    "Portfolio of Adenuga Ayomide (Master_AY), a Full-Stack Developer & AI Solutions Builder based in Lagos, Nigeria. Specializing in Next.js, React, Python, FastAPI, Gemini, and RAG systems.",
  keywords: [
    "Master_AY",
    "Adenuga Ayomide",
    "Full-Stack Developer",
    "AI Solutions Builder",
    "Python Developer",
    "FastAPI",
    "Next.js",
    "React",
    "RAG",
    "Lagos Nigeria Developer",
    "EduQuiz AI",
    "ThesisAI"
  ],
  authors: [{ name: "Adenuga Ayomide (Master_AY)" }],
  openGraph: {
    title: "Master_AY — Full-Stack Developer & AI Solutions Builder",
    description: "Turning ideas into intelligent, functional digital products.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#f4f4f5]">
        {children}
      </body>
    </html>
  );
}
