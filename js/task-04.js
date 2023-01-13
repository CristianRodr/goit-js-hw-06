let counterValue = 0;

const counter = document.querySelector("#value");
console.log(counter);

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

//console.log(decrementBtn.dataset.action);
//console.log(incrementBtn.dataset.action);

const evaluadorIncrement = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const evaluadorDecrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

incrementBtn.addEventListener("click", evaluadorIncrement);
decrementBtn.addEventListener("click", evaluadorDecrement);
