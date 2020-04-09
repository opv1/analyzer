import { GitHubApi } from '../scripts/modules/GitHubApi.js';
import { CommitCard } from '../scripts/components/CommitCard.js';
import { CommitCardList } from '../scripts/components/CommitCardList.js';
import { commitsContainer } from '../scripts/constants/constants.js';

const gitHubApi = new GitHubApi({
  user: 'opv1',
  repository: 'yp-graduate-work',
  headers: {
    'Content-Type': 'application/json',
  },
});

const commitCard = new CommitCard();
const commitCardList = new CommitCardList(
  commitCard.createCommit,
  commitsContainer
);

/* gitHubApi.getCommits().then((commitsArray) => storage.setData(commitsArray)); */
