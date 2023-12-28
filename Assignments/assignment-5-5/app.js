var number = +prompt("Enter the number of table");


document.write("Table of " + number);
document.write("<hr/>");

for (let i = 1; i < 11; i++) {
    document.write(number + " X " + i +" = "  + number*i + "<hr/>");
  }
