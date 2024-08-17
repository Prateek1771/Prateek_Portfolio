import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prateek_Hitli",
  initials: "DV",
  url: "https://github.com/Prateek1771",
  location: "Karnataka, India",
  locationLink: "",
  description:
    "Software Engineer and Web Developer. I love building cool websites and helping people.",
  summary:
    "I am a [Web developer]() skilled in [React JS, Next JS](), and [TypeScript](), with experience in creating responsive and user-friendly websites. I've worked on projects that boosted user engagement and visibility, using tools like Aceternity UI, Magic UI, and more. My focus is on designing effective UI/UX solutions and building innovative web applications.This version keeps the key content while being brief and to the point. In the past, [I'm crrently purcuing Bachelors degree in Artifical Intelligence.](/#education) Click here  to get my [resume](https://drive.google.com/file/d/1muBIzWHculpH1JR7Via9BYX_3cdr_lav/view?usp=sharing).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "SQL",
    "Git",
    "Git Hub",
    'Figma',
    "Python",
    "Spline 3d Models",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },

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
      title: "React Js Frontend Development",
      logoUrl: "/syn.png",
      start: "April 2024",
      end: "May 2024",
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
      video:
        "",
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
