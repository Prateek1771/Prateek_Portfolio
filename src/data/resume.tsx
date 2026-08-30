import { Icons } from "@/components/icons";

// Single source for the address so contact.email and the mailto: URL can't
// drift apart again (they were 5@ and 6@).
const EMAIL = "hitliprateek6@gmail.com";

export const DATA = {
  name: "Prateek Hitli",
  initials: "PH",
  url: "https://prateekhitli.com",
  location: "Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Karnataka,+India",
  description:
    "AI Engineer & Full Stack Developer. I build scalable systems and intelligent AI-powered solutions.",
  summary:
    "I’m an [AI Engineer]() and [Full Stack Developer]() with a [Bachelor’s degree in Artificial Intelligence and Machine Learning](). I build scalable frontend and backend systems using [React.js](), [FastAPI](), and [PostgreSQL](), and have hands-on experience developing AI-powered applications and automation workflows. I integrate LLM frameworks like [LangChain]() and [LangGraph]() to build intelligent decision systems and agentic workflows. I love turning complex problems into impactful, production-ready solutions. Get my resume [Click Here!](/Prateek.pdf)",

  avatarUrl: "/me1.png",

  // <Quote /> picks one of these at the foot of every page.
  quotes: [
    {
      text: "A lesson without pain is meaningless.",
      author: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
      text: "If you don't take risks, you can't create a future.",
      author: "Monkey D. Luffy, One Piece",
    },
    {
      text: "Fear is not evil. It tells you what your weakness is.",
      author: "Gildarts Clive, Fairy Tail",
    },
    {
      text: "Being weak is nothing to be ashamed of. Staying weak is.",
      author: "Fuegoleon Vermillion, Black Clover",
    },
    {
      text: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
      author: "Himura Kenshin, Rurouni Kenshin",
    },
    {
      text: "The world isn't perfect. But it's there for us, doing the best it can.",
      author: "Roy Mustang, Fullmetal Alchemist: Brotherhood",
    },
    {
      text: "You're not always going to be the strongest or the fastest, so be the smartest.",
      author: "Odysseus, The Odyssey (2026)",
    },
    {
      text: "Don't look for gods in men; you'll always be disappointed.",
      author: "The Odyssey (2026)",
    },
    {
      text: "Sometimes Spider-Man has to do the hard thing, even if it breaks Peter Parker's heart.",
      author: "Spider-Man: Brand New Day (2026)",
    },
    {
      text: "Hey, you guys are the professionals, I'm just a volunteer.",
      author: "Spider-Man, Spider-Man: Brand New Day (2026)",
    },
    {
      text: "Whatever you are, be a good one.",
      author: "Abraham Lincoln",
    },
  ],

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Redux toolkit",
    "Next.js",
    "Typescript",
    "Node.js",
    "GSAP Animations",
    "Python",
    "Flask",
    "FastAPI",
    "MongoDB",
    "PostgreeSQL",
    "Supabase",
    "Firebase",
    "Docker",
    "AWS",
    "Terraform",
    "Redis",
    "Git",
    "GitHub",
    "Postman",
    "UI/UX",
    "Figma",
    "Spline",
    "Tensorflow",
    "Scikit-learn",
    "LangChain",
    "LangGraph",
    "AI Agents"
  ],
  // Nav lives in src/lib/nav.ts, shared by the navbar pill and the footer.
  contact: {
    email: EMAIL,
    tel: "91+9606861693",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Prateek1771",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prateek-hitli-04017b258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Prateek_Hitli?t=ukwCU_eyWhz5egM8xlssGw&s=08",
        icon: Icons.x,

        navbar: true,
      },
     
      email: {
        name: "Send Email",
        url: `mailto:${EMAIL}`,
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "DigiBull AI",
      href: "",
      badges: [],
      location: "Mysore, Karnataka, India",
      title: "Junior Developer",
      logoUrl: "/digibull_ai_logo.jpeg",
      start: "Sep 2025",
      end: undefined,
      // `description` stays as prose for JSON-LD and meta descriptions;
      // `highlights` is the same content split for the /work bullet list.
      description:
        "Developed production-grade backend APIs using Python and FastAPI for manufacturing applications, implementing RESTful endpoints with proper error handling and request validation. Designed and optimized PostgreSQL database queries for production tracking system, implementing efficient indexing strategies and query optimization to handle concurrent requests. Built a multi-agent testing framework that automated testing workflows through an Agentic AI testing platform. Participated in code reviews and testing cycles, contributing to code quality improvements and ensuring adherence to best practices.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "LangChain",
        "LangGraph",
        "Docker",
        "Git",
        "Postman",
      ],
      highlights: [
        "Developed production-grade backend APIs using Python and FastAPI for manufacturing applications, implementing RESTful endpoints with proper error handling and request validation.",
        "Designed and optimized PostgreSQL database queries for a production tracking system, implementing efficient indexing strategies to handle concurrent requests.",
        "Built a multi-agent testing framework that automated testing workflows through an Agentic AI testing platform.",
        "Participated in code reviews and testing cycles, contributing to code quality improvements and ensuring adherence to best practices.",
      ],
    },
    {
      company: "Unified Mentor",
      href: "",
      badges: [],
      location: "Haryana, India",
      title: "Frontend Web Developer Intern",
      logoUrl: "/unifiedmentor.png",
      start: "Sep 2024",
      end: "Feb 2025",
      description:
        "Developed a full-stack e-commerce platform backend with Next.js API routes, reducing page load by 40% through server-side rendering optimization, code-splitting, and efficient API design patterns. Designed RESTful API architecture for product catalog, authentication, and order management with PostgreSQL, ensuring data consistency and implementing proper error handling for production readiness. Collaborated on code reviews focusing on API security, performance optimization, and maintainable code patterns in a shared codebase environment.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Node.js",
        "Git",
      ],
      highlights: [
        "Developed a full-stack e-commerce platform backend with Next.js API routes, reducing page load by 40% through server-side rendering optimization, code-splitting, and efficient API design patterns.",
        "Designed RESTful API architecture for product catalog, authentication, and order management with PostgreSQL, ensuring data consistency and proper error handling for production readiness.",
        "Collaborated on code reviews focusing on API security, performance optimization, and maintainable code patterns in a shared codebase.",
      ],
    },
    {
      company: "Synkerr",
      href: "https://synkerrofficial.github.io/synkerr/",
      badges: [],
      location: "Remote",
      title: "React Js Frontend Developer Intern",
      logoUrl: "/syn.png",
      start: "Apr 2024",
      end: "Jun 2024",
      description:
        "Developed modern, responsive websites using HTML, CSS, JavaScript, React JS, Aceternity UI, and Shadcn UI, enhancing web aesthetics and functionality. Boosted company visibility by collaborating on web development projects, leading to a 20% increase in online traffic. Improved user experience through focused UI/UX design enhancements, resulting in a 15% increase in user engagement.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Shadcn UI",
        "Figma",
      ],
      highlights: [
        "Developed modern, responsive websites using HTML, CSS, JavaScript, React JS, Aceternity UI, and Shadcn UI, enhancing web aesthetics and functionality.",
        "Boosted company visibility by collaborating on web development projects, leading to a 20% increase in online traffic.",
        "Improved user experience through focused UI/UX design enhancements, resulting in a 15% increase in user engagement.",
      ],
    },
  ],

  education: [
    {
      school: "Coorg Institute of Technology",
      href: "https://www.citcoorg.edu.in/",
      degree: "Bachelor's Degree in Artificial Intelligence",
      logoUrl: "/CIT_logo.png",
      start: "2021",
      end: "2025",
      description: "CGPA: 8.1",
    },
    {
      school: "Shri Sharada PU College",
      href: "https://sspu.org.in/",
      degree: "Pre-University (PCMCs major)",
      logoUrl: "/pu.jpg",
      start: "2019",
      end: "2021",
      description: "Score: 92.33%",
    },
  ],

  projects: [
    {
      title: "AI-Powered Docker Repo Auditor",
      href: "https://github.com/Prateek1771/AI-Powered-Docker-Repo-Auditor",
      dates: "",
      active: true,
      description:
        "Six LLM agents read what three scanners found and grade a container image - CVEs, wasted layers, base image drift, CIS compliance. Four run concurrently under a per-agent timeout; two more consume the fan-in and see exactly which inputs can be trusted, so a failed agent degrades the report instead of quietly scoring you on less evidence. SQS FIFO worker on Fargate, live progress over Redis pub/sub, and a CI gate that blocks merges below 90% recall.",
      technologies: [
        "Python",
        "FastAPI",
        "OpenAI gpt-4o",
        "Trivy",
        "Docker",
        "AWS Fargate",
        "DynamoDB",
        "SQS",
        "Redis",
        "Terraform",
        "Next.js 16",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://prateek1771.github.io/AI-Powered-Docker-Repo-Auditor/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Prateek1771/AI-Powered-Docker-Repo-Auditor",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "/blog/docker-auditor-audited-itself",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AZ-CLAW",
      href: "https://github.com/Prateek1771/az-claw",
      dates: "",
      active: true,
      description:
        "A terminal-first AI coding agent that also runs from Telegram. Four modes - Agent, Plan, Ask and Second Brain - over one model factory that falls back from Groq to OpenRouter mid-call. Every file mutation is staged in memory and applied only after you approve a diff.",
      technologies: [
        "Bun",
        "TypeScript",
        "Vercel AI SDK",
        "Groq",
        "OpenRouter",
        "InsForge (pgvector)",
        "Telegraf",
        "Zod",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Prateek1771/az-claw",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "/blog/az-claw-staged-writes",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "GuardRAG",
      href: "https://github.com/Prateek1771/GuardRAG",
      dates: "",
      active: true,
      description:
        "An enterprise-grade RAG chatbot with built-in compliance guardrails, multi-tenant architecture, and role-based access control. Supports PDF/DOCX/XLSX ingestion, namespace-isolated Pinecone vector storage, and a four-mode guardrails engine (Block, Alert, Approval, Redact) with full audit logging.",
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS 4",
        "FastAPI",
        "LangChain",
        "OpenAI GPT-4o",
        "Pinecone",
        "SQLite",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://huggingface.co/spaces/prateek1771/RagGuardrail",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Prateek1771/GuardRAG",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      youtubeId: "GpaCrQy-3Rg",
    },
    {
      title: "Hot Wheels x Pantone - Silver Series",
      href: "https://hotwheels-pantone.vercel.app",
      dates: "",
      active: true,
      description:
        "An interactive, scroll-driven showcase for the Hot Wheels x Pantone Silver Series collection. Six die-cast vehicles, each paired with a distinct Pantone color, with deep-dive origin stories, full media galleries, and a Remotion-powered promo video.",
      technologies: [
        "React 19",
        "Vite 8",
        "Tailwind CSS 4",
        "Remotion 4",
      ],
      links: [
        {
          type: "Website",
          href: "https://hotwheels-pantone.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Prateek1771/hotwheels_pantone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      youtubeId: "CzXD7SorU98",
    },
    {
      title: "LingoLearn",
      href: "https://github.com/Prateek1771/LingoLearn",
      dates: "",
      active: true,
      description:
        "An AI-powered learning platform that transforms passive YouTube watching into active, quiz-driven education. It pauses videos at strategic moments to test comprehension, supports 130+ languages, and generates certificates on completion.",
      technologies: [
        "Next.js",
        "Groq",
        "Lingo.dev SDK",
        "html2canvas",
        "jsPDF",
        "YouTube InnerTube API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Prateek1771/LingoLearn",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "/blog/lingolearn-distraction-proof-learning",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/LingoPromo.mp4",
    },
    {
      title: " Talent-Meet",
      href: "https://github.com/Prateek1771/talent-meet",
      dates: "",
      active: true,
      description:
        "Talent-Meet is a web platform that simplifies technical interviews with real-time coding, video calls, and structured candidate feedback in one unified experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Convex",
        "Shadcn UI",
        "Magic UI",
        "Clerk",
        "Stream"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Prateek1771/talent-meet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tmeet.png",
      video: "",
    },
    {
      title: "Vivah Styles",
      href: "https://laura-dress.vercel.app",
      dates: "",
      active: true,
      description:
        "A staff-operated in-store platform for Indian wedding fashion boutiques - customer onboarding, AI-powered inventory and outfit matching, virtual try-on, billing, and sales analytics with role-based access for stylists, cashiers, and owners.",
      technologies: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS 4",
        "InsForge (Postgres)",
        "Groq Vision",
        "OpenAI gpt-image-2",
        "PostHog",
      ],
      links: [
        {
          type: "Website",
          href: "https://laura-dress.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Prateek1771/Vivah_styles",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "/blog/vivah-styles-scoring-engine",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

  ],
  hackathons: [
    {
      title: "Lingo.dev Hackathon",
      dates: "Feb - Mar 2026",
      location: "Online",
      description:
        "Built LingoLearn - an AI-powered platform that transforms passive YouTube watching into active, quiz-driven education. It pauses videos at strategic moments to test comprehension, supports 130+ languages via Lingo.dev SDK, and generates certificates on completion.",
      image: "/lingodev.avif",
      mlh: "/lingodev.avif",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/Prateek1771/LingoLearn",
        },
        {
          title: "Blog",
          icon: <Icons.globe className="size-3" />,
          href: "https://dev.to/prateek_hitli_5a7d19f1c87/i-got-distracted-watching-a-golang-tutorial-so-i-built-an-project-that-wont-let-you-843",
        },
      ],
    },
    {
      title: "JITHACK 24",
      dates: "June 23rd - 25th, 2024",
      location: "Jyothi Institute of Technology, Bengaluru, Karnataka",
      description:
        "Developed a web application which delivered the instructions about the effective ways of communication and the suggestions related to effective communication.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYNL9cdOb4saJmA7IfgklgN_B1r9qvaD9Kg&s",
      mlh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYNL9cdOb4saJmA7IfgklgN_B1r9qvaD9Kg&s",
      links: [],
    },
    {
      title: "Flipkart GRID 4.0",
      dates: "Jul 24th, 2023",
      location: "Online, Karnataka",
      description:
        "Qualified for round 2 of the competation, but did not make the cut. It was a great experience where you have to present your project ideas.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHxI90L1DnFZRgwfysIkBRJrg_yQbbd_DvQ&s",
      mlh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHxI90L1DnFZRgwfysIkBRJrg_yQbbd_DvQ&s",
      links: [],
    },
    
  ],
} as const;
