var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


//---------------------------a
document.write("<h2>counting:</h2>" + "<br>");
for(i=0;i<arr.length;i++){
    document.write(arr[i]+ ",");
}
//-----------------------b
arr.reverse();
document.write("<h2>reverse counting:</h2>" + "<br>");
for(i=0;i<arr.length;i++){
    document.write(arr[i]+ ",");
}

//---------------------------c

var arr2=[0,2,4,6,8,10,12,14,16,18,20];
document.write("<h2>even:</h2>" + "<br>");
for(i=0;i<arr2.length;i++){
    document.write(arr2[i]+ ",");
}
//----------------------------------------d
var arr2=[1,3,5,7,9,11,13,15,17,19];
document.write("<h2>odd:</h2>" + "<br>");
for(i=0;i<arr2.length;i++){
    document.write(arr2[i]+ ",");
}
//-------------------------------------e
var arr2=[2,4,6,8,10,12,14,16,18,20];

document.write("<h2>series:</h2>" + "<br>");
for(i=0;i<arr2.length;i++){
    document.write(arr2[i]+ "k," );
}
