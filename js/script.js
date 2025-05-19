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

//12.3
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    event.target.parentElement.remove();
  }
});
addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const newItem = document.createElement("li");
    newItem.classList.add("lis-text");
    newItem.innerHTML = taskText + '<button class="deleteBtn">Delete</button>';
    taskList.appendChild(newItem);
    taskInput.value = "";
  } else {
    alert("Enter text!");
  }
});
