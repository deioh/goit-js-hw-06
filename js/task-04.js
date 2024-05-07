let initialValue = 0; // Set initial value

const valueElement = document.getElementById("value");
valueElement.textContent = initialValue;

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.onclick = () => {
  valueElement.textContent = ++initialValue;
};

decrementButton.onclick = () => {
  valueElement.textContent = --initialValue;
};
