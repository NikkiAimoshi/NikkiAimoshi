<template>
	<!-- futter start -->
	<div class="container-fluid py-5" :class="!this.showB?'bg-blueblack':''">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-12">
					<ul class="text-light list-unstyled text-md-start text-center">
						<li class="mb-2 fw-bold">服务器端支持</li>
						<li class="fw-light"><small>Web端支持</small></li>
						<li class="fw-light"><small>Phone端支持</small></li>
						<li class="fw-light"><small>Pad端支持</small></li>
					</ul>
				</div>
				<div class="col-md-3 col-12">
					<ul class="text-light list-unstyled text-md-start text-center">
						<li class="mb-2 fw-bold">功能性模块</li>
						<li class="fw-light"><small>博客Blog</small></li>
						<li class="fw-light"><small>技能Skill</small></li>
						<li class="fw-light"><small>作品IndividualWorks</small></li>
						<li class="fw-light"><small>关于About</small></li>
						<li class="fw-light"><small>联系我Call</small></li>
					</ul>
				</div>
				<div class="col-md-3 col-12">
					<ul class="text-light list-unstyled text-md-start text-center">
						<li class="mb-2 fw-bold">技能支持</li>
						<li class="fw-light"><small>vue 3</small></li>
						<li class="fw-light"><small>BootStrap 5</small></li>
						<li class="fw-light"><small>Node.js</small></li>
						<li class="fw-light"><small>Mysql</small></li>
					</ul>
				</div>
				<div class="col-md-3 col-12">
					<ul class="text-light list-unstyled text-md-start text-center">
						<li class="mb-2 fw-bold">nikki</li>
						<li class="fw-light"><small>nikki耗时1天完成的个人网站之首页页面布局，希望大家喜欢。</small></li>
					</ul>
				</div>
				<div class="col-12">
					<ul class="text-light list-unstyled text-center mt-3 ">
						<li class="mb-2 fw-bold">此网站由 张玮 所有</li>
						<li class="fw-light"><small>工业和信息化部备案管理系统网站 假的 (¬‿¬)</small></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- futter end -->
</template>

<script>
export default {
  name: 'futterComp',
  data(){
		return {
			showB:''					//footer变色
		}
  },
  watch:{
	
  },
  props:['showVal'],
  created(){
	this.showB = this.showVal;			//footer变色
  }
}
</script>

<style>
	
</style>