import '../styles/analytics.css';
import {
  analyticsContainer,
  analyticsCaption,
  analyticsCountWeek,
  analyticsCountCaption,
  graphicBlockDate,
  graphicColumnsY,
  graphicColumnsX,
} from '../scripts/constants/constants';
import Statistics from '../scripts/components/Statistics';

const statistics = new Statistics(
  analyticsContainer,
  analyticsCaption,
  analyticsCountWeek,
  analyticsCountCaption,
  graphicBlockDate,
  graphicColumnsY,
  graphicColumnsX
);
const newsAnalyticsObject = JSON.parse(
  localStorage.getItem('newsAnalyticsObject')
);
const {
  keyWord,
  totalResults,
  amountKeyWord,
  presentMonth,
  presentWeek,
} = newsAnalyticsObject;

statistics.renderGraphic(
  keyWord,
  totalResults,
  amountKeyWord,
  presentMonth,
  presentWeek
);
