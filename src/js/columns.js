import {
  mainObj,
} from './main.js';
import {
  savingColumnObj,
  savingOnLocalStorage
} from './storage.js';

 window.createNewColumn = function(columnId, columnTitle){

    let content = document.querySelector("#content");
    let newColumnContainer = document.querySelector("#newColumnContainer");
    const newColumnInput = document.querySelector("#newColumnInput");
    let newColumn = false;
    

    if (columnTitle === undefined){
       columnTitle = newColumnInput.value;
        newColumn = true;
      if(newColumnInput.value == "" || newColumnInput.value.length > 23){
        alert("vtnc tario kk");
        return;
      }
    }
 
    const column = document.createElement("div");
    column.classList.add("column");

   column.setAttribute("ondrop", "drop(event)");
   column.setAttribute("ondragover", "allowDrop(event)");
    if(columnId === undefined){
    columnId = `column-Id-${Date.now()}`;
    }
    column.id = columnId;

    let columnHeader = creatingColumnHeader(columnTitle);
    let newTaskContainer = creatingColumnNewTask();
    column.appendChild(columnHeader);
    column.appendChild(newTaskContainer)



     content.insertBefore(column,newColumnContainer);

      if (newColumn === true){
        newColumnBack();
        newColumnInput.value = "";
      }
       
      savingColumnObj(columnId,columnTitle,mainObj)
      savingOnLocalStorage(mainObj);

    
  }


  window.creatingColumnHeader = function(columnTitle){

    // criando os elementos
    const columnHeader = document.createElement("div");
    columnHeader.classList.add("columnHeader");

    const columnNameContainer = document.createElement("div");
    columnNameContainer.classList.add("columnNameContainer");
    columnNameContainer.style.display ="flex"
    columnNameContainer.onmouseover = function(){
      
     const  renameColumnButton = this.firstChild.nextSibling;
     renameColumnButton.style.display = "flex";

    }
    columnNameContainer.onmouseout = function(){
      const  renameColumnButton = this.firstChild.nextSibling;
      renameColumnButton.style.display = "none";
    }


    const columnDeleteContainer = document.createElement("div");
    columnDeleteContainer.classList.add("columnDeleteContainer");
    columnDeleteContainer.style.display ="block";

    const columnName = document.createElement("span");
    columnName.classList.add("columnName");
    columnName.textContent = columnTitle;

    const renameColumnButton = document.createElement("button");
    renameColumnButton.classList.add("renameColumnButton");
    renameColumnButton.classList.add("button");
    renameColumnButton.style.display = "none";
    renameColumnButton.onclick = function(){
      renameDisplay(this);
    }
    
    const renameColumnIcon = document.createElement("i");
    renameColumnIcon.classList.add("fa-solid");
    renameColumnIcon.classList.add("fa-pen");


    let  deleteColumnButton = document.createElement("button");
    deleteColumnButton.classList.add("deleteColumnButton")
    deleteColumnButton.classList.add("button")

    deleteColumnButton.onclick = function (){
      deleteColumn(this, mainObj);
    }


    const deleteColumnIcon = document.createElement("i");
    deleteColumnIcon.classList.add("fa-solid");
    deleteColumnIcon.classList.add("fa-xmark");


    const columnRenameContainer = document.createElement("div");
    columnRenameContainer.classList.add("columnRenameContainer");
    columnRenameContainer.style.display = 'none';
    const renameInput = document.createElement("input");
    renameInput.classList.add("renameInput");
    renameInput.classList.add("input");
    renameInput.type = "text";
    renameInput.placeholder = "Insira o nome da coluna";
    renameInput.addEventListener("keyup", ({key}) => {
      if (key === "Enter") {
        const newColumnConfirmContainer = renameInput.parentNode;
        const confirmRenameButton = newColumnConfirmContainer.lastChild;
        renameConfirm(confirmRenameButton);
      }
      })

    const cancelRenameButton = document.createElement("button");
    cancelRenameButton.classList.add("cancelRenameButton");
    cancelRenameButton.classList.add("button");
    const cancelRenameIcon = document.createElement("i")
    cancelRenameIcon.classList.add("fa-solid");
    cancelRenameIcon.classList.add("fa-xmark");
    cancelRenameButton.onclick = function(){
      renameCancel(this);
    }


    const confirmRenameButton = document.createElement("button"); 
    confirmRenameButton.classList.add("confirmRenameButton");
    confirmRenameButton.classList.add("button");
    const confirmRenameIcon = document.createElement("i")
    confirmRenameIcon.classList.add("fa-solid");
    confirmRenameIcon.classList.add("fa-check");
    confirmRenameButton.onclick = function(){
      renameConfirm(this);
    }

    columnHeader.appendChild(columnNameContainer);
    columnHeader.appendChild(columnRenameContainer);
    columnHeader.appendChild(columnDeleteContainer);

    columnNameContainer.appendChild(columnName);
    columnNameContainer.appendChild(renameColumnButton);
    renameColumnButton.appendChild(renameColumnIcon);

    columnDeleteContainer.appendChild(deleteColumnButton);
    deleteColumnButton.appendChild(deleteColumnIcon);

    columnRenameContainer.appendChild(renameInput);
    columnRenameContainer.appendChild(cancelRenameButton);
    columnRenameContainer.appendChild(confirmRenameButton);
    cancelRenameButton.appendChild(cancelRenameIcon);
    confirmRenameButton.appendChild(confirmRenameIcon);


    return(columnHeader);
  }

  window.creatingColumnNewTask = function(){
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("newTaskContainer");

    const newTaskButton = document.createElement("button");
    newTaskButton.classList.add("newTaskButton");
    newTaskButton.style.display = "block"
    newTaskButton.textContent = "Nova Tarefa"
    newTaskButton.onclick = function(){
      newTaskDisplay(this);
    }
  
    const newTaskConfirmContainer = document.createElement("div");
    newTaskConfirmContainer.classList.add("newTaskConfirmContainer");
    newTaskConfirmContainer.style.display = "none";

    const newTaskInput = document.createElement("input");
    newTaskInput.classList.add("newTaskInput");
    newTaskInput.classList.add("input");

    newTaskInput.type = "text";
    newTaskInput.placeholder = "Insira o nome da task";

    const newTaskButtonContainer = document.createElement("div");
    newTaskButtonContainer.classList.add("newTaskButtonContainer");

    const newTaskBackButton = document.createElement("button");
    newTaskBackButton.classList.add("newTaskBackButton");
    newTaskBackButton.classList.add("button");
    newTaskBackButton.textContent = "Voltar";
    newTaskBackButton.onclick = function(){
      newTaskBack(this);
    }

    const newTaskConfirmButton = document.createElement("button");
    newTaskConfirmButton.classList.add("newTaskConfirmButton");
    newTaskConfirmButton.classList.add("button");
    newTaskConfirmButton.textContent = "Confirmar";
    newTaskConfirmButton.onclick = function(){
      newTaskConfirm(this);
    }

    newTaskInput.addEventListener("keyup", ({key}) => {
      if (key === "Enter") {
        
        newTaskConfirm(newTaskConfirmButton);
      }
      })

      newTaskContainer.appendChild(newTaskButton);
      newTaskContainer.appendChild(newTaskConfirmContainer);
  
      newTaskConfirmContainer.appendChild(newTaskInput);
      newTaskConfirmContainer.appendChild(newTaskButtonContainer);
  
      newTaskButtonContainer.appendChild(newTaskBackButton);
      newTaskButtonContainer.appendChild(newTaskConfirmButton);
  
      return(newTaskContainer);
  }


