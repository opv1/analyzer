export class NewsCardList {
  constructor(methodFormateDateLocal, methodCreateCard, cardsContainer) {
    this.methodFormateDateLocal = methodFormateDateLocal;
    this.methodCreateCard = methodCreateCard;
    this.cardsContainer = cardsContainer;
    this.startNews = 0;
  }

  renderNewsList(articlesArray) {
    for (let i = this.startNews; i < this.startNews + 3; i++) {
      if (articlesArray[i]) {
        const source = articlesArray[i].source;
        const title = articlesArray[i].title;
        const description = articlesArray[i].description;
        const url = articlesArray[i].url;
        const urlToImage = articlesArray[i].urlToImage;
        const publishedAt = this.methodFormateDateLocal(
          new Date(articlesArray[i].publishedAt)
        );

        this.cardsContainer.insertAdjacentHTML(
          'beforeend',
          this.methodCreateCard(
            source,
            title,
            description,
            url,
            urlToImage,
            publishedAt
          )
        );
      }
    }
  }

  renderMoreNews(articlesArray) {
    this.startNews += 3;
    this.renderNewsList(articlesArray);
  }
}
