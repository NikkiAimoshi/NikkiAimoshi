import Loaging from '@/components/LoaningIn.vue'

export default {
  install (Vue) {
    const Loagingpluagin = Vue.extend(Loaging)
    const L = new Loagingpluagin()
    L.$mount(document.createElement('div'))
    document.body.appendChild(L.$el)
    Vue.prototype.$showLoaging = ({ show }) => {
      L.show = show
    }
    Vue.prototype.$hideLoaging = () => {
      L.show = false
    }
  }
}
