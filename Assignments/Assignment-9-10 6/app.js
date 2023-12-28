var total_marks=+prompt("enter total marks");
var grade, remarks;


var obtained_marks1=+prompt("enter marks that you obtained in subject 1");
var obtained_marks2=+prompt("enter marks that you obtained in subject 2");
var obtained_marks3=+prompt("enter marks that you obtained in subject 3");

var total_obtained_marks=obtained_marks1+obtained_marks2+obtained_marks3;

var percentage = (total_obtained_marks/total_marks)*100;


document.write("Total Marks:"+ total_marks + "<br>");
document.write("Marks Obtained:"+ total_obtained_marks + "<br>");
document.write("Percentage:"+ percentage + "%" + "<br>");


if(percentage>=80){
    grade = "A-one";
    remarks = "excellent";
}

else if(percentage>=70){
    grade = "A";
    remarks = "Good";
}
else if(percentage>=60){
    grade = "b";
    remarks = "You need to improve";
}
else if(percentage<60){
    grade = "fail";
    remarks = "sorry";
}

document.write("Grade" + grade + "<br>");
document.write("Remarks" + remarks + "<br>");
