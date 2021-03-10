import Swiper from 'swiper/bundle'

export default class CommitList {
  constructor(commitCard, formateDate) {
    this.swiperWrapper = document.querySelector('.swiper-wrapper')
    this.commitCard = commitCard
    this.formateDate = formateDate
  }

  renderCommitList(commitsArray) {
    commitsArray.slice(0, 10).forEach((item) => {
      const date = this.formateDate.formateDateLocal(
        new Date(item.commit.committer.date)
      )
      const { avatar_url } = item.author
      const { name, email } = item.commit.committer
      const { message } = item.commit

      this.swiperWrapper.insertAdjacentHTML(
        'beforeend',
        this.commitCard.createCommit(date, avatar_url, name, email, message)
      )
    })

    this.createSwiper()
  }

  createSwiper() {
    new Swiper('.swiper-container', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
    })
  }
}
