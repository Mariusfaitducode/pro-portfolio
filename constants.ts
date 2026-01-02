import { Layers, Palette, Compass, Code, Smartphone, Database, Box } from 'lucide-react';

export const PROJECTS = [
  {
    id: 1,
    title: "EcoQuest",
    year: "2024",
    category: "Augmented Reality",
    description: "An immersive AR experience gamifying environmental choices. Users visualize virtual 3D worlds where strategic card choices impact the ecosystem.",
    tech: ["Unity", "C#", "Blender"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    color: "#2A9D8F"
  },
  {
    id: 2,
    title: "Eventum",
    year: "2023",
    category: "Social Platform",
    description: "A comprehensive social web network centered on event organization and sharing. Built with a robust backend to handle real-time interactions.",
    tech: ["Angular", "PHP", "SQL"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop",
    color: "#E76F51"
  },
  {
    id: 3,
    title: "Abuelos",
    year: "2023",
    category: "Mobile Commerce",
    description: "A streamlined mobile e-commerce application connecting local farmers directly to consumers. Features real-time inventory and route optimization.",
    tech: ["Ionic", "NestJS", "Firebase"],
    image: "https://images.unsplash.com/photo-1615811361523-6bd03c774734?q=80&w=2574&auto=format&fit=crop",
    color: "#F4A261"
  },
  {
    id: 4,
    title: "ConceptAsk",
    year: "2022",
    category: "Productivity",
    description: "A mobile todo-list application that visualizes task completion as a growing graph, providing visual motivation for productivity.",
    tech: ["Angular", "Ionic", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
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
    title: "Design Systems",
    description: "Creating unified visual languages and reusable component libraries for consistent user experiences.",
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
    description: "Deeptech reinventing microbiological testing. Developing high-performance digital solutions."
  },
  {
    date: "June 2025",
    role: "Engineering Degree",
    company: "UTBM",
    description: "Completion of engineering studies."
  },
  {
    date: "Feb 2025 - June 2025",
    role: "End-of-studies Internship",
    company: "Dataiku",
    description: "Working on enterprise AI platform solutions."
  },
  {
    date: "March 2024 - Present",
    role: "Self-employed Developer",
    company: "MarsCode",
    description: "Freelance missions offering tailored digital solutions for clients."
  },
  {
    date: "Mar 2024 - June 2024",
    role: "Virtual World Semester",
    company: "ULiège",
    description: "Specialized block semester focusing on AI and virtual environments."
  },
  {
    date: "Aug 2023 - Feb 2024",
    role: "Assistant Engineer Intern",
    company: "Sonceboz",
    description: "Assisting in engineering tasks and development."
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Programming",
    items: ["Python", "C", "C#", "C++", "Java", "Git"]
  },
  {
    title: "Back-end",
    items: [".NET", "PHP", "Node Red", "NestJS", "NodeJS", "Flask"]
  },
  {
    title: "Front-end",
    items: ["HTML", "CSS", "TypeScript", "JavaScript", "Angular", "Ionic", "React"]
  },
  {
    title: "Databases",
    items: ["SQL", "MongoDB", "Neo4j", "Firebase", "InfluxDB", "Strapi"]
  },
  {
    title: "Graphics",
    items: ["Unity", "JavaFX", "Qt Creator", "Figma", "Fusion 360", "Blender", "Inkscape"]
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