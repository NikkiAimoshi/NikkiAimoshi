<template>
	<div class="smallMajor">
		<div class="ykt-title">
			<span>微专业</span>
			<a href="#">
				<span>更多</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
					<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
				</svg>
			</a>
		</div>
		<div class="card-con wzy-card-con">
			<template v-for="(item,index) in needData" :key="index">
				<wzyCard :Data="item"/>
			</template>
		</div>
	</div>
</template>

<script>
	import wzyCard from './card/wzyCard.vue'
	export default{
		name:'smallMajor',
		components:{
			wzyCard
		},
		props:['needData']
	}
</script>

<style scoped>
	.smallMajor{
		width: 1205px;
		height: 300px;
		margin: 7px auto 0;
	}
	.wzy-card-con{
		height: 223px;
	}
</style>