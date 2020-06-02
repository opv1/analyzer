import '../styles/index.css';
import {
  loadingSection,
  errorSection,
  notFoundSection,
  resultSection,
  cardsContainer,
  searchForm,
  moreButton,
} from '../scripts/constants/constants';
import FormateDate from '../scripts/modules/FormateDate';
import NewsApi from '../scripts/modules/NewsApi';
import DataStorage from '../scripts/modules/DataStorage';
import NewsCard from '../scripts/components/NewsCard';
import NewsCardList from '../scripts/components/NewsCardList';
import SearchInput from '../scripts/components/SearchInput';
import {
  counterCoincidencesTotal,
  formateMonth,
  weekObject,
} from '../scripts/utils/utils';

const formateDate = new FormateDate();
const serverUrl =
  process.env.NODE_ENV === 'development'
    ? 'https://praktikum.tk/news/v2/everything?'
    : 'https://praktikum.tk/news/v2/everything?';
const toDateIco = formateDate.formateDateIco(new Date());
const fromDateIco = formateDate.formateDateAgoIco(new Date(), 6);
const newsApi = new NewsApi({
  apiUrl: serverUrl,
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
const newsCard = new NewsCard();
const newsCardList = new NewsCardList(newsCard, formateDate, cardsContainer);
const searchInput = new SearchInput();

window.onload = () => {
  if (localStorage.getItem('newsListObject') !== null) {
    const existNewsListObject = JSON.parse(
      localStorage.getItem('newsListObject')
    );
    const newsAnalyticsObject = JSON.parse(
      localStorage.getItem('newsAnalyticsObject')
    );
    const { keyWord } = newsAnalyticsObject;
    searchForm.elements.input.value = keyWord;
    newsCardList.renderNewsList(existNewsListObject.articles);
    resultSection.setAttribute('style', 'display: block');
  }
};

function checkInput() {
  return searchInput.checkInput(searchForm);
}
searchForm.addEventListener('input', checkInput);

function searchNews(event) {
  event.preventDefault(event);
  cardsContainer.textContent = '';
  const inputForm = searchForm.elements.input;
  inputForm.setAttribute('disabled', true);
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
        .catch((error) => {
          loadingSection.setAttribute('style', 'display: none');
          resultSection.setAttribute('style', 'display: none');
          if (error.message === 'Проблемы на этапе запроса новостей!') {
            errorSection.setAttribute('style', 'display: block');
          } else if (
            error.message === 'Ничего не найдено. Нулевой результат!'
          ) {
            notFoundSection.setAttribute('style', 'display: block');
          }
        })
        .finally(() => inputForm.removeAttribute('disabled'))
    );
  });
  loadingPromise
    .then((newsListObject) => dataStorage.setData(newsListObject, keyWord))
    .then(() => {
      const newsListObject = JSON.parse(localStorage.getItem('newsListObject'));
      newsCardList.renderNewsList(newsListObject.articles);
      loadingSection.setAttribute('style', 'display: none');
      errorSection.setAttribute('style', 'display: none');
      notFoundSection.setAttribute('style', 'display: none');
      resultSection.setAttribute('style', 'display: block');
    });
}
searchForm.addEventListener('submit', searchNews);

function moreNews() {
  const newsListObject = JSON.parse(localStorage.getItem('newsListObject'));
  newsCardList.renderMoreNews(newsListObject.articles);
}
moreButton.addEventListener('click', moreNews);
