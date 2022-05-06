import { createApp } from 'vue'
import App from './App.vue'
import './assets/fonts/font.css'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupPlugins } from './plugins'
import { setupTianditu } from './plugins/tianditu.js'
import './styles/index.scss'
async function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  setupRouter(app)
  setupPlugins(app)
  await setupTianditu(app)

  app.mount('#sx-app')
}

void bootstrap()
