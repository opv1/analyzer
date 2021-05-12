export default class FormateDate {
  constructor() {
    this.optionsDate = { day: 'numeric', month: 'long', year: 'numeric' }
  }

  formateDateLocal(date) {
    return date.toLocaleString('ru', this.optionsDate)
  }

  formateDateIco(date, days) {
    if (days) {
      date.setDate(date.getDate() - days)
    }

    return date.toISOString().slice(0, 10)
  }
}
