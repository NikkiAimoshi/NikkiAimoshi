<template>
	<div class="outsss row justify-content-md-center">
		<div class="col-lg-5 col-md-8 logincon">
			<div class="loginComp  col-12" v-show="!registShow">
				<div class="d-flex topNav">
					<div class="nav"  @click="changeLoin(true)">
						登录
					</div>
				</div>
				<div class="poneToLogin row">		<!-- 手机密码登录的form -->
					<div class="loginInput col-6">
						<div class="userInput">
							<input :class="phoneRes?'':'errorActive'" @focus="this.phoneRes = true" type="text" class="" placeholder="请输入用户名" v-model="phone">
							<div class="delete" v-show="phone.length!=0" @click="phone=''">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
								</svg>
							</div>
						</div>
						<div class="passInput">
							<input :class="loginphonePWRes?'':'errorActive'" @focus="this.loginphonePWRes = true" type="text" class="" placeholder="请输入密码" v-model="loginphonePW">
							<div class="delete" v-show="loginphonePW.length!=0" @click="loginphonePW=''">
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
				<div class="row w-100  px-2">
					<div class="loginBtn col-6" @click="login">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
						</svg>
						<span>login</span>
					</div>
				</div>
				<div class="loginMenu flex-wrap">
					<div class="loginMenuLeft flex-wrap">
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
				<div class="close" @click="toClose()">
					<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
					</svg>
				</div>
			</div>
			<div class="regist loginComp col-12" v-show="registShow">
				<div class="d-flex topNav mt-2">
					注册
				</div>
				<div class="poneToLogin py-3">		<!-- 手机密码登录的form -->
					<div class="loginInput">
						<div class="userInput">
							<input :class="phoneRes?'':'errorActive'" @focus="this.phoneRes = true" type="text" class="" placeholder="请输入用户名" v-model="phone">
							<div class="delete" v-show="phone.length!=0" @click="phone=''">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
								</svg>
							</div>
						</div>
						<div class="passInput">
							<input :class="registphonePWRes?'':'errorActive'" @focus="this.registphonePWRes = true" type="text" class="" placeholder="8-16位密码,数字+字母" v-model="registphonePW">
							<div class="delete" v-show="registphonePW.length!=0" @click="registphonePW=''">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
								</svg>
							</div>
						</div>
						<div class="ponePassInput ">
							<input class="" @focus="this.registphoneCAPTCHARes = true" :class="registphoneCAPTCHARes?'':'errorActive'" type="text" placeholder="请输入验证码" v-model="registphoneCAPTCHA">
							<ponePassCanvas class="ponePass ms-auto mt-3" @canvasCode = 'canvasCodeChange'/>
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
							<input type="checkbox" name="" id="angree" checked>
							<span>我同意</span>
							<a target="_blank" href="https://reg.163.com/agreement_mobile_wap.shtml?v=20171127">《用户使用协议》</a>
						</div>
						<div class="loginMenuRight" @click="this.registShow = false">
							<a href="#">去登录</a>
							<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
							</svg>
						</div>
					</div>
				</div>
				<div class="close" @click="toClose()">
					<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
					</svg>
				</div>
			</div>
		</div>
	</div>
	
	
</template>

