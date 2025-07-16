import { marked } from 'marked';

export async function loadAbout() {
  const el = document.getElementById('about-content');
  try {
    const res = await fetch('./src/data/about.md');
    const text = await res.text();
    el.innerHTML = marked.parse(text);
  } catch (err) {
    el.innerHTML = '<p>About content coming soon.</p>';
    console.error('About load failed', err);
  }
}

export async function loadExperience() {
  const container = document.getElementById('experience-list');
  try {
    const res = await fetch('./src/data/experience.json');
    const data = await res.json();
    container.innerHTML = data.map(renderExperienceCard).join('');
  } catch (err) {
    container.innerHTML = '<p>Experience details coming soon.</p>';
    console.error('Experience load failed', err);
  }
}

function renderExperienceCard(item) {
  const bullets = (item.points || []).map(p => `<li>${p}</li>`).join('');
  return `
    <article class="card">
      <h3 class="h-mono text-xl mb-1">${item.role ?? 'Role title'}</h3>
      <p class="text-sm text-neutral-400 mb-3">${item.company ?? 'Employer'} • ${item.dates ?? ''}</p>
      <ul class="list-disc list-inside space-y-1 text-sm">${bullets}</ul>
    </article>`;
}

export async function loadEducation() {
  const container = document.getElementById('education-list');
  try {
    const res = await fetch('./src/data/education.json');
    const data = await res.json();
    container.innerHTML = data.map(renderEduCard).join('');
  } catch (err) {
    container.innerHTML = '<p>Education details coming soon.</p>';
    console.error('Education load failed', err);
  }
}

function renderEduCard(item) {
  return `
    <article class="card">
      <h3 class="h-mono text-xl mb-1">${item.qualification ?? 'Qualification'}</h3>
      <p class="text-sm text-neutral-400 mb-3">${item.institution ?? 'Institution'}</p>
      <p class="text-sm">${item.graduation ?? ''}</p>
    </article>`;
}

export async function loadProjects() {
  const container = document.getElementById('projects-list');
  try {
    const res = await fetch('./src/data/projects.json');
    const data = await res.json();
    if (!Array.isArray(data) || !data.length) {
      container.innerHTML = '<p>Projects coming soon.</p>';
      return;
    }
    container.innerHTML = data.map(renderProjectCard).join('');
  } catch (err) {
    container.innerHTML = '<p>Projects coming soon.</p>';
    console.error('Projects load failed', err);
  }
}

function renderProjectCard(item) {
  const tags = (item.tags || []).map(t => `<span class="px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 text-xs mr-1">${t}</span>`).join('');
  const img = item.image ? `<img src="${item.image}" alt="${item.title} screenshot" class="w-full h-40 object-cover rounded mb-3" />` : '';
  const link = item.github ? `<a href="${item.github}" target="_blank" rel="noopener" class="h-mono text-sm text-brand-300 hover:underline">GitHub</a>` : '';
  return `
    <article class="card">
      ${img}
      <h3 class="h-mono text-xl mb-1">${item.title ?? 'Untitled Project'}</h3>
      <p class="text-sm text-neutral-300 mb-3">${item.summary ?? ''}</p>
      <div class="mb-3">${tags}</div>
      ${link}
    </article>`;
}