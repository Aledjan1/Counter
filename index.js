const btnIncrease = document.querySelector(".btn--increase");
const btnDecrease = document.querySelector(".btn--decrease")
const btnReset = document.querySelector(".btn--reset");
const counterValue = document.querySelector(".counter__value");

let count = 0;

btnIncrease.addEventListener("click", function() {
    count++;
    counterValue.textContent = count;
});

btnDecrease.addEventListener("click", function() {
    count--;
    counterValue.textContent = count;
});

btnReset.addEventListener("click", function() {
    count = 0;
    counterValue.textContent = count;
});