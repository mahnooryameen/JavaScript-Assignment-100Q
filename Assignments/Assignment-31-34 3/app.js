// Get the current date
var currentDate = new Date();

// Define an array of day names
var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Get the current day
var currentDay = currentDate.getDay();

// Get the first three letters of the day name
var currentDayName = dayNames[currentDay];

// Alert the first three letters of the current day
alert("today is " + currentDayName);
