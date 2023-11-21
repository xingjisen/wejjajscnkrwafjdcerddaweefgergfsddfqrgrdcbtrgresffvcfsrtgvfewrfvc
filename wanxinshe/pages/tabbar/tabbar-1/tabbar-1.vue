<template>
	<view>
		
		<view style="position: fixed;top: 0;" class="x_navBarBox">
			
			<view class="x_statusBar" :style="{ paddingTop: statusBarHeight + 10 + 'px' }"></view>
			
			<view class="x_navBar">
				<view class="x_navbar_1">
					<view class="x_flex">
						<image class="x_logo"
							src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/logo.png" mode="" />
						<view class="x_main_heading">万新医学</view>
					</view>
					<view class="x_subtitle_heading">帮助成千上万肿瘤患者重获新生</view>
				</view>
			</view>
		</view>
		

		<view class="img_fixed">
			<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/come.png" alt="">
		</view>
		<view style="margin-top: 200rpx" class="x_body">
			<view class="x_banner">
				<view class="x_search">
					<u-toast ref="uToast" />
					<u-search @custom="x_custom_search" :clearabled="true" showAction actionText="搜索"
						:actionStyle="{'color':'white'}" searchIconColor="#45ABFF" :animation="true"
						placeholder="搜疾病/症状/医院/药品等" v-model="keyword"></u-search>
				</view>
				<view class="x_recommend">
					<view>
						<view>推荐</view>
						<view>小视频</view>
						<view>排行榜</view>
					</view>
				</view>

				<view class="x_carousel">
					
					<u-swiper :list="list3" @click="x_carousel_click" indicator indicatorMode="line"
						circular></u-swiper>
				</view>


				
				<view class="x_grid">
					<u-grid :border="false" col="5">
						<u-grid-item @click="x_grid_click" v-for="(listItem,listIndex) in list" :key="listIndex">
							<image :src="listItem.name" mode=""></image>
							<text class="grid-text">{{listItem.title}}</text>
						</u-grid-item>
					</u-grid>
				</view>

				
				<view class="x_knowledge">
					<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/zsbk.png"
						mode=""></image>
				</view>

				
				<view class="x_question_of_the_day">
					<view>每日一问</view>
					<view v-if="x_question_of_the_day_trafa" class="x_question_of_the_day_title">
						{{ x_question_of_the_day_title }}
					</view>
					<view v-if="x_question_of_the_day_trafa" class="x_question_of_the_day_trafa">
						<view @click="x_trafa(1)">正确</view>
						<view @click="x_trafa(0)">错误</view>
					</view>

					
					<view v-if="!x_question_of_the_day_trafa" class="x_bj">
						<view class="x_question_of_the_day_answer">
							<text>题目解析:</text>{{ x_question_of_the_day_body }}<text @click="x_view_more">查看全文</text>
						</view>
						<view class="x_image_size">
							<image :src="x_image_src" mode=""></image>
						</view>
					</view>
				</view>

			</view>
			
			<view style="width: 90%;margin: -30rpx auto 0;">
				<scroll-view scroll-y
					:style="{ height: x_phone_height_1 - navBarHeight - statusBarHeight + 5 + 'px' }">
					
					<bkList :x_data="x_data_1" />
					
					<bk-list2></bk-list2>
					
					<bk-list3></bk-list3>
				</scroll-view>
			</view>
		</view>
		
		
		
		
		
		<u-tabbar :value="value4" @change="change01" :fixed="true" :placeholder="false" activeColor="#5babff"
			inactiveColor="#a6a7ac" placeholder :safeAreaInsetBottom="false">
			<u-tabbar-item text="首页">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/home1.png">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/home.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="百科">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/cyclopedia1.png">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/cyclopedia11.png">
				</image>
			</u-tabbar-item>
			<u-tabbar-item text=" ">
				<image class="u-page__item__slot-icon1" slot="active-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/plussign.png">
				</image>
				<image class="u-page__item__slot-icon1" slot="inactive-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/plussign.png">
				</image>
			</u-tabbar-item>
			<u-tabbar-item text="电子病历">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/case1.png">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/case.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="我的">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/my1.png">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/my.png"></image>
			</u-tabbar-item>
		</u-tabbar>
		
		<zero-privacy :onNeed='false' @disagree="disagree"></zero-privacy>
		
		
	</view>
