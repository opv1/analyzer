import '../styles/about.css'
import '../scripts/utils/swiper'
import { commitsContainer } from '../scripts/constants/constants'
import FormateDate from '../scripts/modules/FormateDate'
import GitHubApi from '../scripts/modules/GitHubApi'
import CommitCard from '../scripts/components/CommitCard'
import CommitCardList from '../scripts/components/CommitCardList'

const formateDate = new FormateDate()
const gitHubApi = new GitHubApi({
  user: 'opv1',
  repository: 'yp-graduate-work',
  headers: {
    'Content-Type': 'application/json',
  },
})
const commitCard = new CommitCard()
const commitCardList = new CommitCardList(
  commitCard,
  formateDate,
  commitsContainer
)

gitHubApi
  .getCommits()
  .then((commitsListArray) => commitCardList.renderCommitList(commitsListArray))
