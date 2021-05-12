export default class FormateDate {
  constructor() {
    this.optionsDate = { day: 'numeric', month: 'long', year: 'numeric' }
  }

  formateDateLocal(date) {
    const dateLocal = date.toLocaleString('ru', this.optionsDate)

    return dateLocal
  }

  formateDateIco(date, days) {
    if (days) {
      date.setDate(date.getDate() - days)
    }

    const dateIco = date.toISOString().slice(0, 10)

    return dateIco
  }
}
