<template>
	<view>
		
		<view class="x_navBarBox">
			
			<view>
				
				<u-navbar leftText="全球新药" :safeAreaInsetTop="true" fixed autoBack bgColor="white"
					@rightClick="rightClick" :autoBack="true" :placeholder="true">
				</u-navbar>
			</view>
		</view>


		<view class="x_body">
			<view class="x_search">
				<u-toast ref="uToast" />
				<u-search @custom="x_custom_search" :clearabled="true" showAction actionText="搜索"
					:actionStyle="{'color':'#5babff'}" borderColor="#666666" bgColor="white" searchIconColor="#666666"
					:animation="true" placeholder="搜索新药/实验项目/适应症" v-model="keyword"></u-search>
			</view>

			
			<view class="x_segment">
				<view class="x_segment_top">
					<view class="x_segment_top_left" @click="x_segment_top_left">
						<view class="x_top_title">一文了解临床试验</view>
						<view class="x_top_body">
							免费用药 提前获益 自愿参加 随时退出
						</view>
					</view>
					<view class="x_segment_top_right">
						<view @click="x_segment_top_right_top">
							<view class="x_top_title">常见问题</view>
							<view class="x_top_body">您关心的问题都在这里</view>
						</view>
						<view @click="x_segment_top_right_bottom">
							<view class="x_top_title">报名条件</view>
							<view class="x_top_body">什么条件下可以参与</view>
						</view>
					</view>
				</view>

				<view class="x_segment_bottom" @click="x_segment_bottom">
				</view>
			</view>


			<view class="x_scroll_y">
				<scroll-view scroll-y :style="{ height: x_phone_height - 60 + 'px' }">
					
					<view class="x_list_of_new_drugs">
						<view>新药列表</view>
						<view @click="x_view_more">查看更多</view>
					</view>
					
					<globalList></globalList>
					
					
					
					
					
					<view class="x_list_of_new_drugs">
						<view>新药资讯</view>
						<view @click="x_view_more">查看更多</view>
					</view>
					
					
					<bkList></bkList>
				</scroll-view>
			</view>

		</view>



	</view>
</template>

<script>
	import bkList from "@/components/bk-list/bk-list"
	import globalList from "@/components/globalList/globalList"
	export default {

		data() {
			return {
				
				keyword: '',
				
				x_phone_h:0,
				x_phone_h1:0,
				x_phone_h2:0,
				
				x_phone_height: 0
			}
		},
		components: { 
			bkList,
			globalList,
		},
		onLoad() {
			
			const query = uni.createSelectorQuery().in(this);
			query.select('.x_segment').boundingClientRect(data => {
				console.log("x_segment", data.height);
				this.x_phone_h = data.height
			}).exec();


			query.select('.x_search').boundingClientRect(data => {
				console.log("x_search", data.height);
				this.x_phone_h1 = data.height
				
				console.log("已占高度", this.x_phone_height);
				

			}).exec();
			
			query.select('.x_navBarBox').boundingClientRect(data => {
				console.log("x_navBarBox", data.height);
				this.x_phone_h2 = data.height
				
				uni.getSystemInfo({
					success: res => {
						console.log("设备高度:", res.screenHeight)
						this.x_phone_height = res.screenHeight - this.x_phone_h - this.x_phone_h1 - this.x_phone_h2
						console.log(res.screenHeight, this.x_phone_height);
						
					}
				})
				
			}).exec();
			

		},
		methods: {
			
			x_view_more(){
				uni.navigateTo({
					url:"/pages/tabbar-1-detial/itemlist/itemlist"
				})
			},
			
			x_segment_top_left() {
				this.$u.toast(`疑问了解临床试验`)
			},
			
			x_segment_top_right_top() {
				this.$u.toast(`常见问题`)
			},
			
			x_segment_top_right_bottom() {
				this.$u.toast(`报名条件`)
			},
			
			x_segment_bottom() {
				uni.navigateTo({
					url: `/pages/tabbar-1-detial/clinicaltest/clinicaltest`
				})
			},
			
			x_custom_search() {
				console.log(this.keyword);
				this.$u.toast(`用户输入了：${this.keyword}`)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.x_body {
		width: 90%;
		height: auto;
		margin: 0.625rem auto 0;

		.x_search {
			width: 100%;
			height: auto;
			margin: 0 auto;
			padding-top: 0.625rem;
		}

		.x_segment {
			width: 100%;
			height: auto;
			margin: 1.25rem 0;

			.x_segment_top {
				display: flex;
				width: 100%;
				height: auto;
				justify-content: space-around;

				.x_segment_top_left {
					width: 45%;
					height: 9.375rem;
					border-radius: 0.3125rem;
					background: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/x_segment_top_left.png") no-repeat;
					background-size: 100%;

					.x_top_title {
						width: 4.375rem;
						font-weight: bold;
						font-size: 1rem;
						color: #333333;
						margin: 1.875rem 0 0 0.625rem;
					}

					.x_top_body {
						width: 10.625rem;
						font-size: 0.8rem;
						color: #666666;
						background: none;
						margin: 0.3125rem 0 0 0.625rem;
					}
				}

				.x_segment_top_right {
					width: 45%;
					height: 9.375rem;
					border-radius: 0.3125rem;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					>view:nth-child(1) {
						width: 100%;
						height: 4.375rem;
						border-radius: 0.3125rem;
						background: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/x_segment_top_right.png") no-repeat;
						background-size: 100%;


					}

					>view:nth-child(2) {
						width: 100%;
						height: 4.375rem;
						border-radius: 0.3125rem;
						background: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/x_segment_top_right.png") no-repeat;
						background-size: 100%;
					}


					.x_top_title {
						font-weight: bold;
						font-size: 1rem;
						color: #333333;
						margin: 10.3125rem 0 0 0.625rem;
					}

					.x_top_body {
						font-size: 0.8rem;
						color: #666666;
						background: none;
						margin: 0 0 0 0.625rem;
					}
				}
			}

			.x_segment_bottom {
				margin: 0.625rem 0;
				width: 100%;
				height: 400rpx;
				background: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/x_segment_bottom.png") no-repeat;
				background-size: 100%;
			}
		}
		
		.x_scroll_y{
			width: 100%;
			
			.x_list_of_new_drugs{
				width: 100%;
				margin: 0.625rem 0;
				display: flex;
				justify-content: space-between;
				view:nth-child(2){
					font-size: 0.8rem;
				}
			}
			
			
		}
	}
</style>