<template>
	<div class="interestChose">
		<span>以下根据你的学习兴趣推荐
			<a href="#">
				<span>更改兴趣
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
					</svg>
				</span>
			</a>
		</span>
	</div>
</template>

<script>
export default{
	name:'interestChose'
	
}
</script>

<style scoped lang="scss">
	.interestChose{
		margin: 20px auto 0;
		width: 1205px;
		height: 60px;
		padding: 18px 20px;
		background: seagreen;
		background-color: rgba(255, 63, 41, .1);
		
		span{
			font-size: 20px;
			color: #333;
			font-weight: bold;
			display: flex;
			align-items: center;
			a{
				text-decoration: none;
				span{
					font-size: 14px;
					color: rgba(255, 63, 41, 1);
					margin-left: 20px;
					font-weight: 500;
				}
			}
		}
	}
</style>