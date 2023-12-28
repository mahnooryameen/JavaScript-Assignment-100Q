// Ask the user for their age
var age = prompt("Please enter your age:");

// Calculate the birth year
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;


document.write("Your age is: " + age);

// Display the birth year in the browser
document.write("Your birth year is: " + birthYear);
