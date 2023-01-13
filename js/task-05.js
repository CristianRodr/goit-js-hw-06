const entrar = document.querySelector("#name-input");

const salir = document.querySelector("#name-output");

entrar.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    salir.textContent = "Anonymous";
  } else {
    salir.textContent = e.currentTarget.value;
  }
});
