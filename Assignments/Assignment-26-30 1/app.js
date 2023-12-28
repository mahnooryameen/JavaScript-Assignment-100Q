
  // Take input from the user
  var number = parseInt(prompt("Enter a positive integer:"));

  // Calculate the round off, floor, and ceil values
  var roundedValue = Math.round(number);
  var floorValue = Math.floor(number);
  var ceilValue = Math.ceil(number);

  // Create individual elements for each value
  var numberElement = document.createElement("p");
  numberElement.textContent = "Number: " + number;

  var roundedValueElement = document.createElement("p");
  roundedValueElement.textContent = "Rounded Value: " + roundedValue;

  var floorValueElement = document.createElement("p");
  floorValueElement.textContent = "Floor Value: " + floorValue;

  var ceilValueElement = document.createElement("p");
  ceilValueElement.textContent = "Ceil Value: " + ceilValue;

  // Append the elements to the body of the document
  document.body.appendChild(numberElement);
  document.body.appendChild(roundedValueElement);
  document.body.appendChild(floorValueElement);
  document.body.appendChild(ceilValueElement);

