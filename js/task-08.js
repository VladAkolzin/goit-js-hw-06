const Logform = document.querySelector(".login-form");
Logform.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const login = form.elements.email.value;
  const pass = form.elements.password.value;
  if (login === "" || pass === "") {
    alert("Заповніть усі поля для введення даних");
  } else {
    const user = {
      email: login,
      password: pass,
    };
    form.reset();
  }
}
