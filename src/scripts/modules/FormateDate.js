export class FormateDate {
  formateDateLocal(date) {
    const optionsDate = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const dateLocal = date.toLocaleString('ru', optionsDate);
    return dateLocal;
  }

  formateDateIco(date) {
    const dateIco = date.toISOString().slice(0, 10);
    return dateIco;
  }

  formateDateAgoIco(date, days) {
    date.setDate(date.getDate() - days);
    const dateIco = date.toISOString().slice(0, 10);
    return dateIco;
  }
}
