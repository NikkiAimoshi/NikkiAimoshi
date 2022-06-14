<template>
	<div class="IndividualWorks bg-light">
		<div class="container bg-light">
			<div class="container-fluid pt-5 pb-3">
				<h2>作品<span class="fw-light fs-4 ps-2">IndividualWorks</span></h2>
				<p class="m-0">学习过程中或工作过程中完成的项目作品，可以展现学习成果。</p>
			</div>
			<div class="row works" style="overflow: hidden;">
				<div class="col-6 col-lg-3 mb-2">
					<div class="card">
						<img src="@/assets/img/show4.jpeg" class="card-img-top" alt="...">
							<div class="card-body">
							<h5 class="card-title">PC端网易云课堂教育平台</h5>
							<p class="card-text">Vue框架实现， 使用axios获取数据进行dom渲染， 使用Bootstrap， 使用scss预处理器</p>
							<a target="_blank" href="http://xn--e1tn17b.cn:8004/" class="btn btn-primary">Show</a>
							<span class="fs-7">2022/4/29</span>
						</div>
					</div>
				</div>
				<div class="col-6 col-lg-3 mb-2">
					<div class="card">
						<img src="@/assets/img/show1.jpeg" class="card-img-top" alt="...">
							<div class="card-body">
							<h5 class="card-title">百度糯米首页</h5>
							<p class="card-text">HTML+CSS  完整还原首页页面</p>
							<a target="_blank"  href="http://xn--e1tn17b.cn:8001/" class="btn btn-primary">Show</a>
							<span class="fs-7">2021/11/14</span>
						</div>
					</div>
				</div>
				
				<div class="col-6 col-lg-3 mb-2">
					<div class="card">
						<img src="@/assets/img/show2.jpeg" class="card-img-top" alt="...">
							<div class="card-body">
							<h5 class="card-title">天地劫首页 (移动端支持)</h5>
							<p class="card-text">使用Bootstrap制作，Web，Phone，Pad支持</p>
							<a target="_blank" href="http://xn--e1tn17b.cn:8002/" class="btn btn-primary">Show</a>
							<span class="fs-7">2022/4/3</span>
						</div>
					</div>
				</div>
				
				<div class="col-6 col-lg-3 mb-2">
					<div class="card">
						<img src="@/assets/img/show3.jpeg" class="card-img-top" alt="...">
							<div class="card-body">
							<h5 class="card-title">PC端网易游戏首页</h5>
							<p class="card-text">原生javascrip实现dom操作 HTML+CSS 布局</p>
							<a target="_blank" href="http://xn--e1tn17b.cn:8003/" class="btn btn-primary">Show</a>
							<span class="fs-7">2021/12/17</span>
						</div>
					</div>
				</div>
				
				<div class="col-12 col-lg-9 mb-2" style="display: block;">
					<div class="card">
						<div class="row">
							<img src="@/assets/img/show5(3).jpeg" class="col-4" alt="...">
							<img src="@/assets/img/show5(4).jpg" class="col-4" alt="...">
							<img src="@/assets/img/show5(2).jpeg" class="col-4" alt="...">
						</div>
							<div class="card-body">
							<h5 class="card-title">网易严选电商平台 (移动端)</h5>
							<p class="card-text">1. Vue3框架
								<span class="ps-4">2.axios库与后台接口对接，进行数据交互，进行页面渲染，实现用户登录注册</span>
								<span class="ps-4">3.VueX状态管理处理用户登录，搜索历史和购物车列表</span>
								<span class="ps-4">4.组件化实现，维护方便，结构清晰</span>
								<span class="ps-4">5.flex弹性布局</span>
								<span class="ps-4">6.防抖与节流优化触发加载事件 节省资源</span>
								<span class="ps-4">7.跳转时有加载效果优化用户体验</span>
								<span class="ps-4">8.一键返回顶部</span>
								<span class="ps-4">9.阿里巴巴icofont图标使用</span>
							</p>
							<a target="_blank" href="http://xn--e1tn17b.cn:8005/" class="btn btn-primary">Show</a>
							<span class="fs-7">2022/2/27</span>
						</div>
					</div>
				</div>
				
				<div class="col-6 col-lg-3 mb-2">
					<div class="card">
						<img src="@/assets/img/show6.jpg" class="card-img-top" alt="...">
							<div class="card-body">
							<h5 class="card-title">天气 (微信小程序)</h5>
							<p class="card-text">微信小程序，rem布局， 小程序API获取当前位置， 和风天气API获取天气信息， 进行数据显示。（未发布，无法展示）</p>
							<span class="fs-7">2022/2/12</span>
						</div>
					</div>
				</div>
			</div>
			<div class="container anyMore d-flex justify-content-center align-items-center">
				<span class="fs-5">更多</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="ms-3 bi bi-chevron-compact-down" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
				</svg>
			</div>
		</div>
	</div>
	
</template>

<script>

export default {
  name: 'IndividualWorks',
  data(){
		return {
			
		}
  },
  components:{
		
		
  },
	methods:{
		
	},
	created() {
	}
}
</script>

<style lang="scss">
	.w-33{
		width: 33%;
	}
	.IndividualWorks{
		.works{
			.card{
				transition: .4s;
				cursor: pointer;
			}
			.card:hover{
				transform: translateY(-10px);
			}
		}
	}
	.anyMore{
		background-color: #eee;
		height: 50px;
		margin-top: 20px;
		&:hover{
			background-color: #fefefe
		}
		cursor: pointer;
	}
	.fs-7{
		font-size: 12px;
		float: right;
		margin-top: 20px;
	}
</style>
