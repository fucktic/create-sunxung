import type { App } from 'vue'

import { AccessTime20Regular } from '@vicons/fluent'

const icons = [{ name: 'access-time-20-regular', component: AccessTime20Regular }]
export async function setupIcon(app: App<Element>) {
  icons.forEach((ele) => {
    app.component(ele.name, ele.component)
  })
}
