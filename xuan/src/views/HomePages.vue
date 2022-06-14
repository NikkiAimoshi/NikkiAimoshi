<template>
  <div class="">
    <!-- 头部 -->
    <div class="header">
      <div class="logo"></div>
      <div class="search" @click="$router.push('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span class="placeholder">
          搜索商品 共{{total}}款好物
        </span>
      </div>
      <div class="lgoin">登录</div>
    </div>
    <!-- 触底加载区域 -->
    <div class="scroll-container" ref="scroll-container">
      <div class="scroll-inner" ref="scroll-inner">
        <!-- 轮播图 -->
        <the-swiper height="3.7rem" :list="bannerList"  class="swiper" @onClick="swiperClick"/><!--
          :list = v-bind:list  ==>v-bind用于绑定数据和元素属性
          (bannerList是动态属性要实时获取 所以绑定) -->
        <!-- 首页信息 -->
        <div class="service-node" v-if="info && info.commonConfigModule && info.commonConfigModule.brandDescPicUrl">
          <img :src="info.commonConfigModule.brandDescPicUrl" alt="">
        </div>
        <!-- 分类 -->
        <ul class="kingkong" v-if="info && info.kingKongAreaV4">
          <li class="kingkong-item" v-for="(item, index) in info.kingKongAreaV4.slice(0, 10)" :key="index">
            <img :src="item.picUrls[0]" alt="">
            <div class="title">{{item.title}}</div>
          </li>
        </ul>
        <!-- banner -->
        <div class="operation-c" v-if="info && info.staticResource">
          <img :src="info.staticResource.pic" alt="">
        </div>
        <!-- 商品 -->
        <div class="rcmd" v-if="rcmdItemList.length > 0">
          <div class="title">推荐商品</div>
          <div class="list">
            <product-list v-for="(item, index) in rcmdItemList" :key="index"
          :item="item.categoryItem"/>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部导航菜单 -->
    <nav-footer />
    <!-- <loading v-show="Loadingshow"/> -->
    <!-- 回到顶部 -->
    <div class="toTop" @click="backTop"></div>
  </div>
</template>

