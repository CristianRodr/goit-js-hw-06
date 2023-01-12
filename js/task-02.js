"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const selec = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const elemento = document.createElement("li");
  elemento.textContent = element;
  elemento.classList.add("item");
  selec.appendChild(elemento);
});
