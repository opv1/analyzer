import './styles/index.css';
import './scripts/utils/swiper.js';
import {
  loadingPage,
  notFoundPage,
  resultPage,
  cardsContainer,
  searchForm,
  resultButton,
} from './scripts/constants/constants.js';
import { FormateDate } from './scripts/modules/FormateDate.js';
import { NewsApi } from './scripts/modules/NewsApi.js';
import { DataStorage } from './scripts/modules/DataStorage.js';
import { NewsCard } from './scripts/components/NewsCard.js';
import { NewsCardList } from './scripts/components/NewsCardList.js';
import { SearchInput } from './scripts/components/SearchInput.js';

const formateDate = new FormateDate();
const nowDateIco = formateDate.formateDateIco(new Date());
const laterDateIco = formateDate.formatePastDateIco(new Date(), 7);
const newsApi = new NewsApi({
  apiUrl: 'http://newsapi.org/v2/everything?',
  language: 'ru',
  fromDate: `${laterDateIco}`,
  toDate: `${nowDateIco}`,
  sortBy: 'popularity',
  pageSize: '100',
  apiKey: '60659df53b2641f4bc17059b6e641af7',
  headers: {
    'Content-Type': 'application/json',
  },
});
const dataStorage = new DataStorage();
const newsCard = new NewsCard();
const newsCardList = new NewsCardList(
  newsCard.createCard,
  cardsContainer,
  formateDate.formateDateLocal
);
const searchInput = new SearchInput();

searchForm.addEventListener('submit', searchNews);
resultButton.addEventListener('click', moreNews);

window.onload = () => {
  if (localStorage.getItem('newsListObject') !== null) {
    const existNewsListObject = dataStorage.getData();
    resultPage.setAttribute('style', 'display: block');
    newsCardList.getNewsList(existNewsListObject.articles);
  }
};

function searchNews(event) {
  event.preventDefault(event);
  const keyWord = searchForm.elements.search.value;
  const validityPromise = new Promise((resolve) => {
    resolve(
      searchInput
        .checkInput(keyWord)
        .then(() => console.log('ok'))
        .catch(() => console.log('Проверка не прошла'))
    );
  });
  const loadingPromise = new Promise((resolve) => {
    loadingPage.setAttribute('style', 'display: block');
    notFoundPage.setAttribute('style', 'display: none');
    resultPage.setAttribute('style', 'display: none');
    resolve(
      newsApi
        .getNews(keyWord)
        .then((newsListObject) => newsListObject)
        .catch(() => console.log('Нет ответа от API!'))
    );
  });
  loadingPromise
    .then((newsListObject) => dataStorage.setData(newsListObject))
    .then(() => {
      const newsListObject = dataStorage.getData();
      newsCardList.getNewsList(newsListObject.articles);
      loadingPage.setAttribute('style', 'display: none');
      notFoundPage.setAttribute('style', 'display: none');
      resultPage.setAttribute('style', 'display: block');
    })
    .catch(() => {
      console.log('Не удается отобразить новости!');
      loadingPage.setAttribute('style', 'display: none');
      notFoundPage.setAttribute('style', 'display: block');
      resultPage.setAttribute('style', 'display: none');
    });
}

function moreNews(event) {
  event.preventDefault();
}
