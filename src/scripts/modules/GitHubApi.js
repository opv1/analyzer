export class GitHubApi {
  constructor(options) {
    this.user = options.user;
    this.repository = options.repository;
    this.url = `https://api.github.com/repos/${this.user}/${this.repository}/commits?`;
  }

  getCommits() {
    return fetch(this.url)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then((commitsList) => commitsList)
      .catch(() => {
        throw new Error('Error');
      });
  }
}
