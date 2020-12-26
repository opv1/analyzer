export default class CommitCard {
  createCommit(date, name, email, message) {
    this.template = `<div class="slider__item swiper-slide">
      <p class="slider__date slider__text-grey">${date}</p>
      <div class="slider__author">
        <div class="slider__image" style="background-image: url(${'https://avatars1.githubusercontent.com/u/55979609?s=400&v=4'})"></div>
        <div class="slider__info">
          <p class="slider__name slider__text-black">${name}</p>
          <p class="slider__email slider__text-black">${email}</p>
        </div>
      </div>
      <p class="slider__description slider__text-black">${message}</p>
    </div>`
    return this.template
  }
}
