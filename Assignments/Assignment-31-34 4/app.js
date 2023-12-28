// Get the current date
var currentDate = new Date();

// Get the current day
var currentDay = currentDate.getDay();

// Check if it's Saturday or Sunday
if (currentDay === 0 || currentDay === 6) {
  alert("It's Fun day");
}
