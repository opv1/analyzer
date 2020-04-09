export class NewsCard {
  createCard(source, title, description, url, urlToImage, publishedAt) {
    const template = `
      <div class="result__card">
        <div class="result__image" style="background-image: url(${urlToImage})"></div>
        <div class="result__info">
          <div class="result__date result__text-grey">${publishedAt}</div>
          <a class="result__title result__text-black" href="${url}" target="_blank">${title}</a>
          <p class="result__description result__text-black">${description}</p>
          <span class="result__source result__text-grey">${source.name}</span>
        </div>
      </div>`;
    return template;
  }
}
