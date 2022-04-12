const scores = [24, 32, 17];
const arrayLength = scores.length;
let roundNumber = 0;
let msg = "";
let i;

for (i = 0; i < arrayLength; i++) {
  roundNumber = i + 1;

  msg += "Round " + roundNumber + ": ";
  msg += scores[i] + "<br />";
}

document.getElementById("container").innerHTML = msg;
