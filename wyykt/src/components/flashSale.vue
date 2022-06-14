<template>
	<div class="flashSale">
		<div class="ykt-title">
			<span>限时秒杀</span>
		</div>
		<ul class="flashSale-top">
			<li class="link" :class="needIndex==index?'active':''" @mouseover="changeIndex(index)" v-for="(item ,index) in needData.timeArr" :key="index">{{item}}</li>
		</ul>
		<div class="flashSale-link">
			<template v-for="(item ,index) in Data" :key="index">
				<flashCard :Data="item"/>
			</template>
		</div>
	</div>
</template>

<script>
	import flashCard from './card/flashCard.vue'
	export default{
		name:'flashSale',
		data(){
			return {
				needIndex:0,
				Data:''
			}
		},
		components:{
			flashCard
		},
		props:['needData'],
		watch:{
			needIndex(){
				this.Data = this.needData['dataJSON'][this.needIndex]
				console.log(this.Data)
			}
		},
		methods:{
			changeIndex(index){
				this.needIndex = index;
			}
		},
		updated() {
			this.Data = this.needData['dataJSON'][this.needIndex]
		}
	}
</script>

<style scoped lang="scss">
	.flashSale{
		width: 1205px;
		height: 365px;
		margin: 8px auto 0;
	}
	.flashSale-top{
		width: 100%;
		height: 40px;
		margin: 0;
		padding: 0;
		text-align: center;
		list-style: none;
		display: flex;
		justify-content: space-between;
		line-height: 40px;
		li{
			width: 200px;
			height: 100%;
			background-color: rgba(255, 63, 41, .1);
			font-size: 14px;
			color: #999;
		}
		li.active{
			background-color: rgba(255, 63, 41, 1);
			color: white;
		}
	}
	.flashSale-link{
		margin-top: 10px;
		height: 215px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>