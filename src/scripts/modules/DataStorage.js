export class DataStorage {
  constructor(counterCoincidences, formateDay, formateWeek, formateMonth) {
    this.counterCoincidences = counterCoincidences;
    this.formateDay = formateDay;
    this.formateWeek = formateWeek;
    this.formateMonth = formateMonth;
  }

  setData(newsListObject, queryWord) {
    localStorage.setItem('newsListObject', JSON.stringify(newsListObject));
    const keyWord = queryWord;
    const totalResults = newsListObject.totalResults;
    const amountKeyWord = this.counterCoincidences(
      newsListObject.articles,
      keyWord
    );
    const presentMonth = this.formateMonth(new Date());
    const toDay = this.formateDay(new Date());
    const toWeek = this.formateWeek(new Date());
    const newsAnalyticsObject = {
      keyWord,
      totalResults,
      amountKeyWord,
      presentMonth,
      toDay,
      toWeek,
    };
    localStorage.setItem(
      'newsAnalyticsObject',
      JSON.stringify(newsAnalyticsObject)
    );
  }

  getData() {
    return JSON.parse(localStorage.getItem('newsListObject'));
  }
}
