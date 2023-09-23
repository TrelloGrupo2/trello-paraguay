function changeBackgroundColorOption() {
  let backgroundColorOption = document.getElementById("backgroundColorOption");
  backgroundColorOption.style.display =
    backgroundColorOption.style.display === "none" ? "flex" : "none";

  let optionsDrop = document.getElementById("optionsDrop");
  optionsDrop.style.display = optionsDrop.style.display = "none";

  let selectThemeOption = document.getElementById("selectThemeOption");
  selectThemeOption.style.display = selectThemeOption.style.display = "none";
}

function selectThemeOption() {
  let selectThemeOption = document.getElementById("selectThemeOption");
  selectThemeOption.style.display =
    selectThemeOption.style.display === "none" ? "flex" : "none";

  let optionsDrop = document.getElementById("optionsDrop");
  optionsDrop.style.display = optionsDrop.style.display = "none";

  let backgroundColorOption = document.getElementById("backgroundColorOption");
  backgroundColorOption.style.display = backgroundColorOption.style.display =
    "none";
}

function displayMenuDrop() {
  let menudrop = document.getElementById("menuDrop");
  menudrop.style.display = menudrop.style.display === "none" ? "block" : "none";

  let optionsDrop = document.getElementById("optionsDrop");
  optionsDrop.style.display = optionsDrop.style.display = "block";

  let backgroundColorOption = document.getElementById("backgroundColorOption");
  backgroundColorOption.style.display = backgroundColorOption.style.display =
    "none";

  let selectThemeOption = document.getElementById("selectThemeOption");
  selectThemeOption.style.display = selectThemeOption.style.display = "none";
}

function changingBackgroundColor() {
  let colorInput = document.querySelector(".colorInput").value;
  let body = document.getElementById("body");
  body.style.backgroundColor = colorInput;
}

function changingThemeToDark() {
  let darkTheme = document.getElementById("darkTheme");
  document.body.classList.add("dark");
}
function changingThemeToLight() {
  let darkTheme = document.getElementById("darkTheme");
  document.body.classList.remove("dark");
}
