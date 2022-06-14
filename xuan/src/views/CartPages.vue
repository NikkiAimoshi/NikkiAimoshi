<template>
  <div>
    <div class="title">购物车</div>
    <div class="">

    </div>
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '../components/NavFotter.vue'
export default {
  data () {
    return {
      message: 'hello'
    }
  },
  components: { NavFooter }
}
</script>

<style lang='scss' scoped>
.title{
  font-size: 20px;
  padding: 10px 0 10px 20px;
  border-bottom: 1px solid #ccc;
}
</style>
