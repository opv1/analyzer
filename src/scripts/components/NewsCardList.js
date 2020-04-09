export class NewsCardList {
  constructor(methodCreateCard, cardsContainer, methodFormateDateLocal) {
    this.methodCreateCard = methodCreateCard;
    this.cardsContainer = cardsContainer;
    this.methodFormateDateLocal = methodFormateDateLocal;
  }

  getNewsList(articlesArray) {
    for (const article of articlesArray) {
      const source = article.source;
      const title = article.title;
      const description = article.description;
      const url = article.url;
      const urlToImage = article.urlToImage;
      const publishedAt = this.methodFormateDateLocal(new Date(article.publishedAt));

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
