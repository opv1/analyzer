import { resultButton } from '../constants/constants';
import { FormateDate } from '../modules/FormateDate';

const formateDate = new FormateDate();

export function hideMoreButton() {
  resultButton.setAttribute('style', 'display: none');
}

export function counterCoincidencesTotal(articlesArray, keyWord) {
  const regExp = new RegExp(`${keyWord}`, `gi`);
  const resultSort = articlesArray.map((article) =>
    article.title.match(regExp)
  );
  const amountKeyWord = resultSort.filter((word) => {
    return word !== null && word !== undefined;
  }).length;
  return amountKeyWord;
}

export function weekObject(date, articlesArray, keyWord, amountKeyWord) {
  const weekObject = [];
  for (let i = 0; i < 7; i++) {
    let currentDate = date;
    const optionsDate = {
      day: 'numeric',
    };
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const dayName = days[currentDate.getDay()];
    const newsCount = counterCoincidencesWeek(
      currentDate,
      articlesArray,
      keyWord
    );
    const widthPercent = Math.round((newsCount * 100) / amountKeyWord);
    const dayNum = currentDate.toLocaleString('ru', optionsDate);
    weekObject.push({ dayNum, dayName, newsCount, widthPercent });
    currentDate = date.setDate(date.getDate() - 1);
  }
  return weekObject;
}

function counterCoincidencesWeek(currentDate, articlesArray, keyWord) {
  const regExp = new RegExp(`${keyWord}`, `gi`);
  let counter = 0;
  articlesArray.map((article) => {
    const localDate = new Date(article.publishedAt);
    if (
      formateDate.formateDateLocal(localDate) ===
        formateDate.formateDateLocal(currentDate) &&
      article.title.match(regExp)
    ) {
      counter += 1;
    }
  });
  return counter;
}

export function formateMonth(date) {
  const optionsDate = {
    month: 'long',
  };
  const dateMonth = date.toLocaleString('ru', optionsDate);
  return dateMonth;
}
