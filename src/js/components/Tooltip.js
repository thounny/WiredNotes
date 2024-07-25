"use strict";

/**
 * Attaches a tooltip behavior to a given DOM element.
 * When the element is hovered over, a tooltip with the specified content is displayed.
 * The tooltip is automatically positioned below the element.
 *
 * @param {HTMLElement} $element - The DOM element to which the tooltip behavior is added.
 */
export const Tooltip = function ($element) {
  const $tooltip = createTooltipElement();

  $element.addEventListener("mouseenter", handleMouseEnter);
  $element.addEventListener("mouseleave", handleMouseLeave);

  function createTooltipElement() {
    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip", "text-body-small");
    return tooltip;
  }

  function handleMouseEnter() {
    $tooltip.textContent = this.dataset.tooltip;
    updateTooltipPosition(this);
    document.body.appendChild($tooltip);
    requestAnimationFrame(() => {
      $tooltip.style.opacity = "1";
    });
  }

  function handleMouseLeave() {
    $tooltip.style.opacity = "0";
    setTimeout(() => {
      if ($tooltip.parentNode) {
        $tooltip.parentNode.removeChild($tooltip);
      }
    }, 200); // Delay to allow opacity transition
  }

  function updateTooltipPosition(element) {
    const { top, left, height, width } = element.getBoundingClientRect();
    $tooltip.style.top = `${top + height + 4}px`;
    $tooltip.style.left = `${left + width / 2}px`;
    $tooltip.style.transform = "translate(-50%, 0)";
  }
};
