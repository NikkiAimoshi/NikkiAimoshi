<template>
	<div class="loginComp" v-show="!registShow">
		<div class="d-flex topNav">
			<div class="nav" :class="show == true?'active':''" @click="changeLoin(true)">
				手机号登入
			</div>
			<div class="nav" :class="show == true?'':'active'" @click="changeLoin(false)">
				邮箱登入
			</div>
		</div>
		<div class="poneToLogin" v-show="show == true && phonePassShow == true">		<!-- 手机密码登录的form -->
			<div class="meliLogin">
				<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
					<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
				</svg>
				<span @click="this.phonePassShow = false;this.phonShow = false;">使用短信验证登入</span>
			</div>
			<div class="loginInput">
				<div class="userInput" :class="phoneRes?'':'errorActive'">
					<div class="drop" @click="this.phonShow = !this.phonShow">
						<span>{{poneNum}}</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
							<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
						</svg>
					</div>
					<input @focus="this.phoneRes = true" @blur="poneBlur" type="text" class="" placeholder="请输入手机号" v-model="phone">
					<div class="delete" v-show="phone.length!=0" @click="phone=''">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
						</svg>
					</div>
				</div>
				<ul class="poneDropDown" v-show="phonShow">
					<li v-for="(item ,key,index) of poneDropData" :key="index" @click="this.poneNum = item;this.phonShow = false">{{key}}  {{item}}</li>
				</ul>
				<div class="passInput" :class="loginphonePWRes?'':'errorActive'">
					<input @focus="this.loginphonePWRes = true" type="text" class="" placeholder="请输入密码" v-model="loginphonePW">
					<div class="delete" v-show="loginphonePW.length!=0" @click="loginphonePW=''">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div class="poneToLogin" v-show="show == true && phonePassShow == false">		<!-- 手机验证码登录的form -->
			<div class="meliLogin">
				<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
					<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
				</svg>
				<span @click="this.phonePassShow = true;this.phonShow = false;">使用账号密码登入</span>
			</div>
			<div class="loginInput">
				<div class="userInput" :class="phoneRes?'':'errorActive'">
					<div class="drop" @click="this.phonShow = !this.phonShow">
						<span>{{poneNum}}</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
							<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
						</svg>
					</div>
					<input @focus="this.phoneRes = true" type="text" @blur="poneBlur" class="" placeholder="请输入手机号" v-model="phone">
					<div class="delete" v-show="phone!=0" @click="phone=''">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
						</svg>
					</div>
				</div>
				<ul class="poneDropDown" v-show="phonShow">
					<li v-for="(item ,key,index) of poneDropData" :key="index" @click="this.poneNum = item;this.phonShow = false">{{key}}  {{item}}</li>
				</ul>
				<div class="passInput ponePassInput">
					<input @focus="this.loginphoneCAPTCHARes = true" type="text" :class="loginphoneCAPTCHARes?'':'errorActive'" class="" placeholder="请输入短信验证码" v-model="phoneCAPTCHA">
					<div class="ponePass">
						获取验证码
					</div>
				</div>
			</div>
		</div>
		<div class="meliToLogin" v-show="show != true">		<!-- 邮箱密码登录的form -->
			<div class="loginInput" style="margin-top: 35px;">
				<div class="userInput" :class="meilRes?'':'errorActive'">
					<div class="drop" style="width: 30px;margin-left: 10px;">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
							<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
						</svg>
					</div>
					<input @focus="this.meilRes = true" type="text" class="" placeholder="网易邮箱/常用邮箱" v-model="meil">
					<div class="delete" v-show="meil.length!=0" @click="meil=''">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
						</svg>
					</div>
				</div>
				<div class="passInput" :class="meilPWRes?'':'errorActive'">
					<div class="drop" style="width: 30px;margin-left: 10px;">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
							<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
						</svg>
					</div>
					<input @focus="this.meilPWRes = true" type="text" class="" placeholder="密码" v-model="meilPW">
					<div class="delete" v-show="meilPW.length!=0" @click="meilPW=''">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
						</svg>
					</div>
				</div>
			</div>
			
		</div>
		<div class="error" v-show="errorText.length!=0">
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
				<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
			</svg>
			<span>{{errorText}}</span>
		</div>
		<div class="loginBtn" @click="login">
			登录
		</div>
		<div class="loginMenu">
			<div class="loginMenuLeft">
				<input type="checkbox" name="" id="">
				<span>十天内免登录</span>
				<span>|</span>
				<a href="#">遇到问题？</a>
			</div>
			<div class="loginMenuRight" @click="this.registShow = true">
				<a href="#">去注册</a>
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
				</svg>
			</div>
		</div>
		<div class="otherlogin">
			<a href="#">其他登录方式</a>
			<ul>
				<li>
					<a href="#">
						<img src="@/assets/img/wb_icon.png" alt="">
						<span>QQ</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="@/assets/img/wb_icon.png" alt="">
						<span>微信</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="@/assets/img/wb_icon.png" alt="">
						<span>网易</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="@/assets/img/wb_icon.png" alt="">
						<span>有道</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="close" @click="toClose">
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
				<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
			</svg>
		</div>
	</div>
	<div class="regist loginComp" v-show="registShow">
		<div class="d-flex topNav">
			手机号注册
		</div>
		<div class="poneToLogin">		<!-- 手机密码登录的form -->
			<div class="loginInput">
				<div class="userInput" :class="phoneRes?'':'errorActive'">
					<div class="drop" @click="this.phonShow = !this.phonShow">
						<span>{{poneNum}}</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
							<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
						</svg>
					</div>
					<input @focus="this.phoneRes = true" type="text" @blur="poneBlur" class="" placeholder="请输入手机号" v-model="phone">
					<div class="delete" v-show="phone.length!=0" @click="phone=''">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
						</svg>
					</div>
				</div>
				<ul class="poneDropDown" v-show="phonShow">
					<li v-for="(item ,key,index) of poneDropData" :key="index" @click="this.poneNum = item;this.phonShow = false">{{key}}  {{item}}</li>
				</ul>
				<div class="passInput" :class="registphonePWRes?'':'errorActive'">
					<input @focus="this.registphonePWRes = true" type="text" class="" placeholder="8-16位密码,数字+字母" v-model="registphonePW">
					<div class="delete" v-show="registphonePW.length!=0" @click="registphonePW=''">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
						</svg>
					</div>
				</div>
				<div class="passInput ponePassInput">
					<input @focus="this.registphoneCAPTCHARes = true" :class="registphoneCAPTCHARes?'':'errorActive'" type="text" class="" placeholder="请输入短信验证码" v-model="phoneCAPTCHA">
					<div class="ponePass">
						获取验证码
					</div>
				</div>
			</div>
			<div class="error" v-show="errorText.length!=0">
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
				</svg>
				<span>{{errorText}}</span>
			</div>
			<div class="loginBtn" @click="regist">
				注册
			</div>
			<div class="loginMenu">
				<div class="loginMenuLeft">
					<input type="checkbox" name="" id="">
					<span>我同意</span>
					<a target="_blank" href="https://reg.163.com/agreement_mobile_wap.shtml?v=20171127">《用户使用协议》</a>
					<span>和</span>
					<a target="_blank" href="https://study.163.com/topics/privacy_policy">《有道隐私政策》</a>
				</div>
				<div class="loginMenuRight" @click="this.registShow = false">
					<a href="#">去登录</a>
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
					</svg>
				</div>
			</div>
		</div>
		<div class="close" @click="toClose">
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
				<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
			</svg>
		</div>
	</div>
	
