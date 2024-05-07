let initialValue = 0; // Set initial value

let value = document.getElementById("value");
value.textContent = initialValue;

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.onclick = increment;
decrementButton.onclick = decrement;

function increment() {
  initialValue += 1;
  value.textContent = initialValue;
}

function decrement() {
  initialValue -= 1;
  value.textContent = initialValue;
}
