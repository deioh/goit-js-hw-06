const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("#name-output");

// Add event listener to input element
inputElement.oninput = () => {
  // Check if the input value is empty
  if (inputElement.value.trim() === "") {
    // If it's empty, display "Anonymous" in the span element
    spanElement.textContent = "Anonymous";
  } else {
    // If it's not empty, display the input value in the span element
    spanElement.textContent = inputElement.value;
  }
};
