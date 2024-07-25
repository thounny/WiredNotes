"use strict";

/**
 * Toggles the theme between 'light' and 'dark'.
 * Manages the theme setting in the DOM and local storage.
 */
const toggleTheme = function () {
  const /** {string} */ currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
  const /** {string} */ newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

// INITIALIZE THEME

const /** {string | null} */ storedTheme = localStorage.getItem("theme");
// console.log("🚀 ~ storedTheme:", storedTheme);
const /** {Boolean} */ systemThemeIsDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
// console.log("🚀 ~ systemThemeIsDark:", systemThemeIsDark);
const /** {string} */ initialTheme =
    storedTheme ?? (systemThemeIsDark ? "dark" : "light");
// console.log("🚀 ~ initialTheme:", initialTheme);
document.documentElement.setAttribute("data-theme", initialTheme);

// ATTACH toggleTheme to theme button click event

window.addEventListener("DOMContentLoaded", function () {
  const /** {HTMLElement} */ $themeBtn =
      document.querySelector("[data-theme-btn");
  if ($themeBtn) $themeBtn.addEventListener("click", toggleTheme);
});
