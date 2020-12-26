export default class NewsApi {
  constructor(options) {
    this.apiUrl = options.apiUrl
    this.language = options.language
    this.fromDate = options.fromDate
    this.toDate = options.toDate
    this.pageSize = options.pageSize
    this.sortBy = options.sortBy
    this.apiKey = options.apiKey
  }

  getNews(keyWord) {
    return fetch(
      `${this.apiUrl}` +
        `q=${keyWord}&` +
        `language=${this.language}&` +
        `from=${this.fromDate}&` +
        `to=${this.toDate}&` +
        `pageSize=${this.pageSize}&` +
        `sortBy=${this.sortBy}&` +
        `apiKey=${this.apiKey}`
    )
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error(`${res.status}`))
      )
      .then((newsListObject) => {
        if (newsListObject.totalResults === 0) {
          throw new Error('Ничего не найдено. Нулевой результат!')
        } else {
          return newsListObject
        }
      })
      .catch((error) => {
        if (error.message === 'Failed to fetch') {
          throw new Error('Проблемы на этапе запроса новостей!')
        } else {
          throw new Error('Ничего не найдено. Нулевой результат!')
        }
      })
  }
}
