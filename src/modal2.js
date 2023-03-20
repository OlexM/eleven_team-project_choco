(() => {
  const refs = {
    openModal2Btn: document.querySelector("[data-modal2-open]"),
    closeModal2Btn: document.querySelector("[data-modal2-close]"),
    modal2: document.querySelector("[data-modal2]"),
  };

  refs.openModal2Btn.addEventListener("click", toggleModal2);
  refs.closeModal2Btn.addEventListener("click", toggleModal2);

  function toggleModal2() {
    refs.modal2.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scrol')
  }
})();