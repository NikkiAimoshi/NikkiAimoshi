<template>
	<div class="seriesClass">
		<div class="ykt-title">
			<span>系列课程</span>
		</div>
		<div class="card-con">
			<template v-for="(item,index) in needData" :key="index">
				<seriesCard :Data="item"/>
			</template>
		</div>
	</div>
</template>

<script>
import seriesCard from './card/seriesCard.vue'
export default{
	name:'seriesClass',
	components:{
		seriesCard
	},
	props:['needData']
	
}
</script>

<style scoped lang="scss">
	.seriesClass{
		width: 1205px;
		height: 250px;
		margin: 8px auto 0;
		.card-con{
			width: 100%;
			height: 170px;
		}
	}
	
</style>