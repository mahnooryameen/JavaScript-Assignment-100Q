var stuname=["mahnoor", "alisha", "hafsa"];

var score=[320,230,480];

var total_marks=500;

var p1= (score[0]/total_marks)*100;
var p2= (score[1]/total_marks)*100;
var p3= (score[2]/total_marks)*100;



var percentage =[p1,p2,p3];


for(i=0; i<3; i++){
    document.write("score of " + stuname[i] + " is " + score[i] + ". Percentage: "+ percentage[i] + "%" + "<br>");
}