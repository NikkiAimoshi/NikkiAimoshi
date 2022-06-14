<template>
	<div class="topNav">
		<div class="topNav-center">
			<img src="@/assets/img/logo1.png" class="topNav-logo" style="width: 140px;height: 42px;background-size: cover;" alt="">
			
			<div class="topNav-input">
				
				<div class="topNav-input-left" @mouseover="this.dropIn = false; hover()" @mouseout="hidder">
					<span class="topNav-input-left-span">
						{{inputLeftType}}
						<svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 3px;" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
						</svg>
					</span>
					<div class="topNav-input-left-hover" @click="hidder">
						<span :class="inputLeftType=='课程'?'active':''" @click="inputLeftClass">课程</span>
						<span :class="inputLeftType=='课程'?'':'active'"  @click="inputLeftSchool">网校</span>
					</div>
				</div>
				
				<div class="delete" @click.stop="deleteHistory();drop()" v-show="history.length && this.dropIn == true" style="cursor: pointer;">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
						<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
					</svg>
					<span>清除</span>
				</div>
				
				<input ref="input" type="text" :placeholder="inputplaceholder" v-model="inputtext" class="topNav-input-search" @blur="dropNo" @focus="drop" @click="drop" @input="inputFun" >
				
				<div class="topNav-input-right" @click="search">
					搜索
				</div>
				
				<div class="dropDown" :class="this.dropIn==true?'showIn':''" v-show="inputtext.length==0">
					<div class="his"  v-show="history.length">
						<span>历史搜索</span>
						<ul class="history">
							<li @click="dfs()" v-for="(item ,index) in history.slice(0,5)" :key="index" ><a :href="'https:study.163.com/courses-search?keyword='+item">{{item}}</a></li>
						</ul>
					</div>
					<span>热门搜索</span>
					<ul class="Hot">
						<li @click="dfs()" v-for="(item ,index) in showlist" :key="index" ><a :href="item.linkSrc">{{item.name}}</a></li>
					</ul>
				</div>
				<div class="SearchDropDown" v-show="inputtext.length>0">
					<ul class="Hot">
						<li v-for="(item ,index) in searchData" :key="index" ><a :href="item.linkSrc">{{item.name}}</a></li>
					</ul>
				</div>
			</div>
			
			
			
			
			<ul class="topNav-svgs">
				<li class="download-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
						<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
						<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
					</svg>
					<div class="download-box">
						<img src="@/assets/img/show_ewm.png" alt="">
						<div class="small">
							<p>扫码下载官方App</p>
							<img src="@/assets/img/an_logo.png" alt="">
							<img src="@/assets/img/apple_logo.png" alt="">
						</div>
					</div>
				</li>
				<li class="wx-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
						<path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
					</svg>
					<div class="wx-box">
						<p class="fs-7">关注云课堂官方微信号</p>
						<p class="fs-8">领取课程免费福利，超值学习资料</p>
						<img src="@/assets/img/ewm_icon_share.png" alt="">
					</div>
				</li>
				<li>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
						<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
					</svg>
				</li>
				<li>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
						<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
					</svg>
				</li>
				<li>
					<div class="line"></div>
				</li>
				<li>
					<a href="#">会员中心</a>
				</li>
				<li>
					<a href="#">我的学习</a>
				</li>
				<li>
					<div class="line"></div>
				</li>
				<li>
					<img src="@/assets/img/user_huanguan.png" style="width: 17px;margin-right: 3px;" alt="">
					<a href="#" @click="toLogin">hais...</a>
				</li>
				<li>
					<img src="@/assets/img/user_image.png" alt="">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'topNav',
	data(){
		return{
			inputLeftType:'课程',
			inputType:'0',
			dropIn:false,
			inputplaceholder:'',
			showlist:'',
			inputtext:'',
			history:'',
			searchData:''
		}
	},
	watch:{
		Higher(newval){
			this.inputplaceholder = newval
		},
		Hot(newval){
			this.showlist = newval
		}
	},
	props:['Hot','Higher','School'],
	methods:{
		inputLeftClass(){
			this.inputLeftType = '课程' ;
			this.$refs.input.focus();
			this.inputplaceholder = this.Higher;
			this.showlist = this.Hot;
			this.history = JSON.parse(localStorage.getItem('historyJson')).class;
			this.inputFun();
		},
		inputLeftSchool(){
			this.inputLeftType = '网校';
			this.$refs.input.focus();
			this.inputplaceholder = '网校';
			this.showlist = this.School;
			this.history = JSON.parse(localStorage.getItem('historyJson')).school;
			this.inputFun();
		},
		drop(){
			setTimeout(()=>{
				this.dropIn = true
			},10)
		},
		dropNo(){
			setTimeout(()=>{
				this.dropIn = false;
			},100)
		},
		hover(){
			var a = document.getElementsByClassName('topNav-input-left-hover')[0];
			a.style.display = 'block'
		},
		hidder(){
			var a = document.getElementsByClassName('topNav-input-left-hover')[0];
			a.style.display = 'none'
		},
		search(){
			location.href = `https://study.163.com/courses-search?keyword=${this.inputtext}`
			if(localStorage.getItem('historyJson')){
				var val = localStorage.getItem('historyJson');
				val = JSON.parse(val)
				console.log(val)
				if(this.inputLeftType == '课程'){
					val.class.unshift(this.inputtext)
				}else{
					val.school.unshift(this.inputtext)
				}
				localStorage.setItem('historyJson',JSON.stringify(val));
				if(this.inputLeftType == '课程'){
					this.history = JSON.parse(localStorage.getItem('historyJson')).class;
				}else{
					this.history = JSON.parse(localStorage.getItem('historyJson')).school;
				}
			}else{ 			//没有localStorage时 创建history
				var history = {
					"class":[],
					"school":[]
				}
				localStorage.setItem('historyJson',JSON.stringify(history))
			}
		},
		deleteHistory(){	//清除历史记录
			this.history = '';
			var val = JSON.parse(localStorage.getItem('historyJson'));
			localStorage.setItem('historyJson','')
			if(this.inputLeftType == '课程'){
				val.class = []
			}else{
				val.school = []
			}
			localStorage.setItem('historyJson',JSON.stringify(val))
		},
		inputFun(){
			var _this = this;
			if(this.inputtext.length>0){
				if(this.inputLeftType == '课程'){
					axios.get("http://myjavascript.cn/getText",{
						params:{
							name: _this.inputtext
						}
					}).then(res=>{
						console.log(res.data);
						if(res.data == '没有数据'){
							this.searchData = null;
						}else
							this.searchData =  res.data;
					}).catch(function(err){
						console.log(err);
					})
				}else{
					axios.get("http://myjavascript.cn/getAllSchool",{
						params:{
							name: _this.inputtext
						}
					}).then(res=>{
						console.log(res.data);
						if(res.data == '没有数据'){
							this.searchData = null;
						}else
							this.searchData =  res.data;
					}).catch(function(err){
						console.log(err);
					})
				}
			}
		},
		toLogin(){
			this.$emit('LoginShow')
		}
	},
	created(){
		if(localStorage.getItem('historyJson')){
			this.history = JSON.parse(localStorage.getItem('historyJson')).class
			console.log(this.history)
		}
	}
	
}
</script>

