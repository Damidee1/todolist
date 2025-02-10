// Add new todo item
const addButton = document.getElementById("addBtn");
const todoContainer = document.getElementById("todoitems");
const newTodoInput = document.getElementById("newTodo");
const editContent = document.querySelector("edit");

addButton.addEventListener("click", function () {
  const newTask = newTodoInput.value.trim();
  if (newTask) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo-item");
    newDiv.innerHTML = `
         <input type="checkbox">
         <label>${newTask}</label>
         <button class="edit">Edit</button>
         <button class="delete">Delete</button>
       `;
    todoContainer.appendChild(newDiv);
    newTodoInput.value = ""; // Clear input field after adding
  }
});

// Events edit and delete buttons
todoContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("edit")) {
    const newTask = prompt(
      "Edit the task:",
      e.target.previousElementSibling.textContent
    );
    if (newTask !== null && newTask.trim() !== "") {
      e.target.previousElementSibling.textContent = newTask;
    }
  }
});
