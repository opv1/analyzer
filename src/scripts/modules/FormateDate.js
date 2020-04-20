export default class FormateDate {
  formateDateLocal(date) {
    this.optionsDate = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const dateLocal = date.toLocaleString('ru', this.optionsDate);
    return dateLocal;
  }

  formateDateIco(date) {
    this.dateIco = date.toISOString().slice(0, 10);
    return this.dateIco;
  }

  formateDateAgoIco(date, days) {
    date.setDate(date.getDate() - days);
    this.dateIco = date.toISOString().slice(0, 10);
    return this.dateIco;
  }
}
