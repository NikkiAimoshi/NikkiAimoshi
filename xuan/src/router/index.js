import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/DemoInTheVue.vue'
import Home from '../views/HomePages.vue'
import Category from '../views/CategoryPages.vue'
import Cart from '../views/CartPages.vue'
import Profile from '../views/ProfilePages.vue'
import Search from '../views/SearchPages.vue'
import Detali from '../views/DetailPages.vue'
import Catedetail from '../views/CateDetail.vue'
import Login from '../views/LoginPages.vue'
import Regist from '../views/RegistPages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  }, {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/category',
    name: 'Category',
    component: Category
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    children: [
      {
        path: 'Login',
        name: 'Login',
        component: Login
      }, {
        path: 'Regist',
        name: 'Regist',
        component: Regist
      }
    ]
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/detail/:id', // 传参在网站后面加 /：~~ 为参数传入
    name: 'Detali',
    component: Detali
  }, {
    path: '/catedetail/:cateId/:subId',
    name: 'CateDetail',
    component: Catedetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
