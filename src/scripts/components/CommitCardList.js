export class CommitCardList {
  constructor(options) {}

  getCommitsList(commitsList) {
    for (const commits of commitsList) {
      console.log(commits);
    }
  }
}
