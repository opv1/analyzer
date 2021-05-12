import CommitCard from 'scripts/components/CommitCard'
import CommitList from 'scripts/components/CommitList'
import FormateDate from 'scripts/modules/FormateDate'
import GitHubApi from 'scripts/modules/GitHubApi'
import 'styles/about.scss'

const formateDate = new FormateDate()

const gitHubApi = new GitHubApi({
  user: 'opv1',
  repository: 'analyzer',
  headers: {
    'Content-Type': 'application/json',
  },
})

const commitCard = new CommitCard()
const commitList = new CommitList(commitCard, formateDate)

gitHubApi
  .getCommits()
  .then((commitsArray) => commitList.renderCommitList(commitsArray))
