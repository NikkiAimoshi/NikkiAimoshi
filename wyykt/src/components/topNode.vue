<template>
  <div class="topNode">
		<a href="https://study.163.com/topics/ykt-flzx/" target="_blank">
			<img src="@/assets/img/topnodeimg.jpg" alt="">
		</a>
  </div>
</template>

<script>
export default {
  name: 'topNode',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.topNode{
		display: flex;
		justify-content: center;
	}
	.topNode a{
		height: 40px;
	}
</style>
