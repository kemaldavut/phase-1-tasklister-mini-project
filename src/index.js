document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("#create-task-form");
const Tasks = document.querySelector("#new-task-description");
const addTasks = document.querySelector("#tasks");
const deleteTasks = document.querySelector("#delete-tasks");
const editTasks = document.querySelector("#edit-tasks");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = Tasks.value;
    const newTask = document.createElement("li");
    newTask.textContent = task;
    addTasks.appendChild(newTask);
    Tasks.value = "";
    
} );

deleteTasks.addEventListener("click", (event) => {
    event.preventDefault();
    addTasks.innerHTML = "";
} );
} );
