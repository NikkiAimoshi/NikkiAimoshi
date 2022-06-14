<template>
	<div class="bottomLink">
		<a href="#">
			<img src="@/assets/img/left_link.png" alt="">
		</a>
		<a href="#">
			<img src="@/assets/img/right_link.png" alt="">
		</a>
	</div>
</template>

<script>
	export default{
		name:'fineClass',
	}
</script>

<style scoped lang="scss">
	.bottomLink{
		width: 1205px;
		height: 130px;
		margin: 25px auto 0;
		display: flex;
		justify-content: space-between;
	}
</style>