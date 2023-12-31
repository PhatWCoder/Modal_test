const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".send"); // thay đổi tại đây
const iconCloseModal = document.querySelector(".modal_head i");
const buttonCloseModal = document.querySelector(".close");

function toggleModal() {
  modal.classList.toggle("hide");
}

openModalBtn.addEventListener("click", toggleModal);
iconCloseModal.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);

modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});
