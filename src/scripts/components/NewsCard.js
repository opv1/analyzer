export class NewsCard {
  constructor(containerCards) {
    this.containerCards = containerCards;
  }

  insertAdjacent(infoCard) {
    this.containerCards.insertAdjacentHTML(
      'beforeend',
      this.createCard(infoCard, this.classUserInfo.userId)
    );
  }

  createCard(source, title, description, url, urlToImage, publishedAt) {
    let a = new Date('2015-03-04T00:00:00.000Z');
    let day = a.getUTCDay();
    let month = a.getUTCMonth();
    let year = a.getUTCFullYear();

    const template = `
      <div class="result__card">
        <div class="result__image" style="background-image: url(${urlToImage})"></div>
        <div class="result__info">
          <div class="result__date text__grey">${day} ${month}, ${year}</div>
          <a class="result__title text__black" href="${url}" target="_blank">${title}</a>
          <p class="result__description text__black">${description}</p>
          <span class="result__source text__grey">${source.name}</span>
        </div>
      </div>`;
    return template;
  }
}
