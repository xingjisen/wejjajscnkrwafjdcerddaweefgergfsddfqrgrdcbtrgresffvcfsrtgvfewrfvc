<template>
	<view>
		
		
		
		<view class="x_page_Pattern2">
			<view class="x_page_Pattern2_top">
				癌症患者采用靶向药物治疗时，吃中药能缓解副作用吗？
			</view>
			<view class="x_page_Pattern2_middle">
				<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/qa.png" mode=""></image>
				<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/qa.png" mode=""></image>
				<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/qa.png" mode=""></image>
			</view>
			<view class="x_page_Pattern2_bottom">
				<view>康复护理</view>
				<view>
					<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/release.png" mode=""></image>
					图文
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "bk-list2",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	//样式2
	.x_page_Pattern2 {
		width: 100%;
		height: 140px;
		margin: 0 auto;
		padding: 10px 0 10px;
		border-bottom: #eeeeee solid 1px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	
		.x_page_Pattern2_top {
			font-size: 0.9rem;
			color: #333333;
			font-weight: bold;
			margin-bottom: -30rpx;
		}
	
		.x_page_Pattern2_middle {
			width: 100%;
			display: flex;
			justify-content: space-between;
			image {
				width: 32%;
				height: 70px;
			}
		}
	
		.x_page_Pattern2_bottom {
			margin-top: -30rpx;
			color: #666666;
			font-size: 0.7rem;
			display: flex;
	
			view {
				margin: 0 5px;
			}
	
			view:nth-child(2) {
				image {
					margin: 0 5px 0 0;
					width: 12px;
					height: 12px;
					vertical-align: middle;
				}
			}
		}
	}
	
</style>