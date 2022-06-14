<template>
  <div class="container">
    <nav-footer />
    <div v-if="userInfo">
      <div class="userinfo">
        <div class="avatar">
        <img src="../assets/image/avatar-default.png" alt="">
      </div>
      <div class="username">asd</div>
      </div>
      <div class="menu">
        <div class="menu-item">我的订单</div>
        <div class="menu-item" @click="logout">推出登入</div>
      </div>
    </div>
    <div v-else>
      <div class="logo">
      <img src="@/assets/image/yanxuan.png" alt="">
    </div>
    <router-view />
    </div>
    <header-top />
  </div>
</template>

<script>
import NavFooter from '../components/NavFotter.vue'
import HeaderTop from '../components/HeaderTop.vue'
import { API_USER_LOGOUT } from '../api.config'
export default {
  components: { NavFooter, HeaderTop },
  computed: {
    userInfo () {
      return this.$store.state.userInfo // 获取vuex中的userinfo
    }
  },
  methods: {
    logout () {
      console.log(this.userInfo)
      this.$showToast({ // 弹窗'是否确认退出'加button加传入返回函数
        btnShow: true,
        msg: '是否确认退出',
        callBack: async () => {
          const res = await this.$axios.get(API_USER_LOGOUT) // 后端退出
          if (res.code === 1) { // 退出成功
            this.$store.commit('setUserInfo', null) // 将vuex中的userinfo清空
            this.$showToast({ // 弹窗'退出成功'
              msg: '退出成功'
            })
            setTimeout(() => {
              this.$router.go(0) // 页面刷新
            }, 1000)
          } else {
            this.$showToast({
              msg: '退出失败'
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  background-color: white;
  .logo{
    height: 3rem;
    margin-top: .88rem;
    position: relative;
    img{
      width: 3rem;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .userinfo{
    height: 2.2rem;
    margin-top: .88rem;
    background-image: url('../assets/image/profile-bg.png');
    padding: 0 .2rem;
    display: flex;
    align-items: center;
    .avatar{
      flex: 1;
      img{
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }
    }
    .username{
      flex: 2;
      font-size: .4rem;
      color: white;
    }
  }
  .menu-item{
    height: 1rem;
    line-height: 1rem;
    background-color: white;
    text-align: center;
    margin-top: .1rem;
  }
}

</style>
