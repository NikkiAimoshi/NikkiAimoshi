<!-- 微专业card -->
<template>
	<div class="yktCard wzyCard"> 
		<a :href="Data.linkSrc">
			<div class="wzyCard-img-box">
				<img :src="Data.imageSrc" class="yktCard-img-top wzyCard-img-top" alt="">
				<div class="wzyCard-intext">
					<div class="wzyCard-intext-out">
						<div class="wzyCard-intext-in">
							<h4>{{Data.titleName}}</h4>
							<p>{Data.title}</p>
						</div>
					</div>
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
	.wzyCard{
		background: none;
		transform: translate(0);
		border-radius: 5px;
		overflow: hidden;
		position: relative;
	}
	.wzyCard-img-box{overflow: hidden;}
	.wzyCard-img-box:hover .wzyCard-img-top{transform: scale(1.3);}
	.wzyCard-img-top{
		transition: .5s;
		border-radius: 5px;
	}
	.wzyCard-intext{
		position: absolute;
		top: 43%;
		left: 8%;
		text-align: center;
		display: flex;
		justify-content: center;
		.wzyCard-intext-out{
			position: relative;
			width: 246px;
			height: 76px;
			border: 3px solid white;
			.wzyCard-intext-in{
				margin: 3px;
				width: 234px;
				height: 64px;
				background: white;
				color: #333;
				h4{
					padding-top: 10px;
					margin: 0;
					font-size: 18px;
				}
				p{
					padding-top: 5px;
					font-size: 14px;
				}
			}
		}
	}
</style>