import { App } from 'vue'
import config from '@/config'
import * as echarts from 'echarts'
const { isEcharts } = config
export function setupEcharts(app: App<Element>) {
  if (isEcharts) {
    app.config.globalProperties.$echarts = echarts
  }
}
