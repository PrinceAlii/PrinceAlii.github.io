import { marked } from "marked";
import aboutMd from "./data/about.md?raw";
import experienceData from "./data/experience.json";
import educationData from "./data/education.json";
import projectsData from "./data/projects.json";

// Directly render about section from imported markdown
export function loadAbout() {
  const el = document.getElementById("about-content");
  if (el) {
    el.innerHTML = marked.parse(aboutMd);
  }
}

// Render experience cards from imported JSON
export function loadExperience() {
  const container = document.getElementById("experience-list");
  if (container) {
    container.innerHTML = experienceData.map(renderExperienceCard).join("");
  }
}

function renderExperienceCard(item) {
  const bullets = (item.points || []).map((p) => `<li>${p}</li>`).join("");
  return `
    <article class="card">
      <h3 class="h-mono text-xl mb-1">${item.role ?? "Role"}</h3>
      <p class="text-sm text-neutral-400 mb-3">${item.company ?? "Company"} • ${item.dates ?? ""}</p>
      <ul class="list-disc list-inside space-y-1 text-sm">${bullets}</ul>
    </article>`;
}

// Render education cards from imported JSON
export function loadEducation() {
  const container = document.getElementById("education-list");
  if (container) {
    container.innerHTML = educationData.map(renderEduCard).join("");
  }
}

function renderEduCard(item) {
  return `
    <article class="card">
      <h3 class="h-mono text-xl mb-1">${item.qualification ?? "Degree"}</h3>
      <p class="text-sm text-neutral-400 mb-3">${item.institution ?? "University"}</p>
      <p class="text-sm">${item.graduation ?? ""}</p>
    </article>`;
}

// Render project cards from imported JSON
export function loadProjects() {
  const container = document.getElementById("projects-list");
  if (container) {
    if (!projectsData.length) {
      container.innerHTML = "<p>Projects loading...</p>";
      return;
    }
    container.innerHTML = projectsData.map(renderProjectCard).join("");
  }
}

function renderProjectCard(item) {
  const tags = (item.tags || [])
    .map(
      (t) =>
        `<span class="px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 text-xs mr-1">${t}</span>`
    )
    .join("");
    
  // Only show image if one exists
  const img = item.image
    ? `<img src="${item.image}" alt="${item.title} screenshot" class="w-full h-40 object-cover rounded mb-3" />`
    : "";
    
  const link = item.github
    ? `<a href="${item.github}" target="_blank" rel="noopener" class="h-mono text-sm text-brand-300 hover:underline">GitHub</a>`
    : "";
    
  return `
    <article class="card">
      ${img}
      <h3 class="h-mono text-xl mb-1">${item.title ?? "Project"}</h3>
      <p class="text-sm text-neutral-300 mb-3">${item.summary ?? ""}</p>
      <div class="mb-3">${tags}</div>
      ${link}
    </article>`;
}