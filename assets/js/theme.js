(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const storageKey = "site-theme";

  if (!toggle) {
    return;
  }

  const readTheme = () => (root.getAttribute("data-theme") === "light" ? "light" : "dark");

  const syncToggle = (theme) => {
    const next = theme === "dark" ? "light" : "dark";
    toggle.textContent = `Theme: ${theme === "dark" ? "Dark" : "Light"}`;
    toggle.setAttribute("aria-label", `Switch to ${next} theme`);
    toggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  };

  const applyTheme = (theme, persist) => {
    root.setAttribute("data-theme", theme);
    syncToggle(theme);
    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (_) {
        // Ignore storage failures in strict privacy modes.
      }
    }
  };

  syncToggle(readTheme());

  toggle.addEventListener("click", () => {
    const nextTheme = readTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  });
})();
