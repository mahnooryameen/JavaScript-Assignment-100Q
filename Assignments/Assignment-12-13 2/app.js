var num1 = +prompt("enter first number");
var num2 = +prompt("enter second number");

if(num1>num2){
    document.write("first Number " + num1 +" is greater than second number "+ num2 );
}
if(num1<num2){
    document.write("first Number " + num1 +" is smaller than second number "+ num2 );
}
if(num1==num2){
    document.write("first Number " + num1 +" is equal to second number "+ num2 );
}
else{
    document.write("invalid numbers");

}