(() => {
  const root = document.documentElement;
  const storageKey = "site-theme";

  const supportsMatchMedia = typeof window.matchMedia === "function";
  const matches = (query) => supportsMatchMedia && window.matchMedia(query).matches;

  let theme = null;
  try {
    theme = localStorage.getItem(storageKey);
  } catch (_) {
    theme = null;
  }

  if (theme !== "light" && theme !== "dark") {
    theme = matches("(prefers-color-scheme: light)") ? "light" : "dark";
  }

  root.setAttribute("data-theme", theme);

  const wantsReducedMotion = matches("(prefers-reduced-motion: reduce)");
  const coarsePointer = matches("(pointer: coarse)");
  const narrowViewport = matches("(max-width: 900px)");
  const saveData = Boolean(navigator.connection && navigator.connection.saveData);

  if (!wantsReducedMotion && !coarsePointer && !narrowViewport && !saveData) {
    root.classList.add("enhanced-background");
  }
})();
