window.onload = () => {
  // Variables
  const emailField = document.querySelector("#email-field");
  const submitButton = document.querySelector("#email-submit");
  const invalidText = document.querySelector("#invalid-text");

  // Functions
  function checkEmail() {
    let emailText = emailField.value;

    let regex = /.+@.+\..+/;
    let result = regex.test(emailText);
    if (result) {
      emailField.style.border = "none";
      invalidText.style.display = "none";
    } else {
      emailField.style.border = "1px solid red";
      invalidText.style.display = "block";
    }
  }
  // Event Listeners
  submitButton.addEventListener("click", checkEmail);
};
