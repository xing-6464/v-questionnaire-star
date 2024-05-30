import { createApp } from 'vue'
import { createPinia } from 'pinia'
import antDesign from 'ant-design-vue'
import { PiniaLogger } from 'pinia-logger'
import './assets/reset.css'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(
  PiniaLogger({
    expanded: true
  })
)

createApp(App).use(router).use(pinia).use(antDesign).mount('#app')
