import type { App } from 'vue'
import { create, NButton, NIcon } from 'naive-ui'

const naive = create({
  components: [NButton, NIcon],
})

export function setupNaive(app: App<Element>) {
  app.use(naive)
}