<script>
import ponePassCanvas from '@/components/canvas/ponePassCanvas.vue'
import { tologin,toRegist } from '@/api/index.js';
export default{
	name:'loginComp',
	components:{
		ponePassCanvas
	},
	data(){
		return{
			phone:'',					//用户名
			loginphonePW:'',			//登录密码
			registphonePW:'',			//注册密码
			registShow:false,			//注册登录显示
			tenDay:false,				//10天保存
			errorText:'',
			resphone:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, //手机号正则
			phoneRes:true,
			loginphonePWRes:true,
			registphonePWRes:true,  
			registphoneCAPTCHARes:true,
			registphoneCAPTCHA:'',
			canvasCode:''
		}
	},
	methods:{
		changeLoin(a){
			this.show = a;
		},
		toClose(user){
			this.$emit('loginClose',user)
		},
		login(){
			if(this.phone == ''){this.errorText = '请输入用户名';this.phoneRes = false;}
			else if(this.loginphonePW == ''){this.errorText = '请输入密码';this.loginphonePWRes = false;}
			else{
				tologin({user:this.phone,password:this.loginphonePW}).then(res=>{
					if(res.data.code == 1){
						alert(res.data.msg)
						this.toClose(res.data.user)
					}
					else if(res.data.code == 0){
						this.errorText = res.data.msg;
						this.phoneRes = false;
						this.loginphonePWRes = false;
					}
				}).catch(error=>{
					console.log(error)
				})
			}
		},
		regist(){
			var angree = document.getElementById('angree')
			if(this.phone == ''){this.errorText = '请输入用户名';this.phoneRes = false;}
			else if(this.registphonePW == ''){this.errorText = '请输入密码';this.registphonePWRes = false;}
			else if(this.registphoneCAPTCHA == ''){this.errorText = '请输入验证码';this.registphoneCAPTCHARes = false;}
			else if(this.canvasCode != this.registphoneCAPTCHA){this.errorText = '验证码错误';this.registphoneCAPTCHARes = false;}
			else if(!angree.checked){this.errorText = '请确认《用户使用协议》';}
			else{
				toRegist({user:this.phone,password:this.registphonePW}).then(res=>{
					console.log(res)
					if(res.data.code == 1){
						alert(res.data.msg)
					}else{
						this.errorText = res.data.msg
					}
				}).catch(error=>{
					console.log(error)
				})
			}
		},
		canvasCodeChange(code){
			this.canvasCode = code;
		}
	},
	watch:{
		errorText(){
			clearTimeout();
			setTimeout(()=>{
				this.errorText = '';
			},2000)
		},
		errorMsg(newval){
			this.errorText = newval;	
		}
	}
}
</script>

<style scoped lang="scss">
	.errorActive{
		color: #eb5036;
		border: #eb5036 solid 2px;
	}
	.outsss{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		margin: 0;
		padding: 30px 50px;

		.close{
			position: absolute;
			color: black;
			top: 10px;
			right: 10px;
			cursor: pointer;
		}
	}
	.logincon{
		margin-top: 100px;
	}
	.loginComp{
		background-color: white;
		border-radius: 10px;
		padding: 20px 0 20px 30px;
		position: relative;
		.topNav{
			.nav{
				font-size: 30px;
				font-weight: bold;
				color: black;
			}
		}
		.poneToLogin{
			margin-top: 10px;
			width: 100%;
			.loginInput{
				width: 100%;
				.delete{
					position: absolute;
					right: 10px;
					top: 5px;
				}
				input{
					width: 100%;
					height: 40px;
					font-size: 14px;
					text-indent: 10px;
					border-radius: 3px;
				}
				.userInput{
					width: 100%;
					position: relative;
					input{
						margin-bottom: 20px;
					}
				}
				.passInput{
					width: 100%;
					position: relative;
					input{
						margin-bottom: 10px;
					}
				}
			}
		}
		.error{
			position: absolute;
			top: 180px;
			right: 30px;
			font-size: 12px;
			color: red;
			span{
				margin-left: 6px;
			}
		}
		.loginBtn{
			width: 100%;
			height: 40px;
			border-radius: 5px;
			background-color: #a1a095 ;
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 20px;
			cursor: pointer;
			span{
				margin-left: 10px;
			}
		}
		.loginMenu{
			font-size: 12px;
			width: 92%;
			display: flex;
			justify-content: space-between;
			margin-top: 10px;
			align-items: center;
			.loginMenuLeft{
				margin-top: 10px;
				display: flex;
				align-items: center;
				a{
					text-decoration: none;
				}
				input{
					margin-right: 5px;
					height: 20px;
				}
				span{
					margin-right: 10px;
				}
			}
			.loginMenuRight{
				margin-top: 10px;
				color: #eb5036;
				a{
					color: #eb5036;
					text-decoration: none;
				}
			}
		}
	}
	.regist{
		background-color: white;
		border-radius: 10px;
		padding: 10px 0 0 30px;
		position: relative;
		.topNav{
			font-size: 30px;
			font-weight: bold;
			color: black;
			margin-bottom: 0;
		}
		.poneToLogin{
			padding-right: 30px;
			.loginInput{
				margin-top: 0px;
			}
			.passInput{
				
			}
			.ponePassInput{
				margin-top: 10px;
				width: 100%;
				padding: 0;
				input{
					width: 100%;
					padding: 0;
				}
				.ponePass{
					width: 100px;
					height: 40px;
					padding: 0;
					background-color: #eb5036;
					text-align: center;
					cursor: pointer;
				}
			}
		}
		.error{
			position: absolute;
			top: 305px;
			right: 30px;
		}
		.loginBtn{
			margin-top: 20px;
			width: 100%;
		}
		.loginMenu{
			margin-top: 10px;
			width: 100%;
		}
	}
</style>