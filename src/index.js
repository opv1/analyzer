import './styles/index.css';
import {
  loadingPage,
  notFoundPage,
  resultPage,
  cardsContainer,
  searchForm,
  resultButton,
} from './scripts/constants/constants';
import { FormateDate } from './scripts/modules/FormateDate';
import { NewsApi } from './scripts/modules/NewsApi';
import { DataStorage } from './scripts/modules/DataStorage';
import { NewsCard } from './scripts/components/NewsCard';
import { NewsCardList } from './scripts/components/NewsCardList';
import { SearchInput } from './scripts/components/SearchInput';

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
  formateDate.formateDateLocal,
  newsCard.createCard,
  cardsContainer
);
const searchInput = new SearchInput();

window.onload = () => {
  if (localStorage.getItem('newsListObject') !== null) {
    const existNewsListObject = dataStorage.getData();
    newsCardList.renderNewsList(existNewsListObject.articles);
    resultPage.setAttribute('style', 'display: block');
  }
};

searchForm.addEventListener('submit', searchNews);
function searchNews(event) {
  event.preventDefault(event);
  cardsContainer.textContent = '';
  const keyWord = searchForm.elements.search.value;
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
      newsCardList.renderNewsList(newsListObject.articles, cardsContainer);
      loadingPage.setAttribute('style', 'display: none');
      notFoundPage.setAttribute('style', 'display: none');
      resultPage.setAttribute('style', 'display: block');
    })
    .then(() => searchForm.reset())
    .catch(() => {
      console.log('Не удается отобразить новости!');
      loadingPage.setAttribute('style', 'display: none');
      notFoundPage.setAttribute('style', 'display: block');
      resultPage.setAttribute('style', 'display: none');
    });
}

resultButton.addEventListener('click', moreNews);
function moreNews() {
  const newsListObject = dataStorage.getData();
  newsCardList.renderMoreNews(newsListObject.articles);
}
