import { createApp } from 'vue'
import { createPinia } from 'pinia'
import antDesign from 'ant-design-vue'
import { PiniaLogger } from 'pinia-logger'
import './assets/reset.css'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .use(
    createPinia().use(
      PiniaLogger({
        expanded: true
      })
    )
  )
  .use(antDesign)
  .mount('#app')

// app.use(createPinia())
// app.use(router)
// antDesign.install(app)

// app.mount('#app')
