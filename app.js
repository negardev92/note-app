const inputElme = document.querySelector(".input");
const colorsElme = document.querySelectorAll(".color-box");
const btnSave = document.querySelector("#btn-save");
const btnDelete = document.querySelector("#btn-delete");
const showBox_container = document.querySelector(".container");

colorsElme.forEach(function (colorElme) {
  colorElme.addEventListener("click", function (event) {
    let maincolor = event.target.style.backgroundColor;
    inputElme.style.backgroundColor = maincolor;
  });
});

function AddNote() {
  newNoteDiv = document.createElement("div");
  newNoteDiv.className = "show-box";
  let inputbacgroundclor = inputElme.style.backgroundColor;
  newNoteDiv.style.backgroundColor = inputbacgroundclor;
  newNoteDiv.addEventListener("click", RemoveNote);

  newNoteP = document.createElement("p");
  newNoteP.innerHTML = inputElme.value;
  newNoteP.className = "creatp_elm";

  newNoteDiv.append(newNoteP);
  showBox_container.append(newNoteDiv);

  inputElme.value = " ";
  // inputElme.style.backgroundColor = " #fff";
}
function RemoveNote(event) {
  event.target.parentElement.remove();
}

btnDelete.addEventListener("click", function (event) {
  inputElme.value = "";
  // inputElme.style.backgroundColor = " #fff";
});

inputElme.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    AddNote();
  }
});

btnSave.addEventListener("click", AddNote);
