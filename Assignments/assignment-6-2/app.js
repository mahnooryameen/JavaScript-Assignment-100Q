var a =2;
var b= 1;
var result = --a - --b + ++b + b--;
/*
--a;   means ek kam hojayega yani a=1
--a - --b;       1 - 0 = 1
--a - --b + ++b;     1+ 2 = 3
--a - --b + ++b + b--;  3 + 0 = 3
*/  

document.write("the answer is "+ result + "<br>");
document.write("--a;   means ek kam hojayega yani a=1" + "<br>")
document.write("--a - --b;       1 - 0 = 1" + "<br>")
document.write("--a - --b + ++b;     1+ 2 = 3" + "<br>")
document.write("--a - --b + ++b + b--;  3 + 0 = 3" + "<br>")

