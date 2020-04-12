import { resultButton } from '../constants/constants';

export function hideMoreButton() {
  resultButton.setAttribute('style', 'display: none');
}

export function counterCoincidences(articlesArray, keyWord) {
  const regExp = new RegExp(`${keyWord}`, `gi`);
  const resultSort = articlesArray.map((article) =>
    article.title.match(regExp)
  );
  const amountKeyWord = resultSort.filter((word) => {
    return word !== null && word !== undefined;
  }).length;
  return amountKeyWord;
}

export function formateDay(date) {
  const optionsDate = {
    day: 'numeric',
  };
  const dayNum = date.toLocaleString('ru', optionsDate);
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  const dayName = days[date.getDay()];
  return { dayNum, dayName };
}

export function formateWeek(date) {
  const arrWeek = [];
  for (let i = 0; i < 7; i++) {
    date.setDate(date.getDate() - 1);
    const optionsDate = {
      day: 'numeric',
    };
    const dayNum = date.toLocaleString('ru', optionsDate);
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const dayName = days[date.getDay()];
    arrWeek.push({ dayNum: dayNum, dayName: dayName });
  }
  return arrWeek;
}

export function formateMonth(date) {
  const optionsDate = {
    month: 'long',
  };
  const dateMonth = date.toLocaleString('ru', optionsDate);
  return dateMonth;
}
