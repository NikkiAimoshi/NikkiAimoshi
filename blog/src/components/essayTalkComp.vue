<template>
	<!-- 留言 -->
	<div class="shadow border p-5 bg-light mt-4">
		<h4 class="border-start border-4 border-primary ps-3">留言</h4>
		<div class="talk" v-for="(item, index) in data" :key="index">
			<div class="mt-4 d-flex">
				<div class="ms-4 w-auto">
					<h4>
						<b>{{item.userName}}</b>
						<span class="ms-2" style="font-size: 13px;">{{item.date}}</span>
					</h4>
					<p class='text-secondary'>{{item.value}}</p>
				</div>
			</div>
			<div class=" d-flex ms-3">
				<div class="ms-4 w-auto" v-show="item.type==1">
					<h4 class="fs-6"><b>{{item.reply.userName}}</b><span class="ms-2" style="font-size: 12px;">{{item.reply.date}}</span></h4>
					<p class='text-secondary'>{{item.reply.value}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'essayTalkComp',
  data(){
		return {
			data:''
		}
  },
  props:['talkData'],
  watch:{
	talkData(newval){
		for(let a in newval){
			if(newval[a].type == 1){
				newval[a].reply = JSON.parse(newval[a].reply)
			}
		}
		this.data = newval
		console.log(this.data)
	}
  }
}
</script>

<style>
	
</style>