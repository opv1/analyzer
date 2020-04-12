import { analyticsContainer } from '../constants/constants';

export class Statistics {
  constructor(newsListObject, graphicContainer, classFormateDate) {
    this.newsListObject = newsListObject;
    this.graphicContainer = graphicContainer;
    this.classFormateDate = classFormateDate;
  }

  createGraphic(
    keyWord,
    totalResults,
    amountKeyWord,
    presentMonth,
    toDay,
    toWeek
  ) {
    analyticsContainer.insertAdjacentHTML(`
    <div class="analytics">
      <div class="analytics__wrapper">
        <h2 class="analytics__caption analytics__text-black">
          Вы спросили: "${keyWord}"
        </h2>
        <ul class="analytics__list">
          <li class="analytics__item analytics__text-black">
           Новостей за неделю:
            <span class="analytics__count analytics__text-black"
             >${totalResults}</span>
          </li>
          <li class="analytics__item analytics__text-black">
          Упоминаний в заголовках:
          <span class="analytics__count analytics__text-black"
            >${amountKeyWord}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="graphic graphic__background-grey">
      <div class="graphic__wrapper">
        <h3 class="graphic__caption graphic__text-black">
          Аналитика по дням
        </h3>
        <div class="graphic__block">
          <div class="graphic__block_head">
            <p class="graphic__block_date graphic__text-grey">
              Дата (${presentMonth})
            </p>
            <p class="graphic__block_count graphic__text-grey">
              Кол-во упоминаний
            </p>
          </div>
          <div class="graphic__row">
            <p class="row__cell graphic__text-grey">0</p>
            <p class="row__cell graphic__text-grey">25</p>
            <p class="row__cell graphic__text-grey">50</p>
            <p class="row__cell graphic__text-grey">75</p>
            <p class="row__cell graphic__text-grey">100</p>
          </div>
          <div class="graphic__columns">
            <div class="graphic__columns_y">
              <p class="graphic__column_y graphic__text-black">19, пн</p>
              <p class="graphic__column_y graphic__text-black">20, вт</p>
              <p class="graphic__column_y graphic__text-black">21, ср</p>
              <p class="graphic__column_y graphic__text-black">22, чт</p>
              <p class="graphic__column_y graphic__text-black">23, пт</p>
              <p class="graphic__column_y graphic__text-black">24, сб</p>
              <p class="graphic__column_y graphic__text-black">25, вс</p>
            </div>
            <div class="graphic__columns_x">
              <p class="graphic__column_x graphic__text-white">
                15
              </p>
              <p class="graphic__column_x graphic__text-white">
                18
              </p>
              <p class="graphic__column_x graphic__text-white">
                11
              </p>
              <p class="graphic__column_x graphic__text-white">
                39
              </p>
              <p class="graphic__column_x graphic__text-white">
                45
              </p>
              <p class="graphic__column_x graphic__text-white">
                73
              </p>
              <p class="graphic__column_x graphic__text-white">
                34
              </p>
            </div>
          </div>
          <div class="graphic__row">
            <p class="row__cell graphic__text-grey">0</p>
            <p class="row__cell graphic__text-grey">25</p>
            <p class="row__cell graphic__text-grey">50</p>
            <p class="row__cell graphic__text-grey">75</p>
            <p class="row__cell graphic__text-grey">100</p>
          </div>
        </div>
      </div>
    </div>`);
    const template = `
    <div class="analytics">
      <div class="analytics__wrapper">
        <h2 class="analytics__caption analytics__text-black">
          Вы спросили: "${keyWord}"
        </h2>
        <ul class="analytics__list">
          <li class="analytics__item analytics__text-black">
           Новостей за неделю:
            <span class="analytics__count analytics__text-black"
             >${totalResults}</span>
          </li>
          <li class="analytics__item analytics__text-black">
          Упоминаний в заголовках:
          <span class="analytics__count analytics__text-black"
            >${amountKeyWord}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="graphic graphic__background-grey">
      <div class="graphic__wrapper">
        <h3 class="graphic__caption graphic__text-black">
          Аналитика по дням
        </h3>
        <div class="graphic__block">
          <div class="graphic__block_head">
            <p class="graphic__block_date graphic__text-grey">
              Дата (${presentMonth})
            </p>
            <p class="graphic__block_count graphic__text-grey">
              Кол-во упоминаний
            </p>
          </div>
          <div class="graphic__row">
            <p class="row__cell graphic__text-grey">0</p>
            <p class="row__cell graphic__text-grey">25</p>
            <p class="row__cell graphic__text-grey">50</p>
            <p class="row__cell graphic__text-grey">75</p>
            <p class="row__cell graphic__text-grey">100</p>
          </div>
          <div class="graphic__columns">
            <div class="graphic__columns_y">
              <p class="graphic__column_y graphic__text-black">19, пн</p>
              <p class="graphic__column_y graphic__text-black">20, вт</p>
              <p class="graphic__column_y graphic__text-black">21, ср</p>
              <p class="graphic__column_y graphic__text-black">22, чт</p>
              <p class="graphic__column_y graphic__text-black">23, пт</p>
              <p class="graphic__column_y graphic__text-black">24, сб</p>
              <p class="graphic__column_y graphic__text-black">25, вс</p>
            </div>
            <div class="graphic__columns_x">
              <p class="graphic__column_x graphic__text-white">
                15
              </p>
              <p class="graphic__column_x graphic__text-white">
                18
              </p>
              <p class="graphic__column_x graphic__text-white">
                11
              </p>
              <p class="graphic__column_x graphic__text-white">
                39
              </p>
              <p class="graphic__column_x graphic__text-white">
                45
              </p>
              <p class="graphic__column_x graphic__text-white">
                73
              </p>
              <p class="graphic__column_x graphic__text-white">
                34
              </p>
            </div>
          </div>
          <div class="graphic__row">
            <p class="row__cell graphic__text-grey">0</p>
            <p class="row__cell graphic__text-grey">25</p>
            <p class="row__cell graphic__text-grey">50</p>
            <p class="row__cell graphic__text-grey">75</p>
            <p class="row__cell graphic__text-grey">100</p>
          </div>
        </div>
      </div>
    </div>`;
    return template;
  }

  foundCoincidence(keyWord) {
    const regExp = new RegExp(`${keyWord}`, `gi`);
  }
}
