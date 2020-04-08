import './styles/index.css';
import './scripts/utils/swiper.js';
import './scripts/constants/constants.js';
import { NewsApi } from './scripts/modules/NewsApi';
import { GitHubApi } from './scripts/modules/GitHubApi';
import { DataStorage } from './scripts/modules/DataStorage';
import { NewsCard } from './scripts/components/NewsCard';
import { NewsCardList } from './scripts/components/NewsCardList';
import { CommitCard } from './scripts/components/CommitCard';
import { CommitCardList } from './scripts/components/CommitCardList';
import { Statistics } from './scripts/components/Statistics';
import { SearchInput } from './scripts/components/SearchInput';

const areaPage = document.querySelector('.page');
const loadingPage = areaPage.querySelector('.loading');
const notFoundPage = areaPage.querySelector('.nfound');
const resultPage = areaPage.querySelector('.result');
const containerCards = areaPage.querySelector('.result__cards');
const searchForm = document.forms.search;
const searchInput = areaPage.querySelector('.search__input');
const searchButton = areaPage.querySelector('.search__button');
const resultButton = areaPage.querySelector('.result__button');

const newsApi = new NewsApi({
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
const gitHubApi = new GitHubApi({
  user: 'opv1',
  repository: 'yp-graduate-work',
  headers: {
    'Content-Type': 'application/json',
  },
});

const newsCard = new NewsCard();
const newsCardList = new NewsCardList(newsCard.createCard, containerCards);
const commitCard = new CommitCard();
const commitCardList = new CommitCardList();
const dataStorage = new DataStorage();

/* gitHubApi.getCommits().then((commitsArray) => storage.setData(commitsArray)); */

searchButton.addEventListener('click', searchNews);
function searchNews(event) {
  event.preventDefault();
  const loadPromise = new Promise((resolve) => {
    loadingPage.style.display = 'block';
    resolve(
      newsApi
        .getNews()
        .then((newsListObject) => newsCardList.getNewsList(newsListObject))
        .catch(() => console.log('Не удается получить новости от API'))
    );
  });
  loadPromise
    .then((newsListObject) => dataStorage.setData(newsListObject))
    .then(() => {
      const newsList = dataStorage.getData();
      newsCardList.getNewsArticles(newsList.articles);
      loadingPage.style.display = 'none';
      resultPage.style.display = 'block';
    })
    .catch(() => {
      console.log('Не удается отобразить новости');
      loadingPage.style.display = 'none';
      notFoundPage.style.display = 'block';
    });
}

resultButton.addEventListener('click', moreNews);
function moreNews(event) {
  event.preventDefault();
}
