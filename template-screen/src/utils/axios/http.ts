import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'
import { IResponseData } from '@/types'
import Config from '@/config'

type TAxiosOption = {
  baseURL: string
  timeout: number
}

const config = {
  baseURL: Config.baseUrl,
  timeout: 120000,
}

class Http {
  // service: AxiosInstance;
  service
  constructor(config: TAxiosOption) {
    this.service = axios.create(config)

    /* 请求拦截  this.service.interceptors.request.use(config => config, error => Promise.reject(error))*/
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (localStorage.getItem('token')) {
          ;(config.headers as AxiosRequestHeaders).authorization = localStorage.getItem(
            'token'
          ) as string
        }

        return config
      },
      (error) => {
        return Promise.reject(error) // 为了可以在代码中catch到错误信息
      }
    )

    /* 响应拦截   this.service.interceptors.response.use(response => response.data, error => Promise.reject(error))*/
    this.service.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        const data = response.data
        const { code } = data

        if (code !== 0) {
          return Promise.reject(data)
        }
        return response.data
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
  get<T>(url: string, params?: object, _object = {}): Promise<IResponseData<T>> {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<IResponseData<T>> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<IResponseData<T>> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<IResponseData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
}

export default new Http(config)
