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
 
  modal.style.display = "block";
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
