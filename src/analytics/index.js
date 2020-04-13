import { analyticsContainer } from '../scripts/constants/constants';
import { Statistics } from '../scripts/components/Statistics';

const statistics = new Statistics(analyticsContainer);
const newsAnalyticsObject = JSON.parse(
  localStorage.getItem('newsAnalyticsObject')
);
const keyWord = newsAnalyticsObject.keyWord;
const totalResults = newsAnalyticsObject.totalResults;
const amountKeyWord = newsAnalyticsObject.amountKeyWord;
const presentMonth = newsAnalyticsObject.presentMonth;
const presentWeek = newsAnalyticsObject.presentWeek;

statistics.renderGraphic(
  keyWord,
  totalResults,
  amountKeyWord,
  presentMonth,
  presentWeek
);
