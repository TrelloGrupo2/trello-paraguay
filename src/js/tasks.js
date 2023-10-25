import { mainObj } from "./main.js";
import { savingOnLocalStorage, savingTaskObj } from "./storage.js";

import { showModal } from "./modal.js";


// funçoes para CRIAR nova tarefa
window.newTaskDisplay = function (el) {
  const newTaskButton = el;
  const newTaskConfirmContainer = newTaskButton.nextSibling;

  newTaskButton.style.display =
    newTaskButton.style.display === "block" ? "none" : "block";

  newTaskConfirmContainer.style.display =
    newTaskConfirmContainer.style.display = "flex";
};
window.newTaskBack = function (el) {
  const newTaskButtonBack = el;
  const newTaskButtonContainer = newTaskButtonBack.parentNode;
  const newTaskConfirmContainer = newTaskButtonContainer.parentNode;
  const newTaskInput = newTaskConfirmContainer.firstChild;
  const newTaskButton = newTaskConfirmContainer.previousSibling;

  newTaskButton.style.display =
    newTaskButton.style.display === "none" ? "block" : "none";

  newTaskConfirmContainer.style.display =
    newTaskConfirmContainer.style.display = "none";
  newTaskInput.value = "";
};

window.createNewTask = function (el, columnId, taskId, taskName, taskDescValue) {
  let newTask = false;
  let column;
  let newTaskInput;
  let newTaskButtonConfirm;
  let newTaskContainer;
  let tasksContainer;
  if (el != undefined) {
    // vendo se está sendo criada uma nova task tlgd rsrs kk
    newTask = true;
  }

  const task = document.createElement("div");
  task.classList.add("task");

  const taskTitle = document.createElement("span");
  taskTitle.classList.add("taskTitle");

  let taskDescription = document.querySelector(".modal-description");
  task.setAttribute("draggable", "true");
  task.setAttribute("ondragstart", "drag(event)");


  if (newTask === true) {
    newTaskButtonConfirm = el;
    newTaskInput = newTaskButtonConfirm.parentNode.previousSibling;
    newTaskContainer = newTaskButtonConfirm.parentNode.parentNode.parentNode;
    column = newTaskContainer.parentNode;

    columnId = column.id;
    taskId = `${Date.now()}`;
    taskName = newTaskInput.value;
    taskDescValue = '';

    if (newTaskInput.value == "" || newTaskInput.value.length > 23) {
      alert("vtnc tario kk");
      return;
    }
  } else {
    column = document.getElementById(columnId);
    newTaskContainer = column.firstChild.nextSibling.nextSibling;
  }
  tasksContainer = column.firstChild.nextSibling

  taskTitle.id = `task-name-${taskId}`;
  taskTitle.textContent = taskName;
  task.id = taskId;
  taskDescription.value = taskDescValue;

  task.onclick = () => {
    showModal(taskTitle.textContent, taskId);
  };

  task.appendChild(taskTitle);
  tasksContainer.appendChild(task);

  if (newTask == true) {
    newTaskBack(newTaskButtonConfirm.previousSibling);
  }
  savingTaskObj(columnId, taskId, taskName, mainObj, taskDescValue);
  savingOnLocalStorage(mainObj);
};

