var num=+prompt("Enter a number to show its multiplication table");
var length=+prompt("Enter length of multiplication table");

document.write("multiplication table of: " + num + "<br>");
document.write("length: " + length + "<br>");

for(i=1; i<=length;i++){
    document.write(num + " X " + i + "=" + (num*i) + "<br>");
   
}

