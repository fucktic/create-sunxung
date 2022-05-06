// 开发环境api地址
const development = {
  test: 'http://220.191.203.162:58088/daishan',
}
//生产环境api动态地址
const production = window.location.href.split('://')[0] + '://' + window.location.host + '/daishan'

const mode: any = import.meta.env.MODE

export default {
  //设计宽度
  width: 1920,
  //设计高度
  height: 1080,
  // 设计背景颜色
  backgroundColor: 'rgb(222, 213, 213)',
  //是否开启路由动画
  isPageAnimate: true,
  //是否开启开地图
  isTianditu: true,
  // 天地图地址
  tiandituSrc: 'https://api.tianditu.gov.cn/api?v=4.0&tk=638cfce5d06804a50a151a68a257d536',
  // 是否启用天地图D3:
  d3Overlay: true,
  //是否启用图表
  isEcharts: true,
  //路由动画类型
  pageAnimateType: 'zoom-fade',
  // axios请求地址
  baseUrl: import.meta.env.DEV ? development[mode] : production,
}
