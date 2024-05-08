const inputElement = document.querySelector("#validation-input");

inputElement.onblur = () => {
  const enteredLength = inputElement.value.length;
  //const requiredLength = document.querySelector("#data-length");
  const requiredLength = Number(inputElement.getAttribute("data-length"));

  if (enteredLength === requiredLength) {
    console.log("Correct length");

    inputElement.classList.remove("invalid"); // Remove 'invalid' class
    inputElement.classList.add("valid"); // Add 'valid' class
  } else {
    console.log("Incorrect length");

    inputElement.classList.remove("valid"); // Remove 'valid' class
    inputElement.classList.add("invalid"); // Add 'invalid' class
  }
};
//done
