import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers/index'
import * as LucideIcons from 'lucide-vue-next'

const app = createApp(App)
app.use(router)
app.mount('#app')
for (const [key, component] of Object.entries(LucideIcons)) {
  app.component(key, component)
}
