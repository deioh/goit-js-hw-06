const loginForm = document.querySelector(".login-form");

loginForm.onsubmit = (event) => {
  // Prevent form from submitting and reloading the page
  event.preventDefault();

  // Get email and password values
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  // Check if both fields are filled in
  if (email === "" || password === "") {
    // If not, display an alert message
    window.alert("All fields must be filled in.");
  } else {
    // If fields are valid, log the credentials and reset the form
    console.log(`Login: ${email}, Password: ${password}`);
    loginForm.reset();
  }
};
