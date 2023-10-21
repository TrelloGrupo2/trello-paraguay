import { mainObj } from "./main.js";
import { savingOnLocalStorage } from "./storage.js";

var modal = document.getElementById("myModal");

// Get the button that opens the modal
export let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let taskDescription = document.querySelector(".modal-description");

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

let tasksId;

export const showModal = (props, taskId) => {
  let description = document.querySelector(".modal-description");
  let title = document.querySelector(".title-modal");
  let modal = document.querySelector("#myModal");

  mainObj.forEach((mainObj) => { // pegando a descriçao certa
    mainObj.tasks.forEach((mainObjTask) => {
      if (mainObjTask.id === taskId)
      description.value = mainObjTask.description;
    return;
    });
  });

  tasksId = taskId;
  title.textContent = props;
  
  modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  saveDescriptionObj();
  console.log(mainObj);
};

const saveDescriptionObj = () => {
  mainObj.forEach((mainObj) => {
    mainObj.tasks.forEach((mainObjTask) => {
      if (mainObjTask.id === tasksId)
        mainObjTask["description"] = taskDescription.value;
    });
  });
  savingOnLocalStorage(mainObj);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    saveDescriptionObj();
    console.log(mainObj);
  }
};

// rename
window.cancelTaskRename = function(){
  let taskNameContainer = document.querySelector(".taskNameContainer");
  let taskRenameContainer = document.querySelector(".taskRenameContainer");

taskNameContainer.style.display =
taskNameContainer.style.display === "none" ? "flex" : "none";

taskRenameContainer.style.display =
taskRenameContainer.style.display === "block" ? "none" : "block";
}
window.displayTaskRename = function(){
  let taskNameContainer = document.querySelector(".taskNameContainer");
  let taskRenameContainer = document.querySelector(".taskRenameContainer");
  let renameTaskInput = document.querySelector(".renameTaskInput");
  let titleModal = document.querySelector(".title-modal")
  
  renameTaskInput.value = titleModal.textContent;

  taskNameContainer.style.display =
  taskNameContainer.style.display === "flex" ? "none" : "flex";
  
  taskRenameContainer.style.display =
  taskRenameContainer.style.display === "none" ? "block" : "none";

}

window.taskRename = function(){
  let renameInput = document.querySelector(".renameTaskInput");
  let titleModal =  document.querySelector(".title-modal");
  let taskTitle = document.getElementById(`task-name-${tasksId}`);

  if(renameInput.value == "" || renameInput.value.length > 23){
    alert("vtnc tario kk");
    return;
  }
    titleModal.textContent = renameInput.value;

    // talizando no obj
    mainObj.forEach((mainObj) => {
      mainObj.tasks.forEach((mainObjTask) => {
        if (mainObjTask.id === tasksId)
          mainObjTask["title"] = titleModal.textContent;
      });
    });
    taskTitle.textContent = titleModal.textContent;
    savingOnLocalStorage(mainObj);
    cancelTaskRename();
  
}
window.taskDelete = function(){
  let currentTask = document.getElementById(tasksId);
  let columnId = currentTask.parentNode.id
  if(confirm("certeza?kk") == true){
  currentTask.parentNode.removeChild(currentTask);

  mainObj.forEach((mainObj) => {
    if(columnId === mainObj.id){
  mainObj.tasks.splice(mainObj.tasks.findIndex(v => v.id === tasksId), 1);
}
});
savingOnLocalStorage(mainObj);
  }else{
    return
  }
}