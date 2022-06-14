<template>
	<navBarComp @logReg="logReg" :user="user"/>
	<div class="bg-img position-absolute w-100 position-fixed h-100 " :style="'z-index: -1; background-size: cover; background-image: url('+bgUrl+');'">
		<div class="position-absolute w-100 h-100 py-3" style="z-index: 5;" ></div>
	</div>
	<bannerComp/>
	<blogComp/>
	<skillCom />
	<IndividualWorksComp />
	<aboutMeComp/>
	<callComp/>
	<futterComp :showVal="footerdata"/>
	<transition name="login">
		<logReg v-show="loginShow" @loginClose = 'loginclose'/>
	</transition>
</template>

<script>
import navBarComp from '@/components/navBarComp.vue'
import blogComp from '@/components/blogComp.vue'
import skillCom from '@/components/skillComp.vue'
import aboutMeComp from '@/components/aboutMeComp.vue'
import callComp from '@/components/callComp.vue'
import futterComp from '@/components/futterComp.vue'
import bannerComp from '@/components/bannerComp.vue'
import logReg from '@/components/logReg.vue'
import IndividualWorksComp from '@/components/IndividualWorksComp.vue'
export default {
  name: 'indexPage',
  data(){
		return {
			bgUrl:'http://43.142.20.103/assets/img/overlay-bg.jpg',
			footerdata:false,		//底部透明显示
			loginShow:false,		//登录显示
			user:'',				//登录用户名
		}
  },
  components:{
		navBarComp,
		blogComp,
		skillCom,
		aboutMeComp,
		callComp,
		futterComp,
		bannerComp,
		logReg,
		IndividualWorksComp
  },
	methods:{
		logReg(){
			this.loginShow = !this.loginShow;
		},
		loginclose(user){
			this.loginShow = false;
			if(user){
				this.user = user;
			}else{
				this.user = 'login';
			}
		}
	},
	created() {
	}
}
</script>

<style>
	.bg-blueblack{background-color: #161d27 !important;;}
	.btn-secondaryellow{background-color: #a1a095 !important;}
	.text-secondaryellow{color: #a19975 !important;;}
	.text-ccc{color: #ccc !important;}
	.login-enter-active,.login-leave-active{
		transition: .5s;
	}
	.login-enter-from,.login-leave-to{
		opacity: 0;
	}
</style>
