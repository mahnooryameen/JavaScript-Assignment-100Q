// Array of phone manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generating the dropdown/select menu
var selectMenu = '<select>';

for (var i = 0; i < manufacturers.length; i++) {
  selectMenu += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
}

selectMenu += '</select>';

// Displaying the dropdown/select menu using document.write()
document.write(selectMenu);
