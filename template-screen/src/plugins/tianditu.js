import config from '@/config'
import { loadD3Overlay } from './tianditu/d3Overlay.js'
const { isTianditu, tiandituSrc, d3Overlay } = config

export const setupTianditu = async (app) => {
  if (isTianditu) {
    const body = document.getElementsByTagName('body')[0]
    const script = document.createElement('script')
    script.type = 'text/javascript'
    // script.async = true
    script.src = tiandituSrc
    body.appendChild(script)
    script.onload = () => {
      if (d3Overlay) {
        void loadD3Overlay()
      }
      app.config.globalProperties.$tian = T
    }
  }
}
