export{mainObj}
let mainObj = [];


const newColumnInput = document.getElementById("newColumnInput");
newColumnInput.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    createNewColumn();
  }
  })