</template>

<script>
export default{
	name:'loginComp',
	data(){
		return{
			show:true,					//手机与邮箱的显示
			phonePassShow: true,		//手机验证码与账号的显示
			phone:'',					//电话号码
			loginphonePW:'',			//登录密码
			registphonePW:'',			//注册密码
			loginphoneCAPTCHA:'',		//登录手机验证码
			registphoneCAPTCHA:'',		//注册手机验证码
			meil:'',					//邮箱
			meilPW:'',					//邮箱密码
			registShow:false,			//注册登录显示
			poneDropData:{
				"中国":'+86',
				"台湾地区":'+886',
				"香港地区":'+852',
				"马来西亚":'+60',
				"新加坡":'+65',
				"日本":'+81',
				"韩国":'+82',
				"美国":'+1'
			},
			poneNum:'+86',
			phonShow:false,				//+86 列表的显示
			tenDay:false,				//10天保存
			errorText:'',
			resphone:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, //手机号正则
			phoneRes:true,
			loginphonePWRes:true,
			meilRes:true,
			meilPWRes:true,
			registphonePWRes:true,
			loginphoneCAPTCHARes:true,
			registphoneCAPTCHARes:true
		}
	},
	methods:{
		changeLoin(a){
			this.show = a
		},
		toClose(){
			this.$emit('loginClose')
		},
		poneBlur(){
			if(!this.resphone.test(this.phone)){
				if(this.phone == ''){this.errorText = '请输入手机号';}
				else{this.errorText = '请输入正确的手机号';}
				this.phoneRes = false;
			}else{
				this.phoneRes = true;
				this.errorText = '';
			}
			
		},
		login(){
			if(this.show){
				if(!this.resphone.test(this.phone)){
					if(this.phone == ''){this.errorText = '请输入手机号';}
					else{this.errorText = '请输入正确的手机号';}
					this.phoneRes = false;
				}
				else if(this.phonePassShow){
					if(this.loginphonePW == ''){this.errorText = '请输入密码';this.loginphonePWRes = false;}
				}
				else if(this.loginphoneCAPTCHA == ''){this.errorText = '请输入验证码';this.loginphoneCAPTCHARes = false;}
			}else{
				if(this.meil == ''){this.errorText = '请输入邮箱';this.meilRes = false;}
				else if(this.meilPW == ''){this.errorText = '请输入密码';this.meilPWRes = false;}
			}
		},
		regist(){
			if(this.phone == ''){this.errorText = '请输入手机号';this.phoneRes = false;}
			else if(this.registphonePW == ''){this.errorText = '请输入密码';this.registphonePWRes = false;}
			else if(this.registphoneCAPTCHA == ''){this.errorText = '请输入验证码';this.registphoneCAPTCHARes = false;}
		}
	},
	watch:{
		errorText(){
			clearTimeout();
			setTimeout(()=>{
				this.errorText = '';
			},2000)
		}
	}
}
</script>

