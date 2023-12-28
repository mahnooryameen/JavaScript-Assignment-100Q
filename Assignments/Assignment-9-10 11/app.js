var first_number=+prompt("enter first number");
var second_number=+prompt("enter socond number");

var operation=+prompt("Select operation: \n 1. addition \n 2. subtraction \n 3. multiplication \n 4. divicion \n 5. modulos \n To select enter the number of operation!")

if(operation=1){
    var result = first_number+second_number;
    document.write(result + "<br>");
}
else if(operation=2){
    var result = first_number-second_number;
    document.write(result + "<br>");
}
else if(operation=3){
    var result = first_number*second_number;
    document.write(result + "<br>");
}
else if(operation=4){
    var result = first_number/second_number;
    document.write(result + "<br>");
}
else if(operation=5){
    var result = first_number%second_number;
    document.write(result + "<br>");
}
else{
    document.write("invalid inputs")
}