const submit = document.getElementById("submit");
const input = document.querySelector('input[placeholder="Password"]');

submit.addEventListener("click", confirmation);

function confirmation(e) {
  const result = input.value;

    if (result == "") {
        alert("Password cannot be empty");
    } else if (result.length < 16) {
        alert("Password must longer than 16");
    } else if(!result.test(/[\w]{16}/g)) {
        console.log("Password must contain alphanumeric")
    } else {
        alert("welcome")
    }

  e.preventDefault();
}
