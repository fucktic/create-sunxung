import type { App } from 'vue'
import { createPinia } from 'pinia'
import { useAppStore } from './modules/app'

const store: any = {}

export function setupStore(app: App<Element>) {
  app.use(createPinia())
  registerStore()
}
//模块注册
const registerStore = () => {
  store.useAppStore = useAppStore()
}
export default store
