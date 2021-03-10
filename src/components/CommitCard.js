export default class CommitCard {
  createCommit(date, avatar_url, name, email, message) {
    this.template = `
      <div class="swiper-slide">
        <span class="swiper-slide__date">${date}</span>
        <div class="swiper-slide__author">
          <div class="swiper-slide__avatar">
            <img src="${avatar_url}" alt="avatar">
          </div>
          <div class="swiper-slide__info">
            <span class="swiper-slide__name">${name} </span>
            <span class="swiper-slide__email">${email}</span>
          </div>
        </div>
        <span class="swiper-slide__description">${message}</span>
      </div>`
    return this.template
  }
}
