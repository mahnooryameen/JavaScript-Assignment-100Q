var secretNumber = 5;
var UserGuess = +prompt("Enter a guess for the Secret number");

if (UserGuess==5){
    alert("Bingo! Correct answer");
}

else if (UserGuess<5){
    alert("Close enough to the correct answer");

}

else if (UserGuess>5){
    alert("Your Guess is too high, Guess again!");

}

else{
  alert("Invalid input")
}