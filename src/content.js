const newColumnInput = document.getElementById("newColumnInput");
newColumnInput.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    createNewColumn();
  }
  })

function newColumnButtonAction() {
    let newColumnButton = document.getElementById("newColumnButton");

    newColumnButton.style.display =
    newColumnButton.style.display === "block" ? "none" : "block";
  
    let newColumnConfirmContainer = document.getElementById("newColumnConfirmContainer");
    newColumnConfirmContainer.style.display = newColumnConfirmContainer.style.display = "block";
  
  }
  function newColumnButtonBack() {
    let newColumnButton = document.getElementById("newColumnButton");
    const newColumnInput = document.querySelector("#newColumnInput")


    newColumnButton.style.display =
    newColumnButton.style.display === "none" ? "block" : "none";
  
    let newColumnConfirmContainer = document.getElementById("newColumnConfirmContainer");
    newColumnConfirmContainer.style.display = newColumnConfirmContainer.style.display = "none";

    newColumnInput.value = ""
  
  }
  

  function newTaskButtonAction(el) {
    const newTaskButton = el;
    const newTaskConfirmContainer = newTaskButton.nextSibling;
   
    newTaskButton.style.display =
    newTaskButton.style.display === "block" ? "none" : "block";
  
    newTaskConfirmContainer.style.display = newTaskConfirmContainer.style.display = "flex";
  
  }
  
  function createNewColumn(){

    let content = document.querySelector("#content");
    let newColumnContainer = document.querySelector("#newColumnContainer");
    const newColumnInput = document.querySelector("#newColumnInput")

    let newColumnInputValue = newColumnInput.value;
    if(newColumnInput.value == "" || newColumnInput.value.length > 23){
      alert("vtnc tario kk");
      return;
    }
    const column = document.createElement("div");
    column.classList.add("column");
    let columnId = `id-${Date.now()}`;
    column.id = columnId;
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
    columnName.innerHTML = newColumnInputValue;

    const renameColumnButton = document.createElement("button");
    renameColumnButton.classList.add("renameColumnButton");
    renameColumnButton.style.display = "none";
    renameColumnButton.onclick = function(){
      renameButtonDisplay(this);
    }
    

    const renameColumnIcon = document.createElement("i");
    renameColumnIcon.classList.add("fa-solid");
    renameColumnIcon.classList.add("fa-pen");


    const deleteColumnButton = document.createElement("button");
    deleteColumnButton.classList.add("deleteColumnButton")
    deleteColumnButton.onclick = function (){
      deleteColumn(this);
    }


    const deleteColumnIcon = document.createElement("i");
    deleteColumnIcon.classList.add("fa-solid");
    deleteColumnIcon.classList.add("fa-xmark");


    const columnRenameContainer = document.createElement("div");
    columnRenameContainer.classList.add("columnRenameContainer");
    columnRenameContainer.style.display = 'none';
    const renameInput = document.createElement("input");
    renameInput.classList.add("renameInput");
    renameInput.type = "text";
    renameInput.placeholder = "Insira o nome da tarefa";
    renameInput.addEventListener("keyup", ({key}) => {
      if (key === "Enter") {
        const newColumnConfirmContainer = renameInput.parentNode;
        const confirmRenameButton = newColumnConfirmContainer.lastChild;
        renameConfirmButton(confirmRenameButton);
      }
      })

    const cancelRenameButton = document.createElement("button");
    cancelRenameButton.classList.add("cancelRenameButton");
    const cancelRenameIcon = document.createElement("i")
    cancelRenameIcon.classList.add("fa-solid");
    cancelRenameIcon.classList.add("fa-xmark");
    cancelRenameButton.onclick = function(){
      renameCancelButton(this);
    }


    const confirmRenameButton = document.createElement("button"); 
    confirmRenameButton.classList.add("confirmRenameButton");
    const confirmRenameIcon = document.createElement("i")
    confirmRenameIcon.classList.add("fa-solid");
    confirmRenameIcon.classList.add("fa-check");
    confirmRenameButton.onclick = function(){
      renameConfirmButton(this);
    }

    // NEW TASK 
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("newTaskContainer");

    const newTaskButton = document.createElement("button");
    newTaskButton.classList.add("newTaskButton");
    newTaskButton.style.display = "block"
    newTaskButton.textContent = "Nova Tarefa"
    newTaskButton.onclick = function(){
      newTaskButtonAction(this);
    }
  
    const newTaskConfirmContainer = document.createElement("div");
    newTaskConfirmContainer.classList.add("newTaskConfirmContainer");
    newTaskConfirmContainer.style.display = "none";

    const newTaskInput = document.createElement("input");
    newTaskInput.classList.add("newTaskInput");

    newTaskInput.type = "text";
    newTaskInput.placeholder = "Insira o nome da task";

    const newTaskButtonContainer = document.createElement("div");
    newTaskButtonContainer.classList.add("newTaskButtonContainer");

    const newTaskBackButton = document.createElement("button");
    newTaskBackButton.classList.add("newTaskBackButton");
    newTaskBackButton.textContent = "Voltar";
    newTaskBackButton.onclick = function(){
      newTaskButtonBack(this);
    }

    const newTaskConfirmButton = document.createElement("button");
    newTaskConfirmButton.classList.add("newTaskConfirmButton");
    newTaskConfirmButton.textContent = "Confirmar"
    newTaskConfirmButton.onclick = function(){
      newTaskButtonConfirm(this);
    }

    newTaskInput.addEventListener("keyup", ({key}) => {
      if (key === "Enter") {
        
        newTaskButtonConfirm(newTaskConfirmButton);
      }
      })

    column.appendChild(columnHeader);
    column.appendChild(newTaskContainer)
    columnHeader.appendChild(columnNameContainer);

    columnNameContainer.appendChild(columnName);
    columnNameContainer.appendChild(renameColumnButton);
    renameColumnButton.appendChild(renameColumnIcon);

    columnHeader.appendChild(columnDeleteContainer);
    columnDeleteContainer.appendChild(deleteColumnButton);
    deleteColumnButton.appendChild(deleteColumnIcon);

    columnHeader.appendChild(columnRenameContainer);
    columnRenameContainer.appendChild(renameInput);
    columnRenameContainer.appendChild(cancelRenameButton);
    cancelRenameButton.appendChild(cancelRenameIcon);
    columnRenameContainer.appendChild(confirmRenameButton);
    confirmRenameButton.appendChild(confirmRenameIcon);

    newTaskContainer.appendChild(newTaskButton);
    newTaskContainer.appendChild(newTaskConfirmContainer);

    newTaskConfirmContainer.appendChild(newTaskInput);
    newTaskConfirmContainer.appendChild(newTaskButtonContainer);

    newTaskButtonContainer.appendChild(newTaskBackButton);
    newTaskButtonContainer.appendChild(newTaskConfirmButton);


    content.insertBefore(column,newColumnContainer);

    newColumnButtonBack();
  }

