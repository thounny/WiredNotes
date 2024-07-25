"use strict";

// MODULE IMPORT
import {
  addEventOnElements,
  getGreetingMsg,
  activeNotebook,
  makeElemEditable,
} from "./utils.js";
import { Tooltip } from "./components/Tooltip.js";

// TOGGLE SIDEBAR in small screen

const /** HTMLElement */ $sidebar = document.querySelector("[data-sidebar]");
const /** {Array<HTMLElement>} */ $sidebarTogglers = document.querySelectorAll(
    "[data-sidebar-toggler]"
  );
const /** {HTMLElement} */ $overlay = document.querySelector(
    "[data-sidebar-overlay]"
  );

addEventOnElements($sidebarTogglers, "click", function () {
  $sidebar.classList.toggle("active");
  $overlay.classList.toggle("active");
});

// INITIALIZE tooltip behavior for all DOM elements with a
// 'data-tooltip' attribute.

const /** {Array<HTMLElement>} */ $tooltipElems =
    document.querySelectorAll("[data-tooltip]");
$tooltipElems.forEach(($elem) => Tooltip($elem));

// SHOW greeting message on homepage

const /** {HTMLElement} */ $greetElem =
    document.querySelector("[data-greeting]");
const /** {number} */ currentHour = new Date().getHours();
$greetElem.textContent = getGreetingMsg(currentHour);

// SHOW current date on homepage

const /** {HTMLElement} */ $currentDateElem = document.querySelector(
    "[data-current-date]"
  );
$currentDateElem.textContent = new Date().toDateString().replace(" ", ", ");

// NOTEBOOK create field
const /** {HTMLElement} */ $sidebarList =
    document.querySelector("[data-sidebar-list");
const /** {HTMLElement} */ $addNotebookBtn = document.querySelector(
    "[data-add-notebook]"
  );

const showNotebookField = function () {
  //   console.log("Show notebook field");
  const /** {HTMLElement} */ $navItem = document.createElement("div");
  $navItem.classList.add("nav-item");

  $navItem.innerHTML = `
    <span class="text text-label-large" data-notebook-field></span>

    <div class="state-layer"></div>
  `;

  $sidebarList.appendChild($navItem);
  const /** {HTMLElement} */ $navItemField = $navItem.querySelector(
      "[data-notebook-field]"
    );

  // ACTIVATE new created notebook and DEACTIVATE the last one.
  activeNotebook.call($navItem);

  // Make notebook field content editable and focus
  makeElemEditable($navItemField);
};

$addNotebookBtn.addEventListener("click", showNotebookField);
