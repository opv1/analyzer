export class NewsCard {
  createCard(source, title, description, url, urlToImage, publishedAt) {
    const date = new Date(publishedAt);
    const optionsDate = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const modifiedDate = date.toLocaleString('ru', optionsDate);

    const template = `
      <div class="result__card">
        <div class="result__image" style="background-image: url(${urlToImage})"></div>
        <div class="result__info">
          <div class="result__date text__grey">${modifiedDate}</div>
          <a class="result__title text__black" href="${url}" target="_blank">${title}</a>
          <p class="result__description text__black">${description}</p>
          <span class="result__source text__grey">${source.name}</span>
        </div>
      </div>`;
    return template;
  }
}
