<template>
	<div class="shadow border p-5 bg-light">
		<img :src="imgUrl" class="img-fluid w-100" >
		<h4 class="mt-3">{{essayBlog.title}}</h4>
		<ul class="list-unstyled d-flex border-start border-3 border-primary" style="">
			<li class="ms-4 d-flex align-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
					<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
				</svg>
				<a href="#" class="alert-link text-decoration-none ms-1">{{essayBlog.writer}}</a>
			</li>
			<li class="ms-4 d-flex align-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
					<path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
					<path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"/>
				</svg>
				<a href="#" class="alert-link text-decoration-none ms-1">{{essayBlog.lable}}</a>
			</li>
			<li class="ms-4 d-flex align-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
					<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
				</svg>
				<a href="#" class="alert-link text-decoration-none ms-1">{{essayBlog.talker}}</a>
			</li>
		</ul>
		<p class='mb-2 fw-lighter' v-for="(item,index) in text" :key="index">
			{{item}}
		</p>
	</div>
</template>

<script>
export default {
  name: 'essayComp',
  data(){
		return {
			imgUrl:'',
			text:[]
		}
  },
  watch:{
	essayBlog(newval){
		this.imgUrl = newval.imgUrl;
		this.text = eval('['+newval.essayText+']')
	}
  },
  props:['essayBlog']
}
</script>

<style>
	
</style>