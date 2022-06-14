<template>
	<div class="navHover" v-show="vShow" @mouseover="show" @mouseout="hide">
		<div class="navHover-node">
			<div class="title">
				<a :href="lData.titleSrc">{{lData.titleName}}</a>
				<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
					<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
				</svg>
			</div>
			<ul class="nav">
				<li class="nav-item" v-for="(item,index) in lData.titleContent" :key="index"><a :href="lData.titleContentLink[index]" class="nav-link">{{item}}</a></li>
			</ul>
		</div>
		<div class="navHover-node img">
			<div class="title">
				<a href="#">精选好课</a>
				<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
					<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
				</svg>
			</div>
			<ul class="row img">
				<li class="col-4" v-for="(item,index) in lData.imageArr" :key="index">
					<a class="card" :href="lData.linkSrcArr[index]">
						<img :src="item" class="card-img-top" alt="">
						<p class="card-text">{{lData.titleText[index]}}</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'navHover',
		data(){
			return {
				vShow : false,
				lData:''
				
			}
		},
		watch:{
			needShow(newval) {
				this.vShow = newval;
			},
			Data(newval) {
				this.lData = newval;
			}
		},
		methods:{
			show(){
				this.vShow = true;
			},
			hide(){
				this.vShow = false;
			}
		},
		props:['needShow','Data']
	}
</script>

<style scoped>
	.navHover{
		position: absolute;
		width: 514px;
		height: 100%;
		background-color: white;
		left: 97%;
		top: 0;
		z-index: 2;
		border-radius: 5px;
		box-shadow: 0 0 3px #ccc;
		padding: 20px;
		display: block;
	}
	.navHover-node{
		margin-top: 8px;
		position: relative;
	}
	.navHover-node .title a{
		font-weight: bolder;
		color: black;
		text-decoration: none;
	}
	.navHover-node .title a:hover{
		text-decoration: underline;
	}
	.navHover-node .nav .nav-item a{
		font-size: 14px;
		margin-top: 8px;
		padding-left: 0;
		padding-right: 25px;
		color: #444;
	}
	.navHover-node .nav li a:hover{
		text-decoration: underline;
		color: #ff3f29;
	}
	.navHover-node.img{
		position: absolute;
		top: 125px;
	}
	.navHover-node.img .img{
		list-style: none;
		padding: 0;
		width: 490px;
		border-radius: 5px;
		margin-top: 15px;
	}
	.navHover-node.img .img .card{
		border: none;
		box-shadow: none;
		text-decoration: none;
	}
	.navHover-node.img .img .card p{
		font-size: 12px;
		margin-top: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>