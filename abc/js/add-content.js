const today = new Date();
const hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow > 12) {
  greeting = "Good afternoon!";
} else if (hourNow > 0) {
  greeting = "Good morning!";
} else {
  greeting = "Welcome!";
}

document.write("<h3>" + greeting + "</h3>");

console.log(greeting);
