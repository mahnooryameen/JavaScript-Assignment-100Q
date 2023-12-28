var userInput = prompt("Enter some text:");
  var titleCaseText = toTitleCase(userInput);

  document.write("Original text: " + userInput + "<br>");
  document.write("Title case text: " + titleCaseText);

  // Function to convert input to title case
  function toTitleCase(text) {
    return text.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  }