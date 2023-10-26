const input = document.querySelector("#validation-input");
const wordLength = input.dataset.length;
input.addEventListener("blur", (event) => {
  const inputValue = event.currentTarget.value;
  if (inputValue.length === Number(wordLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
