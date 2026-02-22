import type { AgentRole } from "@/types/site";

export const agentRoles: AgentRole[] = [
  {
    id: "repo-auditor",
    name: "Repo Auditor",
    focus: "Audits stack, routing, and technical debt before implementation.",
    tools: ["Vite", "Git", "Build diagnostics"],
    deliverable: "Risk map and implementation baseline.",
  },
  {
    id: "ux-strategist",
    name: "UX Strategist",
    focus: "Designs information architecture for recruiter-first scanning.",
    tools: ["User-flow mapping", "Content hierarchy"],
    deliverable: "Section order and narrative structure.",
  },
  {
    id: "visual-director",
    name: "Visual Design Director",
    focus: "Defines creative direction, typography, and visual rhythm.",
    tools: ["Design tokens", "Grid systems"],
    deliverable: "Premium UI language and hierarchy.",
  },
  {
    id: "design-systems",
    name: "Design Systems Engineer",
    focus: "Creates scalable component primitives and interaction states.",
    tools: ["Tailwind", "CVA", "Token architecture"],
    deliverable: "Reusable component library.",
  },
  {
    id: "frontend-engineer",
    name: "Frontend Engineer",
    focus: "Builds typed routes, sections, and data-driven components.",
    tools: ["React", "TypeScript", "React Router"],
    deliverable: "Maintainable production-ready pages.",
  },
  {
    id: "motion-designer",
    name: "Motion Designer",
    focus: "Adds subtle transitions that support comprehension.",
    tools: ["Framer Motion", "Reduced-motion patterns"],
    deliverable: "Refined micro-interactions.",
  },
  {
    id: "performance-engineer",
    name: "Performance Engineer",
    focus: "Optimizes payload, rendering flow, and perceived speed.",
    tools: ["Bundle review", "Image strategy", "Lazy motion"],
    deliverable: "High Lighthouse readiness.",
  },
  {
    id: "accessibility-lead",
    name: "Accessibility Lead",
    focus: "Ensures semantic structure and keyboard-first usability.",
    tools: ["WCAG checks", "Focus states", "ARIA hygiene"],
    deliverable: "Inclusive interaction baseline.",
  },
  {
    id: "qa-reviewer",
    name: "QA and Polish Reviewer",
    focus: "Executes final responsive and consistency review.",
    tools: ["Breakpoint testing", "Regression checks"],
    deliverable: "Release-ready quality pass.",
  },
];