<style scoped lang="scss">
	.errorActive{
		border: #eb5036 1px solid !important;
		box-shadow: 0 0 2px #eb5036;
	}
	.error{
		color: #eb5036;
		float: left;
		font-size: 12px;
		line-height: 12px;
		display: flex;
		margin-left: 5px;
		align-items: center;
		//display: none;
		span{
			margin-left: 10px;
		}
	}
	.loginComp{
		width: 400px;
		padding: 16px 40px 30px 40px;
		border-radius: 3px;
		background-color: white;
		z-index: 9;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	.topNav{
		width: 100%;
		justify-content: space-between;
		font-weight: bold;
	}
	.nav{
		width: 50%;
		display: flex;
		justify-content: center;
		height: 52px;
		border-bottom: 2px solid #dcdcdc;
		line-height: 52px;
		color: #666;
		cursor: pointer;
		font-weight: bold;
		&.active{
			border-bottom: 2px solid red;
			color: #000;
		}
	}
	.meliLogin{
		width: 100%;
		height: 37px;
		float: right;
		display: flex;
		justify-content: right;
		align-items: center;
		span{
			margin-left: 10px;
			font-size: 13px;
			cursor: pointer;
		}
	}
	.loginInput{
		width: 100%;
		height: 125px;
		position: relative;
		float: left;
		.userInput,.passInput{
			height: 40px;
			width: 100%;
			border: #999 solid 1px;
			display: flex;
			justify-content: left;
			position: relative;
			.drop{
				width: 56px;
				height: 105%;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 40px;margin-left: 10px;
				cursor: pointer;
				span{
					font-size: 12px;
					color: #666;
				}
				svg{
					margin-left: 3px;
					color: #999;
				}
			}
			input{
				outline: none;
				border: none;
				height: 38px;
				width: 240px;
				font-size: 12px;
				text-indent: 5px;
				color: #666;
			}
			.delete{
				position: absolute;
				right: 10px;
				top: 10px;
				display: flex;
				align-items: center;
				cursor: pointer;
				svg{
					color: #ccc;
				}
			}
		}
		.passInput{
			margin-top: 30px;
			.drop{
				width: 30px;
			}
		}
		.ponePassInput{
			border: none;
			input{
				border: #666 1px solid;
				width: 225px;
			}
			.ponePass{
				width: 80px;
				height: 38px;
				border: #eb5036 solid 1px;
				margin-left: 10px;
				text-align: center;
				line-height: 38px;
				font-size: 12px;
				color: #eb5036;
				cursor: pointer;
			}
		}
	}
	.loginBtn{
		width: 100%;
		height: 40px;
		background-color: #eb5036;
		float: left;
		color: white;
		text-align: center;
		line-height: 44px;
		cursor: pointer;
		margin-top: 10px;
	}
	.loginMenu{
		height: 20px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		float: left;
		.loginMenuLeft{
			width: 180px;
			height: 16px;
			display: flex;
			align-items: center;
			font-size: 12px;
			margin-left: 3px;
			span{
				margin-left: 8px;
				&:hover{
					color: #eb5036;
				}
			}
			a{
				margin-left: 8px;
				color: #000;
				text-decoration: none;
				&:hover{
					color: #eb5036;
				}
			}
		}
		.loginMenuRight{
			color: #eb5036;
			font-size: 12px;
			margin-right: 3px;
			a{
				text-decoration: none;
				color: #eb5036;
			}
		}
	}
	.otherlogin{
		margin-top: 28px;
		display: flex;
		justify-content: space-between;
		float: left;
		a{
			height: 12px;
			line-height: 12px;
			color: #666;
			font-size: 12px;
			text-decoration: none;
		}
		ul{
			width: 210px;
			height: 30px;
			display: flex;
			justify-content: space-between;
			list-style: none;
			margin-right: 20px;
			li a{
				display: flex;
				flex-wrap: wrap;
				width: 40px;
				justify-content: center;
				span{
					margin-top: 10px;
				}
			}
		}
	}
	.close{
		position: absolute;
		top: 12px;
		right: 12px;
		cursor: pointer;
		&:hover svg{
			color: #eb5036;
		}
	}
	.poneDropDown{
		width: 100%;
		height: 150px;
		background-color: white;
		border: solid 1px #000;
		list-style: none;
		padding: 0 2px;
		overflow: auto;
		z-index: 11;
		position: absolute;
		li{
			height: 24px;
			text-indent: 16px;
			font-size: 12px;
			line-height: 24px;
			background-color: #fff;
			&:hover{
				background-color: #999;
			}
		}
	}
	.regist.loginComp{
		.loginInput{
			height: 200px;
			margin-top: 20px;
			input{
				text-indent: 10px;
			}
		}
		.loginMenuLeft{
			input{
				margin-right: 2px;
			}
			width: 300px;
			a,span{
				margin: 0;
			}
			margin: 0;
		}
		.loginMenuRight{
			float: right;
			width: 54px;
		}
	}
</style>