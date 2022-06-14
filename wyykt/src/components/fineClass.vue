<template>
	<div class="fineClass">
		<div class="ykt-title">
			<span>精品课</span>
		</div>
		<div class="card-con">
			<template v-for="(item,index) in needData" :key="index">
				<yktCard :Data='item'/>
			</template>
		</div>
	</div>
</template>

<script>
	import yktCard from './card/yktCard.vue'
	export default{
		name:'fineClass',
		components:{
			yktCard
		},
		data(){
			return {
				eliteData:''
			}
		},
		methods:{
		},
		props:['needData']
	}
</script>

<style scoped>
	.fineClass{
		width: 1205px;
		height: 435px;
		margin: 7px auto 0;
	}
</style>