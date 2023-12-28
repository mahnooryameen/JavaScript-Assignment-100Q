// Define the reference date
var referenceDate = new Date(); // The current date and time

// Set the beginning of 2015 as the target date
var targetDate = new Date(2015, 0, 1, 0, 0, 0); // January 1, 2015, 00:00:00

// Calculate the time difference in seconds between the reference date and the target date
var timeDifferenceSeconds = Math.floor((referenceDate - targetDate) / 1000);

// Display the seconds elapsed since the beginning of 2015 in the browser
document.write("Seconds elapsed since the beginning of 2015: " + timeDifferenceSeconds);
