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
import portraitFormal from "@/assets/img/portrait.jpg";
import dsiPresenting from "@/assets/img/dsi-presenting.jpg";

export const media = {
  portraitFormal,
  portraitCandid: portraitFormal,
  dsiPresenting,
};

export const personalInfo: PersonalInfo = {
  name: "Raju Boga",
  firstName: "Raju",
  lastName: "B",
  monogram: "RJ",
  title: "Senior Software Engineer",
  location: "United States",
  website: "linkedin.com/in/rjboga",
  email: "rajub.dev@gmail.com",
  portrait: portraitFormal,
  bioLead:
    "I build resilient full-stack systems that millions of people quietly rely on every day.",
  bio: "Everyone calls me RJ. For the last half-decade I've shipped mission-critical Angular and Java Spring Boot platforms for Fortune 500 banks, lenders, and healthcare giants. I lead legacy-to-modern migrations, obsess over system performance, and I am currently building the next generation of AI-native products — wiring up autonomous agents and looking for that exact moment where complex AI models solve real-world business problems.",
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
    role: "Senior Software Engineer",
    location: "United States",
    startDate: "2026-05",
    endDate: null,
    current: true,
    impact: [
      "Migrating and stabilizing the enterprise Multi-Factor Authentication platform — the single point of entry for the entire organization.",
      "Architecting high-throughput full-stack systems on Angular and Spring Boot that move serious money at global scale.",
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
      "Built a new full-stack platform powering student loans and mortgage origination for thousands of loan officers.",
      "Led a sweeping UI modernization, re-engineering legacy flows into a snappy Angular + Spring Boot experience on AWS.",
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
      "Migrated the full-stack Employee Assistance Program application for Anthem, modernizing legacy flows without disrupting members.",
      "Built and integrated a third-party API connecting with pharmacies across the US to validate Rx customers in real time.",
      "Owned end-to-end features in a high-velocity Agile org and partnered with product, design, and business stakeholders across continents.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "skill-frontend",
    title: "Front-end craft",
    icon: "Layout",
    span: "lg",
    skills: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "Framer Motion",
      "UI Modernization",
    ],
  },
  {
    id: "skill-backend",
    title: "Back-end & APIs",
    icon: "Server",
    span: "md",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Python",
      "Flask",
      "REST",
      "GraphQL",
      "SOAP",
      "Microservices",
      "System Integration",
    ],
  },
  {
    id: "skill-data",
    title: "Data & storage",
    icon: "Server",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
      "DynamoDB",
      "SQL",
    ],
  },
  {
    id: "skill-cloud",
    title: "Cloud & DevOps",
    icon: "Cloud",
    span: "md",
    skills: [
      "AWS SAA-C03",
      "EC2",
      "S3",
      "Lambda",
      "RDS",
      "CloudFront",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
      "System Design",
    ],
  },
  {
    id: "skill-ai",
    title: "Applied AI & data",
    icon: "Sparkles",
    span: "lg",
    skills: [
      "LLM Agents",
      "GenAI",
      "Prompt Engineering",
      "RAG",
      "Foundation Models (LLMs/VLMs)",
      "Applied ML",
      "Pandas",
      "NumPy",
      "YOLO",
      "OpenCV",
      "Data Visualization",
      "News API",
    ],
  },
  {
    id: "skill-platforms",
    title: "Platforms & research",
    icon: "Layout",
    skills: [
      "Salesforce Development",
      "Salesforce Admin",
      "Systematic Literature Review",
      "Academic Writing",
      "Conference Presentations",
    ],
  },
  {
    id: "skill-lead",
    title: "Leadership & delivery",
    icon: "Users",
    span: "md",
    skills: [
      "Agile",
      "Scrum",
      "Product Management",
      "Project Management",
      "Mentorship",
      "Stakeholder Management",
      "Jira",
      "Confluence",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-voice-agents",
    name: "AI Voice Agents",
    tagline: "Currently building · 100x Applied AI Cohort",
    description:
      "Autonomous AI voice agents designed to handle customer workflows for small businesses — validating and architecting as part of the 100x Applied AI Cohort.",
    techStack: ["LLM Agents", "Voice AI", "Workflow Automation"],
    image:
      "https://images.pexels.com/photos/29652324/pexels-photo-29652324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    beats: {
      problem: "Small businesses lose massive revenue from missed calls and manual order taking.",
      did: "Currently validating and architecting autonomous AI voice agents designed to handle customer workflows as part of the 100x Applied AI Cohort.",
      result: "TBD.",
      takeaway: "I am actively developing AI solutions that drive immediate, measurable business value.",
    },
  },
  {
    id: "proj-jobchat",
    name: "JobChat.AI",
    tagline: "A conversational job portal that speaks plain English",
    description:
      "A conversational job portal where users find roles, manage applications, and query data by simply typing what they want. An NL2GQL service translates natural language into live GraphQL queries in real time, backed by a Flask API, MongoDB, and an LLM.",
    techStack: ["React", "Python", "Flask", "GraphQL", "MongoDB", "LLM"],
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpZ2h0JTIwZmx1aWQlMjBtaW5pbWFsJTIwYmFja2dyb3VuZHxlbnwwfHx8d2hpdGV8MTc4NDUwODI1OHww&ixlib=rb-4.1.0&q=85",
    liveUrl: "https://github.com/RJBOGA/JAP",
    beats: {
      problem: "Navigating job portals is manual, slow, and rigid.",
      did: "Built a conversational UI using React, Python, and an LLM that translates plain English into live GraphQL queries in real-time.",
      result: "Source and demo on GitHub.",
      resultLinks: [{ label: "GitHub", url: "https://github.com/RJBOGA/JAP" }],
      takeaway: "I can seamlessly bridge natural language models with complex database architectures.",
    },
  },
  {
    id: "proj-schoolpool",
    name: "SchoolPool",
    tagline: "Peer-to-peer campus rides, powered by real-time crime intel",
    description:
      "A full-stack peer-to-peer ride-sharing platform that connects university students for safe, affordable campus travel. An integrated crime-news analyzer scans and scores routes before a booking is confirmed.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "News API"],
    image:
      "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpZ2h0JTIwZmx1aWQlMjBtaW5pbWFsJTIwYmFja2dyb3VuZHxlbnwwfHx8d2hpdGV8MTc4NDUwODI1OHww&ixlib=rb-4.1.0&q=85",
    liveUrl: "https://github.com/RJBOGA/school-pool-frontend",
    beats: {
      problem: "University transit is disconnected and lacks integrated safety intel.",
      did: "Shipped a full-stack Spring Boot and React ride-sharing platform that evaluates routes using a real-time crime news API.",
      result: "Three-repo platform on GitHub.",
      resultLinks: [
        { label: "Frontend", url: "https://github.com/RJBOGA/school-pool-frontend" },
        { label: "Backend", url: "https://github.com/RJBOGA/schoolpool-be" },
        { label: "Crime News API", url: "https://github.com/RJBOGA/newsapi" },
      ],
      takeaway: "I deliver secure, end-to-end platforms that handle complex external integrations.",
    },
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
