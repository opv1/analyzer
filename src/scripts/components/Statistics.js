export class Statistics {
  constructor(analyticsContainer) {
    this.analyticsContainer = analyticsContainer;
  }

  renderGraphic(
    keyWord,
    totalResults,
    amountKeyWord,
    presentMonth,
    presentWeek
  ) {
    this.analyticsContainer.insertAdjacentHTML(
      'beforeend',
      this.createGraphic(
        keyWord,
        totalResults,
        amountKeyWord,
        presentMonth,
        presentWeek
      )
    );
  }

  createGraphic(
    keyWord,
    totalResults,
    amountKeyWord,
    presentMonth,
    presentWeek
  ) {
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
                <p class="graphic__column_y graphic__text-black">${presentWeek[0].dayNum}, ${presentWeek[0].dayName}</p>
                <p class="graphic__column_y graphic__text-black">${presentWeek[1].dayNum}, ${presentWeek[1].dayName}</p>
                <p class="graphic__column_y graphic__text-black">${presentWeek[2].dayNum}, ${presentWeek[2].dayName}</p>
                <p class="graphic__column_y graphic__text-black">${presentWeek[3].dayNum}, ${presentWeek[3].dayName}</p>
                <p class="graphic__column_y graphic__text-black">${presentWeek[4].dayNum}, ${presentWeek[4].dayName}</p>
                <p class="graphic__column_y graphic__text-black">${presentWeek[5].dayNum}, ${presentWeek[5].dayName}</p>
                <p class="graphic__column_y graphic__text-black">${presentWeek[6].dayNum}, ${presentWeek[6].dayName}</p>
              </div>
              <div class="graphic__columns_x">
                <p class="graphic__column_x graphic__text-white" style="width: ${presentWeek[0].widthPercent}%">
                  ${presentWeek[0].newsCount}
                </p>
                <p class="graphic__column_x graphic__text-white" style="width: ${presentWeek[1].widthPercent}%">
                  ${presentWeek[1].newsCount}
                </p>
                <p class="graphic__column_x graphic__text-white" style="width: ${presentWeek[2].widthPercent}%">
                  ${presentWeek[2].newsCount}
                </p>
                <p class="graphic__column_x graphic__text-white" style="width: ${presentWeek[3].widthPercent}%">
                  ${presentWeek[3].newsCount}
                </p>
                <p class="graphic__column_x graphic__text-white" style="width: ${presentWeek[4].widthPercent}%">
                  ${presentWeek[4].newsCount}
                </p>
                <p class="graphic__column_x graphic__text-white" style="width: ${presentWeek[5].widthPercent}%">
                  ${presentWeek[5].newsCount}
                </p>
                <p class="graphic__column_x graphic__text-white" style="width: ${presentWeek[6].widthPercent}%">
                  ${presentWeek[6].newsCount}
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
}
