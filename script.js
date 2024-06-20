// Get the task input field, add task button, and task list
// const taskInput = document.getElementById('task-input');
// const addTaskBtn = document.getElementById('add-task-btn');
// const taskList = document.getElementById('task-list');

// Add an event listener to the add task button
// addTaskBtn.addEventListener('click', addTask);

// Function to add a new task to the list
// function addTask() {
//   const taskText = taskInput.value.trim();
//   if (taskText!== '') {
//     const taskListItem = document.createElement('li');
//     taskListItem.textContent = taskText;
//     taskList.appendChild(taskListItem);
//     taskInput.value = '';
//   }
// }

// Add an event listener to the task list to mark tasks as completed


// Function to mark a task as completed


// Add an event listener to the task list to remove tasks
// taskList.addEventListener('click', removeTask);

// Function to remove a task from the list
// function removeTask(event) {
//   if (event.target.tagName === 'LI') {
//     taskList.removeChild(event.target);
//   }
// }

const taskInput =document.getElementById("task-input");
const btn=document.getElementById("add-task-btn");
const taskList =document.getElementById("task-list");

// btn.addEventListener('click', addTask);

function addTask(){
    const taskText =taskInput.value.trim();
    if (taskText !==""){
        const taskListItem=document.createElement('li');
        taskListItem.textContent=taskText;
        taskList.append(taskListItem);
        taskInput.value="";
    }
}

taskList.addEventListener('click', markTaskAsCompleted);

function markTaskAsCompleted(event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('completed');
    }
  }

  taskList.addEventListener('click', removeTask);

// Function to remove a task from the list
function removeTask(event) {
  if (event.target.tagName === 'LI') {
    taskList.removeChild(event.target);
  }
}