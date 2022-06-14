import Toast from '@/components/ToastPlugin.vue' // 导入Toast文件

export default {
  install (Vue) { // 声明插件install(){} 参数Vue 类
    const ToastConstructor = Vue.extend(Toast) // 使用extend方法创建vue的子类
    // 实例化子组件，并挂载Div上放在body上
    const t = new ToastConstructor()
    t.$mount(document.createElement('div')) // mount 挂载 创建一个Div 将实例化对象挂载到Div上
    document.body.appendChild(t.$el)
    // 在Vue的原型创建了两个方法
    Vue.prototype.$showToast = ({ msg, btnShow, callBack }) => {
      t.msg = msg // t.msg => 对应 Toast下面data的值
      t.show = true
      t.btnShow = btnShow
      t.callBack = callBack
    }
    Vue.prototype.$hideToast = () => {
      t.show = false
    }
  }
}
// 在Vue中创建插件使用步骤：
// 1.在components中建立vue文件  写好插件的内容
// 2.在src下建立plugins文件夹 建立js配置插件（ 1.导入文件 2.用install(Vue){}声明插件 3.
//           使用extend方法创建vue的子类 4.实例化子组件 5.创建一个Div 将实例化对象挂载到
//           Div上 并放在body上 6. 在Vue的原型创建方法
// 3.在main.js中引入插件 并Vue.use(此插件)
// 4.在全局用this.原型()调用插件
// tips:放入参数 => 1. 在 1 中的data中写入需要的值 2. 在2.6中用解构写入值 3. 在调用的时候传入
