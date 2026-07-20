import type {
  PersonalInfo,
  Experience,
  Project,
  Achievement,
  SkillGroup,
  Stat,
  Education,
  SocialLink,
} from "@/types/portfolio";
import portraitFormal from "@/assets/portrait-formal.jpg.asset.json";
import portraitCandid from "@/assets/portrait-candid.jpg.asset.json";
import dsiPresenting from "@/assets/dsi-presenting.jpg.asset.json";

export const media = {
  portraitFormal: portraitFormal.url,
  portraitCandid: portraitCandid.url,
  dsiPresenting: dsiPresenting.url,
};

export const personalInfo: PersonalInfo = {
  name: "Raju Boga",
  firstName: "Raju",
  lastName: "Boga",
  monogram: "RJ",
  title: "Senior Software Engineer",
  location: "United States",
  website: "linkedin.com/in/rjboga",
  email: "rajub.dev@gmail.com",
  portrait: portraitFormal.url,
  bioLead:
    "I build resilient full-stack systems that millions of people quietly rely on every day.",
  bio: "Everyone calls me RJ. For the last half-decade I've shipped mission-critical Angular and Java Spring Boot platforms for Fortune 500 banks, lenders, and healthcare giants. I lead legacy-to-modern migrations, obsess over UI performance, and spend my free time playing and tinkering with AI — wiring up agents, chasing new models, and always looking for that moment where clean code meets a real-world problem and just clicks.",
};


export const stats: Stat[] = [
  { value: "5+", label: "Years shipping" },
  { value: "3", label: "Fortune 500 companies" },
  { value: "2×", label: "Impact Award winner" },
  { value: "AWS", label: "SAA-C03 certified" },
];

export const experience: Experience[] = [
  {
    id: "exp-citi",
    company: "Citi",
    role: "Software Engineer",
    location: "United States",
    startDate: "2026-05",
    endDate: null,
    current: true,
    impact: [
      "Architecting high-throughput full-stack systems that move serious money at global scale.",
      "Building resilient Angular front-ends and Spring Boot services at one of the world's largest financial institutions.",
    ],
  },
  {
    id: "exp-rate",
    company: "Rate",
    role: "Software Engineer",
    location: "United States",
    startDate: "2024-02",
    endDate: "2026-05",
    current: false,
    impact: [
      "Led a sweeping UI modernization across the mortgage lending platform, re-engineering legacy flows into a snappy Angular + Spring Boot experience on AWS.",
      "Shipped features used daily by thousands of loan officers and drove measurable wins in performance, conversion, and developer velocity.",
      "Mentored engineers on cloud architecture, performance patterns, and shared component design.",
    ],
  },
  {
    id: "exp-carelon",
    company: "Carelon Global Solutions",
    role: "Software Engineer",
    location: "India",
    startDate: "2021-11",
    endDate: "2023-07",
    current: false,
    impact: [
      "Built enterprise healthcare platforms serving millions of members across Anthem's ecosystem.",
      "Graduated fast from IC work to owning end-to-end features in a high-velocity Agile organization.",
      "Partnered with product, design, and business stakeholders across continents.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "skill-frontend",
    title: "Front-end craft",
    icon: "Layout",
    span: "lg",
    skills: ["Angular", "TypeScript", "React", "Tailwind", "Framer Motion", "UI Modernization"],
  },
  {
    id: "skill-backend",
    title: "Back-end & APIs",
    icon: "Server",
    skills: ["Java", "Spring Boot", "REST", "GraphQL", "SQL"],
  },
  {
    id: "skill-cloud",
    title: "Cloud & platform",
    icon: "Cloud",
    skills: ["AWS SAA-C03", "Lambda", "S3", "CloudFront", "System Design"],
  },
  {
    id: "skill-ai",
    title: "Applied AI",
    icon: "Sparkles",
    span: "md",
    skills: ["LLM Agents", "GenAI", "Prompt Engineering", "RAG"],
  },
  {
    id: "skill-lead",
    title: "Leadership",
    icon: "Users",
    skills: ["Agile", "Mentorship", "Stakeholder Management"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-eap",
    name: "Employee Assistance Program",
    tagline: "Confidential support at enterprise scale",
    description:
      "A confidential Angular + Spring Boot platform that routes employees through mental-health, financial, and legal resources across a Fortune 500 workforce — with elegant flows engineered for high-stakes moments.",
    techStack: ["Angular", "Spring Boot", "AWS", "PostgreSQL"],
    image:
      "https://images.pexels.com/photos/29652324/pexels-photo-29652324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "proj-schoolpool",
    name: "SchoolPool",
    tagline: "Safer school carpools, powered by real-time crime intel",
    description:
      "A full-stack carpool platform for parents to coordinate school rides — with an integrated crime-news analyzer that scans and scores routes before a booking is confirmed, so families ride with context, not guesswork.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "News API"],
    image:
      "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpZ2h0JTIwZmx1aWQlMjBtaW5pbWFsJTIwYmFja2dyb3VuZHxlbnwwfHx8d2hpdGV8MTc4NDUwODI1OHww&ixlib=rb-4.1.0&q=85",
    liveUrl: "https://github.com/RJBOGA/school-pool-frontend",
    links: [
      { label: "Frontend", url: "https://github.com/RJBOGA/school-pool-frontend" },
      { label: "Backend", url: "https://github.com/RJBOGA/schoolpool-be" },
      { label: "Crime News API", url: "https://github.com/RJBOGA/newsapi" },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-impact-1",
    metric: "2×",
    label: "Impact Award",
    detail: "Recognized twice for outsized delivery on mission-critical initiatives.",
  },
  {
    id: "ach-dsi",
    metric: "DSI",
    label: "Published research",
    detail:
      "Co-presented at the Decision Sciences Institute on technology + sustainability in modern project management.",
  },
  {
    id: "ach-aws",
    metric: "AWS",
    label: "Solutions Architect — Associate",
    detail: "SAA-C03 certified. Cloud-native architecture is the day job, not the résumé line.",
  },
  {
    id: "ach-scale",
    metric: "M+",
    label: "Users served",
    detail: "Shipped platforms touching millions of end-users across banking, lending, and healthcare.",
  },
];

export const education: Education[] = [
  {
    id: "edu-ucm",
    institution: "University of Central Missouri",
    degree: "Master's",
    field: "Information Technology",
    location: "Warrensburg, MO",
  },
  {
    id: "edu-vnr",
    institution: "VNR Vignana Jyothi Institute of Engineering & Technology",
    degree: "Bachelor's",
    field: "Information Technology",
    location: "Hyderabad, India",
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", label: "LinkedIn", url: "https://linkedin.com/in/rjboga" },
  { platform: "GitHub", label: "GitHub", url: "https://github.com/RJBOGA" },
  { platform: "Email", label: "Email", url: "mailto:rajub.dev@gmail.com" },
];

export const navLinks = [
  { id: "work", label: "Work", href: "#work" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];
