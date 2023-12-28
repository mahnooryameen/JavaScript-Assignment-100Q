  var A = ["cake", "apple pie", "cookie", "chips", "patties"];
  var userInput = prompt("Enter an item to search:");

  // Perform case-insensitive search
  var found = false;
  for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput.toLowerCase()) {
      found = true;
      break;
    }
  }

  // Prompt the user about the availability of the item
  if (found) {
    alert("Yes, the item is found in the list.");
  } else {
    alert("No, the item is not found in the list.");
  }