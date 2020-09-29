// Open modal, get modal, close modal
var openModal = document.getElementById("modalBtn");
var modal = document.getElementById("simpleModal");
var closeModal = document.getElementsByClassName("closeBtn")[0];

// Listen for click

openModal.addEventListener("click", fOpenModal);
closeModal.addEventListener("click", fCloseModal);
window.addEventListener("click", fclickOutside);

function fOpenModal() {
  console.log("123");
  modal.style.display = "block";
}
function fCloseModal() {
  modal.style.display = "none";
}
function fclickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
