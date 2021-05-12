import FormateDate from 'scripts/modules/FormateDate'

const formateDate = new FormateDate()

export function counterTotal(articlesArray, keyWord) {
  const regExp = new RegExp(`${keyWord}`, `gi`)
  const resultSort = articlesArray.map((article) => article.title.match(regExp))

  const amountKey = resultSort.filter((word) => {
    return word !== null && word !== undefined
  })

  return amountKey.length
}

function counterWeek(currentDate, articlesArray, keyWord) {
  let counter = 0
  const regExp = new RegExp(`${keyWord}`, `gi`)

  articlesArray.forEach((article) => {
    const localDate = new Date(article.publishedAt)

    if (
      formateDate.formateDateLocal(localDate) ===
        formateDate.formateDateLocal(currentDate) &&
      article.title.match(regExp)
    ) {
      counter++
    }
  })

  return counter
}

export function formateMonth() {
  const optionsDate = { month: 'long' }
  const dateMonth = new Date().toLocaleString('ru', optionsDate)

  return dateMonth
}

export function formateWeek(articlesArray, keyWord) {
  const date = new Date()
  const optionsDate = { day: 'numeric' }
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  const week = []

  for (let i = 0; i < 7; i++) {
    let currentDate = date

    const dayName = days[currentDate.getDay()]
    const dayNum = currentDate.toLocaleString('ru', optionsDate)
    const newsCount = counterWeek(currentDate, articlesArray, keyWord)

    week.push({ dayNum, dayName, newsCount })
    currentDate = date.setDate(date.getDate() - 1)
  }

  return week
}
