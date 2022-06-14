<template>
	<!-- About start -->
	<div class="container-fluid bg-light">
		<div class="container pb-4 position-relative pt-5 ">
			<div class="position-absolute" id="About" style="top: -60px;"></div>
			<div class="container-fluid">
				<h2>关于<span class="fw-light fs-4 ms-2">About</span></h2>
				<p></p>
			</div><!-- 个人简历是求职者给招聘单位发的一份简要介绍。包含自己的基本信息：姓名、性别、年龄、民族、籍贯、政治面貌、学历、联系方式，以及自我评价、工作经历、学习经历、荣誉与成就、求职愿望、对这份工作的简要理解等等。以简洁重点为最佳标准。 -->
			<div class="row p-5" style="box-shadow: 1px 1px 5px #555;">
				<div class="col-12 col-md-2 text-center">
					<!-- <img class="me-lg-5 me-md-4" src="img/980745.jpg" style="width: 150px;height: 150px;"> -->
					<ul class="list-unstyled d-flex flex-wrap mt-2" style="list-style: none;" >
						<li class="rounded-pill bg-info px-2 text-light fw-bold me-3 mt-2" style="font-size: 10px;">大学生</li>
						<li class="rounded-pill bg-danger px-2 text-light fw-bold me-3 mt-2" style="font-size: 10px;">前端学习中</li>
						<li class="rounded-pill bg-success px-2 text-light fw-bold me-3 mt-2" style="font-size: 10px;">Node.js菜鸡</li>
						<li class="rounded-pill bg-warning px-2 text-light fw-bold me-3 mt-2" style="font-size: 10px;">切图仔</li>
						<li class="rounded-pill bg-primary px-2 text-light fw-bold me-3 mt-2" style="font-size: 10px;">BootStrap</li>
						<li class="rounded-pill bg-success px-2 text-light fw-bold me-3 mt-2" style="font-size: 10px;">vue</li>
						<li class="rounded-pill bg-warning px-2 text-light fw-bold me-3 mt-2" style="font-size: 10px;">Mysql学习中</li>
						<li class="rounded-pill bg-primary px-2 text-light fw-bold me-3 mt-2" style="font-size: 10px;">scss</li>
					</ul>
				</div>
				<div class="col-12 col-md-8">
					<h3 class="text-md-start text-center ">张玮</h3>
					<hr>
					<p>大家好 ！ 我是21届在读大学生。计算机科学与技术专业，喜欢前端行业，并通过自学加上网课的方式学习前端，学习前端已经6个月了，为检验学习成果写了这个小小的博客。作为大一的自学成果展示。</p>
					<p>项目介绍：</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;1. 使用 Vue框架，通过 Vue-Cli 搭建开发环境，以及 Vue-Router搭建项目路由。</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;2. 用 Bootstrap 布局构建页面 用 row/col实现 Web，Phone，Pad支持，实现移动端</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;3. 采用前后端分离开发模式。用Node.js(express框架)+mysql来搭建后台服务器。Nginx进行代理。</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;4. 运用 Vue中的 axios库与后台接口对接，进行数据交互，进行页面渲染，实现功能 模块的判断。(将axios分为三个部分config.js文件我用来存放后端请求接口地址，http.js封装axios的请求方式，index.js用来所有调用接口的方法)</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;5. 采用 VueX处理用户访客的登入状态</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;6. 合理使用钩子函数，实现数据的监听、渲染页面、页面节点的实例化功能。</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;7. 组件化实现，结构清晰，维护容易，增加代码复用性</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;8. 运用sass预处理简化css。</p>
					<p>本次项目用时21天，不断的debug最终完成项目，个人感觉提升较大。</p>
					<p style="float: right;">2022/5/20</p>
				</div>
			</div>
		</div>
	</div>
	
	<!-- About end -->
</template>

<script>
export default {
  name: 'aboutMeComp',
  data(){
		return {
		}
  }
}
</script>

<style>
	
</style>