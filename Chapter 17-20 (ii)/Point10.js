var userNames = ["Ali", "Ahmed", "Abdullah", "Atif", "Zain"]
var firstName = prompt(`Enter your first name:`);
var found = false;
for (let i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) {
    alert(`Correct!`);
    found = true;
  }
}
if (!found) {
  alert(`Please write correct user name`);
}