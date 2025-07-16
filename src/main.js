import './styles.css';
import { loadAbout, loadExperience, loadEducation, loadProjects } from './content.js';
import { initScrollSpy, initParallax, initFadeIns } from './ui.js';

const root = document.documentElement;
const btn = document.getElementById('theme-toggle');

function setTheme(dark) {
  if (dark) {
    root.classList.add('dark');
    btn.textContent = 'Dark';
    btn.setAttribute('aria-pressed', 'true');
  } else {
    root.classList.remove('dark');
    btn.textContent = 'Light';
    btn.setAttribute('aria-pressed', 'false');
  }
  localStorage.setItem('ali-theme', dark ? 'dark' : 'light');
}

function initTheme() {
  const saved = localStorage.getItem('ali-theme');
  if (saved === 'light') setTheme(false);
  else setTheme(true);
}

btn?.addEventListener('click', () => {
  const isDark = root.classList.contains('dark');
  setTheme(!isDark);
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

// hero image change
// export function setHeroImage(path) {
//   const heroImg = document.querySelector('.hero img');
//   if (heroImg) heroImg.src = path;
// }