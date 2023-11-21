<template>
	<view>
		
		
		<u-navbar leftText="报告解读" :safeAreaInsetTop="true" fixed autoBack bgColor="white" :autoBack="true"
			:placeholder="true">
		</u-navbar>

		<view class="x_body">
			<view class="x_select" @click="show = true">
				肿瘤选择: {{disease}} ▼
			</view>
			<view class="x_port">
				<view class="x_port_detail">
					<view>如何判断肿瘤分期？</view>
					<view>怎么看是良性还是恶性？</view>
				</view>
				<view class="x_port_detail">
					<view>怎么肿瘤进展判断？</view>
					<view>如何评估治疗方式和疗效？</view>
				</view>
				<view class="x_port_detail">
					<view>如何看懂血常规的化验单？</view>
					<view>每项指标的高低代表什么意义？</view>
				</view>
			</view>
			<u-picker :show="show" :columns="columns" keyName="label" @confirm="confirm" @cancel="cancel"></u-picker>
			
			<view class="x_subscribe">
				点击预约
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				cancerData: [
					{
						id:"1",
						title:"如何判断肿瘤分期?怎么看是良性还是恶性？"
					},{
						id:"2",
						title:"怎么肿瘤进展判断？如何评估治疗方式和疗效？"
					},{
						id:"3",
						title:"如何看懂血常规的化验单？每项指标的高低代表什么意义？"
					},
				],
				columns: [
					[{
						label: '肿瘤1',
						id: 1
					}, {
						label: '肿瘤1',
						id: 2
					}]
				],
				disease:"请选择"
			};
		},
		methods: {
			cancel() {
				this.show = false
			},
			confirm(e) {
				console.log('confirm', e.value[0].label)
				this.disease = e.value[0].label
				this.show = false
			}
		},
		onLoad() {

		}
	}
</script>

<style lang="scss">
	.x_body {
		width: 100%;
		height: 1000px;
		background-image: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/detail/bgjd.png");
		background-size: 100% 100%;
		position: relative;

		.x_select {
			font-weight: bold;
			color: #87270D;
			position: absolute;
			top: 23.5%;
			left: 10%;
		}

		.x_subscribe {
			padding: 4px 35px;
			background-color: #3886F2;
			border-radius: 20px;
			color: #fff;
			position: absolute;
			bottom: 1%;
			left: 8%;
			letter-spacing: 5px;
		}

		.x_port {
			position: absolute;
			top: 30%;
			left: 10%;
			width: 80%;
			height: 500px;

			.x_port_detail {
				margin-top: 50px;
				color: #3581E8;
				text-align: center;
				font-size: 1.2rem;
				line-height: 27px;
			}

			.x_port_detail:nth-child(2),
			.x_port_detail:nth-child(3) {
				margin-top: 120px;
			}
		}
	}
</style>