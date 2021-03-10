import Analytics from 'components/Analytics'
import DataStorage from 'modules/DataStorage'
import 'styles/analytics.scss'

const dataStorage = new DataStorage()

const data = dataStorage.getStorage()

const analytics = new Analytics()

analytics.renderGraphic(data.analyticsObject)
