<template>
	<div class="allClass">
		<div class="ykt-title">
			<span>{{title}}</span>
		</div>
		<div class="card-con">
			<template v-for="(item,index) in needData" :key="index">
				<classCard :Data='item'/>
			</template>
		</div>
	</div>
</template>

<script>
	import classCard from './card/classCard.vue'
	export default{
		name:'allClass',
		components:{
			classCard
		},
		data(){
			return {
				eliteData:''
			}
		},
		methods:{
		},
		props:['needData','title']
	}
</script>

<style scoped>
	.allClass{
		width: 1205px;
		height: 435px;
		margin: 7px auto 0;
	}
</style>