</template>

<script>
	import bkList from "@/components/bk-list/bk-list"
	import bkList2 from "@/components/bk-list2/bk-list2"
	import bkList3 from "@/components/bk-list3/bk-list3"
	export default {
		data() {
			return {
				privacy: true,
				showPrivacy: false,
				
				statusBarHeight: 0,
				
				navBarHeight: 82 + 11,
				
				x_phone_height: 0,
				
				x_phone_height_1: 0,
				value4: 0,
				
				keyword: '',
				
				list3: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				
				list: [{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/zlbk.png',
						title: '肿瘤百科'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/yxgj.png',
						title: '医学工具'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/jyjc.png',
						title: '基因检测'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/bgjd.png',
						title: '报告解读'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/qyjs.png',
						title: '前沿技术'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/dbtb.png',
						title: '带病投保'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/jyxz.png',
						title: '就医协助'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/mfyy.png',
						title: '免费用药'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/gyjz.png',
						title: '公益救助'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/kasc.png',
						title: '抗癌商城'
					},
				],

				
				x_question_of_the_day_title: "基因检测做一次就行嘛",
				x_question_of_the_day_trafa: "false",
				x_question_of_the_day_answer: "",
				x_question_of_the_day_body: "解释原因解释原因解释原因解释原因解释原因解解释原因解释原因解解释原因解释原因解解释原因解释原因解解释原因解释原因解解释原因解释原因解解释原因解释原因解解释原因解释原因解解释原因解释原因解释原因解释原因解释原因解释原因解释原因",

				
				x_image_src: ""
			};
		},
		props: {

		},
		components: { 
			bkList,
			bkList2,
			bkList3,
		},
		onLoad() {
			
			
			
			
			
			


			
			
			
			
			

			

			
			
			
			
			
			
			
			


			uni.getPrivacySetting({
				success: res => {
					console.log(
						res) 
					if (res.needAuthorization) {
						
						
						
						
						console.log("用户没有确认");
					} else {
						
						console.log("用户确认了");
					}
				},
				fail: () => {},
				complete: () => {}
			})


			const maxLength = 55; 
			

			if (this.x_question_of_the_day_body.length > maxLength) {
				this.x_question_of_the_day_body = this.x_question_of_the_day_body.substr(0, maxLength) + '...';
			}
		},
		methods: {
			disagree() {
				
				uni.exitMiniProgram({
					success: function() {
						console.log('成功退出小程序');
					}
				});

			},
			
			x_view_more() {
				this.$refs.uToast.success(`点击了查看更多`)
			},
			
			x_trafa(val) {
				this.x_question_of_the_day_trafa = false
				let tf = 1
				
				if (tf == val) {
					this.x_question_of_the_day_answer = "正确"
					this.x_image_src = "https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/success.png"
				} else {
					this.x_question_of_the_day_answer = "错误"
					this.x_image_src = "https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/error.png"
				}
			},
			
			x_grid_click(name) {
				
				
				if (name == 0) {
					uni.navigateTo({
						url: `/pages/tabbar-1-detial/tabbar1_encyclopedia_of_cancer/tabbar1_encyclopedia_of_cancer`
					})
				}
				if (name == 2) {
					uni.navigateTo({
						url: '/pages/tabbar-1-detial/gene_detection/gene_detection'
					})
				}
				if (name == 3) {
					uni.navigateTo({
						url: '/pages/tabbar-1-detial/report_interpretation/report_interpretation'
					})
				}

				if (name == 7) {
					uni.navigateTo({
						url: `/pages/tabbar-1-detial/globalnewdrug/globalnewdrug`
					})
				}

				if (name == 8) {
					uni.navigateTo({
						url: `/pages/tabbar-1-detial/welfare_assistance/welfare_assistance`
					})
				}
			},
			
			x_carousel_click(index) {
				
				this.$u.toast(`用户点击了轮播图的第${index}张，跳转或者其他操作`)
			},
			
			x_custom_search() {
				console.log(this.keyword);
				this.$u.toast(`用户输入了：${this.keyword}`)
			},

			change01(index) {
				
				if (index == 0) {
					uni.switchTab({
						url: "../tabbar-1/tabbar-1"
					})
				} else if (index == 1) {
					uni.switchTab({
						url: "../tabbar-2/tabbar-2"
					})
				} else if (index == 2) {
					uni.switchTab({
						url: "../tabbar-3/tabbar-3"
					})
				} else if (index == 3) {
					uni.switchTab({
						url: "../tabbar-4/tabbar-4"
					})
				} else if (index == 4) {
					uni.switchTab({
						url: "../tabbar-5/tabbar-5"
					})
				}
				
			}
		},
		//第一次加载时调用
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
			console.log(this.statusBarHeight);
		},

	}
