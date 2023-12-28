var subject1 = prompt("enter first subject name");
var subject2 = prompt("enter second subject name");
var subject3 = prompt("enter third subject name");

var total_marks=300;

var marks_subject1 = +prompt("Enter marks obtained in subject 1");
var marks_subject2 = +prompt("Enter marks obtained in subject 2");
var marks_subject3 = +prompt("Enter marks obtained in subject 3");

var total_obtained_marks= marks_subject1 + marks_subject2 + marks_subject3;

var percentage= (total_obtained_marks/total_marks)*100;


