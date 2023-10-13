export {savingColumnObj,savingOnLocalStorage, savingTaskObj};
function savingColumnObj(columnId, columnTitle){

    let columnObj = {
        id: columnId,
        title: columnTitle,
        tasks: [],
      }
    return columnObj;
  }

function savingOnLocalStorage(mainObj){
    let mainJson = JSON.stringify(mainObj)
  localStorage.setItem("mainData",mainJson);

  }
  
function savingTaskObj(columnId,taskId,taskTitle,mainObj){
 
    let taskObj = {
      id: taskId,
      title: taskTitle,
    }
    
    mainObj.forEach(function(mainObj){
      if(mainObj.id == columnId){
        mainObj.tasks.push(taskObj);
      }
    })
    console.log(mainObj);
  }
  
  