</script>
<style lang="scss" scoped>
	.x_navBar {
		color: white;

		.x_subtitle_heading {
			font-size: 0.7rem;
			font-weight: 300;
			margin-bottom: -15px;
		}
	}

	.x_body {
		width: 100%;
		height: auto;
		margin: 0 auto;

		.x_banner {
			width: 100%;
			height: auto;
			margin: -0.375rem 0 0 0;
			
			background-image: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/bg1.png");
			background-repeat: repeat-x;

			.x_search {
				width: 90%;
				height: auto;
				margin: 0 auto;
				padding-top: 0.625rem;
			} 

			.x_recommend {
				width: 85%;
				height: auto;
				margin: 0.1375rem auto -1.1rem;
				margin-left: 35rpx;
				display: flex;
				justify-content: space-between;

				>view:nth-child(1) {
					display: flex;

					view {
						margin: 0 0.625rem;
						font-size: 0.6rem;
						color: white;
						height: 1.5625rem;
					}
				}

			}

			.x_carousel {
				width: 90%;
				height: auto;
				margin: 0.625rem auto;
			}

			
			.x_grid {
				width: 90%;
				height: auto;
				padding: 0.625rem 0 0.325rem;
				margin: 0.625rem auto 0.325rem;
				background-color: white;
				border-radius: 0.3125rem;
				font-weight: bold;

				image {
					margin-top: 0.625rem;
					width: 1.9625rem;
					height: 1.9625rem;
				}

				.grid-text {
					font-size: 0.65rem;
					color: #333333;
					padding: 0rpx 0 20rpx 0rpx;
					margin: 5rpx 0 0 0;
					/* #ifndef APP-PLUS */
					box-sizing: border-box;
					/* #endif */
				}
			}

			
			.x_knowledge {
				width: 90%;
				height: 4rem;
				margin: 0.625rem auto;

				
				image {
					width: 100%;
					height: 100%;
				}
			}

			
			.x_question_of_the_day {
				width: 90%;
				
				height: 6.875rem;
				margin: 0.625rem auto;
				
				background-color: white;
				padding: 0 0 0 0;
				border-radius: 0.3125rem;



				>view:nth-child(1) {
					width: 8.125rem;
					height: 0.9375rem;
					margin: 0 auto;
					padding: 0.1875rem 0;
					text-align: center;
					line-height: 0.9375rem;
					color: white;
					font-size: 0.8rem;
					background-color: #19ABFF;
					border-radius: 0 0 0.3125rem 0.3125rem;
				}

				.x_question_of_the_day_title {
					font-weight: bold;
					text-align: center;
					margin: 0.9375rem 0 0.625rem;
				}

				.x_question_of_the_day_trafa {
					display: flex;
					justify-content: center;

					view {
						
						width: 6.25rem;
						height: 1.5625rem;
						text-align: center;
						line-height: 1.5625rem;
						color: white;
						font-weight: bold;
						background-color: #51B3FF;
					}

					view:nth-child(1) {
						background: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/left.png");
						background-repeat: no-repeat;
						background-size: 100%;
					}

					view:nth-child(2) {
						background: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/right.png");
						background-repeat: no-repeat;
						background-size: 100%;
					}
				}

				.x_bj {
					position: relative;

					.x_question_of_the_day_answer {
						font-size: 0.8rem;
						
						word-wrap: break-word;
						
						padding: 0 1.25rem;
						
						
						color: #666666;
						position: relative;
						margin: 0.625rem 0 0;
						line-height: 1.25rem;

						text {
							font-weight: bold;
							color: #333333;
						}

						text:nth-child(2) {
							position: absolute;
							top: 2.5rem;
							right: 1.4375rem;
						}
					}

					.x_image_size {
						position: absolute;
						top: -2.1875rem;
						right: 0.625rem;
						width: 5rem;
						height: 5rem;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}

			}


		}



	}

	
	
	
	
	
	
</style>