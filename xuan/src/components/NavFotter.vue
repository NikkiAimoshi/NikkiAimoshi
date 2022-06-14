<template>
  <div class="nav">
      <router-link to="/" class="nav-item">
      <i class="iconfont icon-shouye"></i>   <!-- iconfont加（代码） :  算是字体 -->
        <div>首页</div>
      </router-link>
      <router-link to="/Category" class="nav-item">
      <i class="iconfont icon-fenlei"></i>
        <div>分类</div>
      </router-link>
      <router-link to="/Cart" class="nav-item">
      <i class="iconfont icon-gouwuche"></i>
        <div>购物车</div>
      </router-link>
      <router-link to="/Profile/login" class="nav-item">
      <i class="iconfont icon-geren"></i>
        <div>个人</div>
      </router-link>
  </div>
</template>

<script>
export default {

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
.nav{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.97rem;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: $colorA;
    border: solid 1px #d9d9d9;
    line-height: 1.4;
    &-item{
        flex: 1;
        text-align: center;
        outline: none;
        div{
            color: $colorF;
        }
        .iconfont{
          font-size: $fontD;
          color: $colorF;
        }
    }
    .router-link-exact-active{
        div{
            color: $colorB;
        }
        &:active{
            -webkit-tap-highlight-color: transparent;       //点击是有蓝色的背景  改为透明的
        }
        .iconfont{
          color: $colorB;
        }
    }
}
</style>
