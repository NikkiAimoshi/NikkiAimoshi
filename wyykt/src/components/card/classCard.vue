<template>
	<div class="yktCard">
		<a :href="Data.linkSrc" target="_black">
			<img :src="Data.imageSrc" class="yktCard-img-top" alt="">
			<div class="yktCard-title">
				<span class="yktCard-title-title">
					<span class="capsule-red card-capsule card-text-capsule" v-if="Data.titleTagOne">{{Data.titleTagOne}}</span>
					<span class="capsule-ccc card-capsule card-text-capsule" v-if="Data.titleTagTwo">{{Data.titleTagTwo}}</span>
					<span>{{Data.titleName}}</span>
				</span>
			</div>
			<div class="card-text">
				<span class="me-2">时间:</span>
				<span class="card-text-date">{{Data.time}}</span>
				<div class="card-text-inline"></div>
				<span class="card-text-time">{{Data.num}}课时</span>
			</div>
			<div class="card-text">
				<span class="me-2">导师:</span>
				<span class="card-text-name">{{Data.teacher}}</span>	<!-- Data[0]. -->
			</div>
			<div class="ykt-bottom">
				<span v-if="Data.nowNum">已有{{Data.nowNum}}人购买</span>
				<h2 class="text-red m-0"><small class="text-red" v-if="(Data.money=='免费'?false:true)">￥</small>{{Data.money}}</h2>
				<div class="box" v-if="Data.moneyQuan">
					券后价￥{{Data.moneyQuan}}
				</div>
			</div>
			<div class="card-line"></div>
		</a>
	</div>
</template>

<script>
	export default{
		name:'classCard',
		props:['Data']
	}
</script>

<style scoped>
	
</style>