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
    return "Error";
  }
  return num1 / num2;
}

let num1;
let num2;
let operation;
let flag = 0;

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
        button.id === "equals") ||
      (flag === 1 &&
        !operation &&
        button.id !== "divide" &&
        button.id !== "multiply" &&
        button.id !== "add" &&
        button.id !== "subtract" &&
        button.id !== "clear")
    ) {
      return;
    }

    if (button.id === "decimal") {
      if (!operation) {
        let count = (display.textContent + ".").split(".").length - 1;
        if (count > 1) {
          return;
        }
      } else {
        let parts = display.textContent.split(/[+X÷-]/);
        let count = (parts[1] + ".").split(".").length - 1;
        if (count > 1) {
          return;
        }
      }
      display.textContent = display.textContent + ".";
      return;
    }
    if (button.id === "clear") {
      display.textContent = "";
      num1 = "";
      num2 = "";
      operation = "";
      flag = 0;
      return;
    }

    if (button.id === "backspace") {
      if (flag === 1) {
        return;
      }
      if (
        display.textContent[display.textContent.length - 1] === "X" ||
        display.textContent[display.textContent.length - 1] === "+" ||
        display.textContent[display.textContent.length - 1] === "÷" ||
        display.textContent[display.textContent.length - 1] === "-"
      ) {
        return;
      }

      let str = display.textContent.slice(0, -1);
      if (!operation) {
        num1 = parseFloat(str);
      } else {
        let parts = str.split(/[+X÷-]/);
        num2 = parseFloat(parts[1]);
      }

      display.textContent = str;
      return;
    }
    if (button.id === "equals") {
      display.textContent = operate(num1, operation, num2);
      num1 = parseFloat(operate(num1, operation, num2));
      num2 = "";
      operation = "";
      flag = 1;
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
