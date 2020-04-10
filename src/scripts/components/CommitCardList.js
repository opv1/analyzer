export class CommitCardList {
  constructor(
    methodFormateDateLocal,
    methodCreateCommit,
    methodCreatePagination,
    commitsContainer
  ) {
    this.methodFormateDateLocal = methodFormateDateLocal;
    this.methodCreateCommit = methodCreateCommit;
    this.methodCreatePagination = methodCreatePagination;
    this.commitsContainer = commitsContainer;
  }

  renderCommitList(commitsListArray) {
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
    this.methodCreatePagination();
  }
}
