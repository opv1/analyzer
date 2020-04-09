export class CommitCard {
  constructor() {
    this.avatar = 'https://avatars1.githubusercontent.com/u/55979609?s=400&v=4';
  }

  createCommit(date, name, email, description) {
    const template = `<div class="slider__item swiper-slide">
      <p class="slider__date slider__text-grey">${date}</p>
      <div class="slider__author">
        <div class="slider__image" style="background-image: url(${this.avatar})"></div>
        <div class="slider__info">
          <p class="slider__name slider__text-black">${name}</p>
          <p class="slider__email slider__text-black">${email}</p>
        </div>
      </div>
      <p class="slider__description slider__text-black">${description}</p>
    </div>`;
    return template;
  }
}
