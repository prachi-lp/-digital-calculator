const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => handleInput(button.textContent));
});

function handleInput(value) {
  if (value === "C") {
    currentInput = "";
    display.value = "";
  }
  else if (value === "=") {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  }
  else {
    currentInput += value;
    display.value = currentInput;
  }
}

/* 🎹 Keyboard Support (Bonus) */
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.";

  if (allowedKeys.includes(e.key)) {
    currentInput += e.key;
    display.value = currentInput;
  }
  else if (e.key === "Enter") {
    handleInput("=");
  }
  else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }
  else if (e.key === "Escape") {
    handleInput("C");
  }
});
