//------------------------------------a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

document.write("alert of a is running" + "<br>");
//-----------------------------------b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

document.write("alert of b is not running" + "<br>");

//-----------------------------------c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
document.write("alert of c is  running only for condition 2,4" + "<br>");

//----------------------------------d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

document.write("alert of d is not running" + "<br>");

//-----------------------------------------e
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
 document.write("alert of e is running for true alert" + "<br>");


//-------------------------------------f
if("car" < "cat"){
    alert("car is smaller than cat");
    }

document.write("alert of f is running");

