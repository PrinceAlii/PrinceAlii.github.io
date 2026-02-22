(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  var label = button ? button.querySelector(".theme-toggle-label") : null;
  var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function isTheme(value) {
    return value === "light" || value === "dark";
  }

  function readStoredTheme() {
    try {
      return localStorage.getItem("site-theme");
    } catch (err) {
      return null;
    }
  }

  function writeStoredTheme(theme) {
    try {
      localStorage.setItem("site-theme", theme);
    } catch (err) {
      // Storage can be blocked in private or restricted browser contexts.
    }
  }

  function getTheme() {
    var current = root.getAttribute("data-theme");
    return isTheme(current) ? current : "light";
  }

  function resolveInitialTheme() {
    var stored = readStoredTheme();
    if (isTheme(stored)) {
      return stored;
    }

    return mediaQuery.matches ? "dark" : "light";
  }

  function setTheme(theme, options) {
    if (!isTheme(theme)) {
      return;
    }

    var persist = options && options.persist === true;
    root.setAttribute("data-theme", theme);
    if (persist) {
      writeStoredTheme(theme);
    }
    if (label) {
      label.textContent = theme === "dark" ? "Light" : "Dark";
    }
    if (button) {
      button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  if (!button) {
    return;
  }

  setTheme(resolveInitialTheme(), { persist: false });
  button.addEventListener("click", function () {
    var next = getTheme() === "dark" ? "light" : "dark";
    setTheme(next, { persist: true });
  });

  window.addEventListener("storage", function (event) {
    if (event.key === "site-theme" && (event.newValue === "light" || event.newValue === "dark")) {
      setTheme(event.newValue, { persist: false });
    }
  });

  function handleSystemThemeChange(event) {
    if (readStoredTheme() === null) {
      setTheme(event.matches ? "dark" : "light", { persist: false });
    }
  }

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", handleSystemThemeChange);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(handleSystemThemeChange);
  }
})();
