
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
  // console.log(taskTitle);

  taskContainer.addEventListener("click", function() {
    newModal(taskNumber,taskName,columnId,taskId);
    description (taskId);
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
      // taskId = taskNumber;
      console.log(taskNumber);
      taskName = newTaskInput.value;
      console.log(taskName);

    //    if(!mainObj[columnId]){
    //     mainObj[columnId] = {};
    //    }
    //  mainObj[columnId][taskId] = {
    //    name: taskName,
    //    description: newTaskInput.value,
    //  } ;

    // const description = getTaskDescription(columnId,taskId);

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
// console.log(taskContainer.id);


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
let botaoSalva;

function newModal (taskNumber,taskName,columnId,taskId){
  // console.log(34);

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
   titulo.innerHTML = taskName;
  //  titulo.innerHTML = "titulo(q deveria ser o nome da task)";
  divSecundaria.appendChild(titulo);

  listaColuna = document.createElement("p");
  listaColuna.id = "lista-coluna";
  divSecundaria.appendChild(listaColuna);

  descricao = document.createElement("p");
  descricao.id = "descricao";
  descricao.innerHTML = "Descricao";
  divSecundaria.appendChild(descricao);

  adicionar = document.createElement("p");
  adicionar.id = "adicionar";
  adicionar.innerHTML = "Adicionar à tarefa";
  divSecundaria.appendChild(adicionar);

  botao1 = document.createElement("button");
  botao1.className = "botaos";
  botao1.innerHTML = "Checklist";
  divSecundaria.appendChild(botao1);

  botao2 = document.createElement("button");
  botao2.className = "botaos";
  botao2.innerHTML = "Datas";
  divSecundaria.appendChild(botao2);

  botao3 = document.createElement("button");
  botao3.className = "botaos";
  botao3.id = "botao3"
  botao3.innerHTML = "Anexos";
  divSecundaria.appendChild(botao3);

  botaoSalva = document.createElement("button");
  botaoSalva.className = "botaoSalva";
  botaoSalva.id = "botaoSalva"
  botaoSalva.innerHTML = "Salvar";

  descricaoText = document.createElement("textarea");
  descricaoText.id = "descricaoText";
  divSecundaria.appendChild(descricaoText);
  
  // Função para abrir o modal
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

 
  document.getElementById("saveDescriptionButton").addEventListener("click", saveDescription);
}

// Função para salvar a descrição no localStorage
function saveDescription() {
  var description = document.getElementById("descriptionInput").value;
  
  localStorage.setItem("userDescription", description);

  closeModal();
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Event listener para abrir o modal quando o botão é clicado
document.getElementById("openModalButton").addEventListener("click", openModal);

// Fechar o modal se o usuário clicar fora da área do modal
window.addEventListener("click", function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
});

  // description(taskId);

  function description (taskId){ 

    const descricaoText = document.getElementById('descricaoText-${taskId}')
  const updateLS = () => {
    localStorage.setItem('descricaoText-${taskId}',descricaoText.value);
  }

  // Para carregar a descrição do armazenamento local quando necessário:
const conteudoArmazenado = localStorage.getItem('descricaoText-${taskId}');
if (conteudoArmazenado) {
  descricaoText.value = conteudoArmazenado;
}

// Adicione um ouvinte de eventos para salvar sempre que o usuário digitar na textarea:
   descricaoText.addEventListener('input', updateLS);
} 

  // updateLS();
  // const conteudoArmazenado = localStorage.getItem('conteudo');
  // descricaoText.value = conteudoArmazenado;

  // descricaoText.addEventListener('input', function(){
  //   localStorage.setItem('conteudo',descricaoText.value)
  // })

  // const taskDescription = getTaskDescription(columnId,taskNumber);
  // descricaoText.value = taskDescription;

  // taskContainer.appendChild(taskTitle);
  // taskContainer.appendChild(inputDescription);
  // column.insertBefore(taskContainer, newTaskContainer);

  // const taskDescription = mainObj[taskNumber]?.description;
  // descricaoText.value = taskDescription || '';
  // const taskDescription = mainObj[columnId] && mainObj[columnId][taskNumber] && mainObj[columnId][taskNumber].description;
  // descricaoText.value = taskDescription || '';

  // descricaoText.innerHTML = conteudoArmazenado;
  // divSecundaria.appendChild(descricaoText);

  // titulo.innerHTML = taskTitle;


 
  divBackground.addEventListener('click', function (event) {
      if (event.target === divBackground) {
          closeModal();
      }
  });

  // const taskDiv = document.createElement('div');
  // taskDiv.style.display = 'none';


  // Recuperar o conteúdo da textarea do LocalStorage
// const conteudoArmazenado = localStorage.getItem('conteudo');
// document.getElementById('suaTextarea').value = conteudoArmazenado;

// const titleElement = document.getElementById("modalTitle");
//     // console.log(input);
//      titleElement.textContent = input;
}

function closeModal() {
  body.removeChild(divBackground);
  // divBackground = null;
}

// function getTaskDescription(columnId,taskId){
//   return mainObj[columnId]?.[taskId]?.description || '';
// }


