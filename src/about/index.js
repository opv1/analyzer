import '../scripts/utils/swiper.js';
import { commitsContainer } from '../scripts/constants/constants';
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
const commitCard = new CommitCard(commitsContainer);
const commitCardList = new CommitCardList(commitCard, formateDate);

gitHubApi
  .getCommits()
  .then((commitsListArray) =>
    commitCardList.renderCommitList(commitsListArray)
  );
