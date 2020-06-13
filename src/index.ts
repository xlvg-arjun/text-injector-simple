declare module 'text-injector';

/**
 * @typedef {Object} TextInjectorOptions - Options to be passed to the text-injector function. Optional
 * @property {boolean} clear - Specifies if already existing content should be cleared
 * @property {boolean} useHtml - Specifies if .innerHTML should be used instead of .textContent. Set to true if injecting HTML code
 */

/**
 * 
 * @param {string} text - Text to be injected
 * @param {string | Element} elementId - Either the id of the element (without '#' in front) or the actual element itself
 * Which would be retrieved using document.getElementById
 * @param {TextInjectorOptions} options
 * @returns {Element} This Element could be fed back as the second argument to the function
 */
export default function textInjector(text: string, elementId: string | Element, options = { clear: false, useHtml: false }): Element {
  const { clear, useHtml } = options;
  const element = elementId instanceof Element ? elementId : document.getElementById(elementId);
  if (useHtml) {
    if (clear) {
      element.innerHTML = '';
    }
    element.innerHTML += text;
  }

  if (clear) {
    element.textContent = '';
  }
  element.textContent += text;
  return element;
}
