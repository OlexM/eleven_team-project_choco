const swiper = new Swiper('.swiper', {
    // Optional parameters
    
  
    initialSlide: 0,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

autoHeight: true,

slidesPerView: 4,

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