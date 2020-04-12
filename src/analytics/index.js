/* import { formateDate } from '../index';
import { analyticsContainer } from '../scripts/constants/constants';
import { DataStorage } from '../scripts/modules/DataStorage';
import { FormateDate } from '../scripts/modules/FormateDate';
import { Statistics } from '../scripts/components/Statistics';

const dataStorage = new DataStorage();
const newsListObject = dataStorage.getData();
const statistics = new Statistics(
  newsListObject,
  analyticsContainer,
  formateDate
);

const newsAnalyticsObject = JSON.parse(
  localStorage.getItem('newsAnalyticsObject')
);
console.log(newsAnalyticsObject);
const keyWord = newsAnalyticsObject.keyWord;
const totalResults = newsAnalyticsObject.totalResults;
const amountKeyWord = newsAnalyticsObject.amountKeyWord;
const presentMonth = newsAnalyticsObject.presentMonth;
const toDay = newsAnalyticsObject.toDay;
const toWeek = newsAnalyticsObject.toWeek;

statistics.createGraphic(
  keyWord,
  totalResults,
  amountKeyWord,
  presentMonth,
  toDay,
  toWeek
); */
