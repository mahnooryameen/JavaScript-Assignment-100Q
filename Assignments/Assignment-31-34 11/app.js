// Create a Date object for the current date and time
var currentDate = new Date();

// Extract the hours from the current date
var currentHours = currentDate.getHours();

// Reset the Date object an hour ahead
currentDate.setHours(currentHours + 1);

// Display the updated Date object in the browser
document.write("Updated Date: " + currentDate);
