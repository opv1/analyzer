import './styles/index.css';
import './scripts/utils/swiper.js';
import './scripts/constants/constants.js';
import { CommitCard } from './scripts/components/CommitCard';
import { CommitCardList } from './scripts/components/CommitCardList';
import { NewsCard } from './scripts/components/NewsCard';
import { NewsCardList } from './scripts/components/NewsCardList';
import { SearchInput } from './scripts/components/SearchInput';
import { Statistics } from './scripts/components/Statistics';
import { DataStorage } from './scripts/modules/DataStorage';
import { GitHubApi } from './scripts/modules/GitHubApi';
import { NewsApi } from './scripts/modules/NewsApi';

const areaPage = document.querySelector('.page');
const searchButton = areaPage.querySelector('.search__button');
const searchInput = areaPage.querySelector('.search__input');
const searchForm = document.forms.search;
const commitsCardList = new CommitCardList({
  user: 'opv1',
  repository: 'yp-graduate-work',
  headers: {
    'Content-Type': 'application/json',
  },
});
const newsCardList = new NewsCardList({
  path: 'http://newsapi.org/v2/everything?',
  keyWord: 'Apple',
  fromDate: '2020-04-06',
  toDate: '2020-04-06',
  sortBy: 'popularity',
  pageAmount: '100',
  apiKey: '60659df53b2641f4bc17059b6e641af7',
  headers: {
    'Content-Type': 'application/json',
  },
});
const commits = new CommitCard();
const news = new NewsCard();

commitsCardList
  .getCommitsCardList()
  .then((commitsCardList) => commits.renderCommits(commitsCardList));

newsCardList
  .getNewsCardList()
  .then((newsCardList) => news.renderNews(newsCardList));

/* searchButton.addEventListener('submit', renderNewsCards);
function renderNewsCards() {} */
