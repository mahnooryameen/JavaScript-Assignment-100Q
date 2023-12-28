
var character = prompt('Enter a character:');

const charCode = character.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    document.write(character + ' is a number.');
} else if (charCode >= 65 && charCode <= 90) {
    document.write(character + ' is an uppercase letter.');
} else if (charCode >= 97 && charCode <= 122) {
    document.write(character + ' is a lowercase letter.');
} else {
    document.write(character + ' is not a number or letter.');
}
