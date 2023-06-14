const form = document.querySelector("form");
const percentButton = document.querySelectorAll(".percent");
const buttonParent = document.querySelectorAll(".button-parent");
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
      custom.placeholder = "Custom";
      custom.value = "";
    });
  }
}

percentButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    const tPercent = btn.getAttribute("value");
    calculateTip(tPercent);
  });
});

// timeout function

function turnGreen() {}
billInput.addEventListener("click", function () {
  inputField.classList.add("green-border");
});

billInput.addEventListener("focusout", function () {
  inputField.classList.remove("green-border");
});

custom.addEventListener("click", function () {
  custom.style.border = "2px solid hsl(186, 100%, 70%";
  custom.style.borderRadius = "5px";
});

// custom calculation
custom.addEventListener("keyup", function (e) {
  custom.classList.add("green-border");
  if (e.keyCode === 13) {
    const customTip = Number(custom.value);
    let tPercent = customTip / 100;
    calculateTip(tPercent);
    custom.style.border = "none";
  }
});

// to remove the custom's border on focusout.
custom.addEventListener("focusout", function () {
  custom.style.border = "none";
});
