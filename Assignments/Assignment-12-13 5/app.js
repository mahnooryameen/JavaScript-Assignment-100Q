var originalPassword = "myPassword123";

var enteredPassword = prompt("Enter your password:");

if (!enteredPassword) {
  document.write("Please enter your password");
} else if (enteredPassword === originalPassword) {
  document.write("Correct! The password you entered matches the original password");
} else {
  document.write("Incorrect password");
}
