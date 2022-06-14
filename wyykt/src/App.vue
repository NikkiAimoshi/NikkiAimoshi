<template>
  <topNode/>
  <topNav :Hot="Hot" :Higher="Higher" :School="School" @LoginShow='loginshow'/>		<!-- 搜索 -->
  <navCarousl :needData = "navCarousl" :slider = "slider"/>
  <promiseNode/>	<!-- 网易承诺 -->
  <openClass :needDataR = "rightOpen" :needDataL = "Broadcast"/>		<!-- 公开课 -->
  <fineClass :needData = "elite"/>		<!-- 精品课 -->
  <smallMajor :needData = "major"/>		<!-- 微专业 -->
  <flashSale :needData = "flash"/>		<!-- 限时秒杀 -->
  <interestChose/>	<!-- 兴趣 -->
  <seriesClass :needData = "series"/>	<!-- 系列课程 -->
  <allClass :needData = "goodClass" title="精选好课"/>		<!--  -->
  <allClass :needData = "newClass" title="新课推荐"/>		<!--  -->
  <allClass :needData = "freeClass" title="免费好课"/>		<!--  -->
  <bottomLink/>		<!-- bottom图片 -->
  <fotterLink/>		<!-- fotter -->
  <transition name="login">		<!-- 动画 -->
	<loginComp v-if="loginShow" @loginClose = 'loginclose'/>		<!-- 登入 -->
  </transition>
  <transition name="login">
	<div class="mask" v-if="maskShow"></div>
  </transition>
  
  
</template>

<script>
import topNode from '@/components/topNode.vue'
import topNav from '@/components/topNav.vue'
import navCarousl from '@/components/navCarousl.vue'
import promiseNode from '@/components/promiseNode.vue'
import openClass from '@/components/openClass.vue'
import fineClass from '@/components/fineClass.vue'
import smallMajor from '@/components/smallMajor.vue'
import flashSale from '@/components/flashSale.vue'
import interestChose from '@/components/interestChose.vue'
import seriesClass from '@/components/seriesClass.vue'
import allClass from '@/components/allClass.vue'
import bottomLink from '@/components/bottomLink.vue'
import fotterLink from '@/components/fotterLink.vue'
import loginComp from '@/components/loginComp.vue'
import axios from 'axios';
export default{
  name: 'App',
  components: {
    topNode,topNav,navCarousl,promiseNode,openClass,fineClass,smallMajor,flashSale,interestChose,seriesClass,allClass,bottomLink,fotterLink,loginComp
  },
  data(){
	return{
		elite: '',			//精品课数据
		major: '',			//微专业数据
		series: '',			//系列课程数据
		goodClass: '',
		newClass:'',
		freeClass:'',
		rightOpen:'',
		navCarousl:'',
		Broadcast:'',
		slider:'',
		flash:'',
		Hot:'',
		Higher:'',
		School:'',
		loginShow:false,
		maskShow:false
	}
  },
  methods:{
	loginshow(){
		this.loginShow = true;
		this.maskShow = true;
	},
	loginclose(){
		this.loginShow = false;
		this.maskShow = false;
	}
  },
  created(){
		axios.get("http://myjavascript.cn/getElite").then(res=>{	//精品课数据请求
			this.elite = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getMajor").then(res=>{	//微专业数据请求
			this.major = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getSuccess").then(res=>{	//系列课程数据请求
			this.series = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getClass").then(res=>{	//课程数据请求
			this.goodClass = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getNewClass").then(res=>{	//newClass数据请求
			this.newClass = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getFreeClass").then(res=>{	//freeClass数据请求
			this.freeClass = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getRightOpen").then(res=>{	//公开课数据请求
			this.rightOpen = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getBroadcast").then(res=>{	//公开课数据请求
			this.Broadcast = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getList").then(res=>{	//公开课数据请求
			this.navCarousl = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getSlider").then(res=>{	//轮播图数据请求
			this.slider = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getFlash").then(res=>{	//限时秒杀数据请求
			this.flash = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getHot").then(res=>{		//热门搜索数据请求
			this.Hot = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getHigher").then(res=>{		//搜索栏关键词数据请求
			this.Higher = res.data;
		}).catch(function(err){
			console.log(err)
		})
		axios.get("http://myjavascript.cn/getSchool").then(res=>{		//网校数据请求
			this.School = res.data;
			//console.log(res.data);
		}).catch(function(err){
			console.log(err)
		})
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	body{
		background-color: #f2f2f2;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.mask{
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
		left: 0;
		top: 0;
		position: absolute;
		z-index: 3;
	}
	.login-enter-active,.login-leave-active{	/* 动画开始结束的状态 */
		transition: .5s;
	}
	.login-enter-from,.login-leave-to{			/* 动画开始结束的样式 */
		opacity: 0;
	}
</style>
