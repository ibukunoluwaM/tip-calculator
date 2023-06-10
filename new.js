const form = document.querySelector("form");
const percentButton = document.querySelectorAll(".percent");
const buttonParent = document.querySelectorAll(".button-parent");
const tip5Button = document.querySelector(".tip5");
const tip10Button = document.querySelector(".tip10");
const tip15Button = document.querySelector(".tip15");
const tip25Button = document.querySelector(".tip25");
const tip50Button = document.querySelector(".tip50");
const tipAmount1 = document.querySelector(".amount");
const tipAmountTotal = document.querySelector(".amount-total");
const inputField = document.querySelector(".input-field");
const warning = document.querySelector(".warning");
const warning2 = document.querySelector(".warning2");
const custom = document.querySelector(".grey");
const resetButton = document.querySelector(".reset");
const numberField = document.querySelector(".number-field");
let billInput = document.querySelector(".billInput");

// the function

function calculateTip(tPercent) {
  let billInput = document.querySelector(".billInput");
  const numberBill = Number(billInput.value);
  let noOfPersons = document.querySelector(".persons");
  const numberPersons = Number(noOfPersons.value);
  const amount = numberBill / numberPersons;
  let amountTip = tPercent * amount;

  if (billInput.value == "") {
    warning.innerHTML = "Bill CANNOT be empty";
    warning.classList.add("red");
    setTimeout(clearWarning, 2000);

    function clearWarning() {
      warning.innerHTML = " ";
    }
  }
  if (noOfPersons.value == "") {
    warning2.innerHTML = "Can't BE zero";
    warning2.classList.add("red");
    numberField.classList.add("border");

    setTimeout(clearWarning, 2000);

    function clearWarning() {
      warning2.innerHTML = " ";
      numberField.classList.remove("border");
    }
  } else {
    tipAmount1.innerHTML = "$" + amountTip.toFixed(2);
    tipAmountTotal.innerHTML = "$" + (amount + amountTip).toFixed(2);
    resetButton.addEventListener("click", function () {
      tipAmount1.innerHTML = "$" + "0.00";
      tipAmountTotal.innerHTML = "$" + "0.00";
      billInput.value = " ";
      noOfPersons.value = " ";
    });
  }
}

function turnGreen() {}
billInput.addEventListener("click", function () {
  inputField.classList.add("green-border");
});

custom.addEventListener("click", function () {
  custom.style.border = "2px solid hsl(186, 100%, 70%";
  custom.style.borderRadius = "5px";
});

tip5Button.addEventListener("click", function () {
  calculateTip(0.05);
});
tip10Button.addEventListener("click", function () {
  calculateTip(0.1);
});
tip15Button.addEventListener("click", function () {
  calculateTip(0.15);
});
tip25Button.addEventListener("click", function () {
  calculateTip(0.25);
});
tip50Button.addEventListener("click", function () {
  calculateTip(0.5);
});

// custom
custom.addEventListener("keyup", function (e) {
  custom.classList.add("green-border");
  if (e.keyCode === 13) {
    const customTip = Number(custom.value);
    let tPercent = customTip / 100;
    calculateTip(tPercent);
  }
});
