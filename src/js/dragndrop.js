import { mainObj } from "./main.js";
import { savingOnLocalStorage} from "./storage.js";

let originColumn;
let task;

window.allowDrop =function(ev) {
    ev.preventDefault();
  }
  
window.drag = function (ev) {
    ev.dataTransfer.setData("newColumnConfirmContainer", ev.target.id);
    originColumn = ev.target.parentNode.parentNode;
    task = ev.target
  }
  
window.drop =  function(ev) {
    let column = ev.target;
    let tasksContainer;
    let index;
    ev.preventDefault();
    let data = ev.dataTransfer.getData("newColumnConfirmContainer");
    if(ev.target.className != 'column'){
      while(column.className != 'column'){ // andando até pegar a coluna
        column = column.parentNode;
        }
     }
     tasksContainer = column.firstChild.nextSibling


     mainObj.forEach((mainObj) => { // EXCLUINDO DA COLUNA DE ORIGEM
        if(originColumn.id === mainObj.id){

      mainObj.tasks.splice(mainObj.tasks.findIndex(el =>{
         el.id === task.id
         index = el;
        }), 1);
    }
    });

    mainObj.forEach((mainObj) => { // ADICIONANDOO
        if(column.id === mainObj.id){
            mainObj.tasks.push(index);
    }
})
savingOnLocalStorage(mainObj)

    tasksContainer.appendChild(document.getElementById(data));
  }
  