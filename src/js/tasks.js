
import {
  mainObj,
} from './main.js';
import {
  savingOnLocalStorage,
  savingTaskObj,
} from './storage.js';

// funçoes para CRIAR nova tarefa
window.newTaskDisplay = function(el) {
  const newTaskButton = el;
  const newTaskConfirmContainer = newTaskButton.nextSibling;
 
  newTaskButton.style.display =
  newTaskButton.style.display === "block" ? "none" : "block";

  newTaskConfirmContainer.style.display = newTaskConfirmContainer.style.display = "flex";

}
 window.newTaskBack = function(el) {
  const newTaskButtonBack = el;
  const newTaskButtonContainer = newTaskButtonBack.parentNode;
  const newTaskConfirmContainer = newTaskButtonContainer.parentNode;
  const newTaskInput = newTaskConfirmContainer.firstChild
  const newTaskButton = newTaskConfirmContainer.previousSibling;

  newTaskButton.style.display =
  newTaskButton.style.display === "none" ? "block" : "none";

  newTaskConfirmContainer.style.display = newTaskConfirmContainer.style.display = "none";
  newTaskInput.value = ""

}

 window.newTaskConfirm = function(el,columnId,taskId,taskName){
  let newTask = false;
  let column;
  let newTaskInput;
  let newTaskButtonConfirm;
  let newTaskContainer;
    if (el != undefined){ // vendo se está sendo criada uma nova task tlgd rsrs kk
      newTask = true;
    }

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");

  const taskTitle = document.createElement("span");
  taskTitle.classList.add("taskTitle");
  if(newTask === true){
     newTaskButtonConfirm = el;
    newTaskInput = newTaskButtonConfirm.parentNode.previousSibling;
    newTaskContainer = newTaskButtonConfirm.parentNode.parentNode.parentNode
    column = newTaskContainer.parentNode;
    
      columnId = column.id;
      taskId = `task-id-${Date.now()}`;
      taskName = newTaskInput.value;
    
  if(newTaskInput.value == "" || newTaskInput.value.length > 23){
    alert("vtnc tario kk");
    return;
  }}
  else{
    column = document.getElementById(columnId);
    newTaskContainer = column.firstChild.nextSibling;
  }

taskTitle.textContent = taskName;
taskContainer.id = taskId;


taskContainer.appendChild(taskTitle);
column.insertBefore(taskContainer,newTaskContainer)

if(newTask == true){
  newTaskBack(newTaskButtonConfirm.previousSibling);
}
savingTaskObj(columnId,taskId,taskName,mainObj);
savingOnLocalStorage(mainObj);
}



