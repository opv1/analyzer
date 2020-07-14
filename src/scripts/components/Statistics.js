export default class Statistics {
  constructor(
    analyticsContainer,
    analyticsCaption,
    analyticsCountWeek,
    analyticsCountCaption,
    graphicBlockDate,
    graphicColumnsY,
    graphicColumnsX
  ) {
    this.analyticsContainer = analyticsContainer;
    this.analyticsCaption = analyticsCaption;
    this.analyticsCountWeek = analyticsCountWeek;
    this.analyticsCountCaption = analyticsCountCaption;
    this.graphicBlockDate = graphicBlockDate;
    this.graphicColumnsY = graphicColumnsY;
    this.graphicColumnsX = graphicColumnsX;
  }

  renderGraphic(
    keyWord,
    totalResults,
    amountKeyWord,
    presentMonth,
    presentWeek
  ) {
    this.analyticsCaption.textContent = `Вы спросили: "${keyWord}"`;
    this.analyticsCountWeek.textContent = totalResults;
    this.analyticsCountCaption.textContent = amountKeyWord;
    this.graphicBlockDate.textContent = `Дата (${presentMonth})`;
    for (let i = 0; i < presentWeek.length; i += 1) {
      const itemColumnY = document.createElement('p');
      const itemColumnX = document.createElement('p');
      itemColumnY.classList.add('graphic__column_y');
      itemColumnY.classList.add('graphic__text-black');
      itemColumnX.classList.add('graphic__column_x');
      itemColumnX.classList.add('graphic__text-white');
      this.graphicColumnsY.appendChild(itemColumnY);
      this.graphicColumnsX.appendChild(itemColumnX);
      itemColumnY.textContent = `${presentWeek[i].dayNum}, ${presentWeek[i].dayName}`;
      itemColumnX.textContent = `${presentWeek[i].newsCount}`;
      itemColumnX.setAttribute(
        'style',
        `width: ${presentWeek[i].widthPercent}%`
      );
    }
  }
}
