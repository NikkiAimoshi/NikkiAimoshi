<template>
  <div class="con">
      <top-noode />
      <div class="scroll-container" ref="scroll-container">
          <div class="scroll-inner" ref="scroll-inner">
              <div class="product">
                <cate-detail v-for="(item, index) in Cate" :key="index" :item="item.categoryItem"/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import TopNoode from '@/components/HeaderTop.vue'
import CateDetail from '@/components/ProductList.vue'
import { API_HOME_RCMD } from '@/api.config'
export default {
  data () {
    return {
      Cate: [],
      containerH: 0,
      innerH: 0,
      containerTop: 0
    }
  },
  components: { TopNoode, CateDetail },
  methods: {
    async getCateDetail (cateId, subId, size = 20, lastItemId = 0) {
      const { rcmdItemList } = await this.$axios.post(API_HOME_RCMD, {
        // cateId,
        // subId,
        size,
        lastItemId
      })
      this.Cate = this.Cate.concat(rcmdItemList)
      console.log(this.Cate)
    },
    inscsroll () {
      this.innerH = this.scrollInner.scrollHeight
      this.containerTop = this.scrollContainer.scrollTop
      console.log(this.containerTop, this.containerH, this.innerH)
      if (this.containerTop + this.containerH >= this.innerH - 2) {
        this.getCateDetail(this.Cate[this.Cate.length - 1].id)
      }
    },
    debounce (fn, dealy) {
      let timer = null
      return () => {
        if (timer !== null) {
          clearInterval(timer)
        }
        timer = setInterval(fn, dealy)
        setTimeout(() => { clearInterval(timer) }, 1000)
      }
    }
  },
  created () {
    const { cateId, subId } = this.$route.params
    this.getCateDetail(cateId, subId)
  },
  mounted () {
    this.$nextTick(() => {
      this.scrollContainer = this.$refs['scroll-container']
      this.scrollInner = this.$refs['scroll-inner']
      this.containerH = this.scrollContainer.clientHeight
      console.log(this.containerH)
      this.scrollContainer.addEventListener('scroll', this.debounce(this.inscsroll, 250))
    })
  }

}
</script>

<style lang="scss" scoped>
.product{
    padding: 0 .3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.scroll{
    &-container{
        position: absolute;
        top: 1rem;
        left: 0%;
        right: 0;
        bottom: 0%;
        overflow-y: scroll;
    }
}
</style>
<!-- <template>
  <div class="con">
      <top-noode />
      <div class="product">
          <cate-detail v-for="(item, index) in Cate" :key="index" :item="item.categoryItem"/>
      </div>
  </div>
</template>

<script>
import TopNoode from '@/components/HeaderTop.vue'
import CateDetail from '@/components/ProductList.vue'
import { API_HOME_RCMD } from '@/api.config'
export default {
  data () {
    return {
      Cate: {}
    }
  },
  components: { TopNoode, CateDetail },
  methods: {
    async getCateDetail (cateId, subId, size = 20, lastItemId = 0) {
      const { rcmdItemList } = await this.$axios.post(API_HOME_RCMD, {
        // cateId,
        // subId,
        size,
        lastItemId
      })
      this.Cate = rcmdItemList
      console.log(this.Cate)
    }
  },
  created () {
    const { cateId, subId } = this.$route.params
    this.getCateDetail(cateId, subId)
  }

}
</script>

<style lang="scss" scoped>
.product{
    margin-top: 1rem;
    padding: 0 .3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style> -->
