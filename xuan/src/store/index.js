import Vue from 'vue'
import Vuex from 'vuex'
// 告诉 vue “使用” vuex
Vue.use(Vuex)

const stors = new Vuex.Store({
  // 放置初始状态 app启动的时候的全局的初始值
  state: {
    userInfo: null,
    cartNum: 0
  },
  getters: {
  },
  mutations: {
    setUserInfo (state, userinfo) { // 用vuex的时候不可以直接改变state的值  需要在getters中设置方法改变
      state.userInfo = userinfo
    },
    setCartNum (state, n) {
      state.cartnum = state.cartnum + n
    }
  },
  actions: {
  },
  modules: {
  }
})
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default stors

// stors：平行组件之间传递数据，很多数据需要多个组件循环使用；如：用户的登录，注册；
// 1. 1.安装vueX ： npm install vuex --save
// 2. 在index.html同级新建文件夹store，在文件夹内新建index.js文件，这个文件我们用来组装模块并导出 store 的文件
// 3. 写index.js 如上
// 4. 在main.js中注册store，这样所有的组件都可以使用store中的数据了
// 5. 使用state里的数据：使用方法：使用计算属性返回store中的一个数据到新的属性上，在模板中直接使用这个属性就可以了
//     this.$store.state.属性名
