const element = document.querySelector(".hot");
console.log(element);

element.className = "cool";

const elements = document.querySelectorAll(".hot");
console.log(elements.length);

elements[1].className = "cool";

const elements2 = document.querySelectorAll(".hot");
console.log(elements2.length);
