export class NewsCardList {
  constructor(options) {
    this.path = options.path;
    this.keyWord = options.keyWord;
    this.fromDate = options.fromDate;
    this.toDate = options.toDate;
    this.pageAmount = options.pageAmount;
    this.sortBy = options.sortBy;
    this.apiKey = options.apiKey;
    this.url =
      `${this.path}` +
      `q=${this.keyWord}&` +
      `from=${this.fromDate}&` +
      `to=${this.toDate}&` +
      `pageSize=${this.pageAmount}&` +
      `sortBy=${this.sortBy}&` +
      `apiKey=${this.apiKey}`;
  }

  getNewsCardList() {
    return fetch(this.url)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then((newsCardList) => newsCardList)
      .catch(() => {
        throw new Error('Error');
      });
  }
}
