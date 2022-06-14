<template>
	<!-- Blog start -->
	<div class="container position-relative pb-4 pt-5">
		<div class="position-absolute" id="Blog" style="top: -60px;"></div>
		<div class="container-fluid text-dark">
			<h2>博客<span class="fw-light fs-4 ms-2">Blog</span></h2>
			<p>博客是以超级链接为入口的网络日记，它代表着新的生活、工作和学习方式。许多博客专注在特定的课题上提供评论或新闻，其他则被作为个人性的日记。</p>
		</div>
		<div class="row mt-4">
			<div class="col-12 col-md-6">
				<a href="#" class="text-decoration-none d-block nav-link p-0" @click="toEssay(0)">
					<img :src="bolgBgUrl[0]" class="img-fluid rounded" >
					<h5 class="mt-4 text-dark"><span class="text-light">程序类(Programmer) - </span>为什么有些人一直换工作？</h5>
					<p class="text-truncate text-dark">带你了解真正的程序员的入职时心酸苦与累。</p>
				</a>
			</div>
			
			<div class="col-12 col-md-6">
				<a href="#" class="text-decoration-none d-block nav-link p-0" @click="toEssay(1)">
					<img :src="bolgBgUrl[1]" class="img-fluid rounded" >
					<h5 class="mt-4 text-dark"><span class="text-light">程序类(Programmer) - </span>程序员35岁就被“死亡”了？</h5>
					<p class="text-truncate text-dark">35岁真的就是程序员的“死亡”年龄么。</p>
				</a>
				
			</div>
		</div>
	</div>
	<!-- Blog end -->
</template>

<script>
export default {
  name: 'blogComp',
  data(){
		return {
			bolgBgUrl:['http://43.142.20.103/assets/img/portfolio-1.jpg','http://43.142.20.103/assets/img/portfolio-2.jpg']
		}
  },
  methods:{
	toEssay(essayId){				//跳转到EssayBlog页面 并将id传入
		this.$router.push({path:'/blogEssay',query:{
			essayId
			},
		})
	}
  }
}
</script>

<style scoped>
	.position-relative{
		
	}
</style>