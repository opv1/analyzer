var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },
});
