//12.1
let savedLink = "";
document.getElementById("setLink").addEventListener("click", function () {
  savedLink = prompt("Enter the link:");
});
document.getElementById("goToLink").addEventListener("click", function () {
  if (savedLink) {
    window.location.href = savedLink;
  } else {
    alert("Enter the beginning!");
  }
});

//12.2
const container = document.getElementById("buttonContainer");

container.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    alert("You pressed on: " + event.target.textContent);
  }
});
