import { defineStore } from 'pinia'
// import { store } from '@/store'
import config from '@/config'
const { isPageAnimate, pageAnimateType } = config

export interface IAppState {
  token: string
  transitionShow: boolean
  isPageAnimate: boolean
  pageAnimateType: string
  currentScale: number
}
export const useAppStore = defineStore({
  id: 'app',
  state: (): IAppState => ({
    token: 'aaaaa',
    transitionShow: true,
    isPageAnimate,
    pageAnimateType,
    currentScale: 1,
  }),
  getters: {
    getToken(): string {
      return this.token
    },
    getTransitionShow(): boolean {
      return this.transitionShow
    },
    getIsPageAnimate(): boolean {
      return this.isPageAnimate
    },
    getPageAnimateType(): string {
      return this.pageAnimateType
    },
    getCurrentScale(): number {
      return this.currentScale
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    getHomeData() {
      setTimeout(() => {
        this.transitionShow = false
      }, 2000)
    },
    setCurrentScale(scale: number) {
      this.currentScale = scale
    },
  },
})
