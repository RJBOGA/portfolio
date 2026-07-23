export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  monogram: string;
  title: string;
  location: string;
  website: string;
  email: string;
  portrait: string;
  bioLead: string;
  bio: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  impact: string[];
  current: boolean;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  links?: ProjectLink[];
  beats?: {
    problem: string;
    did: string;
    result: string;
    resultLinks?: ProjectLink[];
    takeaway: string;
  };
}

export interface Achievement {
  id: string;
  metric: string;
  label: string;
  detail: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  span?: "sm" | "md" | "lg";
  skills: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  years?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
}
