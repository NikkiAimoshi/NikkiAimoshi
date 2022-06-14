<template>
	<div class="container-fluid sticky-top px-0">
		<nav class="navbar navbar-expand-md navbar-light shadow bg-light">
			<div class="container-fluid px-4">
				<a href="#" class="navbar-brand ms-5 d-flex justify-content-center align-items-center">
					<span class="fw-bold ms-3 ms-lg-5 fs-4">Nikki</span>
				</a>
				<button type="button" class="navbar-toggler me-4" data-bs-toggle='collapse' data-bs-target='#topCollapse'>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="topCollapse">
					<ul class="navbar-nav ms-auto text-center me-lg-4">
						<li class="nav-item me-1">
							<a href="/#Blog" class="nav-link fw-lighter text-dark">博客Blog</a>
						</li>
						<li class="nav-item me-1">
							<a href="/#Skill" class="nav-link fw-lighter text-dark">技能Kill</a>
						</li>
						<li class="nav-item me-1">
							<a href="/#About" class="nav-link fw-lighter text-dark">关于bout</a>
						</li>
						<li class="nav-item me-1 me-lg-5">
							<a href="/#Call" class="nav-link fw-lighter text-dark">联系我Call</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
  name: 'essaynavBarComp',
  data(){
		return {
			
		}
  }
}
</script>

<style>
	
</style>