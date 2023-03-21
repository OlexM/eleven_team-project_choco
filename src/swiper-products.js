const swiper = new Swiper('.products-swiper-cont', {
    // Optional parameters
    
  
    initialSlide: 0,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
  
    // And if we need scrollbar
   

autoHeight: true,

slidesPerView: 4,
spaceBetween:18,
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 2.65,
   
  },
  // when window width is >= 1200px
  1200: {
    slidesPerView: 4,
  }
}

  });