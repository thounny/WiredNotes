"use strict";
/**
 * Attaches an event listener to a collection of DOM elements
 *
 * @param {ArrayHTMLElement} $elements - An array of DOM elements.
 * @param {string} eventType - The type of event to listen for 'click', 'mouseover', etc.
 * @param {Function} callback - The function to be execute when the event occurs.
 */

const addEventOnElements = function ($elements, eventType, callback) {
  // console.log($elements);
  $elements.forEach(($element) =>
    $element.addEventListener(eventType, callback)
  );
};

/**
 * Generates a greeting message based on the current hour of the day.
 * 
 * @param {number} currentHour - The current hour (0-23) to
 determine the appropriate greeting.
 * @returns {string} A greeting message with a salutation
 corresponding to the time of day.
 */
const getGreetingMsg = function (currentHour) {
  // console.log("🚀 ~ currentHour:", currentHour);
  const /** {string} */ greeting =
      currentHour < 5
        ? "Night"
        : currentHour < 12
        ? "Morning"
        : currentHour < 15
        ? "Noon"
        : currentHour < 17
        ? "Afternoon"
        : currentHour < 20
        ? "Evening"
        : "Night";
  return `Good ${greeting}`;
};

let /** {HTMLElement | undefined} */ $lastActiveNavItem;

/**
 * Activates a navigation item by adding the 'active' class and deactivates the
 * previously active item.
 */
const activeNotebook = function () {
  $lastActiveNavItem?.classList.remove("active");
  this.classList.add("active"); //this: $navItem
  $lastActiveNavItem = this; //this: $navItem
};

/**
 * Makes a DOM element editable by setting the 'contenteditable'
 attribute to true and focusing on it.
 *
 * @param {HTMLElement} $element - The DOM element to make editable.
 */
const makeElemEditable = function ($element) {
  $element.setAttribute("contenteditable", true);
  $element.focus();
};

/**
 * Generates a unique ID based on the current timestamp.
 *
 * @returns {string} A string representation of the current timestamp.
 */
const generateID = function () {
  return new Date().getTime().toString();
};

export {
  addEventOnElements,
  getGreetingMsg,
  activeNotebook,
  makeElemEditable,
  generateID,
};
