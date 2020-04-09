import './styles/index.css';
import './scripts/utils/swiper.js';
import {
  loadingPage,
  notFoundPage,
  resultPage,
  cardsContainer,
  searchForm,
  searchInput,
  resultButton,
} from './scripts/constants/constants.js';
import { NewsApi } from './scripts/modules/NewsApi.js';
import { DataStorage } from './scripts/modules/DataStorage.js';
import { NewsCard } from './scripts/components/NewsCard.js';
import { NewsCardList } from './scripts/components/NewsCardList.js';
import { SearchInput } from './scripts/components/SearchInput.js';
import { nowDateIco, laterDateIco } from './scripts/utils/date.js';

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
const newsCardList = new NewsCardList(newsCard.createCard, cardsContainer);

searchForm.addEventListener('submit', searchNews);
resultButton.addEventListener('click', moreNews);

function searchNews(event) {
  event.preventDefault(event);
  const keyWord = searchForm.elements.search.value;
  const loadPromise = new Promise((resolve) => {
    loadingPage.style.display = 'block';
    notFoundPage.style.display = 'none';
    resultPage.style.display = 'none';
    resolve(
      newsApi
        .getNews(keyWord)
        .then((newsListObject) => newsListObject)
        .catch(() => console.log('Нет ответа от API!'))
    );
  });
  loadPromise
    .then((newsListObject) => dataStorage.setData(newsListObject))
    .then(() => {
      const newsListObject = dataStorage.getData();
      newsCardList.getNewsList(newsListObject.articles);
      loadingPage.style.display = 'none';
      notFoundPage.style.display = 'none';
      resultPage.style.display = 'block';
    })
    .catch(() => {
      console.log('Не удается отобразить новости!');
      loadingPage.style.display = 'none';
      notFoundPage.style.display = 'block';
      resultPage.style.display = 'none';
    });
}

function moreNews(event) {
  event.preventDefault();
}
