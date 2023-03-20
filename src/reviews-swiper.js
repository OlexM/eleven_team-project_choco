const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
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
      480:{
        slidesPerView:2,
      },
      992:{
        slidesPerView:3,
        spaceBetween:28,
      }
    }
  });