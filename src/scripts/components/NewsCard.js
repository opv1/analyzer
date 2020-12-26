export default class NewsCard {
  createCard(source, title, description, url, urlToImage, publishedAt) {
    this.template = `
      <a class="result__link-news" href="${url}" target="_blank">
        <div class="result__card">
          <div class="result__image" style="background-image: url(${urlToImage})"></div>
          <div class="result__info">
            <div class="result__date result__text-grey">${publishedAt}</div>
            <h3 class="result__title result__text-black">${title}</h3>
            <p class="result__description result__text-black">${description}</p>
            <span class="result__source result__text-grey">${source.name}</span>
          </div>
        </div>
      </a>`
    return this.template
  }
}
