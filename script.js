

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

  // Function to reset the display
function reset() {
    display.value = "";
  }


  // Add event listener to handle key presses
document.addEventListener('keydown', function(event) {
    if (event.key >= 0 && event.key <= 9) {
      addToDisplay(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
      addToDisplay(event.key);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      calculate();
    } else if (event.key === 'Escape') {
      reset();
    } else if (event.key === 'Backspace') {
      event.preventDefault();
      display.value = display.value.slice(0, -1);
    } else if (event.key === 'p') {
      addToDisplay(Math.PI);
    } else if (event.key === 's') {
      calculateSquareRoot();
    }
  });