const form = document.getElementById("form");
const dismissBtn = document.getElementById("dismiss-btn");
const successMsg = document.getElementById("success-msg");
const emailInputElement = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");

function isEmpty(email) {
  if (!email) {
    return true;
  }
}

function isValid(email) {
  if (validator.isEmail(email)) {
    return true;
  }
}

function handleSubmit() {
  const data = Object.fromEntries(new FormData(form));
  if (isEmpty(data.email)) {
    errorMsg.textContent = "Email address is required";
    emailInputElement.classList.add("bg-tomato/20");
    emailInputElement.classList.add("border-tomato");
    return;
  }

  if (!isValid(data.email)) {
    errorMsg.textContent = "Valid email address is required";
    emailInputElement.classList.add("bg-tomato/20");
    emailInputElement.classList.add("border-tomato");
    return;
  }

  errorMsg.textContent = "";
  emailInputElement.classList.remove("bg-tomato/20");
  emailInputElement.classList.remove("border-tomato");

  form.classList.toggle("flex");
  form.classList.toggle("hidden");
  successMsg.classList.toggle("flex");
  successMsg.classList.toggle("hidden");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

dismissBtn.addEventListener("click", () => {
  emailInputElement.value = "";

  form.classList.toggle("flex");
  form.classList.toggle("hidden");
  successMsg.classList.toggle("flex");
  successMsg.classList.toggle("hidden");
});
