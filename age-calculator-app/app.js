var name = prompt("What is your name?");
alert("Hello " + name);

var dob = prompt("What year were you born?");
var today = new Date().getFullYear()

alert("You are approx " + (today - dob) + " years old!");
