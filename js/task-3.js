const formInput = document.querySelector("#name-input");
const formOutput = document.querySelector("#name-output");

formInput.addEventListener("input", (event) => {
  const inputValue = formInput.value.trim();
  formOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
