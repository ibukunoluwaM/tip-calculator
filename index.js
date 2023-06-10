const form = document.querySelector("form");
const percentButton = document.querySelectorAll(".percent");
const tip5Button = document.querySelector(".tip5");
const tip10Button = document.querySelector(".tip10");
const tipAmount1 = document.querySelector(".amount");
const tipAmountTotal = document.querySelector(".amount-total");
const inputField = document.querySelector(".input-field");
const warning = document.querySelector(".warning");

let billInput = document.querySelector(".billInput");
const numberBill = Number(billInput.value);

let noOfPersons = document.querySelector(".persons");
const numberPersons = Number(noOfPersons.value);
const amount = numberBill / numberPersons;

// percentButton.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     console.log(e.target);
//   });
// });

tip5Button.addEventListener("click", function () {
  calculateTip(0.5);
});

tip10Button.addEventListener("click", function () {
  if (billInput === " ") {
    warning.textContent = "Please input a bill amount!";
    tipAmount1.innerHTML = "$ " + 0.0;
    tipAmountTotal.innerHTML = "$ " + 0.0;
  } else {
    calculateTip(0.1);
    console.log(amount);
  }
});

function calculateTip(tipPercent) {
  const tipValue = amount * tipPercent;
  tipAmount1.innerHTML = "$ " + tipValue;
  tipTots = amount + tipValue;
  tipAmountTotal.innerHTML = "$ " + tipTots;
}

// billInput.value = " ";
// noOfPersons.value = " ";

// e.preventDefault();

// let billInput = document.querySelector(".billInput");
// const numberBill = Number(billInput.value);

// let noOfPersons = document.querySelector(".persons");
// const numberPersons = Number(noOfPersons.value);
// const amount = numberBill / numberPersons;

// // percentButton.forEach((button) => {
// //   button.addEventListener("click", function (e) {
// //     console.log(e.target);
// //   });
// // });

// tip5Button.addEventListener("click", function () {
//   calculateTip(0.5);
// });

// tip10Button.addEventListener("click", function () {
//   if (billInput === " ") {
//     warning.textContent = "Please input a bill amount!";
//     tipAmount1.innerHTML = "$ " + 0.0;
//     tipAmountTotal.innerHTML = "$ " + 0.0;
//     console.log("smile");
//   } else {
//     calculateTip(0.1);
//   }
// });

// function calculateTip(tipPercent) {
//   const tipValue = amount * tipPercent;
//   tipAmount1.innerHTML = "$ " + tipValue;
//   tipTots = amount + tipValue;
//   tipAmountTotal.innerHTML = "$ " + tipTots;
// }
