export class NewsCardList {
  constructor(methodCreateCard, containerCards) {
    this.methodCreateCard = methodCreateCard;
    this.containerCards = containerCards;
  }

  getNewsList(newsListObject) {
    return newsListObject;
  }

  getNewsArticles(newsListObject) {
    for (const article of newsListObject) {
      const source = article.source;
      const title = article.title;
      const description = article.description;
      const url = article.url;
      const urlToImage = article.urlToImage;
      const publishedAt = article.publishedAt;
      this.containerCards.insertAdjacentHTML(
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
