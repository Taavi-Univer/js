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

let elMsg = document.getElementById("feedback");
const username = document.getElementById("username");

function checkUsername(minLength) {
  if (username.value.length < minLength) {
    elMsg.textContent = "Username must be 6 charecters or more";
  } else {
    elMsg.textContent = "";
  }
}

username.addEventListener("blur", function () {
  checkUsername(6);
});
