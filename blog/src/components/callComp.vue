<template>
	<!-- call start -->
	<div class="container-fluid bg-light position-relative pb-5 p-3">
		<div class="position-absolute" id="Call" style="top: -60px;"></div>
		<div class="container">
			<div class="container-fluid mt-5">
				<h2>联系我<span class="fw-light fs-4 ms-2">Call</span></h2>
				<p>我知道你一定有很多话想跟我说，无论是学习的，还是其他方面的，只要你有问题，就可以发送给我，我会尽可能与你联系。</p>
			</div>
			<div class="row mt-5">
				<div class="col-12 col-md-6 order-md-0 order-2">
					<div class="d-md-block d-none">
						<h5>发一封邮件试试</h5>
						<span class="fw-light">今天第一次刚认识我？没关系，我们已经是朋友了。发个邮件让我知道你来过了。</span>
					</div>
					<h5 class="mt-5">联系方式</h5>
					<b class="mt-2">Email: </b>
					<span>1255070873@qq.com</span><br>
					<b>Phone: </b>
					<span>150-05897767</span><br>
					<b>QQ: </b>
					<span>1255070873</span><br>
					<b>微信: </b>
					<span>15005897767</span>
					<h5 class="mt-5">联系地址</h5>
					<b>school: </b>
					<span>徐州工程学院</span><br>
					<b>home: </b>
					<span>义乌市</span>
				</div>
				<div class="col-12 col-md-6 border shadow p-5">
					<div class="row">
						<div class="col-12">
							<div class="d-md-none d-block mb-4">
								<h5>发一封邮件试试</h5>
								<span class="fw-light">今天第一次刚认识我？没关系，我们已经是朋友了。发个邮件让我知道你来过了。</span>
							</div>
						</div>
						<div class="col-6">
							<label class="form-label fw-light" for="FirstName">First Name<span class="text-danger">*</span></label>
							<input type="text" class="form-control" placeholder="First Name" name="" id="FirstName" value="" />
							<label class="form-label fw-light mt-3" for="Email">Email:</label>
							<input type="text" class="form-control" placeholder="Email" name="" id="Email" value="" />
						</div>
						<div class="col-6">
							<label class="form-label fw-light" for="FirstName">Last Name<span class="text-danger">*</span></label>
							<input type="text" class="form-control" placeholder="Last Name" name="" id="FirstName" value="" />
							<label class="form-label fw-light mt-3" for="PhoneNumber">Phone Number:</label>
							<input type="text" class="form-control" placeholder="Phone Number" name="" id="PhoneNumber" value="" />
						</div>
						<div class="col-12">
							<label class="form-label fw-light mt-3" for="Message">Message:</label>
							<textarea class="form-control" rows="" cols="" id="Message"></textarea>
							<input type="button" class="btn btn-dark mt-4" name="" id="" value="发送邮件" @click="call"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- call end -->
</template>

<script>
export default {
  name: 'callComp',
  data(){
		return {
		}
  },
  methods:{
	call(){
		console.log(this.user)
		alert('发送成功')
	}
  }
}
</script>

<style>
	
</style>