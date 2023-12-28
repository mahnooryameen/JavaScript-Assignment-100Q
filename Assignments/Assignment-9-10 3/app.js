var color = prompt("enter color of signal");
color.toLowerCase();
if(color == 'red'){
    alert("Must Stop");
}
else if(color=='yellow'){
    alert("Ready to move");

}
else if(color=='green'){
    alert("move now");

}
else{
    alert("invalid color input")
}
