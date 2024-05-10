function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/**
 * Change color button
 */
const changeColorBtn = document.querySelector(".change-color");

/**
 * Element which displays current color
 */
const colorElement = document.querySelector(".color");

/**
 * Event listener for the button
 */
changeColorBtn.onclick = () => {
  // Generate random color
  const color = getRandomHexColor();

  // Update color element
  colorElement.textContent = color;

  // Change page background color
  document.body.style.backgroundColor = color;
};
