export class CommitCardList {
  constructor(methodCreateCommit, commitsContainer, methodFormateDateLocal) {
    this.methodCreateCommit = methodCreateCommit;
    this.commitsContainer = commitsContainer;
    this.methodFormateDateLocal = methodFormateDateLocal;
  }

  getCommitList(commitsListArray) {
    for (const commitObject of commitsListArray) {
      const date = this.methodFormateDateLocal(
        new Date(commitObject.commit.committer.date)
      );
      const name = commitObject.commit.committer.name;
      const email = commitObject.commit.committer.email;
      const description = commitObject.commit.message;

      this.commitsContainer.insertAdjacentHTML(
        'beforeend',
        this.methodCreateCommit(date, name, email, description)
      );
    }
  }
}
