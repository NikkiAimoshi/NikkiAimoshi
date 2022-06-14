import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
const app = createApp(App)
app.use(router)							//在main.js中引入router 并挂载router
app.mount('#app')

