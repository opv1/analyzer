import { resultButton } from 'constants'
import noImage from '../assets/images/no-image.jpg'

export default class NewsList {
  constructor(newsCard, formateDate) {
    this.cardsContainer = document.querySelector('.result__container')
    this.newsCard = newsCard
    this.formateDate = formateDate
    this.initialAmount = 0
    this.renderAmount = 3
  }

  renderNewsList(articlesArray) {
    for (
      let i = this.initialAmount;
      i < this.initialAmount + this.renderAmount;
      i++
    ) {
      if (articlesArray[i]) {
        articlesArray[i].publishedAt = this.formateDate.formateDateLocal(
          new Date(articlesArray[i].publishedAt)
        )

        articlesArray[i].urlToImage = articlesArray[i].urlToImage
          ? articlesArray[i].urlToImage
          : noImage

        this.cardsContainer.insertAdjacentHTML(
          'beforeend',
          this.newsCard.createCard(articlesArray[i])
        )
      } else {
        resultButton.setAttribute('style', 'display: none')
      }
    }
  }

  renderMoreNews(articlesArray) {
    this.initialAmount += this.renderAmount
    this.renderNewsList(articlesArray)
  }
}
