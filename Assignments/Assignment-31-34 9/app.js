// Create a Date object for the starting date of Ramadan
var startingDateOfRamadan = new Date(2015, 5, 18); // Note: Months are zero-based (5 represents June)

// Get the current date
var currentDate = new Date();

// Calculate the time difference in milliseconds between the current date and the starting date of Ramadan
var timeDifference = currentDate.getTime() - startingDateOfRamadan.getTime();

// Convert the time difference to days
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Alert the number of days passed since the 1st Ramadan
alert("Number of days passed since 1st Ramadan: " + daysPassed);
