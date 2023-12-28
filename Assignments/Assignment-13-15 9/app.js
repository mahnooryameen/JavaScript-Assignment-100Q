//---------------------
var color=["red", "blue", "green"];

for(i=0;i<color.length;i++){
    document.write(color[i] + "<br>");
}

document.write("<hr/>");
//---------------------------a
var userinputbegin=prompt("enter color to add in the begninig");

color.unshift(userinputbegin);
for(i=0;i<color.length;i++){
    document.write(color[i] + "<br>");
}
//------------------------------b

var userinputend=prompt("enter color to add in the end");
color.push(userinputend);
for(i=0;i<color.length;i++){
    document.write(color[i] + "<br>");
}


//-----------------------------c

var userinputbegin=prompt("enter color to add in the begninig");
color.unshift(userinputbegin);

var userinputbegin=prompt("enter color to add in the begninig");
color.unshift(userinputbegin);


for(i=0;i<color.length;i++){
    document.write(color[i] + "<br>");
}
document.write("<hr/>");
//-----------------------------------d

color.shift();

for(i=0;i<color.length;i++){
    document.write(color[i] + "<br>");
}
document.write("<hr/>");
//-----------------------------------------e

color.pop();

for(i=0;i<color.length;i++){
    document.write(color[i] + "<br>");
}
document.write("<hr/>");

//--------------------------------------f
var userpositiontoadd= +prompt("Enter the position to add element in");
var userinputt=prompt("enter the name of color element")

color.splice(userpositiontoadd, 0, userinputt);

for(i=0;i<color.length;i++){
    document.write(color[i] + "<br>");
}
document.write("<hr/>");
//-----------------------------------------g

var userpositiontodelete= +prompt("Enter the position of element to delete");
var numberofcolortodelete = +prompt("how many colors you want to delete");

color.splice(userpositiontodelete, numberofcolortodelete,  );


