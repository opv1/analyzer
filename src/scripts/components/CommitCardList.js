export class CommitCardList {
  constructor(classCreateCommit, classFormateDate) {
    this.classCreateCommit = classCreateCommit;
    this.classFormateDate = classFormateDate;
  }

  renderCommitList(commitsListArray) {
    for (const commitObject of commitsListArray) {
      const date = this.classFormateDate.formateDateLocal(
        new Date(commitObject.commit.committer.date)
      );
      const name = commitObject.commit.committer.name;
      const email = commitObject.commit.committer.email;
      const description = commitObject.commit.message;

      this.classCreateCommit.renderCommits(date, name, email, description);
    }
    this.classCreateCommit.createPagination();
  }
}
