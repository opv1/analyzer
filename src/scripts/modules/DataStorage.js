export class DataStorage {
  setData(newsListObject) {
    localStorage.setItem('newsListObject', JSON.stringify(newsListObject));
  }

  getData() {
    return JSON.parse(localStorage.getItem('newsListObject'));
  }
}
