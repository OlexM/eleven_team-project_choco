(() => {
  const refs = {
    openReviewBtn: document.querySelector("[data-explore-open]"),
    closeReviewBtn: document.querySelector("[data-explore-close]"),
    review: document.querySelector("[data-explore]"),
  };

  refs.openReviewBtn.addEventListener("click", toggleReview);
  refs.closeReviewBtn.addEventListener("click", toggleReview);

  function toggleReview() {
    refs.review.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scrol')
  }
})();