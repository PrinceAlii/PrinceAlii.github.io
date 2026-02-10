import './styles.css';
import { loadAbout, loadExperience, loadEducation, loadProjects } from './content.js';
import { initScrollSpy, initParallax, initFadeIns } from './ui.js';

const root = document.documentElement;
const btn = document.getElementById('theme-toggle');

// Update button state on load based on what the inline script did
if (root.classList.contains('dark')) {
  btn.textContent = 'Dark';
  btn.setAttribute('aria-pressed', 'true');
} else {
  btn.textContent = 'Light';
  btn.setAttribute('aria-pressed', 'false');
}

// Theme toggle handler
btn?.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  localStorage.setItem('ali-theme', isDark ? 'dark' : 'light');
  btn.textContent = isDark ? 'Dark' : 'Light';
  btn.setAttribute('aria-pressed', String(isDark));
});

// Set current year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Initialize content
loadAbout();
loadExperience();
loadEducation();
loadProjects();

// Initialize UI effects
document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initParallax();
  initFadeIns();
});
