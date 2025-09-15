import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prateek_Hitli",
  initials: "PH",
  url: "https://github.com/Prateek1771",
  location: "Karnataka, India",
  locationLink: "",
  description:
    "A Full Stack Web Developer & AI Developer. I love building cool websites and intelligent AI solutions.",
  summary:
    "I’m a passionate [Full Stack Web Developer]() and [AI Enthusiast](), with a [Bachelors degree in Artificial Intelligence and Machine Learning](). I build modern and user-friendly web apps using React.js, Next.js, MongoDB and many more other tools. On the AI side, I work with Python, TensorFlow, OpenAI API and other vision libraries. I love learning, experimenting, and deliver products. I like to creating impactful solutions that combine the best of AI and web development. Get my resume [Click Here!](https://drive.google.com/file/d/1xkjDkiKaZ9JlADw4dtzoENiVIVNzxyOz/view?usp=sharing)",

  avatarUrl: "/me1.png",

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
    "MongoDB",
    "PostgreeSQL",
    "Supabase",
    "Firebase",
    "Docker",
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },

  ],
  contact: {
    email: "hitliprateek5@gmail.com",
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
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Synkerr",
      href: "https://synkerrofficial.github.io/synkerr/",
      badges: [],
      location: "Remote",
      title: "React Js Frontend Developer Intern",
      logoUrl: "/syn.png",
      start: "April 2024",
      end: "June 2024",
      description:
        "Developed modern, stylish websites using HTML, CSS, JavaScript, React JS,Aceternity UI, and Shad CN UI enhancing web aesthetics and functionality. Boosted company visibility by collaborating on web development projects, leading to a 20% increase in online traffic. Improved user experience through focused UI/UX design enhancements, resulting in a 15% increase in user engagement.",
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
    },
    {
      school: "Shri Sharada PU College",
      href: "https://sspu.org.in/",
      degree: "Pre-University (PCMCs major)",
      logoUrl: "/pu.jpg",
      start: "2019",
      end: "2021",
    },
  ],

  projects: [
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
      title: " Codez",
      href: "https://github.com/Prateek1771/codeZ.git",
      dates: "",
      active: true,
      description:
        "It is an AI-powered coding assistant that helps developers boost productivity through real-time code generation, optimization, and intelligent suggestions.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Convex",
        "Shadcn UI",
        "Google Auth",
        "Gemini API"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Prateek1771/codeZ.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/codez.png",
      video: "",
    },

    {
      title: " CodeSensei",
      href: "https://github.com/Prateek1771/codeSensei",
      dates: "",
      active: true,
      description:
        "CodeSensei is an AI-powered code reviewer that analyzes code for quality, efficiency, and security, offering real-time feedback and best practice suggestions.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Gemini API",
        "Shadcn UI",
        "Express.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Prateek1771/codeSensei",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/code.png",
      video: "",
    },

    {
      title: " KisanSethu",
      href: "https://github.com/Prateek1771/kisansethu.git",
      dates: "",
      active: true,
      description:
        "This mobile app provides personalized crop suggestions based on user needs and supports multiple languages to make agricultural information accessible to all farmers.",
      technologies: [
        "React Native",
        "Typescript",
        "TailwindCSS",
        "Open AI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Prateek1771/kisansethu.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/KS.jpg",
      video: "",
    },
    {
      title: " AI Story Teller",
      href: "https://github.com/Prateek1771/AI_Story_Teller.git",
      dates: "",
      active: true,
      description:
        "Developed a Next.js - based project that uses Open AI to generate engaging stories and storybooks. With smooth user interface and experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Open AI",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Prateek1771/AI_Story_Teller.git",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Prateek1771/AI_Story_Teller.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/story.png",
      video: "",
    },
    {
      title: "My Cloud - Drop Box",
      href: "https://github.com/Prateek1771/My_Cloud.git",
      dates: "",
      active: true,
      description:
        "Designed, developed a Next.js application that allows users to upload and download files seamlessly. It uses Firebase for data storage and security.",
      technologies: [
        "Next.js",
        "Firebse",
        "Typescript",
        "TailwindCSS", 
        "Shadcn UI",
        "Magic UI",
        "spline 3d model"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Prateek1771/My_Cloud.git",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Prateek1771/My_Cloud.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Commu.Ai",
      href: "https://github.com/Prateek1771/Commu.ai.git",
      dates: "",
      active: true,
      description:
        "Developed an open-source web application designed to improve the users communication skills. It integrates Python for backed functionality, Object detection, and audio recognition. Where user can track their mistakes and improve themselves",
      technologies: [
        "React.js",
        "Typescript",
        "Python",
        "dlib",
        "Media pipe",
        "Flask",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Ochi.design",
      href: "https://github.com/Prateek1771/Ochi_design.git",
      dates: "",
      active: true,
      description:
        "Developed an clone of the award-winnig website Ochi.design, implemented a smooth UI and UX experience similar to the original website, with focus on maintaining its sleek design and functionality.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Locomotive JS",
        "Smooth Scrolling",
        "GSAP animations",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Prateek1771/Ochi_design.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ochi.png",
      video:
        "",
    },
  ],
  hackathons: [
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
