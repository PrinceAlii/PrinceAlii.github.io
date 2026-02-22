export type ThemeMode = "light" | "dark";

export type SkillCategory =
  | "Cloud"
  | "Automation"
  | "Frontend"
  | "Reliability"
  | "Data"
  | "Delivery";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: "Core" | "Strong" | "Working";
  proof: string;
}

export interface AgentRole {
  id: string;
  name: string;
  focus: string;
  tools: string[];
  deliverable: string;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  period: string;
  status: "Live" | "Internal" | "Concept";
  featured: boolean;
  skills: string[];
  agents: string[];
  highlights: string[];
  outcome: string;
  links?: ProjectLinks;
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  points: string[];
}

export interface Education {
  qualification: string;
  institution: string;
  graduation: string;
}
