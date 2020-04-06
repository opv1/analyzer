export class CommitCardList {
  constructor(options) {
    this.user = options.user;
    this.repository = options.repository;
    this.url = `https://api.github.com/repos/${this.user}/${this.repository}/commits?`;
  }

  getCommitsCardList() {
    return fetch(this.url)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then((commitsCardList) => commitsCardList)
      .catch(() => {
        throw new Error('Error');
      });
  }
}
