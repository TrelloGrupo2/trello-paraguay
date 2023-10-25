export {
  loadLocalStorage, savingColumnObj,
  savingOnLocalStorage,
  savingTaskObj
};

function savingColumnObj(columnId, columnTitle, mainObj) {
  let columnObj = {
    id: columnId,
    title: columnTitle,
    tasks: [],
  };
  mainObj.push(columnObj);
}

function savingOnLocalStorage(mainObj) {
  let mainJson = JSON.stringify(mainObj);
  localStorage.setItem("mainData", mainJson);
}

function savingTaskObj(columnId, taskId, taskTitle, mainObj, taskDescValue) {
  let taskObj = {
    id: taskId,
    title: taskTitle,
    description: taskDescValue,
  };

  mainObj.forEach(function (mainObj) {
    if (mainObj.id == columnId) {
      mainObj.tasks.push(taskObj);
    }
  });
}

function loadLocalStorage(mainObj) {
  mainObj = JSON.parse(localStorage.getItem("mainData"));
  mainObj.forEach(function (mainObj) {
    createNewColumn(mainObj.id, mainObj.title);

    mainObj.tasks.forEach(function (mainObjTask) {
      createNewTask(undefined, mainObj.id, mainObjTask.id, mainObjTask.title,mainObjTask.description);
    });
  });
}
