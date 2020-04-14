import './styles/index.css';
import {
  loadingSection,
  errorSection,
  notFoundSection,
  resultSection,
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
import {
  counterCoincidencesTotal,
  formateMonth,
  weekObject,
} from './scripts/utils/utils';

const formateDate = new FormateDate();
const toDateIco = formateDate.formateDateIco(new Date());
const fromDateIco = formateDate.formateDateAgoIco(new Date(), 6);
const newsApi = new NewsApi({
  apiUrl: 'http://newsapi.org/v2/everything?',
  language: 'ru',
  fromDate: `${fromDateIco}`,
  toDate: `${toDateIco}`,
  sortBy: 'popularity',
  pageSize: '100',
  apiKey: '60659df53b2641f4bc17059b6e641af7',
  headers: {
    'Content-Type': 'application/json',
  },
});
const dataStorage = new DataStorage(
  counterCoincidencesTotal,
  formateMonth,
  weekObject
);
const newsCard = new NewsCard(cardsContainer);
const newsCardList = new NewsCardList(newsCard, formateDate);
const searchInput = new SearchInput();

window.onload = () => {
  if (localStorage.getItem('newsListObject') !== null) {
    const existNewsListObject = dataStorage.getData();
    newsCardList.renderNewsList(existNewsListObject.articles);
    resultSection.setAttribute('style', 'display: block');
  }
};

searchForm.addEventListener('input', checkInput);
function checkInput(event) {
  return searchInput.checkInput(searchForm);
}

searchForm.addEventListener('submit', searchNews);
function searchNews(event) {
  event.preventDefault(event);
  cardsContainer.textContent = '';
  const keyWord = searchForm.elements.input.value;
  const loadingPromise = new Promise((resolve) => {
    loadingSection.setAttribute('style', 'display: block');
    errorSection.setAttribute('style', 'display: none');
    notFoundSection.setAttribute('style', 'display: none');
    resultSection.setAttribute('style', 'display: none');
    resolve(
      newsApi
        .getNews(keyWord)
        .then((newsListObject) => newsListObject)
        .catch(() => {
          loadingSection.setAttribute('style', 'display: none');
          errorSection.setAttribute('style', 'display: block');
          notFoundSection.setAttribute('style', 'display: none');
          resultSection.setAttribute('style', 'display: none');
          console.log('Нет ответа от API!');
        })
    );
  });
  loadingPromise
    .then((newsListObject) => dataStorage.setData(newsListObject, keyWord))
    .then(() => {
      const newsListObject = dataStorage.getData();
      newsCardList.renderNewsList(newsListObject.articles);
      loadingSection.setAttribute('style', 'display: none');
      errorSection.setAttribute('style', 'display: none');
      notFoundSection.setAttribute('style', 'display: none');
      resultSection.setAttribute('style', 'display: block');
    })
    .then(() => searchForm.reset())
    .catch(() => {
      console.log('Не удается отобразить новости!');
      loadingSection.setAttribute('style', 'display: none');
      errorSection.setAttribute('style', 'display: none');
      notFoundSection.setAttribute('style', 'display: block');
      resultSection.setAttribute('style', 'display: none');
    });
}

resultButton.addEventListener('click', moreNews);
function moreNews(event) {
  const newsListObject = dataStorage.getData();
  newsCardList.renderMoreNews(newsListObject.articles);
}
