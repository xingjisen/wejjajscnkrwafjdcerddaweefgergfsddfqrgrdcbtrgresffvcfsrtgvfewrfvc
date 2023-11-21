<template>
	<view>
		
		<view class="x_navBarBox">
			
			<view>
				
				<u-navbar leftText="项目列表" :safeAreaInsetTop="true" fixed autoBack bgColor="white"
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

			<view class="x_classify">
				<u-collapse :border="false" accordion @change="change" @close="close" @open="open">
					<view class="x_classif_style">

						<!-- <view class="x_classify_sty">
							<u-collapse-item title="重置" name="Docs guide">
								<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
							</u-collapse-item>
						</view> -->
						<view class="x_classify_sty">
							<u-collapse-item title="癌种" name="Docs guide">
								<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
							</u-collapse-item>
						</view>
						<view class="x_classify_sty">
							<u-collapse-item title="线数" name="Docs guide">
								<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
							</u-collapse-item>
						</view>
						<view class="x_classify_sty">
							<u-collapse-item title="地区" name="Docs guide">
								<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
							</u-collapse-item>
						</view>
						<view class="x_classify_sty">
							<u-collapse-item title="种类" name="Docs guide">
								<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
							</u-collapse-item>
						</view>
					</view>
				</u-collapse>
			</view>

			
			<view class="x_scroll_y">
				<scroll-view scroll-y :style="{margin:'100rpx 0 0 0',height:x_phone_height - 20 + 'px'}">
					<globalList></globalList>
				</scroll-view>
			</view>
		</view>
	</view>


	</view>
</template>

<script>
	import globalList from '@/components/globalList/globalList'
	export default {
		data() {
			return {
				
				x_phone_h: 0,
				x_phone_h2: 0,
				x_phone_h3: 0,
				x_phone_height: 0
			}
		},
		components: {
			globalList
		},
		onLoad() {
			const query = uni.createSelectorQuery().in(this);
			
			query.select('.x_search').boundingClientRect(data => {
				console.log("x_search", data.height);
				this.x_phone_h = data.height;
			}).exec();
			query.select('.x_navBarBox').boundingClientRect(data => {
				console.log("x_navBarBox", data.height);
				this.x_phone_h2 = data.height;
			}).exec();

			query.select('.x_classify').boundingClientRect(data => {
				console.log("x_classify", data.height);
				this.x_phone_h3 = data.height;
				
				uni.getSystemInfo({
					success:(res) => {
						console.log("设备高度:", res.screenHeight)
						this.x_phone_height = res.screenHeight - this.x_phone_h - this.x_phone_h2 - this.x_phone_h3

						console.log("剩余高度", this.x_phone_height);
					}
				})
			}).exec();

		},
		methods: {
			open(e) {
				
			},
			close(e) {
				
			},
			change(e) {
				
			}

		}
	}
</script>

<style lang="scss" scoped>
	.x_body {
		width: 90%;
		height: auto;
		margin: 0.625rem auto 0;
		position: relative;

		.x_search {
			width: 100%;
			height: auto;
			margin: 0 auto;
			padding-top: 0.625rem;
		}

		.x_classify {
			position: absolute;
			z-index: 10;
			width: 100%;
			height: auto;
			margin: 0.625rem auto;

			.x_classif_style {
				display: flex;
				justify-content: space-between;

				.x_classify_sty {
					width: 5rem;
					.u-collapse-content{
						color: #333333;
						margin-top: 0;
						padding: 0.3125rem;
						background-color: white;
					}
				}
			}
		}

		
		.x_scroll_y {
			width: 100%;
			height: auto;
		}
	}
</style>