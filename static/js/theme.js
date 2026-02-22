(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  var label = button ? button.querySelector(".theme-toggle-label") : null;

  function getTheme() {
    return root.getAttribute("data-theme") || "light";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("site-theme", theme);
    if (label) {
      label.textContent = theme === "dark" ? "Light" : "Dark";
    }
    if (button) {
      button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  if (!button) {
    return;
  }

  setTheme(getTheme());
  button.addEventListener("click", function () {
    var next = getTheme() === "dark" ? "light" : "dark";
    setTheme(next);
  });
})();
