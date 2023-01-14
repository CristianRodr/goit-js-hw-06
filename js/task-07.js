const selecInput = document.querySelector("input");

const text = document.querySelector("#text");

selecInput.addEventListener("click", (event) => {
  let tomaRango = event.target.value;
  text.style.fontSize = `${tomaRango}px`;
});
