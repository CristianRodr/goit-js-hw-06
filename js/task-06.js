const elInput = document.querySelector("input");
const eloutput = document.querySelector('[data-length="6"]');
//console.log(elInput);
//console.log(output);

document
  .querySelector("#validation-input")
  .addEventListener("blur", (event) => {
    eloutput.textContent = event.currentTarget.value;
    console.log(eloutput.textContent);

    let tamañoString = eloutput.textContent.length;
    console.log(tamañoString);

    if (Number(event.target.attributes[2].value) >= tamañoString) {
      elInput.classList.add("valid");
      console.log("cantidad correcta");
      if (elInput.classList.contains("invalid")) {
        elInput.classList.remove("invalid");
        elInput.classList.add("valid");
      }
    } else {
      elInput.classList.add("invalid");
      console.log("cantidad incorrecta");
    }
  });
