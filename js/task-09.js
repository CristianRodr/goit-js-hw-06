//funcion color aleatorio_____________________________________________
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//____________________________________________________________________

const textColor = document.querySelector(".color");

//-------------------------------------------------------------------
const fondoBody = document.querySelector("body");

function fondoFuncion(fondoBody) {
  //fondoBody.style.backgroundColor = getRandomHexColor();
  textColor.textContent = fondoBody.style.backgroundColor = getRandomHexColor();
}
//--------------------------------------------------------------------

const button = document.querySelector(".change-color");

const handleClick = () => {
  fondoFuncion(fondoBody);
};

button.addEventListener("click", handleClick);
