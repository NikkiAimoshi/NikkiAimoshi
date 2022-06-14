<template>
  <div>
      <div class="cate">
        <ul class="cate-nav">
          <li class="cate-nav-item" v-for="(item, index) in categoryList"
           :key="item.id" :class="{active: actived === index}" @click="select(index)">{{item.name}}</li>
        </ul>
        <ul class="cate-list">
          <li class="cate-list-item" v-for="sub in categoryGroupList" :key="sub.id">
            <div class="cate-list-item-title">{{sub.name}}</div>
            <ul class="sub-item">
              <li v-for="item in sub.categoryList" :key="item.id" @click="ToDetail(item.id)">
                <div>
                  <img :src="item.prettyBannerUrl" alt="">
                  <div>{{item.name}}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <nav-footer />
  </div>
</template>

<script>
import NavFooter from '../components/NavFotter.vue'
import { API_CATE, API_CATE_SUB } from '@/api.config'
export default {
  components: { NavFooter },
  data () {
    return {
      categoryList: [],
      actived: 0,
      categoryGroupList: [],
      loadingShow: false
    }
  },
  watch: {
    actived () {
      this.getSubCate(this.categoryList[this.actived].id)
      console.log(this.categoryList[this.actived].id)
    }
  },
  methods: {
    async getCategory () {
      this.loadingShow = true
      this.$showLoaging({ show: this.loadingShow })
      const { categoryList } = await this.$axios.get(API_CATE)
      console.log(categoryList)
      this.categoryList = categoryList
      this.getSubCate(this.categoryList[this.actived].id)
      this.loadingShow = false
      this.$showLoaging({ show: this.loadingShow })
    },
    select (index) {
      this.actived = index
    },
    async getSubCate (id) {
      const { category: { categoryGroupList } } = await this.$axios.post(API_CATE_SUB, { // 结构赋值
        categoryId: id
      })
      console.log(categoryGroupList)
      this.categoryGroupList = categoryGroupList
    },
    ToDetail (subId) {
      this.$router.push(`/catedetail/${this.categoryList[this.actived].id}/${subId}`)
    }
  },
  created () {
    this.getCategory()
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.cate{
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: .97rem;
  background-color: #fff;
  display: flex;
  &-nav{
    width: 1.4rem;
    padding: .2rem 0;
    margin-right: .2rem;
    &-item{
      height: .6rem;
      line-height: .6rem;
      text-align: center;
      margin-top: .35rem;
      color: #333;
    }
  }
  &-list{
    flex: 1;
    overflow-y: scroll;
    padding: .2rem;
    border-left: solid 1px #eee;
    &-item{
      margin-bottom: .3rem;
      &-title{
        color: #333;
        font-size: 700;
        border-bottom: 1px solid #ddd;
      }
      .sub-item{
        display: flex;
        flex-wrap: wrap;
        div{
          width: 1.6rem;
          margin: .4rem .2rem 0 0 ;
          text-align: center;
          img{
            width: 1.2rem;
            height: 1.2rem;
          }
          div{
            margin-top: .1rem;
            font-size: .15rem;
            // text-overflow: ellipsis;
            // overflow: hidden;
            // white-space: nowrap;
          }
        }
      }
    }
  }
  .active{
    position: relative;
    &::before{ // 伪元素选择器
      content: ''; // 插入
      position: absolute;
      left: 0%;
      top: 0rem;
      bottom: 0rem;
      width: .08rem;
      background-color: red;
    }
  }
}
</style>
