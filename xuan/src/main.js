import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // 引入store
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/js/rem.js'
// import './assets/iconfont/iconfont.css' // iconfont的图标引入—————也可以—————index.html中的link
import axios from 'axios' // 引入axios  'axios'对应package.json中的axios
import ToastPlugin from '@/plugins/Toast.js' // 全局引入Toast插件
import Loagingpluagin from '@/plugins/Loaging.js' // 全局引入Loagin插件
Vue.use(ToastPlugin) // 使用Toast插件
Vue.use(Loagingpluagin) // 使用Loagin插件
Vue.config.productionTip = false
Vue.prototype.$axios = axios // [定义]prototype:原型//在其他页面引用:this.$axios --> 就可以发送请求
// axios.defaults.baseURL('/api')

// 接口拦截
axios.interceptors.response.use(response => { // 拦截器 in~~
  const res = response.data
  if (res.status === 1) { // 请求成功
    return (res.data)
  } else if (res.status === 0) { // 请求失败
    console.error(res)
    return Promise.rejest(res)
  }
}, error => {
  console.error(error)
  return Promise.reject(error)
})

new Vue({
  router,
  store, // 注册store
  render: h => h(App)
}).$mount('#app')
