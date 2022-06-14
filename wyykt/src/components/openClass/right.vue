<template>
	<div class="right">
		<div class="title">
			<span>课堂直播</span>
			<a href="#">
				<span>更多</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
					<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
				</svg>
			</a>
		</div>
		<div class="inner">
			<div class="inner-div" v-for="(item,index) in Data" :key="index">
				<a class="inner-div" :href="item.linkSrc">
					<div class="inner-img">
						<img :src="item.imageSrc" alt="">
					</div>
					<p><span class="data">{{item.time}}</span><span class="line">|</span><span class="box">开启提醒</span></p>
					<p class="inner-title">{{item.title}}</p>
					<p class="text">{{item.teacher}}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'openClassright',
	props:['Data']
}
</script>

<style scoped>
	.right{
		width: 380px;
		height: 100%;
	}
	.left{
		width: 800px;
		height: 100%;
	}
	.title{
		font-size: 23px;
		font-weight: bolder;
		height: 80px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.title a{
		color: #888;
		text-decoration: none;
	}
	.title a:hover{
		color: #ff3f29;
	}
	.title a span{
		font-size: 14px;
		margin-right: 10px;
	}
	.inner{
		width: 100%;
		height: 290px;
		overflow: hidden;
		position: relative;
		background-color: white;
		border-radius: 10px;
		padding: 18px 14px 18px 12px;
	}
	.inner-div{
		width: 100%;
		height: 90px;
		color: black;
	}
	.inner-img{
		text-align: center;
		width: 64px;
		height: 100%;
		line-height: 64px;
		float: left;
		margin-right: 10px;
		
	}
	.inner-div img{
		height: 58px;
		border-radius: 50%;
	}
	.inner p{
		float: left;
		margin-bottom: 2px;
	}
	.data,.box,.line,.text{
		font-size: 12px;
	}
	.line{
		margin-left: 10px;
	}
	.box{
		color: red;
		margin-left: 10px;
	}
	.inner-title{
		font-size: 14px;
	}
</style>