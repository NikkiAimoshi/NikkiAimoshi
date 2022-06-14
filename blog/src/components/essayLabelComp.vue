<template>
	<div class='shadow p-5 bg-white content-box mt-4'>
		<h4 class='border-start border-5 border-primary ps-3 mb-3'>标签分类</h4>
		<a href="#" class='badge bg-primary rounded-pill text-decoration-none p-2 text-light mb-2'>Web前端</a>
		<a href="#" class='badge bg-primary rounded-pill text-decoration-none p-2 text-light mb-2'>JavaScript</a>
		<a href="#" class='badge bg-primary rounded-pill text-decoration-none p-2 text-light mb-2'>HTML</a>
		<a href="#" class='badge bg-primary rounded-pill text-decoration-none p-2 text-light mb-2'>CSS</a>
		<a href="#" class='badge bg-danger rounded-pill text-decoration-none p-2 text-light mb-2'>JAVA</a>
	</div>
</template>

<script>
export default {
  name: 'essayLabelComp',
  data(){
		return {
			
		}
  }
}
</script>

<style scoped>
	a{
		margin-right: 5px;
	}
</style>