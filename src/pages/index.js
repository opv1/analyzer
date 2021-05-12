import NewsCard from 'scripts/components/NewsCard'
import NewsList from 'scripts/components/NewsList'
import DataStorage from 'scripts/modules/DataStorage'
import FormateDate from 'scripts/modules/FormateDate'
import NewsApi from 'scripts/modules/NewsApi'
import CheckInput from 'scripts/modules/CheckInput'
import * as constants from 'scripts/constants'
import 'styles/index.scss'

const checkInput = new CheckInput()
const dataStorage = new DataStorage()
const formateDate = new FormateDate()

const toDateIco = formateDate.formateDateIco(new Date())
const fromDateIco = formateDate.formateDateIco(new Date(), 6)

const newsApi = new NewsApi({
  fromDate: `${fromDateIco}`,
  toDate: `${toDateIco}`,
  pageSize: '100',
  sortBy: 'popularity',
  apiKey: process.env.API_KEY,
  headers: {
    'Content-Type': 'application/json',
  },
})

const newsCard = new NewsCard()
const newsList = new NewsList(newsCard, formateDate)

function eventListeners() {
  // constants.headerBurger.addEventListener('click', activeSidedrawer)
  // constants.headerTimes.addEventListener('click', activeSidedrawer)
  constants.searchForm.addEventListener('submit', searchNews)
  constants.resultButton.addEventListener('click', moreNews)
}

document.addEventListener('DOMContentLoaded', () => {
  const data = dataStorage.getStorage()

  if (data) {
    const { keyWord } = data.analyticsObject

    constants.searchForm.elements.input.value = keyWord
    newsList.renderNewsList(data.newsObject.articles)
    constants.resultSection.classList.remove('hide')
  }

  eventListeners()
})

// function activeSidedrawer() {
//   constants.headerBurger.classList.toggle('hide')
//   constants.headerSidedrawer.classList.toggle('active')
// }

function searchNews(event) {
  event.preventDefault()

  if (checkInput.validateValue(constants.searchForm.elements.input)) {
    const keyWord = constants.searchForm.elements.input.value

    constants.resultContainer.textContent = ''
    constants.searchForm.elements.input.setAttribute('disabled', true)
    constants.searchForm.elements.button.setAttribute('disabled', true)

    const promise = new Promise((resolve) => {
      constants.loadingSection.classList.remove('hide')
      constants.nfoundSection.classList.add('hide')
      constants.errorSection.classList.add('hide')
      constants.resultSection.classList.add('hide')

      resolve(
        newsApi
          .getNews(keyWord)
          .then((newsObject) => newsObject)
          .catch((error) => {
            constants.loadingSection.classList.add('hide')

            if (error.message === 'Проблемы на этапе запроса новостей!') {
              constants.errorSection.classList.remove('hide')
            } else if (
              error.message === 'Ничего не найдено. Нулевой результат!'
            ) {
              constants.nfoundSection.classList.remove('hide')
            }
          })
      )
    })

    promise
      .then((newsObject) => {
        dataStorage.setStorage(newsObject, keyWord)
        newsList.renderNewsList(newsObject.articles)

        constants.loadingSection.classList.add('hide')
        constants.nfoundSection.classList.add('hide')
        constants.errorSection.classList.add('hide')
        constants.resultSection.classList.remove('hide')
      })
      .catch((error) => console.log(error))
      .finally(() => {
        constants.searchForm.elements.input.removeAttribute('disabled')
        constants.searchForm.elements.button.removeAttribute('disabled')
      })
  }
}

function moreNews() {
  const data = dataStorage.getStorage()

  if (data) {
    newsList.renderMoreNews(data.newsObject.articles)
  }
}
