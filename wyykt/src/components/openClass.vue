<template>
	<div class="openClass">
		<left :Data="needDataL"/>
		<right :Data="needDataR"/>
	</div>
</template>

<script>
import left from './openClass/left.vue'
import right from './openClass/right.vue'
export default{
	name:'openClass',
	components:{
		left,
		right
	},
	props:['needDataR','needDataL']
	
}
</script>

<style scoped>
	.openClass{
		width: 1205px;
		height: 370px;
		margin: 12px auto 0 auto; 
		display: flex;
		justify-content: space-between;
	}
</style>