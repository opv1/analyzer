import { RENDER_NUMBER_NEWS } from '../constants/constants'
import { hideMoreButton } from '../utils/utils'

export default class NewsCardList {
  constructor(classNewsCard, classFormateDate, cardsContainer) {
    this.classNewsCard = classNewsCard
    this.classFormateDate = classFormateDate
    this.cardsContainer = cardsContainer
    this.initialAmount = 0
  }

  renderNewsList(articlesArray) {
    for (
      let i = this.initialAmount;
      i < this.initialAmount + RENDER_NUMBER_NEWS;
      i += 1
    ) {
      if (articlesArray[i]) {
        const { source, title, description, url, urlToImage } = articlesArray[i]
        const publishedAt = this.classFormateDate.formateDateLocal(
          new Date(articlesArray[i].publishedAt)
        )
        this.cardsContainer.insertAdjacentHTML(
          'beforeend',
          this.classNewsCard.createCard(
            source,
            title,
            description,
            url,
            urlToImage,
            publishedAt
          )
        )
      } else {
        hideMoreButton()
      }
    }
  }

  renderMoreNews(articlesArray) {
    this.initialAmount += RENDER_NUMBER_NEWS
    this.renderNewsList(articlesArray)
  }
}
