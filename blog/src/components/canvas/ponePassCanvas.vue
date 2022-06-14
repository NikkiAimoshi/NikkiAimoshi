<template>
	<div class="ponePasscanvas">
		<canvas id="canvas1" width="100" height="40" @click="change()"></canvas>
	</div>
</template>

<script>
export default {
  name: 'ponePasscanvas',
  data(){
		return {
			canvasPass:''
		}
  },
	methods:{
		createCanvas(){
			this.getCanvasFont()
			let canvas = document.getElementById('canvas1')
			let	context = canvas.getContext('2d')
			context.clearRect(0,0,100,40);
			context.font = "bold 30px Georgia";
			canvas.style.backgroundColor = this.randomColor();
			for(var i=0; i<this.canvasPass.length; i++){
				var x = 10 + i * 20;
				var y = 22 + Math.random() * 8;
				var deg = Math.random()*90*Math.PI/180-45*Math.PI/180;
				context.translate(x, y);
				context.rotate(deg);
				context.fillStyle = this.randomColor2();
				context.fillText(this.canvasPass[i], 0, 0);
				context.rotate(-deg);
				context.translate(-x, -y);
			}
			for( i=0;i<5;i++){
				context.strokeStyle = this.randomColor2();
				context.beginPath();
				context.moveTo(Math.random()*120-10,Math.random()*60-15);
				context.lineTo(Math.random()*120-10,Math.random()*60-15);
				context.stroke();
			}
			for (i = 0; i <= 30; i++) {
				context.strokeStyle = this.randomColor2();
				context.beginPath();
				x = Math.random() * 100;
				y = Math.random() * 40;
				context.moveTo(x, y);
				context.lineTo(x + 1, y + 1);
				context.stroke();
			}
		},
		randomColor(){
			var r = Math.floor(Math.random() * 100+100);
			var g = Math.floor(Math.random() * 100+100);
			var b = Math.floor(Math.random() * 100+100);
			return "rgb(" + r + "," + g + "," + b + ")";
		},
		randomColor2(){
			var r = Math.floor(Math.random() * 250);
			var g = Math.floor(Math.random() * 250);
			var b = Math.floor(Math.random() * 250);
			return "rgb(" + r + "," + g + "," + b + ")";
		},
		change(){
			this.createCanvas();
		},
		getCanvasFont(){
			var sCode = "a,b,c,d,e,f,g,h,i,g,k,l,n,m,o,p,q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,8,9,0,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M"
			var aCode = sCode.split(",")
			var txt = ''
			for(var i=0;i<4;i++){
				txt += aCode[Math.floor(Math.random()*aCode.length)]
			}
			this.canvasPass = txt;
			this.$emit('canvasCode',txt)
		}
	},
	created() {
		this.getCanvasFont()
		setTimeout(()=>{this.createCanvas()},200)
	}
}
</script>

<style scoped lang="scss">

</style>