<template>
	<div class="navCarousl">
		<div class="nav">
			<navHover id="navHoverkNode" :needShow = "vShow" :Data="needList"/>
			<nav aria-label="breadcrumb" class="breadcrumb-nav">
				<ol class="breadcrumb" @mouseover="show(),needList=needData[0]" @mouseout="hide">
					<li class="breadcrumb-item nav-title"><a href="#">有道英语</a></li>
					<li class="breadcrumb-item"><a href="#">全面提升</a></li>
					<li class="breadcrumb-item"><a href="#">口语训练</a></li>
					<li class="breadcrumb-item"><a href="#">小语种</a></li>
					<li class="jiantou">
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" style="color: rgba(200, 200, 200, .7);" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
							<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
						</svg>
					</li>
				</ol>
				<ol class="breadcrumb" @mouseover="show(),needList=needData[1]" @mouseout="hide">
					<li class="breadcrumb-item nav-title"><a href="#">兴趣技能</a></li>
					<li class="breadcrumb-item"><a href="#">记忆提升</a></li>
					<li class="breadcrumb-item"><a href="#">投资理财</a></li>
					<li class="breadcrumb-item"><a href="#">副业变现</a></li>
					<li class="jiantou">
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" style="color: rgba(200, 200, 200, .7);" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
							<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
						</svg>
					</li>
				</ol>
				<ol class="breadcrumb" @mouseover="show(),needList=needData[2]" @mouseout="hide">
					<li class="breadcrumb-item nav-title"><a href="#">大学考试</a></li>
					<li class="breadcrumb-item"><a href="#">考研</a></li>
					<li class="breadcrumb-item"><a href="#">四六级</a></li>
					<li class="breadcrumb-item"><a href="#">雅思</a></li>
					<li class="breadcrumb-item"><a href="#">考公考编</a></li>
					<li class="jiantou">
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" style="color: rgba(200, 200, 200, .7);" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
							<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
						</svg>
					</li>
				</ol>
				<ol class="breadcrumb" @mouseover="show(),needList=needData[3]" @mouseout="hide">
					<li class="breadcrumb-item nav-title"><a href="#">职业考证</a></li>
					<li class="breadcrumb-item"><a href="#">财会金融</a></li>
					<li class="breadcrumb-item"><a href="#">建筑工程</a></li>
					<li class="breadcrumb-item"><a href="#">医药健康</a></li>
					<li class="jiantou">
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" style="color: rgba(200, 200, 200, .7);" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
							<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
						</svg>
					</li>
				</ol>
				<ol class="breadcrumb" @mouseover="show(),needList=needData[4]" @mouseout="hide">
					<li class="breadcrumb-item nav-title"><a href="#">IT互联网</a></li>
					<li class="breadcrumb-item"><a href="#">Python</a></li>
					<li class="breadcrumb-item"><a href="#">编程与开发</a></li>
					<li class="breadcrumb-item"><a href="#">数据与AI</a></li>
					<li class="jiantou">
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" style="color: rgba(200, 200, 200, .7);" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
							<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
						</svg>
					</li>
				</ol>
				<ol class="breadcrumb" @mouseover="show(),needList=needData[5]" @mouseout="hide">
					<li class="breadcrumb-item nav-title"><a href="#">职场提升</a></li>
					<li class="breadcrumb-item"><a href="#">办公效率</a></li>
					<li class="breadcrumb-item"><a href="#">求职升职</a></li>
					<li class="breadcrumb-item"><a href="#">管理沟通</a></li>
					<li class="jiantou">
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" style="color: rgba(200, 200, 200, .7);" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
							<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
						</svg>
					</li>
				</ol>
				<ol class="breadcrumb" @mouseover="show(),needList=needData[6]" @mouseout="hide">
					<li class="breadcrumb-item nav-title"><a href="#">设计创作</a></li>
					<li class="breadcrumb-item"><a href="#">设计软件</a></li>
					<li class="breadcrumb-item"><a href="#">手绘插画</a></li>
					<li class="breadcrumb-item"><a href="#">摄影修片</a></li>
					<li class="jiantou">
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" style="color: rgba(200, 200, 200, .7);" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
							<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
						</svg>
					</li>
				</ol>
			</nav>
		</div>
		<div class="carousel">
			<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-indicators">
						<button type="button"  v-for="(item,index) in img" :key="index"
						data-bs-target="#carouselExampleIndicators" :data-bs-slide-to='index'
						aria-label="index `{{index+1}}`"
						:class="index == 0? 'active carousel-line':'carousel-line'"
						aria-current="true"></button>
					</div>
					<div class="carousel-inner">
						<div class="carousel-item" :class="index == 0? 'active carousel-item':'carousel-item'"  v-for="(item,index) in img" :key="index">
							<img :src="item.imageSrc" class="d-block" alt="...">
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
			</div>
		</div>
	</div>
</template>
<script>
	import navHover from '@/components/navHover.vue'
export default{
	name:'navCarousl',
	props:['needData','slider'],
	data(){
		return{
			vShow: false,
			needList:'',
			img:''
		}
	},
	watch:{
		slider(newval){
			this.img = newval
		}
	},
	components:{
		navHover
	},
	methods:{
		show(){
			this.vShow = true;
		},
		hide(){
			this.vShow = false;
		}
	},
	created() {
		
	}
}

</script>

<style scoped>
	.navCarousl{
		width: 1205px;
		height: 320px;
		margin: 12px auto 0;
		display: flex;
		justify-content: space-between;
	}
	.nav{
		height: 100%;
		width: 303px;
		background: white;
		border-radius: 4px;
		padding: 10px 8px 10px 8px;
		position: relative;
	}
	.breadcrumb-nav{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-content: space-around
	}
	.breadcrumb{
		height: 35px;
		width: 100%;
		margin: 0;
	}
	.breadcrumb .jiantou{
		margin-left: auto;
	}
	.breadcrumb-item.nav-title a{
		color: black;
		font-weight: 600;
	}
	.breadcrumb-item{
		padding-left: 4px;
	}
	.breadcrumb-item a{
		color: #888;
		text-decoration: none;
	}
	.breadcrumb-item a:hover{
		color: #ff3f29;
	}
	.breadcrumb-item::before{
		padding-right: 4px;
		font-size: 14px;
		line-height: 25px;
	}
	.breadcrumb-item a{
		font-size: 14px;
	}
	
	.breadcrumb:hover{}
	
	.carousel{
		width: 890px;
		height: 100%;
		border-radius: 5px;
		overflow: hidden;
	}
	.carousel-inner{
		height: 320px;
		overflow: hidden;
	}
	.carousel-inner .carousel-item{
		position: relative;
	}
	.carousel-inner .carousel-item img{
		height: 320px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
</style>