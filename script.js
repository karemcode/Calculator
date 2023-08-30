

const display = document.querySelector('#display');

// Function to add value to the display
function addToDisplay(value) {
  display.value += value;
}

// Function to perform calculation
function calculate() {
    // Check if the value contains a percentage
    if (display.value.includes('%')) {
      const [num, percentage] = display.value.split('%');
      display.value = parseFloat(num) * (parseFloat(percentage) / 100);
    } else {
      display.value = eval(display.value);
    }
  }

  