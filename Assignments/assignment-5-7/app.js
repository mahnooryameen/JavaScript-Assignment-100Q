var price1 = 650;
var price2 = 100;

var quantity1 = 3;
var quantity2 = 7;

var shipment_charges = 100;

var p1price= price1 * quantity1;
var p2price= price2 * quantity2;

var total_cost = p1price + p2price + shipment_charges;


document.write("<h1> SHOPPING CART </h1>");
document.write("Price of item 1 is " + price1 + "<br>");
document.write("quantity of item 1 is " + quantity1 + "<br>");
document.write("Price of item 2 is " + price2 + "<br>");
document.write("quantity of item 2 is " + quantity2 + "<br>");

document.write("shipment charges " + shipment_charges + "<br>");
document.write("Total cost of your order is " +  total_cost);





