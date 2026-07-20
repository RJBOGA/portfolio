/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Experience,
  Writing,
  Speaking,
  Project,
  Education,
  SocialLink,
} from "@/types/portfolio";

import avatarAsset from "@/assets/dp.jpg.asset.json";
import dsiTalkAsset from "@/assets/dsi-talk.jpg.asset.json";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Raju Boga",
  title: "Senior Software Engineer · Full-Stack Architect · AI Tinkerer",
  location: { city: "United States", country: "" },
  website: "linkedin.com/in/rjboga",
  email: "rjboga1999@gmail.com",
  avatar: avatarAsset.url,
  bio: "Everyone calls me RJ. I'm a Senior Full-Stack Engineer who has spent the last half-decade shipping mission-critical Angular and Java Spring Boot systems for Fortune 500 banks, lenders, and healthcare giants — the kind of platforms millions of people quietly rely on every day.\n\nI'm an AWS Certified Solutions Architect obsessed with UI modernization, cloud-native architecture, and squeezing every last millisecond out of production systems. I've led sweeping legacy-to-modern migrations, mentored engineers across continents, and presented original research on the future of project management at the DSI conference.\n\nOutside of work, I'm relentlessly tinkering with AI — spinning up agents, prototyping GenAI copilots, and building weird little tools in my spare time to see what the models can really do. I live for that moment where clean code meets a real-world problem and just clicks.",
  skills: "Angular, Java, Spring Boot, TypeScript, AWS, Cloud Architecture, UI Modernization, GenAI, LLM Agents, Prompt Engineering, System Design, SQL, Agile Leadership, Stakeholder Management",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Citi",
    role: "Software Engineer",
    location: "United States",
    startDate: "2026-05",
    endDate: null,
    description: "Architecting high-throughput full-stack systems at one of the world's largest financial institutions — building resilient Angular front-ends and Spring Boot services that move serious money at global scale.",
    current: true,
  },
  {
    id: "exp-2",
    company: "Rate",
    role: "Software Engineer",
    location: "United States",
    startDate: "2024-02",
    endDate: "2026-05",
    description: "Led sweeping UI modernization across the mortgage lending platform, re-engineering legacy flows into a snappy Angular + Spring Boot experience on AWS. Shipped features used by thousands of loan officers daily and drove measurable wins in performance, conversion, and developer velocity.",
    current: false,
  },
  {
    id: "exp-3",
    company: "Carelon Global Solutions India",
    role: "Software Engineer",
    location: "India",
    startDate: "2021-11",
    endDate: "2023-07",
    description: "Cut my teeth building enterprise healthcare platforms serving millions of members — partnering with product, design, and business stakeholders in a fast-moving Agile org, and quickly graduating from IC work to owning end-to-end features.",
    current: false,
  },
];

export const writing: Writing[] = [];

export const speaking: Speaking[] = [
  {
    id: "talk-1",
    event: "DSI Annual Conference",
    date: "2024-11-01",
    location: "United States",
    talk: "Project Management for the Future: Leveraging Technology and Sustainability",
    description:
      "Presented original research alongside Dr. Vatsal Paghadal and Dr. Benjamin George at the Decision Sciences Institute conference, exploring how emerging tech and sustainability practices are reshaping modern project management.",
    media: dsiTalkAsset.url,
    upcoming: false,
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "AI Agent Playground",
    description:
      "A personal sandbox of LLM-powered agents — from autonomous research assistants to code-review copilots — built to push the limits of what modern GenAI can do in real workflows.",
    techStack: ["TypeScript", "OpenAI", "LangChain", "Next.js"],
    status: "active",
  },
  {
    id: "proj-2",
    name: "Enterprise GenAI Automations",
    description:
      "Prototypes that plug LLMs into legacy enterprise systems — turning tedious manual workflows into one-click, AI-assisted experiences.",
    techStack: ["Python", "Spring Boot", "LLMs", "AWS"],
    status: "active",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "University of Central Missouri",
    degree: "Master's",
    field: "Information Technology",
    startYear: "",
    endYear: "",
    location: "Warrensburg, MO",
  },
  {
    id: "edu-2",
    institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
    degree: "Bachelor's",
    field: "Information Technology",
    startYear: "",
    endYear: "",
    location: "Hyderabad, India",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "rjboga",
    url: "https://linkedin.com/in/rjboga",
  },
  {
    platform: "GitHub",
    username: "RJBOGA",
    url: "https://github.com/RJBOGA",
  },
  {
    platform: "Email",
    username: "rjboga1999@gmail.com",
    url: "mailto:rjboga1999@gmail.com",
  },
];