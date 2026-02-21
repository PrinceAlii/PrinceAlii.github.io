import { marked } from "marked";
import aboutMd from "./data/about.md?raw";
import experienceData from "./data/experience.json";
import educationData from "./data/education.json";
import projectsData from "./data/projects.json";

export function loadAbout() {
  const el = document.getElementById("about-content");
  if (el) {
    el.innerHTML = marked.parse(aboutMd);
  }
}

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
      <header class="mb-3">
        <h3 class="h-mono text-xl font-semibold">${item.role ?? "Role"}</h3>
        <p class="text-sm text-neutral-600 dark:text-neutral-400">
          <span class="font-medium text-neutral-800 dark:text-neutral-200">${item.company ?? "Company"}</span>
          <span class="mx-2 text-neutral-500">•</span>
          <span>${item.dates ?? ""}</span>
        </p>
      </header>
      <ul class="list-disc list-inside space-y-1 text-sm text-neutral-700 dark:text-neutral-300">${bullets}</ul>
    </article>`;
}

export function loadEducation() {
  const container = document.getElementById("education-list");
  if (container) {
    container.innerHTML = educationData.map(renderEduCard).join("");
  }
}

function renderEduCard(item) {
  return `
    <article class="card">
      <h3 class="h-mono text-xl font-semibold mb-1">${item.qualification ?? "Degree"}</h3>
      <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-3">${item.institution ?? "University"}</p>
      <p class="text-sm text-neutral-700 dark:text-neutral-300">${item.graduation ?? ""}</p>
    </article>`;
}

export function loadProjects() {
  const container = document.getElementById("projects-list");
  if (container) {
    if (!projectsData.length) {
      container.innerHTML = "<p>Projects will appear here soon.</p>";
      return;
    }
    container.innerHTML = projectsData.map(renderProjectCard).join("");
  }
}

function renderProjectCard(item) {
  const tags = (item.tags || [])
    .map(
      (t) =>
        `<span class="tag">${t}</span>`
    )
    .join("");
    
  // Only show image if one exists
  const img = item.image
    ? `<img src="${item.image}" alt="${item.title} screenshot" class="w-full aspect-[16/9] object-cover rounded-md mb-3" loading="lazy" decoding="async" />`
    : "";
    
  const links = [
    item.github
      ? `<a href="${item.github}" target="_blank" rel="noopener" class="project-link">GitHub</a>`
      : "",
    item.live
      ? `<a href="${item.live}" target="_blank" rel="noopener" class="project-link project-link-primary">Live Demo</a>`
      : ""
  ]
    .filter(Boolean)
    .join("");

  const highlights = (item.highlights || [])
    .map((h) => `<li>${h}</li>`)
    .join("");
    
  return `
    <article class="card">
      ${img}
      <h3 class="h-mono text-xl font-semibold mb-1">${item.title ?? "Project"}</h3>
      <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-3">${item.summary ?? ""}</p>
      <div class="mb-3 flex flex-wrap gap-2">${tags}</div>
      ${highlights ? `<ul class="list-disc list-inside space-y-1 text-sm text-neutral-700 dark:text-neutral-300 mb-4">${highlights}</ul>` : ""}
      ${links ? `<div class="project-links">${links}</div>` : ""}
    </article>`;
}
