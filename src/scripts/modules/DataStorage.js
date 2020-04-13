export class DataStorage {
  constructor(counterCoincidencesTotal, formateMonth, weekObject) {
    this.counterCoincidencesTotal = counterCoincidencesTotal;
    this.formateMonth = formateMonth;
    this.weekObject = weekObject;
  }

  setData(newsListObject, queryWord) {
    localStorage.setItem('newsListObject', JSON.stringify(newsListObject));
    const keyWord = queryWord;
    const totalResults = newsListObject.totalResults;
    const amountKeyWord = this.counterCoincidencesTotal(
      newsListObject.articles,
      keyWord
    );
    const presentMonth = this.formateMonth(new Date());
    const presentWeek = this.weekObject(
      new Date(),
      newsListObject.articles,
      keyWord
    );
    const newsAnalyticsObject = {
      keyWord,
      totalResults,
      amountKeyWord,
      presentMonth,
      presentWeek,
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
