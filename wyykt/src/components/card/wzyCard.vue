<!-- 微专业card -->
<template>
	<div class="yktCard wzyCard"> 
		<a :href="Data.linkSrc" target="_blank">
			<div class="wzyCard-img-box">
				<img :src="Data.imageSrc" height="165" class="yktCard-img-top wzyCard-img-top" alt="">
			</div>
			<div class="yktCard-title px-3 py-2 wzyCard-text text-truncate">
				<span class="card-text-title">{{Data.titleName}}</span>
			</div>
			<div class="card-text px-3 py-1 m-0">
				<span class="me-2">{{Data.title}}</span>
			</div>
		</a>
	</div>
</template>

<script>
	export default{
		name:'wzyCard',
		props:['Data']
	}
</script>

<style scoped>
	.wzyCard{
		background: none;
		transform: translate(0);
		border-radius: 15px;
		overflow: hidden;
	}
	.wzyCard-img-box{overflow: hidden;}
	.wzyCard-img-top{
		transition: .5s;
	}
	.wzyCard-img-top:hover{
		transform: scale(1.3);
	}
	.wzyCard-text{
		height: 30px;
		width: 100%;
	}
</style>