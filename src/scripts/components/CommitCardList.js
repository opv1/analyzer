export default class CommitCardList {
  constructor(classCreateCommit, classFormateDate, commitsContainer) {
    this.classCreateCommit = classCreateCommit;
    this.classFormateDate = classFormateDate;
    this.commitsContainer = commitsContainer;
  }

  renderCommitList(commitsListArray) {
    for (const commitObject of commitsListArray) {
      const date = this.classFormateDate.formateDateLocal(
        new Date(commitObject.commit.committer.date)
      );
      const { name, email } = commitObject.commit.committer;
      const { message } = commitObject.commit;
      this.commitsContainer.insertAdjacentHTML(
        'beforeend',
        this.classCreateCommit.createCommit(date, name, email, message)
      );
    }
    this.createPagination();
  }

  createPagination() {
    this.swiper = new Swiper('.swiper-container', {
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
