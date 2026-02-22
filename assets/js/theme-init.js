(function () {
  var theme = "light";

  try {
    var storedTheme = localStorage.getItem("site-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      theme = storedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  } catch (error) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  document.documentElement.setAttribute("data-theme", theme);
})();
