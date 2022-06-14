<template>
	<div class="container-fluid sticky-top shadow p-0">
		<nav class="navbar navbar-expand-md bg-blueblack navbar-dark">
			<div class="container-fluid px-4">
				<a href="#" class="navbar-brand ms-5 d-flex justify-content-center align-items-center">
					<span class="fw-bold ms-3 ms-lg-5 fs-4 text-light" @click="logReg">{{userName}}</span>
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topnav" aria-controls="topnav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="topnav">
					<ul class="navbar-nav ms-auto me-lg-4 text-center">
						<li class="nav-item me-1">
							<a href="#Blog" class="nav-link fw-lighter text-ccc">博客Blog</a>
						</li>
						<li class="nav-item me-1">
							<a href="#Skill" class="nav-link fw-lighter text-ccc">技能Kill</a>
						</li>
						<li class="nav-item me-1">
							<a href="#About" class="nav-link fw-lighter text-ccc">关于bout</a>
						</li>
						<li class="nav-item me-1 me-lg-5">
							<a href="#Call" class="nav-link fw-lighter text-ccc">联系我Call</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
  name: 'navBarComp',
  data(){
		return {
			userName:'login'
		}
  },
  props:['user'],
  watch:{
	user(newval){
		this.userName = newval;
	}
  },
  methods:{
	logReg(){
		this.$emit('logReg');
	}
  }
}
</script>

<style>
	
</style>