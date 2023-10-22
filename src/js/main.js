import {
  loadLocalStorage
} from './storage.js';
export { mainObj };
let mainObj = [];


const newColumnInput = document.getElementById("newColumnInput");
newColumnInput.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    createNewColumn();
  }
  })

 document.addEventListener('DOMContentLoaded', function() {
    loadLocalStorage(mainObj)
  }, false);

  const renameTaskInput = document.querySelector(".renameTaskInput");
  renameTaskInput.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    taskRename();
  }
  })