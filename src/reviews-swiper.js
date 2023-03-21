const swiper = new Swiper('.reviews-swiper', {
    // Optional parameters
   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
  
  
    // And if we need scrollbar
  
    autoHeight:true,
    //кількість слайдів для показу
    slidesPerView:1,
    //відступ між слайдами
    spaceBetween:16,
    speed:250,
    
    breakpoints:{
      375:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      1200:{
        slidesPerView:3,
        spaceBetween:28,
      },
    },
  });
