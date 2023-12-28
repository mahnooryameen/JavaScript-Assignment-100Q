var password = prompt("Enter your password:");

  // Function to check if the password meets the requirements
  function isValidPassword(password) {
    if (
      !password.match(/[a-zA-Z]/) ||                        // Check if it contains alphabets
      !password.match(/[0-9]/) ||                            // Check if it contains numbers
      password.match(/^[0-9]/) ||                             // Check if it does not start with a number
      password.length < 6                                      // Check if it is at least 6 characters long
    ) {
      return false;
    }
    return true;
  }

  // Prompt for a valid password until a valid one is provided
  while (!isValidPassword(password)) {
    password = prompt("Enter a valid password:\n\nPassword must contain alphabets and numbers, should not start with a number, and must be at least 6 characters long:");
  }

  alert("Password is valid!");