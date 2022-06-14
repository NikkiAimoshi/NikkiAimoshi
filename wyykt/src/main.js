import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './assets/css/all.css'					//css 引入
import 'bootstrap/dist/css/bootstrap.css'		//bootstrap 引入
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')