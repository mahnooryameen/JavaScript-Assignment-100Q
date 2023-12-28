// Sample data for the bill
var customerName = "ABC Customer";
var currentMonth = "June 2023";
var numberOfUnits = 200;
var chargesPerUnit = 15.5;
var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = 100;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// Display the bill in the browser
document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
document.write("<p><strong>Charges per Unit:</strong> $" + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayable.toFixed(2) + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayable.toFixed(2) + "</p>");
