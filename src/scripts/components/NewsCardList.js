import { RENDER_NUMBER_NEWS } from '../constants/constants';
import { hideMoreButton } from '../utils/utils';

export class NewsCardList {
  constructor(classNewsCard, classFormateDate) {
    this.classNewsCard = classNewsCard;
    this.classFormateDate = classFormateDate;
    this.initialAmount = 0;
  }

  renderNewsList(articlesArray) {
    for (
      let i = this.initialAmount;
      i < this.initialAmount + RENDER_NUMBER_NEWS;
      i++
    ) {
      if (articlesArray[i]) {
        const source = articlesArray[i].source;
        const title = articlesArray[i].title;
        const description = articlesArray[i].description;
        const url = articlesArray[i].url;
        const urlToImage = articlesArray[i].urlToImage;
        const publishedAt = this.classFormateDate.formateDateLocal(
          new Date(articlesArray[i].publishedAt)
        );
        this.classNewsCard.renderCards(
          source,
          title,
          description,
          url,
          urlToImage,
          publishedAt
        );
      } else {
        hideMoreButton();
      }
    }
  }

  renderMoreNews(articlesArray) {
    this.initialAmount += RENDER_NUMBER_NEWS;
    this.renderNewsList(articlesArray);
  }
}
