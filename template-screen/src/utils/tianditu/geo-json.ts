import axios from 'axios'

const areaGeoJsonList = {}
let isSetTimeout: NodeJS.Timeout
//获取地图geoJson
export const getGeoJson = (areaName: string, areaCode: string) => {
  return new Promise((resolve) => {
    if (areaGeoJsonList[areaName]) resolve(areaGeoJsonList[areaName])
    const url = getUrl(areaCode, areaName)
    axios
      .get(url, {
        timeout: 20000,
      })
      .then((res) => {
        if (
          (res.status !== 200 && !res.data) ||
          res.data === 'IP未授权,请联系管理员授权！' ||
          res.data === ''
        ) {
          timeout(areaName, areaCode)
          return
        }
        if (areaCode.length === 9 && res.status === 200 && res.data) {
          pushGeoJsonList(areaName, res.data.features)
        }
        resolve(res.data.features)
      })
      .catch(() => {
        timeout(areaName, areaCode)
      })
  })
}
const getUrl = (areaCode: string, areaName: string) => {
  let category = ''
  const len: number = areaCode.length
  if (len === 6) {
    category = 'quxian'
  } else {
    category = 'zhenjie'
  }

  return `/mapdata/90E0D02A488F66E935C695354907EC400105D73CEBFE139707A15F0120C1C3AE0BA20830F1733FEA7014B277AF60D20D/PBS/rest/services/lsyt_dmdz_wgbj0619/MapServer/wfs?service=wfs&version=1.0.0&request=getfeature&typename=lsyt_dmdz_wgbj0619&outputFormat=application/json&CQL_FILTER=${category}=%27${areaName}%27`
}
// 缓存近区县地图数据
async function pushGeoJsonList(areaName: string, geoJson: Array<Object>) {
  areaGeoJsonList[areaName] = geoJson
}
//定时重新请求地图
function timeout(areaName: string, areaCode: string) {
  if (isSetTimeout) {
    clearTimeout(isSetTimeout)
  }
  isSetTimeout = setTimeout(() => {
    getGeoJson(areaName, areaCode)
  }, 2000)
}
