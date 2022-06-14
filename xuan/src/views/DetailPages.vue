<template>
  <div class="header">
      <header-top />
      <div class="detail" v-if="detail">
        <!-- 轮播图 -->
        <swiper height="7.5rem" :list="picUrls"/>
        <!-- 商品信息 -->
        <div class="info">
          <div class="name">{{detail.name}}</div>
          <div class="desc">{{detail.simpleDesc}}</div>
          <div class="prise">
            <span v-if="detail.activityPrice" class="activityPrice"> 促销价:￥{{detail.activityPrice}}</span>
            <span class="retailPrice">￥{{detail.retailPrice}} </span>
          </div>
        </div>
        <!-- 商品参数 -->
        <div class="attrList" v-if="detail.attrList && detail.attrList.length > 0">
          <div class="title">商品详情</div>
          <div class="item" v-for="(item, index) in detail.attrList" :key="index">
            <span class="name">{{item.attrName}}</span>
            <span class="value">{{item.attrValue}}</span>
          </div>
        </div>
        <!-- 商品详情 -->
        <div v-html="detail.itemDetail && detail.itemDetail.detailHtml"></div>
      </div>
      <!-- 购物车 -->
      <div class="fotter">
        <button class="btn-cart" @click="addCart">加入购物车</button>
      </div>
  </div>
</template>

<script>
import { API_PRODUCT_DETAIT, API_USER_VERIFY, API_CART_ADD } from '@/api.config'
import HeaderTop from '@/components/HeaderTop.vue'
import swiper from '../components/HomeSwiper.vue'
import { mapMutations } from 'vuex' // 第二种调用vuex的方法 1.导出映射map 2.解构出来...~() 3.取出来...~(['~']) 4.this.~调用
export default {
  components: { HeaderTop, swiper },
  data () {
    return {
      picUrls: [], // ；轮播图图片
      detail: {}
    }
  },
  computed: {
    attrList () {
      return this.detail.attrList
    }
  },
  methods: {
    ...mapMutations(['setCartNum']),
    async getDetail () {
      this.$showLoaging({
        show: true
      })
      const res = await this.$axios.get(API_PRODUCT_DETAIT, {
        params: {
          id: this.$route.params.id
        }
      })
      console.log(res)
      this.detail = res
      for (const item in res.itemDetail) {
        if (item.startsWith('picUrl')) {
          this.picUrls.push(res.itemDetail[item])
        }
      }
      this.$hideLoaging()
    },
    async addCart () {
      // 验证是否登入
      const res = await this.$axios.get(API_USER_VERIFY)
      console.log(res)
      if (!res) {
        this.$showToast({
          btnShow: true,
          msg: '请登入',
          callBack: () => {
            this.$router.push('/Profile/login')
          }
        })
      } else {
        const res = await this.$axios.post(API_CART_ADD, {
          id: this.detail.id,
          naem: this.detail.name,
          prise: this.detail.activityPrice || this.detail.retailPrice,
          pic: this.detail.itenDetail.picurl1
        })
        console.log(res)
        this.setCartNum(1)
        this.$showToast({
          msg: '加入成功'
        })
      }
    }
  },
  created () {
    this.getDetail()
  }
}
</script>

<style lang="scss" scoped>
.swiper{
  margin-top: .88rem;
}
.detail{
  margin-bottom: 1rem;
}
.info{
  background-color: white;
  padding: 0 .2rem;
  box-sizing: border-box;
  width: 100%;
  float: left;
  margin-bottom: .2rem;
  .name{
    font-weight: 700;
    font-size: .4rem;
    color: #333;
    margin-top: .2rem;
  }
  .desc{
    color: #999;
    height: .3rem;
    line-height: .3rem;
  }
  span{
    color: #DD1A21;
    font-size: 0.35rem;
    float: left;
    margin-right: .6rem;
    margin-top: .1rem;
  }
}
.attrList{
  background: white;
  margin: .2rem 0 ;
  .title{
    text-align: center;
    font-size: .3rem;
  }
  .item{
    display: flex;
    border-top: 1px dotted #ccc;
    padding: .1rem;
    .name{
      flex: 1;
      color: #999;
    }
    .value{
      flex: 3;
      margin-left: 1.1rem;
    }
  }
}
.fotter{
  position: fixed;
  bottom: 0;
  left: 0%;
  height: 1rem;
  width: 100%;
  z-index: 10;
  border-top: #333 solid 1px;
  .btn-cart{
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
    color: white;
    background: #DD1A21;
  }
}
</style>
