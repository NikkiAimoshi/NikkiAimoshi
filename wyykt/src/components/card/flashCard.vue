<!-- 限时秒杀card -->
<template>
	<div class="yktCard flashCard"> 
		<a href="#">
			<div class="wzyCard-img-box">
				<img :src="Data.imageSrc" class="yktCard-img-top flashCard-img-top" alt="">
			</div>
			<div class="yktCard-title px-0 py-2 wzyCard-text text-truncate">
				<span class="card-text-title">{{Data.titleName}}</span>
			</div>
			<div class="card-text px-0 py-1 m-0">
				<span class="me-2">{{Data.titleTag}}</span>
			</div>
			<div class="flashCard-bottom">
				<span><span>￥</span>{{Data.money}}</span>
				<div class="box">
					即将开抢
				</div>
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

<style scoped lang="scss">
	.flashCard{
		background: none;
		border-radius: 5px;
		overflow: hidden;
		width: 225px;
		height: 100%;
		transform: translate(0);
		.flashCard-bottom{
			margin-top: 0px;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			span{
				color: #ff1d00;
				font-size: 22px;
				font-weight: bolder;
				
				span{
					font-size: 14px;
					font-weight: 500;
				}
			}
			.box{
				font-size: 12px;
				padding: 2px 4px 2px 4px;
				border: 1px solid #999;
				color: #999;
				margin-right: 4px;
				border-radius: 4px;
			}
		}
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