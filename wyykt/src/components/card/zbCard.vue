<template>
	<div class="zbCard">
			<a :href="Data.linkSrc">
				<img :src="Data.titleImageSrc" class="card-img-top" alt="">
				<span class="card-text card-time">{{Data.titleTime}}</span>
				<div class="yktCard-title">
					<span class="card-capsule capsule-red">{{Data.titleTagOne}}</span>
					<span class="card-capsule capsule-ccc">{{Data.titleTagTwo}}</span>
					<span class="card-text-title">{{Data.titleName}}</span>
				</div>
				<div class="card-teacher-name">
					<span>{{Data.teacher}}</span>
					<span class="box">{{Data.teacherTitle}}</span>
				</div>
				<span class="small">{{Data.titleText}}</span>
			</a>
	</div>
</template>

<script>
	export default{
		name:'zbCard',
		props:['Data']
	}
</script>

<style scoped>
	.zbCard{
		width: 260px;
		height: 100%; 
		border: none;
		border-radius: 10px;
		overflow: hidden;
		background: white;
		float: left;
	}
	.zbCard a{
		text-decoration: none;
		color: black;
	}
	.card-text.card-time{
		font-size: 14px;
		margin: 8px 0 6px 5px;
		display: flex;
	}
	.card-teacher-name{
		padding: 0 12px 0 12px;
		font-size: 14px;
	}
	.card-teacher-name .box{
		padding: 1px 3px;
		background-color: rgba(205, 205, 59, .2);
		border: 1px solid #fa0;
		border-radius: 5px;
		font-size: 12px;
		color: #fa0;
		margin-left: 10px;
	}
	.small{
		font-size: 12px;
		padding: 0px 8px 0px 12px;
		margin-top: 14px;
		color: #666;
	}
	.yktCard-title{
		padding-top: 0px;
	}
</style>