export default class Analytics {
  constructor() {
    this.analyticsCaption = document.querySelector('.analytics__caption')
    this.analyticsWeek = document.querySelector('.analytics__week')
    this.analyticsAmount = document.querySelector('.analytics__amount')
    this.graphicHeadDate = document.querySelector('.graphic__date')
    this.graphicColumnsY = document.querySelector('.graphic__columns__y')
    this.graphicColumnsX = document.querySelector('.graphic__columns__x')
  }

  renderGraphic({ keyWord, totalResults, amountKey, month, weekArray }) {
    const span = document.createElement('span')
    span.textContent = `${month}`

    this.analyticsCaption.textContent = `Вы спросили: "${keyWord}"`
    this.analyticsWeek.textContent = totalResults
    this.analyticsAmount.textContent = amountKey
    this.graphicHeadDate.appendChild(span)

    weekArray.forEach((item, index) => {
      const itemColumnY = document.createElement('span')
      const itemColumnX = document.createElement('span')

      itemColumnY.classList.add('graphic__column__y')
      itemColumnX.classList.add('graphic__column__x')

      this.graphicColumnsY.appendChild(itemColumnY)
      this.graphicColumnsX.appendChild(itemColumnX)

      itemColumnY.textContent = `${weekArray[index].dayNum}, ${weekArray[index].dayName}`
      itemColumnX.textContent = `${weekArray[index].newsCount}`

      itemColumnX.setAttribute('style', `width: ${weekArray[index].newsCount}%`)
    })
  }
}
