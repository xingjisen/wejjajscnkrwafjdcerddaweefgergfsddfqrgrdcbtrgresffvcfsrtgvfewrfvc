<template>
	<view>
		
		
		<view class="x_page_Pattern1" v-for="(item,index) in x_data" :key="index">
			<view class="x_page_Pattern1_left">
				<view class="x_page_Pattern1_left_top">{{item.name}}</view>
				<view class="x_page_Pattern1_left_bottom">
					<view>{{item.classify}}</view>
					<view>
						<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/release.png" mode=""></image>
						{{item.type}}
					</view>
				</view>
			</view>
			<view class="x_page_Pattern1_right">
				<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/release.png" mode=""></image>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		name: "bk-list",
		data() {
			return {

			};
		},
		props: {
			x_data: Array
		}
	}
</script>

<style lang="scss" scoped>
	

	
	.x_page_Pattern1 {
		width: 100%;
		height: auto;
		margin: 0 auto;
		padding: 10px 0 10px;
		display: flex;
		border-bottom: #eeeeee solid 1px;
		justify-content: space-between;

		.x_page_Pattern1_left {
			
			width: 65%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.x_page_Pattern1_left_top {
				font-size: 0.9rem;
				color: #333333;
				font-weight: bold;
			}

			.x_page_Pattern1_left_bottom {
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

		.x_page_Pattern1_right {
			
			width: 30%;
			border-radius: 5px;
			height: 80px;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>