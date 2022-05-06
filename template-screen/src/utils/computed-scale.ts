import config from '@/config'
import store from '@/store'

export const computedScale = () => {
  const ratio = detectZoom()
  const width: number = config.width || 0
  const height: number = config.height || 0

  let scale = 1
  let mapScale = 0
  let top = 0
  let left = 0

  // //获取显示区域高宽
  const curHeight: number = document.documentElement.clientHeight || 0
  const curWidth: number = document.documentElement.clientWidth || 0

  //  高宽是否能被整除
  const yuHeight: number = Number(((curHeight * ratio) / 120).toFixed(5)) - Math.floor(height / 120)
  const yuWidth: number = Number(((curWidth * ratio) / 120).toFixed(5)) - Math.floor(width / 120)
  const isVerticalScreen: boolean = height > width
  if (isVerticalScreen) {
    scale = Number((curWidth / width).toFixed(5))
    top = Number(((curHeight - height * scale) / 2).toFixed(5))
    mapScale = Number((width / curWidth).toFixed(5))
  } else {
    if (yuHeight > yuWidth) {
      scale = Number((curWidth / width).toFixed(5))
      top = Number(((curHeight - height * scale) / 2).toFixed(5))
      mapScale = Number((width / curWidth).toFixed(5))
    } else {
      scale = Number((curHeight / height).toFixed(5))
      left = Number(((curWidth - width * scale) / 2).toFixed(5))
      mapScale = Number((height / curHeight).toFixed(5))
    }
  }

  const { setCurrentScale } = store.useAppStore
  setCurrentScale(scale)
  return { scale, top, left, mapScale }
}
//获取系统和网页缩放
const detectZoom = () => {
  let ratio = 0
  const screen = window.screen

  const ua = navigator.userAgent.toLowerCase()
  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth
  }

  return ratio
}
