<template>
  <div class="container">
    <!-- 头部 -->
    <div class="header">
      <div class="search-ipt">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入商品的名称" v-model.trim="keyword" @input="onInput"
        @keyup.enter="onEnter"/>
        <i class="iconfont icon-shanchu" @click="close()"></i>
      </div>
      <span class="cancel" @click="$router.push('/')">取消</span>
    </div>
    <!-- 历史记录 -->
    <div class="history" v-show="!suggestShow && !resultShow">
      <div class="history-title">
        <span>历史记录</span>
        <i class="iconfont icon-shanchu1" @click="removeHistory"></i>
      </div>
      <ul class="history-list">
        <li v-for="(item, index) in history" :key="index" @click="select(item)">{{item}}</li>
      </ul>
    </div>
    <!-- 搜索联想 -->
    <ul class="suggest" v-show="suggestShow && !resultShow">
      <li @click="select(item)" v-for="(item, index) in suggestList" :key="index" class="suggest-item">{{item}}</li>
    </ul>
    <!-- 商品列表 -->
    <div class="result" v-show="resultShow">
      <product v-for="(item, index) in resultList" :key="index"/>
    </div>
     <loading v-show="loadingShow"/>
  </div>
</template>

<script>
import { API_SEARCH_COMPLETE, API_SEARCH } from '@/api.config.js'
import Product from '../components/ProductList.vue'
import loading from '../components/LoaningIn.vue'
export default {
  data () {
    return {
      keyword: '', // 关键字
      suggestList: [], // 联想列表
      resultList: [], // 搜索列表
      loadingShow: false,
      history: []
    }
  },
  components: { Product, loading },
  computed: { // 计算属性
    suggestShow () {
      return this.suggestList.length
    },
    resultShow () {
      return this.resultList.length
    }
  },
  methods: {
    onInput () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(async () => {
        const suggestList = await this.$axios.post(API_SEARCH_COMPLETE, {
          keywordPrefix: this.keyword
        })
        console.log(suggestList)
        this.suggestList = suggestList
      }, 500)
    },
    onEnter () {
      this.getSearchResult(this.keyword)
    },
    async getSearchResult (productName) {
      if (productName === '') {
        return
      }
      this.loadHistory()
      this.saveHistory(productName)
      this.loadingShow = true
      this.suggestList = []
      const res = await this.$axios.get(API_SEARCH, {
        params: { // get 需要params post 不需要直接写参数
          Keyword: productName
        }
      })
      console.log(res)
      this.resultList = res || []
      this.loadingShow = false
    },
    select (productName) {
      this.keyword = productName
      this.getSearchResult(productName)
    },
    close () {
      this.keyword = ''
      this.suggestList = []
      this.resultList = []
    },
    loadHistory () {
      //             json转换为js     取得本地存储        key
      this.history = JSON.parse(localStorage.getItem('searchHistory')) || []
    },
    saveHistory (productName) {
      if (this.history.includes(productName)) {
        this.history.splice(this.history.indexOf(productName), 1) // splice去除  indexOf索引
      }
      this.history.unshift(productName) // 在前面插入
      // 本地存储    设置      key              转换为json
      localStorage.setItem('searchHistory', JSON.stringify(this.history))
    },
    removeHistory () {
      this.history = []
      localStorage.removeItem('searchHistory') // 删除 key密钥也删除
      // localStorage.setItem('searchHistory', JSON.stringify(this.history))   设置为空也可以 key密钥保留值为空
    }
  },
  mounted () {
    this.loadHistory()
  }
}
</script>

<style lang="scss" scoped>
  $fontA: 0.24rem;  $fontB: 0.28rem;  $fontC: 0.36rem;  $fontD: 0.4rem;  $colorA: #fff;  $colorB: #DD1A21;  $colorC: #333;  $colorD: #999;  $colorE: #f4f4f4;  $colorF: #666;
.container{
  background-color: $colorA;
  padding: 0 .2rem;
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: $colorA;
    .search-ipt{
      flex: 1;
      background-color: $colorE;
      padding: 0 .2rem;
      display: flex;
      .iconfont{
        font-size: $fontB;
        color: $colorC;
      }
      input{
        border: none;
        outline: none;
        background-color: $colorE;
        flex: 1;
        font-size: $fontB;
        margin: 0 .2rem;
      }
    }
    .cancel{ margin-left: .3rem;  }
  }
  .history{
    margin-top: .9rem;
    background-color: $colorA;
    &-title{
      font-size: $fontB;
      color: $colorD;
      .iconfont{
        color: $colorC;
        margin-left: .2rem;
      }
    }
    &-list{
      display: flex;
      flex-wrap: wrap;
      padding: 0 0 .2rem 0;
      li{
        margin: .1rem .2rem;
        border: #333 1px solid;
        padding: 0 3px;
        border-radius: 5px;
      }
    }
  }
  .suggest{
    margin-top: .9rem;
    padding: 0 .3rem;
    background-color: $colorA;
    &-item{
      padding: .2rem 0;
      background-color: $colorA;
    }
  }
}
</style>
