import './styles.css';
import { loadAbout, loadExperience, loadEducation, loadProjects } from './content.js';
import { initScrollSpy, initParallax, initFadeIns } from './ui.js';

const root = document.documentElement;
const btn = document.getElementById('theme-toggle');

const setThemeState = (isDark) => {
  root.classList.toggle('dark', isDark);
  root.classList.toggle('light', !isDark);
  btn?.setAttribute('aria-pressed', String(isDark));
  btn?.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  btn?.setAttribute('data-theme', isDark ? 'dark' : 'light');
};

setThemeState(root.classList.contains('dark'));

btn?.addEventListener('click', () => {
  const isDark = !root.classList.contains('dark');
  setThemeState(isDark);
  localStorage.setItem('ali-theme', isDark ? 'dark' : 'light');
});

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

loadAbout();
loadExperience();
loadEducation();
loadProjects();

document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initParallax();
  initFadeIns();
});
