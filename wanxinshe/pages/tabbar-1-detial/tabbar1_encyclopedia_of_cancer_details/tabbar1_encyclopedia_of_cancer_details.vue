<template>
	<view>
		
		<view class="x_navBarBox">
			
			<view>
				
				<u-navbar leftText=" " :safeAreaInsetTop="true" fixed autoBack bgColor="white" @rightClick="rightClick"
					:autoBack="true" :placeholder="true">
				</u-navbar>
			</view>
		</view>

		<view class="x_body">
			<view class="x_jianjie">
				<view class="x_title">{{ x_transmit_title }}</view>
				<view class="x_zw"></view>
				<view class="x_f_title">英文名称：danguanaimadjkt</view>
				<view class="x_zw"></view>
				<view class="x_f_title">别名：胆管上皮细胞癌</view>
				<view class="x_wenxian">参考文献（共16篇）<br>123456<br>123456<br>123456</view>
			</view>
			<view class="x_tabs">
				<view class="x_color">简介</view>
				<view>基础</view>
				<view>预防</view>
				<view>诊断</view>
				<view>治疗</view>
				<view>检测随访</view>
			</view>


		</view>
		<view class="x_body_1">
			<scroll-view scroll-y :style="{ height: x_phone_height_1 - x_phone_height + 20 + 'px' }">
				<view v-for="i in 10">
					<view class="x_tabs_title">简介</view>
					<view class="x_tabs_body">
						neirongneirongneirongneirongneirongneirongneirongneirongneirongneirongneirongneirongneirongneirong
					</view>
				</view>

			</scroll-view>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				statusBarHeight: 0,
				
				navBarHeight: 82 + 11,
				
				x_transmit_title: "",
				
				list1: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '电影'
				}, {
					name: '科技'
				}, {
					name: '音乐'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}],
				
				x_phone_height: 0,
				x_phone_height_1: 0

			}
		},
		methods: {

		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.name); //打印出上个页面传递的参数。
			this.x_transmit_title = option.name

			
			const query = uni.createSelectorQuery().in(this);
			query.select('.x_body').boundingClientRect(data => {
				console.log("x_body", data.height);
				this.x_phone_height += data.height
				
				
				console.log("已占高度", this.x_phone_height);
				
				uni.getSystemInfo({
					success: res => {
						console.log("设备高度:", res.screenHeight)
						this.x_phone_height_1 = res.screenHeight - this.x_phone_height
						console.log(res.screenHeight, this.x_phone_height);
					}
				})
			}).exec();


		},
		//第一次加载时调用
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
	}
</script>

<style lang="scss" scoped>
	.x_body {
		width: 90%;
		height: auto;
		margin: 0.625rem auto;

		.x_jianjie {
			.x_title {
				font-size: 1.3rem;
				color: #5298FF;
				font-weight: bold;
			}

			.x_f_title {
				font-size: 0.8rem;
				color: #666666;
			}

			.x_zw {
				height: 0.9375rem;
			}

			.x_wenxian {
				color: #666666;
				font-size: 0.8rem;
			}
		}

		.x_tabs {
			display: flex;
			justify-content: space-between;
			margin: 0.625rem;

			.x_color {
				color: #5298FF;
				font-weight: bold;
			}
		}
	}

	.x_body_1 {
		border-top: 0.0625rem solid #666666;
		width: 100%;

		

		scroll-view {
			width: 85%;
			margin: 0 auto;
			height: calc(64vh);

			.x_tabs_title {
				font-size: 1.2rem;
				font-weight: bold;
				margin: 1.25rem 0;
			}

			.x_tabs_body {
				word-wrap: break-word;
				word-break: break-all;
				white-space: pre-line;
			}
		}
	}
</style>