<template>
	<div class="yktCard">
		<a href="#">
			<img :src="Data[0].imgSrc" class="yktCard-img-top" alt="">
			<div class="yktCard-title">
				<span class="yktCard-title-title">
					<span class="capsule-red card-capsule card-text-capsule" v-show="Data[0].titleTagOne">{{Data[0].titleTagOne}}</span>
					<span class="capsule-ccc card-capsule card-text-capsule" v-show="Data[0].titleTagTwo">{{Data[0].titleTagTwo}}</span>
					<span>{{Data[0].titleName}}</span>
				</span>
			</div>
			<div class="card-text">
				<span class="me-2">时间:</span>
				<span class="card-text-date">{{Data[0].time}}</span>
				<div class="card-text-inline"></div>
				<span class="card-text-time">{{Data[0].num}}课时</span>
			</div>
			<div class="card-text">
				<span class="me-2">导师:</span>
				<span class="card-text-name">{{Data[0].userName}}</span>	<!-- Data[0]. -->
			</div>
			<div class="ykt-bottom">
				<span v-show="Data[0].nowNum">已有{{Data[0].nowNum}}人购买</span>
				<div class="box" v-show="Data[0].moneyQuan">
					券后价￥99
				</div>
				<h2 class="text-red m-0"><small class="text-red" v-show="(Data[0].money=='免费'?false:true)">￥</small>{{Data[0].money}}</h2>
			</div>
			<div class="card-line"></div>
		</a>
	</div>
</template>

<script>
	export default{
		name:'yktCard',
		props:['Data']
	}
</script>

<style scoped>
	
</style>