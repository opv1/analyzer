export class GitHubApi {
  constructor(options) {
    this.user = options.user;
    this.repository = options.repository;
    this.apiUrl = `https://api.github.com/repos/${this.user}/${this.repository}/commits?`;
  }

  getCommits() {
    return fetch(this.apiUrl)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then((commitsListArray) => commitsListArray)
      .catch(() => {
        throw new Error('Ошибка на этапе запроса коммитов!');
      });
  }
}
