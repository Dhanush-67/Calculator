function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Math error";
  }
  return num1 / num2;
}

let num1;
let num2;
let operation;

function operate(num1, operation, num2) {
  if (operation === "+") {
    return add(num1, num2);
  }
  if (operation === "-") {
    return subtract(num1, num2);
  }
  if (operation === "*") {
    return multiply(num1, num2);
  }
  if (operation === "/") {
    return divide(num1, num2);
  }
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.id;
    // Handle button click
  });
});
const display = document.querySelector(".display");
