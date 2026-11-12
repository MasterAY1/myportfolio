export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isCaseStudy?: boolean;
  statusBadge: string;
  filterCategory: "all" | "ai" | "fullstack" | "fintech";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; tag: string }[];
}

export const portfolioData = {
  profile: {
    publicName: "Master_AY",
    fullName: "Adenuga Ayomide",
    handle: "@master_ay1",
    tagline: "Full-Stack Developer & AI Solutions Builder",
    headline: "Turning ideas into intelligent, functional digital products.",
    bio: [
      "I'm a developer and digital creator passionate about building modern web applications, AI-powered solutions, and digital products that solve real-world problems.",
      "I work across frontend and backend development, combining thoughtful UI/UX design with technologies like React, Next.js, Python, FastAPI, and PostgreSQL to transform ideas into practical, scalable products.",
      "I enjoy solving complex problems, experimenting with emerging technologies, and building products that make a real difference."
    ],
    location: "Lagos, Nigeria",
    availability: "Available for Remote Opportunities",
    email: "dngayomide@gmail.com",
    whatsapp: "08127382706",
    whatsappLink: "https://wa.me/2348127382706?text=Hi%20Master_AY%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!",
    github: "https://github.com/MasterAY1",
    stats: [
      { label: "Production & MVP Builds", value: "4+" },
      { label: "Engineering Disciplines", value: "Full-Stack + AI" },
      { label: "Database & Vector Systems", value: "PostgreSQL / pgvector" },
      { label: "Location & Collaboration", value: "Lagos / Remote" }
    ]
  },

  skills: [
    {
      title: "Core Languages & Frontend",
      description: "Building responsive, modern, and high-performance client applications.",
      skills: [
        { name: "Python", tag: "Language" },
        { name: "JavaScript", tag: "Language" },
        { name: "TypeScript", tag: "Language" },
        { name: "React", tag: "Frontend" },
        { name: "Next.js", tag: "Full-Stack" },
        { name: "Flutter", tag: "Mobile" },
        { name: "Tailwind CSS", tag: "Styling" },
        { name: "HTML5 & CSS3", tag: "Foundations" }
      ]
    },
    {
      title: "Backend & Database",
      description: "Robust asynchronous APIs, structured data models, and scalable architectures.",
      skills: [
        { name: "FastAPI", tag: "Backend API" },
        { name: "PostgreSQL", tag: "Relational DB" },
        { name: "Supabase", tag: "BaaS & Storage" },
        { name: "REST APIs", tag: "API Design" }
      ]
    },
    {
      title: "AI & Emerging Technologies",
      description: "Practical RAG pipelines, LLM integration, and intelligent automation.",
      skills: [
        { name: "Google Gemini", tag: "Multimodal LLM" },
        { name: "RAG Systems", tag: "Knowledge Retrieval" },
        { name: "pgvector", tag: "Vector Embeddings" },
        { name: "LLM Integration", tag: "Model Orchestration" },
        { name: "AI Automation", tag: "Workflow AI" },
        { name: "ChatGPT & Claude", tag: "Prompt Engineering" }
      ]
    },
    {
      title: "Tools & Workflow",
      description: "Productivity, version control, and design tooling.",
      skills: [
        { name: "Git", tag: "Version Control" },
        { name: "GitHub", tag: "Collaboration" },
        { name: "VS Code", tag: "IDE" },
        { name: "Figma", tag: "UI/UX Design" },
        { name: "Canva", tag: "Visuals" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "eduquiz-ai",
      number: "01",
      title: "EduQuiz AI",
      category: "AI & Educational Technology",
      tagline: "RAG-Powered Assessment & Exam Preparation Engine",
      description:
        "An AI-powered educational platform designed specifically for Nigerian students to transform study materials into interactive quizzes, structured assessments, and intelligent revision guides.",
      highlights: [
        "Uploads textbooks, slides, and scanned notes with semantic chunking and 768-d Gemini embeddings",
        "Indexes and retrieves study context through PostgreSQL and pgvector for accurate RAG querying",
        "Simulates official Nigerian exam formats (WAEC, JAMB, NECO, BECE) with instant CBT practice testing",
        "Dual-tier evaluation: automated scoring for structured queries + Gemini-powered critique for essay questions",
        "Gamified learner progress with streak tracking, XP points, and responsive dashboard analytics"
      ],
      technologies: ["Next.js", "Python", "FastAPI", "Google Gemini", "RAG", "PostgreSQL", "pgvector"],
      githubUrl: "https://github.com/MasterAY1/Eduquiz_AI",
      statusBadge: "Active MVP • Open Source",
      filterCategory: "ai"
    },
    {
      id: "thesis-ai",
      number: "02",
      title: "ThesisAI",
      category: "Academic Assessment Automation",
      tagline: "NMCN Rubric-Based Nursing Thesis Evaluation System",
      description:
        "An automated academic evaluation platform engineered to assist educators and researchers with evaluating nursing theses against the official NMCN grading rubric.",
      highlights: [
        "Automated rubric alignment evaluating methodology, literature review, and statistical rigor",
        "Generates structured, chapter-by-chapter academic critique and constructive revision guidance",
        "Asynchronous FastAPI backend processing long document sections without blocking UI",
        "Clean, distraction-free assessment review interface tailored for evaluators"
      ],
      technologies: ["Next.js", "Python", "FastAPI", "Tailwind CSS", "LLM Integration"],
      githubUrl: "https://github.com/MasterAY1/thesis-ai",
      statusBadge: "Production MVP",
      filterCategory: "ai"
    },
    {
      id: "icare-core-banking",
      number: "03",
      title: "ICARE Core Banking Platform",
      category: "FinTech & Enterprise Core Banking",
      tagline: "Microfinance Financial Operations & Loan Lifecycle Platform",
      description:
        "A comprehensive core banking management system built to digitize microfinance branch operations, field collections, loan underwriting, and double-entry general ledger accounting.",
      highlights: [
        "End-to-end loan application workflow, risk scoring, disbursements, and installment schedules",
        "Daily field agent collections tracking with instant receipt verification and audit trails",
        "Multi-branch financial ledger reconciliation with PostgreSQL ACID transaction guarantees",
        "Cross-platform client for field and branch staff built with Flutter and Supabase"
      ],
      technologies: ["Flutter", "FastAPI", "Supabase", "PostgreSQL", "REST APIs"],
      isCaseStudy: true,
      statusBadge: "Enterprise Case Study",
      filterCategory: "fintech"
    },
    {
      id: "lumina-ecommerce",
      number: "04",
      title: "Lumina E-Commerce",
      category: "Modern Digital Commerce",
      tagline: "High-Performance Modern Digital Storefront",
      description:
        "A modern e-commerce storefront showcasing fluid product presentation, real-time inventory filtering, persistent cart state hydration, and frictionless checkout navigation.",
      highlights: [
        "Frictionless product browsing with category filtering and instant price updates",
        "Optimized client-side cart management with localStorage persistence and quantity controls",
        "Accessible, mobile-first design responsive across all viewports and devices",
        "Structured REST API communication for catalog queries and checkout session initiation"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
      statusBadge: "Live Storefront Template",
      filterCategory: "fullstack"
    }
  ] as Project[]
};
