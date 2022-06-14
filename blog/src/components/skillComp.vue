<template>
	<!-- skill start -->
	<div class="container-fluid bg-light pb-3 pt-2 position-relative">
		<div class="position-absolute" id="Skill" style="top: -60px;"></div>
		<div class="container">
			<div class="container-fluid mt-5">
				<h2>技能<span class="fw-light fs-4 ms-2">Skill</span></h2>
				<p>前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，HTML5，CSS3，前端框架的应用，跨平台响应式网页设计能够适应各种屏幕分辨率，合适的动效设计，给用户带来极高的用户体验。</p>
			</div>
			<ul class="nav-tabs nav mt-2">
				<li class="nav-item">
					<a href="#skill1" data-bs-toggle='tab' class="skillitem nav-link text-dark active">设计技能</a>
				</li>
				<li class="nav-item">
					<a href="#skill2" data-bs-toggle='tab' class="skillitem nav-link text-dark">前端技能</a>
				</li>
				<li class="nav-item">
					<a href="#skill3" data-bs-toggle='tab' class="skillitem nav-link text-dark">后端技能</a>
				</li>
			</ul>
			<div class="tab-content tab-box mt-4">
				<div class="tab-pane  active fade show" id="skill1">
					<div class="row">
						<div class="col-12 col-lg-4 imgout">
							<img class="img-fluid" :src="skillImgUrl[0]">
						</div>
						<div class="col-12 col-lg-8">
							<p class="px-2 mt-4">平面设计工作是一个主观认定强的创意工作，大部分的平面设计师是通过不断的自我教育来做进修、提升设计能力。比如，平时就要多注意各式各样的海报、文宣品、杂志、书籍等的设计手法并加以搜集，或是上网浏览其它设计师的作品，以激发自己的设计灵感。 平面设计师要有敏锐的美感，但对文字也要有一定的素养。</p>
						</div>
					</div>
					<h4 class=" mt-3">PS</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 10%"></div>
					</div>
					<h4 class=" mt-3">Illustrator</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 0%"></div>
					</div>
					<h4 class=" mt-3">CorelDRAW</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 0%"></div>
					</div>
					<h4 class=" mt-3">AutoCAD</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 0%"></div>
					</div>
				</div>
				<div class="tab-pane fade show" id="skill2">
					<div class="row">
						<div class="col-12 col-lg-4 imgout">
							<img class="img-fluid" :src="skillImgUrl[1]" >
						</div>
						<div class="col-12 col-lg-8">
							<p class="px-2 mt-4">前端工程师是互联网时代软件产品研发中不可缺少的一种专业研发角色。从狭义上讲，前端工程师使用 HTML、CSS、JavaScript 等专业技能和工具将产品UI设计稿实现成网站产品，涵盖用户PC端、移动端网页，处理视觉和交互问题。从广义上来讲，所有用户终端产品与视觉和交互有关的部分，都是前端工程师的专业领域。</p>
						</div>
					</div>
					<h4 class=" mt-3">HTML</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 30%"></div>
					</div>
					<h4 class=" mt-3">CSS</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 20%"></div>
					</div>
					<h4 class=" mt-3">JavaScript</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 25%"></div>
					</div>
					<h4 class=" mt-3">jQuery</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 20%"></div>
					</div>
					<h4 class=" mt-3">BootStrap</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 30%"></div>
					</div>
					<h4 class=" mt-3">Vue</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 10%"></div>
					</div>
				</div>
				<div class="tab-pane fade show" id="skill3">
					<div class="row">
						<div class="col-12 col-lg-4 imgout">
							<img class="img-fluid" :src="skillImgUrl[2]" >
						</div>
						<div class="col-12 col-lg-8">
							<p class="px-2 mt-4">后端工程师隶属于软件研发工程师，是从事软件开发相关工作人员，其主要职责是平台设计、接口设计和功能实现。后端的工程师只负责提供接口和数据,专注于业务逻辑的实现,前端取到数据后在浏览器中展示,各司其职。在公司内，主要的内容负责后台内容的编写。</p>
						</div>
					</div>
					<h4 class=" mt-3">JAVA</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 0%"></div>
					</div>
					<h4 class=" mt-3">Node.JS</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 20%"></div>
					</div>
					<h4 class=" mt-3">Python</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 0%"></div>
					</div>
					<h4 class=" mt-3">PHP</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 0%"></div>
					</div>
					<h4 class=" mt-3">C++</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 5%"></div>
					</div>
					<h4 class=" mt-3">VB</h4>
					<div class="progress mt-3">
						<div class="progress-bar bg-dark" style="width: 5%"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- skill end -->
</template>

<script>
export default {
  name: 'skillComp',
  data(){
		return {
			skillImgUrl:['http://43.142.20.103/assets/img/skill1.jpeg','http://43.142.20.103/assets/img/skill2.jpeg','http://43.142.20.103/assets/img/skill3.jpeg']
		}
  }
}
</script>

<style scoped>
	.skillitem:hover{
		background-color: #ccc;
	}
	.imgout{
		overflow: hidden;
		border-radius: 10px;
	}
	img{
		transition: 1s;
	}
	img:hover{
		transform: scale(1.3);
	}
</style>