<template>
	<div class="bg-img position-absolute w-100 position-fixed h-100 " :style="'z-index: -1; background-size: cover; background-image: url('+bgUrl+');'">
		<div class="position-absolute w-100 h-100 py-3" style="z-index: 5;"></div>
	</div>
	<essaynavBarComp/>
	<div class="container">
		<div class="row py-5 px-0">
			<div class="col-lg-8 col-12">
				<essayComp :essayBlog="essayBlog"/>
				<essayTalkComp :talkData="talkData"/>
				<essayCallComp/>
			</div>
			<div class="col-lg-4 col-12">
				<essaySearchComp/>
				<essayRecentComp @sss="push"/>
				<essayLabelComp/>
			</div>
		</div>
	</div>
	<futterComp :showVal="footerdata"/>
</template>

<script>
import { getEssayBlog,getTalkData } from '@/api/index.js';
import essaynavBarComp from '@/components/essaynavBarComp.vue'
import essayComp from '@/components/essayComp.vue'
import essayTalkComp from '@/components/essayTalkComp.vue'
import essayCallComp from '@/components/essayCallComp.vue'
import essaySearchComp from '@/components/essaySearchComp.vue'
import essayRecentComp from '@/components/essayRecentComp.vue'
import essayLabelComp from '@/components/essayLabelComp.vue'
import futterComp from '@/components/futterComp.vue'
export default {
  name: 'blogEssay',
  data(){
		return {
			bgUrl:'http://43.142.20.103/assets/img/overlay-bg.jpg',	//portfolio-5
			essayId:'',										//本文章的id
			essayBlog:'',									//文章的Data
			talkData:'',									//留言的Data
			footerdata:true										//fotter状态
		}
  },
  components:{
		essaynavBarComp,
		essayComp,
		essayTalkComp,
		essayCallComp,
		essaySearchComp,
		essayRecentComp,
		essayLabelComp,
		futterComp
	},
	watch:{
		essayId(){
			console.log(1)
		}
	},
	methods:{
		getCompany(){
			getEssayBlog(this.essayId).then(res=> {
				this.essayBlog = res.data[0];
				console.log(this.essayBlog)
			}).catch(error=>{
				console.log(error)
			});
			getTalkData(this.essayId).then(res=> {
				this.talkData = res.data;
				console.log(res.data);
			}).catch(error=>{
				console.log(error)
			});
		},
		push(id){
			this.essayId =id;
			this.getCompany();
		}
	},
	created() {
		this.essayId = this.$route.query.essayId;		//获得EssayBlog文章的id 
		console.log(this.essayId)
		this.getCompany()
	}
}
</script>

<style scoped>
	.bg-img{
		background-position: center center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.content-box a{color: black;}
	.content-box a:hover{
		color: #0A53BE;
	}
</style>