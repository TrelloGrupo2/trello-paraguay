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

window.newTaskConfirm = function (el, columnId, taskId, taskName, taskDescValue) {
  let newTask = false;
  let column;
  let newTaskInput;
  let newTaskButtonConfirm;
  let newTaskContainer;
  if (el != undefined) {
    // vendo se está sendo criada uma nova task tlgd rsrs kk
    newTask = true;
  }

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");

  const taskTitle = document.createElement("span");
  taskTitle.classList.add("taskTitle");
  


  let taskDescription = document.querySelector(".modal-description");
  


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
    newTaskContainer = column.firstChild.nextSibling;
  }

  taskTitle.id = `task-name-${taskId}`;
  taskTitle.textContent = taskName;
  taskContainer.id = taskId;
  taskDescription.value = taskDescValue;

  taskContainer.onclick = () => {
    showModal(taskTitle.textContent, taskId);
  };

  taskContainer.appendChild(taskTitle);
  column.insertBefore(taskContainer, newTaskContainer);

  if (newTask == true) {
    newTaskBack(newTaskButtonConfirm.previousSibling);
  }
  savingTaskObj(columnId, taskId, taskName, mainObj, taskDescValue);
  console.log(mainObj);
  savingOnLocalStorage(mainObj);
};

function description(taskId) {
  const descricaoText = document.getElementById("descricaoText-${taskId}");
  const updateLS = () => {
    localStorage.setItem("descricaoText-${taskId}", descricaoText.value);
  };

  // Para carregar a descrição do armazenamento local quando necessário:
  const conteudoArmazenado = localStorage.getItem("descricaoText-${taskId}");
  if (conteudoArmazenado) {
    descricaoText.value = conteudoArmazenado;
  }

  // Adicione um ouvinte de eventos para salvar sempre que o usuário digitar na textarea:
  descricaoText.addEventListener("input", updateLS);
}

function closeModal() {
  body.removeChild(divBackground);
  // divBackground = null;
}

// function getTaskDescription(columnId,taskId){
//   return mainObj[columnId]?.[taskId]?.description || '';
// }
