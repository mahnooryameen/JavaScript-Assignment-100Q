
  // Generate a random secret number from 1 to 10
  var secretNumber = Math.floor(Math.random() * 10) + 1;

  // Ask the user for their guess
  var userGuess = +prompt("Guess the secret number (between 1 and 10):");

  // Check if the user's guess is correct
  if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number.");
  } else {
    document.write("Sorry, your guess is incorrect. The secret number was " + secretNumber + ".");
  }

