<template>
	<div class="left">
		<div class="ykt-title">
			<span>直播公开课</span>
			<a href="#">
				<span>更多</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
					<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
				</svg>
			</a>
		</div>
		<div class="card-con">
			<div class="cont">
				<template v-for="(item,index) in Data" :key="index">
					<zbCard :Data="item"/>
				</template>
			</div>
			<div class="rightBtn nextBtn" @click="rightMove" v-show="this.index>=0">
				<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="currentColor" class="bi bi-chevron-right text-light" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
				</svg>
			</div>
			<div class="leftBtn nextBtn" @click="leftMove" v-show="this.index<=-1">
				<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="currentColor" class="bi bi-chevron-left text-light" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
import zbCard from '@/components/card/zbCard.vue'
export default{
	name:'openClassleft',
	components:{
		zbCard
	},
	props:['Data'],
	data(){
		return {
			length:'',
			index:0,
			left:0
		}
	},
	watch:{
		Data(newval){
			this.length = newval.length
			var cont = document.getElementsByClassName('cont')[0]
			cont.style.width = this.length*267+'px'
		}
	},
	methods:{
		rightMove(){
			var cont = document.getElementsByClassName('cont')[0];
			this.index--
			console.log(this.index)
			if(this.index <= 3-this.length){
				this.index = 3-this.length;
			}
			this.left = this.index*267
			cont.style.left = this.left+'px'
		},
		leftMove(){
			var cont = document.getElementsByClassName('cont')[0];
			this.index++
			console.log(this.index)
			if(this.index >= 0){
				this.index = 0;
			}
			this.left = this.index*267
			cont.style.left = this.left+'px'
		}
	},
	updated(){
		if(this.length == 3){
			var rbtn = document.getElementsByClassName('rightBtn')[0]
			var lbtn = document.getElementsByClassName('leftBtn')[0]
			lbtn.style.display = 'none';
			rbtn.style.display = 'none';
		}
	}
}
</script>

<style scoped>
	.card-con{
		height: 290px;
		width: 800px;
		overflow: hidden;
		position: relative;
	}
	.cont{
		display: flex;
		justify-content: space-between;
		position: absolute;
		left: 0;
		transition: 1s;
	}
	.left{
		width: 800px;
		height: 100%;
	}
	.nextBtn{
		width: 42px;
		height: 50px;
		background-color: rgba(0, 0, 0, .5);
		position: absolute;
		top: 108px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.leftBtn{
		border-radius: 0 50% 50% 0;
		left: 0;
	}
	.rightBtn{
		border-radius: 50% 0 0 50%;
		right: 0;
		
	}
</style>