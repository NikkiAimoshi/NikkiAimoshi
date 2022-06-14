<template>
  <div class="container">
    <formcomp registOrLogin="login" @onClick="onLogin"/>
  </div>
</template>

<script>
import formcomp from '../components/FormComp.vue'
import { API_USER_LOGIN } from '@/api.config.js'
export default {
  components: { formcomp },
  methods: {
    async onLogin ({ username, password }) {
      const { code, msg, user } = await this.$axios.post(API_USER_LOGIN, {
        username,
        password
      })
      if (code === 0) {
        console.log(code)
        this.$showToast({ msg })
      } else if (code === 1) {
        this.$showToast({ msg })
        console.log(user)
        // 将用户信息保存到Vuex
        this.$store.commit('setUserInfo', user)
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
