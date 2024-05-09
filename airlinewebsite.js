let age = 21; //prompt
let userAge;
let isDriver;
let ageMessage = document.querySelector(".ageConfirmation");
let driverMessage = document.querySelector(".driverConfirmation");
let ageSubmit = document.querySelector(".ageSubmit");
let driver = false; //confirm

function checkage() {
  userAge = parseInt(document.querySelector(".age").value);
  isDriver = document.querySelector(".isDriver").value.toUpperCase();
  if (isDriver == "YES") {
    driver = true;
  } else {
    driver = false;
  }

  if (userAge >= age) {
    ageMessage.innerText = "You are old enough to drink";
    if (driver) {
      driverMessage.innerText =
        "Drive safe, however you cannot purchase alcohol onboard your next flight!"; //alert or DOM
    } else {
      driverMessage.innerText = "Don't drive? Cool";
    }
  } else {
    ageMessage.innerText = "You are not old enough to drink";
  }
}
ageSubmit.addEventListener("click", () => {
  checkage();
});

