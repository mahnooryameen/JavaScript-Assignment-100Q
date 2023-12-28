// Get the current date and time
var currentDate = new Date();

// Get the current hour
var currentHour = currentDate.getHours();

// Test if it's before noon (AM) or after (PM)
if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}
