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

window.newTaskConfirm = function(el){
  const newTaskButtonConfirm = el;
  const newTaskInput = newTaskButtonConfirm.parentNode.previousSibling;
  const newTaskContainer = newTaskButtonConfirm.parentNode.parentNode.parentNode
  const column = newTaskContainer.parentNode;
  const columnId = column.id;
  

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  taskContainer.id = `task-id-${Date.now()}`;

  const taskTitle = document.createElement("span");
  taskTitle.classList.add("taskTitle");

  if(newTaskInput.value == "" || newTaskInput.value.length > 23){
    alert("vtnc tario kk");
    return;
  }else{
    taskTitle.textContent = newTaskInput.value; 
  }


taskContainer.appendChild(taskTitle);
column.insertBefore(taskContainer,newTaskContainer)


// salvando no obj
savingTaskObj(columnId, taskContainer.id,newTaskInput.value,mainObj);
savingOnLocalStorage(mainObj);


  newTaskBack(newTaskButtonConfirm.previousSibling);
}



