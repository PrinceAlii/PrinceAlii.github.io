import type { Project } from "@/types/site";

export const projects: Project[] = [
  {
    slug: "editorial-portfolio-platform",
    title: "Editorial Portfolio Platform",
    summary:
      "A complete redesign of my portfolio focused on recruiter clarity, premium UI polish, and maintainable architecture.",
    description:
      "Rebuilt from a static page into a typed React experience with reusable UI primitives, data-driven sections, and route-level project storytelling.",
    period: "Feb 2026",
    status: "Live",
    featured: true,
    outcome:
      "Improved information hierarchy so a recruiter can understand who I am and what I build within seconds.",
    skills: [
      "frontend-engineering",
      "accessibility",
      "qa-polish",
      "data-viz",
      "cicd",
    ],
    agents: [
      "repo-auditor",
      "ux-strategist",
      "visual-director",
      "design-systems",
      "frontend-engineer",
      "motion-designer",
      "accessibility-lead",
      "qa-reviewer",
    ],
    highlights: [
      "Introduced design tokens, component variants, and section-level animation controls.",
      "Implemented Skills and Agents filters mapped directly to project metadata.",
      "Added semantic landmarks, visible focus states, and reduced-motion support.",
    ],
    links: {
      live: "https://www.alibo.dev",
      github: "https://github.com/PrinceAlii/PrinceAlii.github.io",
    },
  },
  {
    slug: "devops-rotation-toolkit",
    title: "DevOps Rotation Toolkit",
    summary:
      "Internal workflows and scripts used during graduate rotations to support cloud migration and environment consistency.",
    description:
      "Codified repeatable setup and operational checks to reduce manual coordination overhead across teams.",
    period: "2025-2026",
    status: "Internal",
    featured: true,
    outcome:
      "Reduced friction for onboarding and routine platform tasks by documenting reusable operational patterns.",
    skills: ["aws-cloud", "infra-automation", "observability", "cicd", "qa-polish"],
    agents: [
      "repo-auditor",
      "design-systems",
      "frontend-engineer",
      "performance-engineer",
      "qa-reviewer",
    ],
    highlights: [
      "Created practical runbooks to support deployment and troubleshooting.",
      "Aligned script patterns with CI/CD expectations and team handover standards.",
      "Focused on low-risk automation and maintainability over one-off shortcuts.",
    ],
  },
  {
    slug: "service-operations-playbook",
    title: "Service Operations Playbook",
    summary:
      "A structured service-quality framework drawn from high-volume customer support roles in government and banking.",
    description:
      "Translated frontline operational lessons into a technical delivery playbook: clear triage, clean handoffs, and accountability in every interaction.",
    period: "2023-2025",
    status: "Concept",
    featured: false,
    outcome:
      "Improved ability to bridge technical implementation with human impact and support readiness.",
    skills: ["observability", "data-viz", "qa-polish", "cicd"],
    agents: ["ux-strategist", "accessibility-lead", "qa-reviewer"],
    highlights: [
      "Codified escalation and follow-up standards for faster resolution loops.",
      "Established consistent notes and case context for better downstream support.",
      "Applies service thinking directly to platform and product reliability work.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
