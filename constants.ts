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
    url: "https://tidy-mailbox.com",
    github: "https://github.com/Mariusfaitducode/TidyMailBox",
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
    url: "https://bestmatchaever.com",
    github: null,
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
    url: "https://apps.apple.com/fr/app/optiverse/id6743003995",
    github: null,
    color: "#F4A261"
  },
  {
    id: 4,
    title: "ConcepTask",
    year: "2024",
    category: "Productivity",
    description: "A mobile todo-list application that visualizes task completion as a growing graph, providing visual motivation for productivity.",
    tech: ["Angular", "Ionic", "D3.js", "Firebase"],
    image: "/images/projects/ConcepTask.jpeg",
    url: null,
    github: "https://github.com/Mariusfaitducode/ConcepTask",
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
    url: "https://spore.bio",
  },
  {
    date: "June 2025",
    role: "Engineering Degree",
    company: "UTBM",
    description: "Completion of engineering studies.",
    logo: "/images/career/utbm.webp",
    url: "https://www.utbm.fr",
  },
  {
    date: "Feb 2025 - June 2025",
    role: "End-of-studies Internship",
    company: "Dataiku",
    description: "Working on enterprise AI platform solutions.",
    logo: "/images/career/dataiku.webp",
    url: "https://www.dataiku.com",
  },
  {
    date: "March 2024 - Present",
    role: "Self-employed Developer",
    company: "MariusCode",
    description: "Freelance missions offering tailored digital solutions for clients.",
    logo: "/images/career/mariuscode.svg",
    url: "https://mariusdiguat.fr",
  },
  {
    date: "Sept 2024 - Jan 2025",
    role: "AI specialization",
    company: "ULiège",
    description: "Specialized block semester focusing on AI and virtual environments.",
    logo: "/images/career/uliege.svg",
    url: "https://www.uliege.be",
  },
  {
    date: "Mar 2024 - June 2024",
    role: "Virtual World specialization",
    company: "UTBM",
    description: "Specialized block semester focusing on AI and virtual environments.",
    logo: "/images/career/utbm.webp",
    url: "https://www.utbm.fr",
  },
  {
    date: "Aug 2023 - Feb 2024",
    role: "Assistant Engineer Intern",
    company: "Sonceboz",
    description: "Assisting in engineering tasks and development.",
    logo: "/images/career/sonceboz.png",
    url: "https://www.sonceboz.com",
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    items: [
      { name: "Python", logo: "/images/skills/programming/python.svg", url: "https://python.org/" },
      { name: "TypeScript", logo: "/images/skills/programming/typescript.svg", url: "https://www.typescriptlang.org/" },
      { name: "JavaScript", logo: "/images/skills/programming/javascript.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "C", logo: "/images/skills/programming/c.svg", url: "https://devdocs.io/c/" },
      { name: "C#", logo: "/images/skills/programming/csharp.svg", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { name: "C++", logo: "/images/skills/programming/cpp.svg", url: "https://devdocs.io/cpp/" },
      { name: "Java", logo: "/images/skills/programming/java.svg", url: "https://docs.oracle.com/en/java/" },
      { name: "Git", logo: "/images/skills/programming/git.svg", url: "https://git-scm.com/doc" },
      { name: "Bash", logo: "/images/skills/programming/bash.png", url: "https://www.gnu.org/software/bash/manual/" }
    ]
  },
  {
    title: "Back-end",
    items: [
      { name: "FastAPI", logo: "/images/skills/backend/fastapi.svg", url: "https://fastapi.tiangolo.com/" },
      { name: "NextJS", logo: "/images/skills/backend/nextjs.svg", url: "https://nextjs.org/" },
      { name: ".NET", logo: "/images/skills/backend/dotnet.svg", url: "https://dotnet.microsoft.com/" },
      { name: "PHP", logo: "/images/skills/backend/php.svg", url: "https://www.php.net/" },
      { name: "Node Red", logo: "/images/skills/backend/nodered.svg", url: "https://nodered.org/" },
      { name: "NestJS", logo: "/images/skills/backend/nestjs.svg", url: "https://nestjs.com/" },
      { name: "NodeJS", logo: "/images/skills/backend/nodejs.svg", url: "https://nodejs.org/" },
      { name: "Flask", logo: "/images/skills/backend/flask.svg", url: "https://flask.palletsprojects.com/" },
      { name: "N8N", logo: "/images/skills/backend/n8n.png", url: "https://n8n.io/" },
      { name: "Stripe", logo: "/images/skills/backend/stripe.svg", url: "https://stripe.com/" },
      { name: "Redis", logo: "/images/skills/backend/redis.svg", url: "https://redis.io/" },
      { name: "SQLAlchemy", logo: "/images/skills/backend/sqlalchemy.svg", url: "https://docs.sqlalchemy.org/" }
    ]
  },
  {
    title: "Front-end",
    items: [
      { name: "HTML", logo: "/images/skills/frontend/html.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", logo: "/images/skills/frontend/css.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "TypeScript", logo: "/images/skills/frontend/typescript.svg", url: "https://www.typescriptlang.org/" },
      { name: "JavaScript", logo: "/images/skills/frontend/javascript.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Vite", logo: "/images/skills/frontend/vite.svg", url: "https://vitejs.dev/" },
      { name: "Angular", logo: "/images/skills/frontend/angular.svg", url: "https://angular.io/" },
      { name: "Ionic", logo: "/images/skills/frontend/ionic.svg", url: "https://ionicframework.com/" },
      { name: "React", logo: "/images/skills/frontend/react.png", url: "https://react.dev/" },
      { name: "Tailwind CSS", logo: "/images/skills/frontend/tailwindcss.svg", url: "https://tailwindcss.com/" },
      { name: "Three.js", logo: "/images/skills/frontend/threejs.svg", url: "https://threejs.org/" },
      { name: "React Native", logo: "/images/skills/frontend/expo-go.png", url: "https://reactnative.dev/" }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "SQL", logo: "/images/skills/databases/sql.svg", url: "https://www.w3schools.com/sql/" },
      { name: "PostgreSQL", logo: "/images/skills/databases/postgresql.svg", url: "https://www.postgresql.org/" },
      { name: "Supabase", logo: "/images/skills/databases/supabase.webp", url: "https://supabase.com/" },
      { name: "Firebase", logo: "/images/skills/databases/firebase.svg", url: "https://firebase.google.com/" },
      { name: "MongoDB", logo: "/images/skills/databases/mongodb.svg", url: "https://www.mongodb.com/" },
      { name: "Neo4j", logo: "/images/skills/databases/neo4j.png", url: "https://neo4j.com/" },
      { name: "PGAdmin", logo: "/images/skills/databases/pgadmin.png", url: "https://www.pgadmin.org/docs/" },
    ]
  },
  {
    title: "Infrastructure",
    items: [
      { name: "AWS", logo: "/images/skills/infrastructure/aws.png", url: "https://aws.amazon.com/" },
      { name: "Docker", logo: "/images/skills/infrastructure/docker.svg", url: "https://www.docker.com/" },
      { name: "Ansible", logo: "/images/skills/infrastructure/ansible.webp", url: "https://www.ansible.com/" },
      { name: "Prometheus", logo: "/images/skills/infrastructure/prometheus.png", url: "https://prometheus.io/" },
      { name: "Jenkins", logo: "/images/skills/infrastructure/jenkins.svg", url: "https://www.jenkins.io/" },
      { name: "Grafana", logo: "/images/skills/infrastructure/grafana.svg", url: "https://grafana.com/" },
      { name: "Linux", logo: "/images/skills/infrastructure/linux.svg", url: "https://www.kernel.org/doc/html/latest/" },
    ]
  },
  {
    title: "Graphics",
    items: [
      { name: "Unity", logo: "/images/skills/graphics/unity.svg", url: "https://unity.com/" },
      { name: "Figma", logo: "/images/skills/graphics/figma.svg", url: "https://www.figma.com/" },
      { name: "JavaFX", logo: "/images/skills/graphics/javafx.svg", url: "https://openjfx.io/" },
      { name: "Qt Creator", logo: "/images/skills/graphics/qt.svg", url: "https://www.qt.io/" },
      { name: "Fusion 360", logo: "/images/skills/graphics/fusion360.png", url: "https://www.autodesk.com/products/fusion-360/" },
      { name: "Blender", logo: "/images/skills/graphics/blender.png", url: "https://www.blender.org/" },
      { name: "Inkscape", logo: "/images/skills/graphics/inkscape.svg", url: "https://inkscape.org/" },
      { name: "Canva", logo: "/images/skills/graphics/canva.png", url: "https://www.canva.com/" },
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