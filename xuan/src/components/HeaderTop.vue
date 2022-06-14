<template>
  <div class="header">
      <div class="home" @click="$router.push('/')">
          <i class="iconfont icon-shouye"></i>
      </div>
      <img src="../assets/image/logo.png" alt="" class="logo">
      <div class="search">
          <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
          <i class="iconfont icon-gouwuche" @click="$router.push('/cart')"></i>
          <span class="cart-num">{{cartNum}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartNum: 99
    }
  }

}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: .88rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solider #ccc;
    padding: 0 .3rem;
    position: fixed;
    z-index: 10;
    top: 0%;
    left: 0%;
    box-sizing: border-box;
    background-color: #fff;
    .iconfont{
        font-size: .56rem;
    }
    .logo{
        width: 1.72rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .search{
        position: relative;
        .iconfont{
            font-size: .5rem;
            margin: .1rem;
        }
        span{
            position: absolute;
            left: 1.2rem;
            top: .03rem;
            color: #fff;
            background-color: red;
            border-radius: 50%;
            height: .3rem;
            width: .3rem;
            line-height: .3rem;
            text-align: center;
        }
    }
}
</style>
