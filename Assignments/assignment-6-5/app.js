// Function to display the multiplication table
function displayMultiplicationTable(number) {
    document.write("<h2>Multiplication Table of " + number + "</h2>");
    for (let i = 1; i <= 10; i++) {
      document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }
  }
  
  // Get user input
  let userInput = prompt("Enter a number:");
  
  // Check if user input is empty or not a number
  if (userInput === "" || isNaN(userInput)) {
    // Display multiplication table of 5 by default
    displayMultiplicationTable(5);
  } else {
    // Display multiplication table of user input
    displayMultiplicationTable(parseInt(userInput));
  }
  