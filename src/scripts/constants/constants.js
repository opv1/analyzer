export var swiper = new Swiper('.swiper-container', {
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

export const loadingPage = document.querySelector('.loading');
export const notFoundPage = document.querySelector('.nfound');
export const resultPage = document.querySelector('.result');
export const cardsContainer = document.querySelector('.result__cards');
export const commitsContainer = document.querySelector('.swiper-wrapper');
export const searchForm = document.forms.search;
export const searchInput = document.querySelector('.search__input');
export const searchButton = document.querySelector('.search__button');
export const resultButton = document.querySelector('.result__button');
