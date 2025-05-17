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