<script>
import NavFooter from '../components/NavFotter.vue' // 引入组件
import TheSwiper from '../components/HomeSwiper.vue' // 引入组件
import ProductList from '../components/ProductList.vue'
// import Loading from '../components/LoaningIn.vue'
import { API_HOME, API_HOME_TOTAL_NUM, API_HOME_RCMD } from '@/api.config.js' // 引入 API的统一配置
export default {
  data () {
    return {
      total: 0, // 当前商品的总数
      bannerList: [
        // 'https://yanxuan.nosdn.127.net/e48cc1f908b359c891bb0152feb9e50e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        // 'https://yanxuan.nosdn.127.net/9f40ca5a83a06ded9587124432471b67.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        // 'https://yanxuan.nosdn.127.net/7f762f223c3e320df8260c4b54879124.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        // 'https://yanxuan.nosdn.127.net/ef739c5f6ba97afbf201ee9d9b3eb16d.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        // 'https://yanxuan.nosdn.127.net/7d38ac617e6175f468140d326b7ebcda.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        // 'https://yanxuan.nosdn.127.net/e52ad10cfd0f24691c987006ef82a814.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
      ],
      info: {}, // 首页信息
      rcmdItemList: [],
      Loadingshow: false
    }
  },
  components: { NavFooter, TheSwiper, ProductList }, // component：组件   插入（声明）组件
  methods: {
    swiperClick (list) {
      console.log(list)
    },
    async getTotalNums () {
      const res = await this.$axios.get(API_HOME_TOTAL_NUM)
      this.total = res
    }, // //////////////// *异步操作*  --> promise / async和await
    async getHomeInfo () {
      const res = await this.$axios.get(API_HOME)
      // console.log(res)
      this.info = res
      this.bannerList = res.focus.map(item => item.img)
    },
    async getRcmdTnfo (lastItemId = 0, size = 20) {
      this.Loadingshow = true
      this.$showLoaging({ show: this.Loadingshow }) // this.Loadingshow = true // 异步操作 在await前是正在加载的 显示show
      const { rcmdItemList } = await this.$axios.post(API_HOME_RCMD, {
        lastItemId, // 设置默认属性  可以简写为  lastItemId，size 不过  key的name === 参数的name
        size: size
      }) // 后面写的是参数
      this.rcmdItemList = this.rcmdItemList.concat(rcmdItemList) // 拼接数组
      this.Loadingshow = false
      this.$showLoaging({ show: this.Loadingshow }) // 加载结束 关闭show
    },
    inScroll () {
      const scrollTop = this.scrollContainer.scrollTop // 获取划出Top的高度
      this.scrollInnerH = this.scrollInner.scrollHeight // 获取内容（内部）的高度
      // console.log(scrollTop, this.scrollContainerH, this.scrollInnerH)
      // 划出Top的高度 +    con的高     >=      内容（内部）的高度 --》触底 / 会四舍五入 -1
      if (scrollTop + this.scrollContainerH >= this.scrollInnerH - 2) {
        console.log('触底了')
        this.getRcmdTnfo(this.rcmdItemList[this.rcmdItemList.length - 1].id)
      }
    },
    // 防抖
    debounce (fn, delay) {
      let timer = null
      return () => {
        if (timer !== null) {
          clearInterval(timer)
        }
        timer = setInterval(fn, delay)
        setTimeout(() => { clearInterval(timer) }, 2000)
      }
    },
    // 节流
    throttle (fn, dealy) {
      let startTime = 0
      return () => {
        const nowTime = Date.now()
        if (nowTime - startTime >= dealy) {
          fn()
          startTime = nowTime
        }
      }
    },
    backTop () {
      const timer = setInterval(() => {
        this.scrollContainer.scrollTop = this.scrollContainer.scrollTop - 500
        if (this.scrollContainer.scrollTop <= 0) {
          // this.scrollContainer.scrollTop = 0
          clearInterval(timer)
        }
      }, 17)
    }
  },
  created () { // created () 生命周期函数（钩子函数）:就是一个vue实例被生成后调用这个函数
    this.getTotalNums()
    this.getHomeInfo()
    this.getRcmdTnfo()
  },
  mounted () { // dom渲染 完成后
    this.$nextTick(() => {
      this.scrollContainer = this.$refs['scroll-container']
      this.scrollInner = this.$refs['scroll-inner']
      this.scrollContainerH = this.scrollContainer.clientHeight // 获取con的高
      this.scrollContainer.addEventListener('scroll', this.debounce(this.inScroll, 500))
    })
  },
  destroyed () {
    this.scrollContainer.removeEventListener('scroll', this.inScroll)
  }
}
</script>

<style lang="scss" scoped>
  $fontA: 0.24rem;
  $fontB: 0.28rem;
  $fontC: 0.36rem;
  $fontD: 0.4rem;
  $colorA: #fff;
  $colorB: #DD1A21;
  $colorC: #333;
  $colorD: #999;
  $colorE: #f4f4f4;
  $colorF: #666;
.header{
  height: 0.88rem;
  padding: 0 .3rem;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 10;
  .logo{
    width: 1.38rem;
    height: 0.4rem;
    background-image: url('../assets/image/logo.png');
    background-size: contain;
  }
  .search{
    flex: 1;
    background-color: #ededed;
    margin: 0 .2rem;
    border-radius: .08rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-sousuo{
      font-size: $fontB;
      color: $colorC;
      margin-right: .1rem;
    }
    .placeholder{
      color: $colorF;
      font-size: $fontB;
    }
  }
  .lgoin{
    width: .72rem;
    height: .38rem;
    line-height: .38rem;
    text-align: center;
    border: solid 1px $colorB;
    border-radius: .08rem;
    font-size: $fontB;
  }
}
.kingkong{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  &-item{
    height: 1.56rem;
    width: 1.1rem;
    margin: .1rem .2rem;
    text-align: center;
    img{
      width: 100%;
    }
    .title{
      color: $colorC;
      font-size: $fontA;
      white-space: nowrap; // 不换行
    }
  }
}
.rcmd{
  background-color: $colorA;
  .title{
    text-align: center;
    padding: .2rem 0;
    font-weight: 700;
    font-size: .3rem;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 .4rem;
  }
}
.scroll{
  &-container{
    position: absolute;
    top: .88rem;
    bottom: .97rem;
    left: 0;
    right: 0;
    overflow-y: scroll;
  }
}
.toTop
{
  width: .8rem;
  height: .8rem;
  background-image: url(../assets/image/to-top.png);
  background-size: .8rem .8rem;
  position: fixed;
  right: .2rem;
  bottom: 1.4rem;
  z-index: 10;
}
</style>