function clickPress(event) {
  if (event.keyCode == 13) {
    createNewColumn()
  }
}

function renameButtonDisplay(el){
  const renameColumnButton = el;
  const columnNameContainer = renameColumnButton.parentNode;
  const columnDeleteContainer = columnNameContainer.nextSibling;
  const columnRenameContainer  = columnDeleteContainer.nextSibling;

  columnNameContainer.style.display =
  columnNameContainer.style.display === "flex" ? "none" : "flex";

  columnDeleteContainer.style.display =
  columnDeleteContainer.style.display === "block" ? "none" : "block";

  columnRenameContainer.style.display =
  columnRenameContainer.style.display === "none" ? "block" : "none";
}

function renameCancelButton(el){
  const renameCancelButton = el;
  const columnRenameContainer = renameCancelButton.parentNode;
  const columnDeleteContainer = columnRenameContainer.previousSibling;
  const columnNameContainer = columnDeleteContainer.previousSibling

  columnNameContainer.style.display =
  columnNameContainer.style.display === "none" ? "flex" : "none";


  columnDeleteContainer.style.display =
  columnDeleteContainer.style.display === "none" ? "block" : "none";


  columnRenameContainer.style.display =
  columnRenameContainer.style.display === "block" ? "none" : "block";
}

function renameConfirmButton(el){
  const renameConfirmButton = el
  const renameCancellButton = renameConfirmButton.previousSibling
  const renameInput = (renameConfirmButton.previousSibling).previousSibling 
  const columnRenameContainer = renameConfirmButton.parentNode;
  const columnNameContainer = (columnRenameContainer.previousSibling).previousSibling
  const columnName = columnNameContainer.firstChild
  if(renameInput.value == "" || renameInput.value.length > 23){
    alert("vtnc tario kk");
    return;
  }else{
    columnName.textContent = renameInput.value; 
  }
  
  renameCancelButton(renameCancellButton);
}

function deleteColumn(el){
  const deleteButton = el;
  const columnDeleteContainer = deleteButton.parentNode;
  const column = (columnDeleteContainer.parentNode).parentNode

  if(confirm("certeza?kk") == true){

    content.removeChild(column);

  }else{
    return;
  }

}
function newTaskButtonBack(el) {
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

function newTaskButtonConfirm(el){
  const newTaskButtonConfirm = el;
  const newTaskInput = newTaskButtonConfirm.parentNode.previousSibling;
  const newTaskContainer = newTaskButtonConfirm.parentNode.parentNode.parentNode
  const column = newTaskContainer.parentNode;
  console.log(column)
  
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");

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

  newTaskButtonBack(newTaskButtonConfirm.previousSibling);
}
