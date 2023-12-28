var username = prompt("Enter your username:");

  // Function to check if the username contains any special symbols
  function hasSpecialSymbols(username) {
    var specialSymbols = ['@', '.', ',', '!'];

    for (var i = 0; i < specialSymbols.length; i++) {
      if (username.includes(specialSymbols[i])) {
        return true;
      }
    }

    return false;
  }

  // Check if the username contains any special symbols and prompt for a valid username
  while (hasSpecialSymbols(username)) {
    username = prompt("Enter a valid username without special symbols [@ . , !]:");
  }

  document.write("Username: " + username);