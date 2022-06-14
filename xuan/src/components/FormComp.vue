<template>
  <form class="form">
      <!-- 用户名 -->
      <div class="form-item">
          <input type="text" placeholder="用户名" v-model.trim="username">
          <div class="clear" @click="clearusername" v-show="isusername">
              <i class="iconfont icon-shanchu"></i>
          </div>
      </div>
      <!-- 密码 -->
      <div class="form-item">
          <input type="password" placeholder="密码" v-model.trim="password">
          <div class="clear" @click="clearpassword" v-show="ispassword">
              <i class="iconfont icon-shanchu"></i>
          </div>
      </div>
      <div v-show="this.registOrLogin === 'regist'">
        <!-- 邮箱 -->
      <div class="form-item">
          <input type="text" placeholder="邮箱账号" v-model.trim="email">
          <div class="clear" @click="clearemail" v-show="isemail">
              <i class="iconfont icon-shanchu"></i>
          </div>
      </div>
      <!-- 验证码 -->
      <div class="form-item">
          <input type="text" placeholder="验证码" v-model="code">
          <div class="status-msg" @click="getCode" v-show="isgetCode">获取验证码</div>
          <div class="status-msg" v-show="!isgetCode">{{statusMsg}}</div>
      </div>
      </div>
      <div class="back" @click="go" v-if="title && title.go">{{title.go}}</div>
      <div class="btn" @click="AonClick" v-if="title && title.btn">{{title.btn}} </div>
  </form>
</template>

<script>
import { API_USER_CODE } from '../api.config'
import cryptoJS from 'crypto-js'
export default {
  data () {
    return {
      username: '',
      password: '',
      email: '',
      code: '',
      statusMsg: '',
      isgetCode: true
    }
  },
  props: {
    registOrLogin: {
      type: String,
      default: 'login'
    }
  },
  computed: {
    isusername () {
      return this.username.length
    },
    ispassword () {
      return this.password.length
    },
    isemail () {
      return this.email.length
    },
    title () {
      let res = {}
      if (this.registOrLogin === 'login') {
        res = {
          go: '注册账号',
          btn: '登入',
          url: '/profile/regist'
        }
      } else if (this.registOrLogin === 'regist') {
        res = {
          go: '回到登入',
          btn: '注册',
          url: '/profile/login'
        }
      }
      return res
    }
  },
  methods: {
    clearusername () { this.username = '' },
    clearpassword () { this.password = '' },
    clearemail () { this.email = '' },
    // 获取验证码
    async getCode () {
      if (!this.email) {
        this.$showToast({
          msg: '请填写邮箱'
        })
        return
      }
      const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      if (!reg.test(this.email)) {
        this.$showToast({
          msg: '请填写正确邮箱'
        })
        // eslint-disable-next-line no-useless-return
        return
      } else {
        const { code, msg } = await this.$axios.post(API_USER_CODE, {
          email: this.email
        })
        if (code === 1) { // 发送成功
          this.isgetCode = false
          let count = 60
          this.timer = setInterval(() => {
            this.statusMsg = `${count--}秒后重发`
            if (count === 0) {
              clearInterval(this.timer)
              this.statusMsg = ''
              this.isgetCode = true
            }
          }, 1000)
          this.$showToast({
            msg
          })
        } else if (code === 0) this.$showToast({ msg })
      }
    },
    verifyFrom () {
      let msg = ''
      if (this.username === '') {
        msg = '请输入用户名'
      } else if (this.password === '') {
        msg = '请输入密码'
      } else if (this.registOrLogin === 'regist' && this.email === '') {
        msg = '请输入邮箱'
      } else if (this.registOrLogin === 'regist' && this.code === '') {
        msg = '请输入验证码'
      }
      if (msg !== '') {
        this.$showToast({ msg })
        return false
      }
      return true
    },
    AonClick () {
      // 密码加密
      this.$data.password = cryptoJS.MD5(this.$data.password).toString()
      // 验证表单 后 将data传入父级AonClick()事件中
      this.verifyFrom() && this.$emit('onClick', this.$data)
    },
    go () {
      this.$router.push(this.title.url)
    }
  }
}
</script>

<style lang="scss" scoped>
.form{
    padding: 0.4rem .3rem;
    &-item{
        height: .96rem;
        line-height: .96rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        input{
            outline: none;
            border: none;
            flex: 1;
        }
        .clear{
            width: .64rem;
            height: .64rem;
            text-align: center;
            line-height: .64rem;
        }
        .status-msg{
            height: .56rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            line-height: 1.8;
            text-align: center;
            padding: 0 .1rem;
            color: #777;
        }
    }
    .back{
        margin: .3rem 0;
        color: #7f7f7f;
    }
    .btn{
        width: 6.72rem;
        height: 1rem;
        margin: 0 auto;
        background: #DD1A21;
        color: white;
        text-align: center;
        line-height: 1rem;
    }
}
</style>
