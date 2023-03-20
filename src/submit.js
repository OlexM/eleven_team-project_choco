(() => {
  const refs = {
    openSubmitBtn: document.querySelector("[data-submit-open]"),
    closeSubmitBtn: document.querySelector("[data-submit-close]"),
    submit: document.querySelector("[data-submit]"),
  };

  refs.openSubmitBtn.addEventListener("click", toggleSubmit);
  refs.closeSubmitBtn.addEventListener("click", toggleSubmit);

  function toggleSubmit() {
    refs.submit.classList.toggle("is-hidden");
  }
})();