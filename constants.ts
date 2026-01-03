import { Layers, Palette, Compass, Code, Smartphone, Database, Box } from 'lucide-react';

export const PROJECTS = [
  {
    id: 1,
    title: "TidyMailbox",
    year: "2025",
    category: "Mailbox Management",
    description: "A web application that helps you manage your mailbox efficiently by providing a clean and intuitive interface for your emails.",
    tech: ["NextJs", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/images/projects/TidyMailbox.png",
    link: "https://tidy-mailbox.com",
    color: "#2A9D8F"
  },
  {
    id: 2,
    title: "Best Matcha Ever",
    year: "2025",
    category: "Matcha Shop",
    description: "An e-commerce website for a new modern matcha brand, featuring a clean and intuitive interface for browsing and buying matcha products.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
    image: "/images/projects/BestMatchaEver.png",
    link: "https://bestmatcheaever.com",
    color: "#E76F51"
  },
  {
    id: 3,
    title: "OptiApp",
    year: "2025",
    category: "Recording App",
    description: "A recording app that allows to record your meetings. The meetings is then sent to Optiverse for transcription and analysis.",
    tech: ["React Native", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/images/projects/OptiApp.png",
    color: "#F4A261"
  },
  {
    id: 4,
    title: "ConcepTask",
    year: "2024",
    category: "Productivity",
    description: "A mobile todo-list application that visualizes task completion as a growing graph, providing visual motivation for productivity.",
    tech: ["Angular", "Ionic", "D3.js", "Firebase"],
    image: "/images/projects/ConcepTask.png",
    color: "#264653"
  }
];

export const SERVICES = [
  {
    title: "MVP Engineering",
    description: "Rapidly transforming concepts into functional, scalable prototypes using modern full-stack frameworks.",
    icon: Layers,
  },
  {
    title: "Landing Page",
    description: "Creating beautiful and functional landing pages for your projects with high performance and SEO optimization.",
    icon: Palette,
  },
  {
    title: "Technical Strategy",
    description: "Architecting robust software solutions that align with long-term business goals and scalability needs.",
    icon: Compass,
  },
];

export const TESTIMONIALS = [
  {
    name: "Alexandre D.",
    role: "CTO at Spore.Bio",
    quote: "Marius brought a level of technical depth that transformed our microbiological testing visualizations."
  },
  {
    name: "Sarah L.",
    role: "Project Lead at Dataiku",
    quote: "His ability to bridge the gap between complex backend logic and fluid frontend interactions is rare."
  },
  {
    name: "Julien M.",
    role: "Founder at MarsCode",
    quote: "Reliable, creative, and incredibly fast. The AR implementation exceeded our wildest expectations."
  },
  {
    name: "Elena R.",
    role: "Product Manager",
    quote: "Designed a system that not only looks good but scales effortlessly. A true engineering partner."
  }
];

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Career', href: '#career' },
  { name: 'Skills', href: '#skills' },
];

export const CAREER_TIMELINE = [
  {
    date: "Aug 2025 - Present",
    role: "Software Engineer",
    company: "Spore.Bio",
    description: "Deeptech reinventing microbiological testing. Developing high-performance digital solutions.",
    logo: "/images/career/sporebio.png",
  },
  {
    date: "June 2025",
    role: "Engineering Degree",
    company: "UTBM",
    description: "Completion of engineering studies.",
    logo: "/images/career/utbm.webp",
  },
  {
    date: "Feb 2025 - June 2025",
    role: "End-of-studies Internship",
    company: "Dataiku",
    description: "Working on enterprise AI platform solutions.",
    logo: "/images/career/dataiku.webp",
  },
  {
    date: "March 2024 - Present",
    role: "Self-employed Developer",
    company: "MariusCode",
    description: "Freelance missions offering tailored digital solutions for clients.",
    logo: "/images/career/mariuscode.svg",
  },
  {
    date: "Sept 2024 - Jan 2025",
    role: "AI specialization",
    company: "ULiège",
    description: "Specialized block semester focusing on AI and virtual environments.",
    logo: "/images/career/uliege.svg",
  },
  {
    date: "Mar 2024 - June 2024",
    role: "Virtual World specialization",
    company: "UTBM",
    description: "Specialized block semester focusing on AI and virtual environments.",
    logo: "/images/career/utbm.webp",
  },
  {
    date: "Aug 2023 - Feb 2024",
    role: "Assistant Engineer Intern",
    company: "Sonceboz",
    description: "Assisting in engineering tasks and development.",
    logo: "/images/career/sonceboz.png",
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Programming",
    items: [
      { name: "Python", logo: "/images/skills/programming/python.svg" },
      { name: "C", logo: "/images/skills/programming/c.svg" },
      { name: "C#", logo: "/images/skills/programming/csharp.svg" },
      { name: "C++", logo: null },
      { name: "Java", logo: "/images/skills/programming/java.svg" },
      { name: "Git", logo: "/images/skills/programming/git.svg" }
    ]
  },
  {
    title: "Back-end",
    items: [
      { name: ".NET", logo: "/images/skills/backend/dotnet.svg" },
      { name: "PHP", logo: null },
      { name: "Node Red", logo: null },
      { name: "NestJS", logo: "/images/skills/backend/nestjs.svg" },
      { name: "NodeJS", logo: "/images/skills/backend/nodejs.svg" },
      { name: "Flask", logo: "/images/skills/backend/flask.svg" }
    ]
  },
  {
    title: "Front-end",
    items: [
      { name: "HTML", logo: "/images/skills/frontend/html.svg" },
      { name: "CSS", logo: "/images/skills/frontend/css.svg" },
      { name: "TypeScript", logo: "/images/skills/frontend/typescript.svg" },
      { name: "JavaScript", logo: null },
      { name: "Angular", logo: "/images/skills/frontend/angular.svg" },
      { name: "Ionic", logo: null },
      { name: "React", logo: "/images/skills/frontend/react.png" }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "SQL", logo: "/images/skills/databases/sql.svg" },
      { name: "MongoDB", logo: null },
      { name: "Neo4j", logo: null },
      { name: "Firebase", logo: "/images/skills/databases/firebase.svg" },
      { name: "InfluxDB", logo: null },
      { name: "Strapi", logo: null }
    ]
  },
  {
    title: "Graphics",
    items: [
      { name: "Unity", logo: "/images/skills/graphics/unity.svg" },
      { name: "JavaFX", logo: null },
      { name: "Qt Creator", logo: null },
      { name: "Figma", logo: "/images/skills/graphics/figma.svg" },
      { name: "Fusion 360", logo: null },
      { name: "Blender", logo: "/images/skills/graphics/blender.png" },
      { name: "Inkscape", logo: "/images/skills/graphics/inkscape.svg" }
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Fundamentals of Accelerated Computing with CUDA Python",
    issuer: "Nvidia",
    year: "2023"
  },
  {
    title: "CCNA 1 : Introduction to Networks",
    issuer: "Cisco",
    year: "2023"
  },
  {
    title: "CCNA 2 : Switching Routing & Wireless Essentials",
    issuer: "Cisco",
    year: "2024"
  },
  {
    title: "Neo4j Certified",
    issuer: "Neo4j",
    year: "2024"
  }
];