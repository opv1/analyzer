export class CommitCardList {
  constructor(methodCreateCommit, commitsContainer) {
    this.methodCreateCommit = methodCreateCommit;
    this.commitsContainer = commitsContainer;
  }

  getCommitList(commitListObject) {
    for (const commits of commitListObject) {
      console.log(commits);
    }
  }
}
