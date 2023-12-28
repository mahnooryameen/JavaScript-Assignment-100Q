
  // Ask the user for their weight
  var weightInput = prompt("Enter your weight:");

  // Remove any non-digit characters from the user input
  var weight = parseFloat(weightInput.replace(/[^\d.]/g, ''));

  // Display the weight
  document.write("the weight of user is " + weight + " kilograms");

