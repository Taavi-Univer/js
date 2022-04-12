let price;
let quantity;
let total;
price = 5;
quantity = 14;
total = price * quantity;

// console.log(total);

const el = document.getElementById("cost");
el.textContent = "$" + total;
