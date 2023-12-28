// Get the current date
var currentDate = new Date();

// Get the current month
var currentMonth = currentDate.getMonth();

// Define an array of month names
var monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Get the month name from the array
var currentMonthName = monthNames[currentMonth];

// Alert the current month name
alert(currentMonthName);
