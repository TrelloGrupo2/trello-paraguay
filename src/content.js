const newColumnInput = document.getElementById("newColumnInput");
console.log(newColumnInput)
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
  

  function newTaskButtonAction() {
    let newTaskButton = document.getElementById("newTaskButton");

    newTaskButton.style.display =
    newTaskButton.style.display === "block" ? "none" : "block";
  
    let newTaskConfirmContainer = document.getElementById("newTaskConfirmContainer");
    newTaskConfirmContainer.style.display = newTaskConfirmContainer.style.display = "block";
  
  }
  function newTaskButtonBack() {
    let newTaskButton = document.getElementById("newTaskButton");

    newTaskButton.style.display =
    newTaskButton.style.display === "none" ? "block" : "none";
  
    let newTaskConfirmContainer = document.getElementById("newTaskConfirmContainer");
    newTaskConfirmContainer.style.display = newTaskConfirmContainer.style.display = "none";
  
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
    columnNameContainer.style.display ="block"

    const columnDeleteContainer = document.createElement("div");
    columnDeleteContainer.classList.add("columnDeleteContainer");
    columnDeleteContainer.style.display ="block"

    const columnName = document.createElement("span");
    columnName.classList.add("columnName");
    columnName.innerHTML = newColumnInputValue;

    const renameColumnButton = document.createElement("button");
    renameColumnButton.classList.add("renameColumnButton");
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





    column.appendChild(columnHeader);
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
  columnNameContainer.style.display === "block" ? "none" : "block";

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
  columnNameContainer.style.display === "none" ? "block" : "none";


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
    columnName.innerHTML = renameInput.value; 
    console.log(renameInput.value)
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
