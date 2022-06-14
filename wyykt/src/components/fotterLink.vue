<template>
	<div class="fotterLink">
		<div class="fotterLink-body">
			<div class="left">
				<ul>
					<li><a href="#">关于我们</a></li>
					<li><a href="#">联系我们</a></li>
					<li><a href="#">帮助中心</a></li>
					<li><a href="#">中国大学MOOC</a></li>
					<li><a href="#">卡搭编程</a></li>
					<li><a href="#">有道智云</a></li>
					<li><a href="#">有道社招</a></li>
					<li><a href="#">有道校招</a></li>
					<li><a href="#">廉正举报</a></li>
				</ul>
				<div class="text"> 
					<span>©1997-2022 网易公司 版权所有</span>
					<span>粤B2-20090191-18</span>
					<a href="#">工业和信息化部备案管理系统网站</a>
				</div>
				<div class="text">
					<p>违法和不良信息举报电话（涉未成年人）：0571-89853416 举报邮箱（涉未成年人）：youdao_jubao@rd.netease.com <a href="#">网上有害信息举报专区</a></p>
				</div>
			</div>
			<div class="right">
				<div class="img">
					<img src="@/assets/img/an_icon.png" alt="">
					<img src="@/assets/img/app_icon.png" alt="">
				</div>
				<div class="guanz">
					<span>关注我们:</span>
					<img class="wx-icon" src="@/assets/img/wx_icon.png" alt="">
					<div class="wx-box">
						<p class="fs-7">关注云课堂官方微信号</p>
						<p class="fs-8">领取课程免费福利，超值学习资料</p>
						<img src="@/assets/img/ewm_icon_share.png" alt="">
					</div>
					<img src="@/assets/img/wb_icon.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'fineClass',
	}
</script>

<style scoped lang="scss">
	.fotterLink{
		width: 100%;
		height: 179px;
		display: flex;
		justify-content: center;
		background-color: #474443;
		margin-top: 25px;
		.fotterLink-body{
			width: 1205px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.left{
				padding: 42px 0px;
				width: 900px;
				ul{
					display: flex;
					list-style: none;
					margin: 0%;
					padding: 0%;
					li{
						margin-right: 20px;
						a{
							text-decoration: none;
							color: white;
							font-size: 14px;
						}
						a:hover{
							text-decoration: underline;
						}
					}
				}
				.text{
					font-size: 14px;
					color: #999;
					margin-top: 14px;
					span{
						font-size: 14px;
						margin-right: 20px;
					}
					p{
						margin: 0%;
						padding: 0%;
					}
					a{
						color: #999;
						text-decoration: none;
					}
					a:hover{
						color: #FFF;
						text-decoration: underline;
						
					}
				}
			}
			.right{
				width: 300px;
				height: 100%;
				padding: 30px 0;
				.img{
					margin-left: 56px;
					img{
						margin-left: 10px;
					}
				}
				.guanz{
					display: flex;
					align-items: center;
					justify-content: end;
					color: white;
					margin-top: 20px;
					position: relative;
					img{
						margin-left: 10px;
					}
					.wx-icon:hover+.wx-box{display: block;}
					.wx-box{
						width: 240px;
						height: 227px;
						background: white;
						position: absolute;
						top: -250px;
						left: 120px;
						border-radius: 5px;
						z-index: 2;
						box-shadow: 0 0 3px #ccc;
						display: none;
						p{
							height: 14px;
							line-height: 14px;
							text-align: center;
							margin-top: 18px;
							z-index: 100;
							color: black;
						}
						.fs-7{
							font-size: 14px;
						}
						.fs-8{
							font-size: 12px;
						}
						img{
							width: 125px;
							height: 125px;
							margin-left: 58px;
						}
					}
					.wx-box::after{
						width: 20px;height: 20px;
						position: absolute;
						left: 47%;
						bottom: -5px;
						transform: rotate(45deg);
						background: white;
						content: "";
						box-shadow: 0 0 3px #ccc;
					}
				}
			}
		}
	}
</style>