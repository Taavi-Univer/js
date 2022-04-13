// function checkUsername() {
//   let elMsg = document.getElementById("feedback");
//   console.log("event triggered");

//   if (this.value.length < 6) {
//     elMsg.textContent = "Username must be 5 charecters or more";
//   } else {
//     elMsg.textContent = "";
//   }
// }

// const elUsername = document.getElementById("username");
// elUsername.onblur = checkUsername;

// -----------------------

// function checkUsername() {
//   let elMsg = document.getElementById("feedback");

//   if (this.value.length < 6) {
//     elMsg.textContent = "Username must be 6 charecters or more";
//   } else {
//     elMsg.textContent = "";
//   }
// }

// const elUsername = document.getElementById("username");
// elUsername.addEventListener("blur", checkUsername);

// ----------------

// let elMsg = document.getElementById("feedback");
// const username = document.getElementById("username");

// function checkUsername(minLength) {
//   if (username.value.length < minLength) {
//     elMsg.textContent = "Username must be " + minLength + " charecters or more";
//   } else {
//     elMsg.textContent = "";
//   }
// }

// username.addEventListener("blur", function () {
//   checkUsername(6);
// });

// ---------------

// function removeItem(e) {
//   let target, elParent, elGrandparent;

//   target = e.target;
//   console.log(target);

//   elParent = target.parentNode;
//   console.log(elParent);

//   elGrandparent = target.parentNode.parentNode;
//   console.log(elGrandparent);

//   elGrandparent.removeChild(elParent);
// }

// const shoppingList = document.getElementById("shoppingList");
// console.log(shoppingList);
// shoppingList.addEventListener("click", function (e) {
//   removeItem(e);
// });

// -----------------

// function checkUsername() {
//   const username = el.value;
//   if (username.length < 6) {
//     msg.className = "warning";
//     msg.textContent = "Username must be at lest 6 charecters";
//   } else {
//     msg.textContent = "";
//   }
// }

// function tipUser() {
//   msg.className = "tip";
//   msg.innerHTML = "Username must be at leat 6 charecters";
// }

// const el = document.getElementById("username");
// // console.log(el);
// const msg = document.getElementById("feedback");

// el.addEventListener("focus", tipUser);
// el.addEventListener("blur", checkUsername);

// --------------------------------------

let msg = '<div class"header"><a id="close" href="#">close X</a></div>';
msg += '<div class="container"><h2>System Maintenance</h2>';
msg += "Our servers are being updated between 6 and 9 a.m.</div>";

const el = document.createElement("div");
el.setAttribute("id", "note");
el.innerHTML = msg;
document.body.appendChild(el);

function dismissNote() {
  document.body.removeChild(el);
}

const elClose = document.getElementById("close");
elClose.addEventListener("click", dismissNote);
