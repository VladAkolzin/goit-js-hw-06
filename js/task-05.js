const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  if (value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = value;
  }
});
