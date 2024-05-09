/**
 * Updates text font size based on the value of the range input
 */
const fontSizeControl = document.querySelector("input#font-size-control");

/**
 * Target element to change font size
 */
const text = document.querySelector("span#text");

fontSizeControl.oninput = () => {
  /**
   * New font size value
   */
  const fontSize = fontSizeControl.value;

  /**
   * Apply new font size to the target element
   */
  text.style.fontSize = `${fontSize}px`;
};
