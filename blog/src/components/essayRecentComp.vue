<template>
	<div class="bg-light p-5 border shadow mt-4 content-box">
		<h4 class="border-start border-4 border-primary ps-3">近期文章</h4>
		<ul class="text-dark mt-4">
			<li>
				<a href="#" class="text-decoration-none" @click="toEssay(1)">程序员35岁就被“死亡”了？</a>
			</li>
			<li class='mt-2'>
				<a href="#" class="text-decoration-none" @click="toEssay(2)">大前端到底是什么？</a>
			</li>
			<li  class='mt-2'>
				<a href="#" class="text-decoration-none" @click="toEssay(3)">传说中的万物皆可JS？</a>
			</li>
			<li  class='mt-2'>
				<a href="#" class="text-decoration-none" @click="toEssay(4)">探索隐藏在对象中的GET/SET方法？</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'essayRecentComp',
  data(){
		return {
			
		}
  },
	methods:{
		toEssay(essayId){				//跳转到EssayBlog页面 并将id传入
			this.$emit("sss",essayId)
			this.$router.push({path:'/blogEssay',query:{
				essayId
				},
			})
		}
	}
}
</script>

<style>
	
</style>