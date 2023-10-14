
import {
  mainObj,
} from './main.js';
import {
  savingOnLocalStorage,
  savingTaskObj,
} from './storage.js';

var taskNumber = 0;

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

  taskContainer.addEventListener("click", function() {
    newModal(taskNumber);
 //  alert("vasnh");
}); 
taskNumber++;

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

const body =  document.body;
let divBackground;
let divPrincipal;
let divSecundaria;
let descricaoText;
let titulo;
let descricao;
let listaColuna;
let adicionar;
let botao1;
let botao2;
let botao3;
let botaos;

function newModal (taskNumber){
  console.log(34);

  divBackground = document.createElement("div");
  divBackground.className = "background";
  divBackground.id = "background";
  body.appendChild(divBackground);

  divPrincipal = document.createElement("div");
  divPrincipal.className = "newModal";
  divPrincipal.id = "newModal";
  divBackground.appendChild(divPrincipal);

  divSecundaria = document.createElement("div");
  divSecundaria.className = "modalContent";
  divSecundaria.id = "modalContent";
  divPrincipal.appendChild(divSecundaria);

  titulo = document.createElement("h2");
  titulo.id = "modalTitle";
   titulo.innerHTML = "titulo(q deveria ser o nome da task)";
  divSecundaria.appendChild(titulo);

  listaColuna = document.createElement("p");
  listaColuna.id = "lista-coluna";
  divSecundaria.appendChild(listaColuna);

  descricao = document.createElement("p");
  descricao.id = "descricao";
  descricao.innerHTML = "Descricao";
  divSecundaria.appendChild(descricao);

  descricaoText = document.createElement("textarea");
  descricaoText.id = "descricaoText";
  divSecundaria.appendChild(descricaoText);

  adicionar = document.createElement("p");
  adicionar.id = "adicionar";
  adicionar.innerHTML = "Adicionar à tarefa";
  divSecundaria.appendChild(adicionar);

  botaos = document.createElement("div");
  botaos.className = "botaos";
  // botaos.id = "modalContent";
  divPrincipal.appendChild(botaos);

  botao1 = document.createElement("button");
  botao1.id = "botao1";
  botao1.innerHTML = "Checklist";
  divSecundaria.appendChild(botao1);

  botao2 = document.createElement("button");
  botao2.id = "botao2";
  botao2.innerHTML = "Datas";
  divSecundaria.appendChild(botao2);

  botao3 = document.createElement("button");
  botao3.id = "botao3";
  botao3.innerHTML = "Anexos";
  divSecundaria.appendChild(botao3);

 
  divBackground.addEventListener('click', function (event) {
      if (event.target === divBackground) {
          closeModal();
      }
  });

   const titleElement = document.getElementById("taskTitle");
    titleElement.textContent = "tarefa" + taskNumber;
    // titulo.innerHTML = titleElement;
}

function closeModal() {
  body.removeChild(divBackground);
  // divBackground = null;
}




