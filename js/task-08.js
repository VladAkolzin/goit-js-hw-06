const Logform = document.querySelector(".login-form");
Logform.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email;
  const password = form.elements.password;
  if (email.value === "" || password.value === "") {
    alert("Заповніть усі поля для введення даних");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    form.reset();
  }
}
