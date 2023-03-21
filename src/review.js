(() => {
  const refs = {
    openReviewBtn: document.querySelector("[data-review-open]"),
    closeReviewBtn: document.querySelector("[data-review-close]"),
    review: document.querySelector("[data-review]"),
  };

  refs.openReviewBtn.addEventListener("click", toggleReview);
  refs.closeReviewBtn.addEventListener("click", toggleReview);

  function toggleReview() {
    refs.review.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scrol')
  }
})();