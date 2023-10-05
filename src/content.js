function newColumnButtonAction() {
    let newColumnButton = document.getElementById("newColumnButton");

    newColumnButton.style.display =
    newColumnButton.style.display === "block" ? "none" : "block";
  
    let newColumnConfirmContainer = document.getElementById("newColumnConfirmContainer");
    newColumnConfirmContainer.style.display = newColumnConfirmContainer.style.display = "block";
  
  }
  function newColumnButtonBack() {
    let newColumnButton = document.getElementById("newColumnButton");

    newColumnButton.style.display =
    newColumnButton.style.display === "none" ? "block" : "none";
  
    let newColumnConfirmContainer = document.getElementById("newColumnConfirmContainer");
    newColumnConfirmContainer.style.display = newColumnConfirmContainer.style.display = "none";
  
  }
  