// №1
var i = 0;
while (i <= 100) {
	if (i % 1 == 0 & i % i == 0 & i % 2 == 1) {
		document.write("Число: " + i + "<br>");
	}
	i++;
}

document.write("<br>");

// №2
i = 0;
do {
	(i == 0) ? document.write(i + " это ноль!") :
	 (i % 2 == 0) ? document.write(i + " четное число") : 
	 document.write(i + " нечетное число");
	 document.write("<br>")
	 i++; 

} while (i <= 10)

document.write("<br>");

// №3
for (i = 0; i <= 9; i++) document.write("Число: " + i + "<br>"); 

// №4
var res = "x";

for (i = 0; i <= 20; i++) {
	console.log(res);
	res += "x";
}