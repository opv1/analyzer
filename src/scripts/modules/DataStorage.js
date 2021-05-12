import { counterTotal, formateMonth, formateWeek } from 'scripts/utils'

export default class DataStorage {
  constructor() {
    this.nameStorage = 'news-analyzer'
  }

  setStorage(newsObject, keyWord) {
    const { totalResults } = newsObject
    const amountKey = counterTotal(newsObject.articles, keyWord)
    const month = formateMonth()
    const weekArray = formateWeek(newsObject.articles, keyWord)

    const analyticsObject = {
      keyWord,
      totalResults,
      amountKey,
      month,
      weekArray,
    }

    localStorage.setItem(
      this.nameStorage,
      JSON.stringify({ analyticsObject, newsObject })
    )
  }

  getStorage() {
    const data = localStorage.getItem(this.nameStorage)

    if (data !== null) {
      return JSON.parse(data)
    } else {
      return null
    }
  }

  removeStorage() {
    localStorage.removeItem(this.nameStorage)
  }
}
