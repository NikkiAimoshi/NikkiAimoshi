<template>
  <div class="swiper" :style="{height: height}"
  @touchstart="onTouchStart" @touchend="onTouchEnd"
  >
    <!-- 图片内容 -->
    <ul class="swiper-slide" :style="slideStyle">
      <li class="swiper-item" v-for="(item, index) in list" :key="index" style="{width: itemWidth + 'px'}"
      @click="handleClick (item)"><!-- 循环谁 in 谁 @click
      v-for 要有 :key -->
        <img :src="item" alt="">
      </li>
    </ul>
    <!-- 分页器内容 -->
    <ul class="swiper-dots" v-if="options.showDots">
      <li class="dots-item" v-for="(item, index) in list"
      :key="index" :class="{active: nowIndex === index}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideStyle: { width: '15rem' }, // 默认
      itemWidth: 750, // 单张图片的宽 默认
      nowIndex: 0,
      timer: null,
      touchStart: {}, // 触摸开始的位置
      touchEnd: {} // 触摸结束的位置
    }
  },
  watch: { // 观察
    list () { // list发生变化时 执行
      this.calcWidth()
    }
  },
  props: { // 接收父组件传进来的参数
    height: { // 参数名  高度
      type: String, // 属性
      default: '3rem' // 默认值
    },
    list: {
      type: Array, // 引用数据类型  不能直接设置default  同data
      default () { // 若直接写 只会阴影同一值，用return每次引用新的值
        return []
      }
    },
    options: {
      type: Object,
      default () {
        return {
          showDots: true, // 是否显示分页器
          interval: 3000, // 轮播的间隔（时间）
          autoplay: true // 是否自动播放
        }
      }
    }
  },
  methods: { // 放方法的
    calcWidth () { // 计算轮播图slide的宽
      this.$nextTick(() => { // 等到页面更新完成在计算方法
        // 一张图片的宽
        this.itemWidth = document.body.clientWidth
        const length = this.list.length
        this.slideStyle.width = length * this.itemWidth + 'px'
        // console.log(this.itemWidth)
      })
    },
    move () {
      this.slideStyle.transform = `translateX(-${this.nowIndex * this.itemWidth}px)`
    },
    AutoMove () { // 自动播放
      if (this.options.autoplay) {
        this.timer = setInterval(() => {
          this.nowIndex++
          if (this.nowIndex > this.list.length - 1) {
            this.nowIndex = 0
          }
          this.move()
        }, this.options.interval)
      }
    },
    onTouchStart (a) {
      // 开始触摸点信息
      this.touchStart = a.changedTouches[0]
      // console.log(this.touchStart)
      if (this.options.autoplay) {
        clearInterval(this.timer) // 主要是转换到其他页面时停掉定时器 （影响性能）
      }
    },
    onTouchEnd (e) {
      // 结束触摸点信息
      this.touchEnd = e.changedTouches[0]
      // console.log(this.touchStart)
      // 左还是 右
      if (this.touchStart.clientX - this.touchEnd.clientX > 30) {
        this.nowIndex++
        if (this.nowIndex > this.list.length - 1) {
          this.nowIndex = 0
        }
      } else if (this.touchStart.clientX - this.touchEnd.clientX < 30) {
        this.nowIndex--
        if (this.nowIndex < 0) {
          this.nowIndex = this.list.length - 1
        }
      }
      this.move()
      this.AutoMove()
    },
    handleClick (item) {
      this.$emit('onClick', item)
    }
  },
  mounted () { // 钩子函数  在dome都加载完后调用
    this.calcWidth()
    this.AutoMove()
    window.addEventListener('resize', this.calcWidth) // 添加监听事件  resize事件监听窗口变化  this.calcWidth不加()是要自动调用  加()是手动调用
  },
  destroyed () { // 组件销毁时调用
    if (this.options.autoplay) {
      clearInterval(this.timer) // 主要是转换到其他页面时停掉定时器 （影响性能）
    }
    window.removeEventListener('resize', this.calcWidth) // 移除事件   监听事件中的方法一定是对象
  }
}
</script>

<style lang='scss' scoped>
.swiper{
  height: 175px;
  overflow: hidden;
  position: relative;
  &-slide{
    height: 100%;
    transition: .5s ease;
    .swiper-item{
      list-style: none;
      height: 100%;
      float: left;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  &-dots{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.16rem;
    .dots-item{
      width: .4rem;
      height: .04rem;
      background-color: #fff;
      opacity: .4;
      float: left;
      margin: 0 .04rem;
      &.active{
        opacity: 1;
      }
    }
  }
}
</style>
