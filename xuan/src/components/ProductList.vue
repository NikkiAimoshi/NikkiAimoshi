<template>
  <div class="item" v-if="item" @click="goDetail(item.id)">
    <img :src="item.listPicUrl" alt="" class="pic">
    <div class="desc">{{item.simpleDesc}}</div>
    <div class="name">{{item.name}}</div>
    <div class="price">￥{{item.retailPrice}}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push(`/detail/${id}`)
    }
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
.item{
  width: 3.2rem;
  font-size: $fontA;
  padding-bottom: .4rem;
  .pic{
    background-color: $colorE;
  }
  .name{
    font-size: $fontB;
    padding: .1rem 0;
    display: -webkit-box; // 两行省略
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .desc{
    height: .7rem;
    line-height: .7rem;
    padding: 0 .1rem;
    background-color: #f0ebe2;
    color: #9e8962;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price{
    color: $colorB;
    font-size: $fontC;
  }
}
</style>
