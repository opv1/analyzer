export class CommitCard {
  constructor(commitsContainer) {
    this.commitsContainer = commitsContainer;
  }

  renderCommits(date, name, email, description) {
    this.commitsContainer.insertAdjacentHTML(
      'beforeend',
      this.createCommit(date, name, email, description)
    );
  }

  createCommit(date, name, email, description) {
    const template = `<div class="slider__item swiper-slide">
      <p class="slider__date slider__text-grey">${date}</p>
      <div class="slider__author">
        <div class="slider__image" style="background-image: url(${'https://avatars1.githubusercontent.com/u/55979609?s=400&v=4'})"></div>
        <div class="slider__info">
          <p class="slider__name slider__text-black">${name}</p>
          <p class="slider__email slider__text-black">${email}</p>
        </div>
      </div>
      <p class="slider__description slider__text-black">${description}</p>
    </div>`;
    return template;
  }

  createPagination() {
    const swiper = new Swiper('.swiper-container', {
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
  }
}
