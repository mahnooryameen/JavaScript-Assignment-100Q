// Create a Date object for the current date and time
var currentDate = new Date();

// Reset the Date object 100 years back
currentDate.setFullYear(currentDate.getFullYear() - 100);

// Display the updated Date object in an alert box
alert("Date 100 years back: " + currentDate);
