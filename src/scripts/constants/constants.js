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

const areaPage = document.querySelector('.page');
export const loadingPage = areaPage.querySelector('.loading');
export const notFoundPage = areaPage.querySelector('.nfound');
export const resultPage = areaPage.querySelector('.result');
export const cardsContainer = areaPage.querySelector('.result__cards');
export const commitContainer = areaPage.querySelector('.slider__item');
export const searchForm = document.forms.search;
export const searchInput = areaPage.querySelector('.search__input');
export const searchButton = areaPage.querySelector('.search__button');
export const resultButton = areaPage.querySelector('.result__button');
