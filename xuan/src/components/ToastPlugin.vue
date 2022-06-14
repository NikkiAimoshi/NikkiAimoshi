<template>
  <div class="container" v-show="show">
      <div class="toast">
          <div class="msg">{{msg}}</div>
          <div class="btn" v-show="btnShow">
              <div class="btn-cancel" @click="cancel">取消</div>
              <div class="btn-confirm" @click="confirm">确认</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      msg: '',
      btnShow: false,
      callBack: null
    }
  },
  watch: {
    show () {
      if (this.show && !this.btnShow) {
        setTimeout(() => {
          this.show = false
        }, 1000)
      }
    }
  },
  methods: {
    cancel () {
      this.show = false
    },
    confirm () {
      this.cancel()
      this.callBack && this.callBack()
    }
  }

}
</script>

<style lang="scss" scoped>
.container{
    position: absolute;
    top: 0;left: 0%;right: 0;bottom: 0;
    z-index: 10;
    .toast{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: rgba($color: #ccc, $alpha: .8);
        border-radius: .1rem;
        padding: .3rem .6rem;
        text-align: center;
        border: 1px solider #000;
        .btn{
            height: .8rem;
            display: flex;
            align-items: center;
            margin-top: .4rem;
            border: 1px solider #eee;
            div{
                flex: 1;
            }
            &-cancel{
                border-left: .1rem solider #333;
            }
        }
    }
}
</style>
