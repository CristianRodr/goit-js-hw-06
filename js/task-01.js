"use strict";

const categoria = document.querySelectorAll("ul > .item");
console.log(`Number of categories: ${categoria.length}`);

const enumerar = document.querySelectorAll("#categories > li");
for (const iterator of enumerar) {
  const prueba = iterator.querySelector("h2");
  const contador = iterator.querySelectorAll("ul > li");

  console.log(`Category: ${prueba.textContent}`);
  console.log(`Elements: ${contador.length}`);
}
