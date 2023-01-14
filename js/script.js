const form = document.getElementById("form");
const errorContainer = document.getElementById("error-message");
const email = document.getElementById("email");
const submitButton = document.getElementById("submitButton");

const validateEmail = (emailValue) => {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return regExp.test(emailValue);
};

const showError = () => {
  email.style.border = "1px solid hsl(354, 100%, 66%)";
  errorContainer.textContent = "Please provide a valid email address";
};

const hideError = () => {
  email.style.border = "1px solid hsl(223, 100%, 88%)";
  errorContainer.textContent = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

email.addEventListener("change", () => {
  if (!validateEmail(email.value)) {
    showError();
  } else {
    hideError();
  }
});

submitButton.addEventListener("click", () => {
  if (validateEmail(email.value)) form.submit();
});
