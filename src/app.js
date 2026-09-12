const counterElement = document.getElementById("counter");
const btnCount = document.getElementById("btn-count");

let count = 0;

btnCount.addEventListener("click", () => {
  count += 1;
  counterElement.textContent = count;
});
const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", () => {
  count = 0;
  counterElement.textContent = count;
});
