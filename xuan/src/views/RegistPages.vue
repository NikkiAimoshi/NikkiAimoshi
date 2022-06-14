<template>
  <div class="container">
    <formcomp registOrLogin="regist" @onClick="onRegist"/>  <!-- Aonclick 事件命名为onRegist -->
  </div>
</template>

<script>
import formcomp from '../components/FormComp.vue'
import { API_USER_REGIST } from '@/api.config'
export default {
  components: { formcomp },
  methods: {
    async onRegist (info) { // 接受传入的参数
      console.log(info)
      const { code, msg } = await this.$axios.post(API_USER_REGIST, {
        info
      })
      this.$showToast({ msg })
      console.log(code, msg)
      if (code === 1) { // 注册成功
        this.$router.push('/profile/login') // 返回登入界面
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
