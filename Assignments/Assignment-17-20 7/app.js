

const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt("Enter an item to search:");

if (A.includes(userInput)) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}
