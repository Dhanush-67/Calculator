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
    return "error";
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

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "darkgrey";
  });
  button.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = "";
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      ((button.id === "divide" ||
        button.id === "multiply" ||
        button.id === "subtract" ||
        button.id === "add" ||
        button.id === "equals" ||
        button.id === "decimal") &&
        !display.textContent) ||
      ((button.id === "divide" ||
        button.id === "multiply" ||
        button.id === "subtract" ||
        button.id === "add") &&
        operation) ||
      ((!num1 || typeof num2 !== "number" || !operation) &&
        button.id === "equals")
    ) {
      return;
    }
    if (button.id === "decimal") {
      display.textContent = display.textContent + ".";
      return;
    }
    if (button.id === "clear") {
      display.textContent = "";
      num1 = "";
      num2 = "";
      operation = "";
      return;
    }

    if (button.id === "backspace") {
      let str = display.textContent.slice(0, -1);
      display.textContent = str;
      return;
    }
    if (button.id === "equals") {
      console.log(num1, operation, num2);
      console.log("num1:", num1, "operation:", operation, "num2:", num2);
      console.log("result:", operate(num1, operation, num2));
      display.textContent = operate(num1, operation, num2);
      return;
    }
    if (button.id === "divide") {
      operation = "/";
      display.textContent = display.textContent + "÷";
      return;
    } else if (button.id === "multiply") {
      operation = "*";
      display.textContent = display.textContent + "X";
      return;
    } else if (button.id === "subtract") {
      operation = "-";
      display.textContent = display.textContent + "-";
      return;
    } else if (button.id === "add") {
      operation = "+";
      display.textContent = display.textContent + "+";
      return;
    }
    display.textContent = display.textContent + button.id;
    if (!operation) {
      num1 = parseFloat(display.textContent);
    } else {
      let parts = display.textContent.split(/[+X÷-]/);
      num2 = parseFloat(parts[1]);
    }
  });
});
