import { axiosGet, axiosPost } from '@/utils/axios'

export const getData = (param?: any) => {
  return axiosGet('/api/getData', param)
}
export const postData = (param?: any) => {
  return axiosPost('/api/postData', param)
}

/**
 * 浙里基本公共服务更多一级
 * @param {*} formData
 * @returns
 */
export const getCascaderData = () => {
  return axiosGet('/api-szsh/setting/odszlzhjbggfwsxqd/getOneJson')
}
