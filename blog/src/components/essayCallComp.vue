<template>
	<!-- 发送留言 -->
	<div class="shadow border p-5 bg-light mt-4">
		<h4 class="border-start border-4 border-primary ps-3">发送留言</h4>
		<form action="" method="">
			<div class="row">
				<div class="col-6">
					<input class="form-control" v-model="userName" type="text" placeholder='Name*' name="" id=""/>
				</div>
				<div class="col-6">
					<input class="form-control" v-model="userEmail" type="text" placeholder='Email*' name="" id=""/>
				</div>
				<div class="col-12 mt-4">
					<div class="form-floating">
						<textarea placeholder="2" v-model="userTalkText" class="form-control " rows="" cols="" id="textarea1" style="height: 120px;"></textarea>
						<label for="textarea1">Content</label>
					</div>
					<button type="button" class="btn btn-secondary mt-3" @click="pushTalk">提交留言</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { postTalkData } from '@/api/index.js';
export default {
  name: 'essayCallComp',
  data(){
		return {
			userName:'',
			userEmail:'',
			userTalkText:''
		}
  },
  methods:{
	pushTalk(){
		var qata = {
			"userName":this.userName,
			"userEmail":this.userEmail,
			"userTalkText":this.userTalkText
		}
		console.log(qata)
		postTalkData(qata).then(res => {
			console.log(res)
		}).catch(error => {
			console.log(error)
		})
	}
  }
}
</script>

<style>
	
</style>