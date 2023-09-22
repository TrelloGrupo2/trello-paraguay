function changeBackgroundColor() {
    let backgroundColorOption = document.getElementById("backgroundColorOption");
    backgroundColorOption.style.display = backgroundColorOption.style.display === "none" ? "flex" : "none";

    let menuDrop = document.getElementById("optionsDrop");
    menuDrop.style.display = menuDrop.style.display = "none";
}


function displayMenuDrop(){
    let menudrop = document.getElementById("menuDrop");
    menudrop.style.display = menudrop.style.display === "none" ? "block" : "none";
    
    let menuDrop = document.getElementById("optionsDrop");
    menuDrop.style.display = menuDrop.style.display = "block";

    let optionsDrop = document.getElementById("backgroundColorOption");
    optionsDrop.style.display = optionsDrop.style.display = "none";
}
  
