// Get the current date
var currentDate = new Date();

// Get the current day of the month
var currentDayOfMonth = currentDate.getDate();

// Check if it's the first fifteen days of the month
if (currentDayOfMonth < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}