// funçoes de criar nova coluna
window.newColumnDisplay = function() {
  const newColumnButton = document.getElementById("newColumnButton");

  newColumnButton.style.display =
  newColumnButton.style.display === "block" ? "none" : "block";

  const newColumnConfirmContainer = document.getElementById("newColumnConfirmContainer");
  newColumnConfirmContainer.style.display = newColumnConfirmContainer.style.display = "block";

}
 window.newColumnBack = function() {
  let newColumnButton = document.getElementById("newColumnButton");
  const newColumnInput = document.querySelector("#newColumnInput")


  newColumnButton.style.display =
  newColumnButton.style.display === "none" ? "block" : "none";

  let newColumnConfirmContainer = document.getElementById("newColumnConfirmContainer");
  newColumnConfirmContainer.style.display = newColumnConfirmContainer.style.display = "none";

  newColumnInput.value = ""

}

//funcoes para renomear coluna
window.renameDisplay = function(el){
const renameColumnButton = el;
const columnNameContainer = renameColumnButton.parentNode;
const columnRenameContainer = columnNameContainer.nextSibling;
const columnDeleteContainer  = columnRenameContainer.nextSibling;
const renameInput = columnRenameContainer.firstChild;
const columnName = columnNameContainer.firstChild;

renameInput.value = columnName.textContent;

columnNameContainer.style.display =
columnNameContainer.style.display === "flex" ? "none" : "flex";

columnDeleteContainer.style.display =
columnDeleteContainer.style.display === "block" ? "none" : "block";

columnRenameContainer.style.display =
columnRenameContainer.style.display === "none" ? "block" : "none";
}

window.renameCancel = function(el){
const renameCancelButton = el;
const columnRenameContainer = renameCancelButton.parentNode;
const columnDeleteContainer = columnRenameContainer.nextSibling;
const columnNameContainer = columnRenameContainer.previousSibling



columnNameContainer.style.display =
columnNameContainer.style.display === "none" ? "flex" : "none";


columnDeleteContainer.style.display =
columnDeleteContainer.style.display === "none" ? "block" : "none";


columnRenameContainer.style.display =
columnRenameContainer.style.display === "block" ? "none" : "block";
}

window.renameConfirm = function(el){
const renameConfirmButton = el
const renameCancellButton = renameConfirmButton.previousSibling
const renameInput = renameConfirmButton.previousSibling.previousSibling 
const columnRenameContainer = renameConfirmButton.parentNode;
const columnNameContainer = columnRenameContainer.previousSibling;
const columnId = columnNameContainer.parentNode.parentNode.id;
const columnName = columnNameContainer.firstChild

if(renameInput.value == "" || renameInput.value.length > 23){
  alert("vtnc tario kk");
  return;
}else{
  columnName.textContent = renameInput.value; 
}


// atualizando no obj
mainObj.forEach(function(mainObj){
if(mainObj.id == columnId){
  mainObj["title"] = renameInput.value
}
})
savingOnLocalStorage(mainObj);

renameCancel(renameCancellButton);
}


window.deleteColumn = function(el,mainObj){
let deleteButton = el;
let columnDeleteContainer = deleteButton.parentNode;
let column = columnDeleteContainer.parentNode.parentNode
let columnId = column.id;
if(confirm("certeza?kk") == true){

  content.removeChild(column);

  // tirando do OBJ
  mainObj.splice(mainObj.findIndex(v => v.id === columnId), 1);

  savingOnLocalStorage(mainObj);
}else{
  return;
}

}