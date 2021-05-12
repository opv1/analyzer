import Analytics from 'scripts/components/Analytics'
import DataStorage from 'scripts/modules/DataStorage'
import 'styles/analytics.scss'

const dataStorage = new DataStorage()

const data = dataStorage.getStorage()

const analytics = new Analytics()

analytics.renderGraphic(data.analyticsObject)
