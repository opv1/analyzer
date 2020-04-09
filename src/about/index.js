import '../scripts/utils/swiper.js';
import { commitsContainer } from '../scripts/constants/constants.js';
import { FormateDate } from '../scripts/modules/FormateDate.js';
import { GitHubApi } from '../scripts/modules/GitHubApi.js';
import { CommitCard } from '../scripts/components/CommitCard.js';
import { CommitCardList } from '../scripts/components/CommitCardList.js';

const formateDate = new FormateDate();
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
  commitsContainer,
  formateDate.formateDateLocal
);

gitHubApi
  .getCommits()
  .then((commitsListArray) => commitCardList.getCommitList(commitsListArray));
