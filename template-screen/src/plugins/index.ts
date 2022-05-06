import { setupNaive } from './naive'
import { setupIcon } from './icon'
import { setupEcharts } from './echarts'
// import { setupTianditu } from './tianditu'
import { App } from 'vue'
export const setupPlugins = async (app: App<Element>) => {
  setupNaive(app)
  setupIcon(app)
  // setupTianditu(app)
  setupEcharts(app)
}