<style scoped="" lang="scss">
	.topNav{
		width: 100%;
		height: 56px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
	}
	.topNav-center{
		height: 100%;
		width: 1205px;
		display: flex;
		align-items: center;
		.topNav-logo{
			height: 44px;
			width: 140px;	
			margin-right: 24px;
		}
	}
	.topNav-input{
		height: 38px;
		width: 528px;
		border: 1px solid #ff3f29;
		border-radius: 5px;
		display: flex;
		align-items: center;
		position: relative;
		.topNav-input-left{
			position: relative;
			height: 100%;
			width: 65px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 14px;
			cursor: pointer;
		}
	}
	.topNav-input-left-hover{
		width: 60px;
		height: 70px;
		z-index: 4;
		padding-top: 3px;
		padding-bottom: 3px;
		background-color: white;
		box-shadow: 0px 0px 2px #ccc;
		position: absolute;
		top: 37px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		text-align: center;
		display: none;
		cursor: pointer;
	}
	//.topNav-input-left:hover .topNav-input-left-hover{display: block;}
	.topNav-input-left-span:hover {color: #ff3f29;}
	.topNav-input-left-hover span{
		font-size: 14px;
		width: 100%;
		height: 48%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.topNav-input-left-hover span:hover {
		color: #ff3f29;
	}
	.topNav-input-left-hover span.active{
		background: rgba(220, 220, 220, .6);
		color: #ff3f29;
	}
	.delete{
		position: absolute;
		right: 100px;
		display: flex;
		align-items: center;
		font-size: 13px;
		&:hover{
			color: red;
		}
		span{
			margin-left: 8px;
			&:hover{
				color: red;
			}
		}
	}
	
	.dropDown,.SearchDropDown{
		width: 101%;
		background-color: white;
		padding: 10px 0px 0px 0px;
		position: absolute;
		left: 0;
		top: 38px;
		border-radius: 5px;
		z-index: 3;
		box-shadow: 0px 1px 4px #ccc;
		transform: .5s;
		display: none;
		span{
			font-size: 12px;
			color: #999;
			padding-left: 8px;
		}
		.Hot{
			text-decoration: none;
			list-style: none;
		}
		ul{
			padding: 0;
			margin: 0;
			li{
				height: 40px;
				line-height: 40px;
				padding-left: 15px;
				&:hover {
					background-color: rgba(200, 200, 200, .5);
				}
				&:hover a{
					color: #ff3f29;
				}
				a{
					text-decoration: none;
					font-size: 14px;
					color: #333;
				}
			}
		}
	}
	.SearchDropDown{
		padding: 0;
		border: none;
		box-shadow:none;
		display: inline-block;
		ul li:hover a{
			color: #333;
		}
	}
	.showIn{
		animation: showInframes .5s 1;
		display: block;
	}
	@keyframes showInframes {
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}
	
	
	
	
	.topNav-input-search{
		height: 100%;
		width: 389px;
		outline: none;
		border: none;
		color: #a5a5a5;
		text-indent: 10px;
		overflow: hidden;
	}
	.topNav-input-right{
		background: #ff3f29;
		height: 104%;
		width: 78px;
		position: absolute;
		right: -3px;
		top: -1px;
		z-index: 2;
		color: white;
		font-size: 14px;
		text-align: center;
		border-radius: 0 5px 5px 0;
		line-height: 38px;
		cursor: pointer;
	}
	.topNav-svgs{
		display: flex;
		list-style: none;
		width: 520px;
		padding-left: 20px;
		justify-content: space-around;
		align-items: center;
		font-size: 14px;
		margin-bottom: 0;
	}
	.topNav-svgs li svg{
		margin-right: 12px;
		cursor: pointer;
		color: #555;
	}
	.topNav-svgs li a{
		text-decoration: none;
		color: black;
	}
	.topNav-svgs li .line{
		height: 20px;
		width: 1px;
		background: black;
	}
	.topNav-svgs li svg:hover{
		color: red;
	}
	.topNav-svgs li a:hover{
		color: red;
	}
	.wx-icon{
		position: relative;
	}
	.wx-icon:hover .wx-box{
		display: block;
	}
	.wx-box{
		width: 240px;
		height: 227px;
		background: white;
		position: absolute;
		top: 30px;
		left: -110px;
		border-radius: 5px;
		z-index: 2;
		box-shadow: 0 0 3px #ccc;
		display: none;
		p{
			height: 14px;
			line-height: 14px;
			text-align: center;
			margin-top: 18px;
			z-index: 100;
			color: black;
		}
		.fs-7{
			font-size: 14px;
		}
		.fs-8{
			font-size: 12px;
		}
		img{
			width: 125px;
			height: 125px;
			margin-left: 58px;
		}
	}
	.download-icon{
		position: relative;
		&:hover .download-box{
			display: block;
			animation: show .2s 1;
		}
		.download-box{
			width: 350px;
			height: 180px;
			background: white;
			box-shadow: 0 0 3px #ccc;
			position: absolute;
			z-index: 4;
			bottom: -190px;
			left: -137px;
			display: none;
			transition: 1s;
			.download-box:hover{
				display: block;
			}
			img{
				padding: 23px 23px;
				float: left;
			}
			.small{
				img{
					padding: 8px 0px;
				}
				p{
					text-align: left;
					margin: 20px 0 0 0;
					font-size: 16px;
				}
			}
		}
		.download-box::after{
			content: "";
			width: 15px;height: 15px;
			position: absolute;
			background: white;
			transform: rotate(45deg);
			box-shadow: -1px -1px 1px #ccc;
			left: 137px;
			top: -7px;
		}
	}
	@keyframes show{
		from{
			opacity: 0;
			transform: scale(.8);
		}
		to{
			opacity: 1;
			transform: scale(1);
		}
	}
</style>