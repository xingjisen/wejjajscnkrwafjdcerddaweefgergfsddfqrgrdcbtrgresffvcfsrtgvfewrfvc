<template>
	<view>
		
		<view class="x_navBarBox">
			
			<view class="x_statusBar" :style="{ paddingTop: statusBarHeight + 10 + 'px' }"></view>
			
			<view class="x_navBar">
				<view class="x_navbar_1">
					<view class="x_flex">
						<view class="x_main_heading">电子病历</view>
					</view>
				</view>
			</view>
		</view>

		<scroll-view scroll-y :style="{ height: x_phone_height - navBarHeight - statusBarHeight  - 20+ 'px' }">
			
			<view class="img_fixed">
				<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/come.png" alt="">
			</view>
			<view class="x_body">
				<view v-if="!x_case_text" class="x_b_details">
					<view>
						<view>
							<view>
								添加就诊人
							</view>
							<view>
								让治疗 “有迹可循”
							</view>
						</view>
						<view>
							了解详情<img class="x_img" src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/Icon_right.png" alt="">
						</view>
					</view>
				</view>

				<view v-if="x_case_text" class="x_b_details1">
					<view>
						<view class="x_filleted_corner">
							<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/logo.png" alt="">
							<view>崔 * 霞</view>
						</view>
						<view class="x_filleted_corner1">其他</view>
						<view class="x_filleted_corner2">+</view>
					</view>

				</view>

				<view class="x_b_msg">
					<view class="x_b_msg_bs">
						<view>
							<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/trumpet.png" alt="">
							<view>个人信息保护：隐私模糊功能已开启</view>
						</view>
						<view>
							<u-switch v-model="x_switch" size="20" activeColor="#4f96ff"></u-switch>
						</view>
					</view>
				</view>

				<view class="x_subscribe">
					<view class="x_b_sub_bs">
						<view>您还没有预约任何服务~</view>
						<view class="x_sub_button">去问诊</view>
					</view>
				</view>


				<view class="x_icon_">
					<view class="x_icon_s">
						<view>
							<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jyjc.png" alt="">
							<view>基因检测</view>
						</view>

						<view>
							<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/wdys.png" alt="">
							<view>我的医生</view>
						</view>

						<view>
							<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/yytx.png" alt="">
							<view>用药提醒</view>
						</view>

						<view>
							<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
							<view>家属共管</view>
						</view>
					</view>
				</view>

				<view class="x_utabs">
					<u-tabs :list="list4" @click="click01" lineWidth="30" lineColor="white" :activeStyle="{
									color: '#48acff',
									fontWeight: 'bold',
									transform: 'scale(1.05)'
								}" :inactiveStyle="{
									color: '#777777',
									transform: 'scale(1)'
								}" itemStyle="padding-left: 35px; padding-right: 15px;height: 34px;">
					</u-tabs>
					<view v-if="!x_case_text" class="x_utabs_context">
						<view>您还没有病历记录</view>
						<view>病历单、药品单、检查报告，拍一拍 记一记，方便查找，安全可靠</view>
						<view>
							<u-button shape="circle" color="#4f96ff" @click="x_undate_image">马上添加</u-button>
						</view>
						<u-toast ref="uToast" />

						
						
						
						
						
						</u-popup>

					</view>

					<view v-if="x_case_text" class="x_utabs_context1">
						
						<view v-if="x_case_text_son == 0" class="x_utabs_context1_0">
							<view>
								以下病情根据2023-6-6 09：35：47前上传的病例整理汇总。后续若有病历资料更新，建议及时上传，有助于医生随时了解您的最新病情。
							</view>
							<view v-for="i in 10">
								<view class="x_for_item">
									1979-7印尼无意间发现有肿瘤按囊，就诊，乳腺彩彩超示例，右乳3点为腺体层内及谈及-第一声结节。建议积计算机珊瑚即使上，有助于医生随时了解您的信息
								</view>
							</view>
						</view>

						
						<view v-if="x_case_text_son == 1" class="x_utabs_context1_1">
							<view class="x_medical_records">
								<view @click="x_timeline_classification(true)"
									:style="{'background-color':x_medical_records_style0}">时间线</view>
								<view @click="x_timeline_classification(false)"
									:style="{'background-color':x_medical_records_style1}">分类</view>
							</view>
							<view v-show="x_case_text_grandson" class="x_medical_records_0">
								<view v-for="i in 10" :key="i">
									<view>
										<view>2023-08-09</view>
										<view>出院记录</view>
									</view>
									<view>
										<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
										<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
										<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
										<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
									</view>
									<view class="x_dot"></view>
								</view>
							</view>
							<view v-show="!x_case_text_grandson" class="x_medical_records_1">
								<view>出院记录</view>
								<view>
									<view v-for="i in 1">
										<view>2023-08-09</view>
										<view>
											<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
											<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
											<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
											<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
										</view>
										<view class="x_dot01"></view>
									</view>
								</view>
								<view>住院记录</view>
								<view>
									<view v-for="i in 3">
										<view>2023-08-09</view>
										<view>
											<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
											<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
											<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
											<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
										</view>
										<view class="x_dot01"></view>
									</view>
								</view>
							</view>
						</view>

						
						<view v-if="x_case_text_son == 2" class="x_utabs_context1_2">
							<view class="x_friendly_reminder">
								<view>温馨提示</view>
								<view>1、识别中：图片上传后，系统将自动进行智能识别，最晚24小时内识别完成；</view>
								<view>2、已识别：识别完成后，按病例时间和类型进行了分类，您可在病历本首页查看；</view>
								<view>3、无效图片：由于图片模糊、信息缺失等原因，病例被识别为无效图片，您可点开大图查看。</view>
							</view>
							<view class="x_upload_record" v-for="i in 10">
								<view>2023-08-09</view>
								<view class="x_fori">
									<view>
										<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
										<view>无效图片</view>
									</view>
									<view>
										<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
										<view>无效图片</view>
									</view>
									<view>
										<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
										<view>无效图片</view>
									</view>
									<view>
										<img src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/table_4/jsgg.png" alt="">
										<view>无效图片</view>
									</view>
								</view>
								<view class="x_dot"></view>
							</view>
						</view>
					</view>

				</view>
			</view>

		</scroll-view>

		
		<u-tabbar :value="value4" @change="change01" :fixed="true" :placeholder="false" activeColor="#5babff"
			inactiveColor="#a6a7ac" placeholder :safeAreaInsetBottom="false">
			<u-tabbar-item text="首页">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/home1.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/home.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="百科">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/cyclopedia1.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/cyclopedia11.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text=" ">
				<image class="u-page__item__slot-icon1" slot="active-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/plussign.png"></image>
				<image class="u-page__item__slot-icon1" slot="inactive-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/plussign.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="电子病历">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/case1.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/case.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="我的">
				<image class="u-page__item__slot-icon" slot="active-icon" src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/my1.png">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/icon/tabbar/my.png"></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				statusBarHeight: 0,
				
				navBarHeight: 82 + 11,
				value4: 3,
				x_switch: true,
				disabled: true,
				list4: [{
					name: '病程简要',
				}, {
					name: '病历本'
				}, {
					name: '上传记录'
				}],
				
				x_case_text: true,
				
				x_case_text_son: 0,
				
				x_case_text_grandson: true,
				
				x_medical_records_style0: '#45abff',
				x_medical_records_style1: '#a6a7ac',
				x_bq_abstract: "2026-6-6 09：35：47",
				
				x_phone_height:0
			};
		},
		props: {

		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					console.log("设备高度:", res.screenHeight)
					this.x_phone_height = res.screenHeight
				}
			})
		},
		methods: {
			
			showToast() {
				this.$refs.uToast.show({
					title: '上传成功',
					type: 'success',
					
				})
			},
			
			x_undate_image() {
				
				uni.chooseImage({
					success: function(chooseImageRes) {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						const uploadTask = uni.uploadFile({
							url: 'https://192.168.88.78/admin/common/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: function(uploadFileRes, stateCode) {
								showToast()
								console.log("123", uploadFileRes.data);
							},
						});

						uploadTask.onProgressUpdate(function(res) {
							console.log('上传进度' + res.progress);
							console.log('已经上传的数据长度' + res.totalBytesSent);
							console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);

							
							if (res.progress > 50) {
								uploadTask.abort();
							}
						});
					}
				});
			},
			
			open() {
				
			},
			close() {
				this.show = false
				
			},
			
			x_timeline_classification(state) {
				if (state) { 
					this.x_case_text_grandson = true;
					this.x_medical_records_style0 = '#45abff';
					this.x_medical_records_style1 = '#a6a7ac';

				} else { 
					this.x_case_text_grandson = false;
					this.x_medical_records_style0 = '#a6a7ac';
					this.x_medical_records_style1 = '#45abff';
				}
			},

			click01(obj) {
				this.x_case_text_son = obj.index
				console.log(obj.index);
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
		},

	}
</script>

<style lang="scss" scoped>
	.x_navBarBox {
		background-color: #fff;
	}

	.x_navBarBox .x_navBar {
		background-color: white;

		.x_main_heading {
			margin: 0 auto;
			color: black;
		}
	}

	.x_body {
		width: 90%;
		height: auto;
		margin: 0 auto;

		.x_b_details {
			width: 100%;
			height: auto;
			padding: 1.25rem 0;
			border-radius: 0.3125rem;
			background-color: white;
			margin: 0.625rem 0;

			>view {
				width: 80%;
				height: auto;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;

				>view:nth-child(2) {
					margin-top: 0.625rem;
					color: #569bff;

					.x_img {
						vertical-align: middle;
						width: 0.4375rem;
						height: 0.75rem;
						margin-left: 0.3125rem;
					}
				}
			}
		}

		.x_b_details1 {
			width: 100%;
			height: auto;
			padding: 1.25rem 0;
			border-radius: 0.3125rem;
			background-color: white;
			margin: 0.625rem 0;
			position: relative;

			>view {
				margin: 0 1.25rem;
				display: flex;

				.x_filleted_corner {
					width: 3.75rem;
					height: 5.625rem;
					border-radius: 3.125rem 3.125rem 0 0;
					background: linear-gradient(0deg, rgba(70, 150, 255, 100) 20%, #8DC9FF);

					>img {
						width: 3.125rem;
						height: 3.125rem;
						background-color: #eee;
						margin: 0.3125rem 0 0 0.3125rem;
						border-radius: 3.125rem;
					}

					>view {
						color: white;
						font-size: 0.9rem;
						text-align: center;
						margin-top: 0.3125rem;
					}
				}

				.x_filleted_corner1 {
					width: 2.5rem;
					height: 1.25rem;
					background-color: #479DFF;
					border-radius: 4.375rem 1.25rem 1.25rem 0;
					position: absolute;
					color: white;
					font-size: 0.7rem;
					line-height: 1.25rem;
					text-align: center;
					top: 1.25rem;
					left: 4.375rem;
				}

				.x_filleted_corner2 {
					width: 3.125rem;
					height: 3.125rem;
					border-radius: 3.125rem;
					background-color: #5babff;
					color: white;
					text-align: center;
					line-height: 2.8125rem;
					font-size: 3rem;
					margin: auto 1.25rem;
				}
			}
		}

		.x_b_msg {
			width: 100%;
			height: auto;
			padding: 0.9375rem 0;
			border-radius: 0.3125rem;
			background-color: white;
			margin: 0.625rem 0;

			.x_b_msg_bs {
				width: 90%;
				margin: 0 auto;
				height: auto;
				display: flex;
				justify-content: space-between;

				view {
					font-size: 0.8rem;
					display: flex;
					justify-content: space-around;

					img {
						width: 1.1875rem;
						height: 1.1875rem;
						margin: 0 0.5rem 0 0;
					}

					view {
						margin-top:  0.0625rem;
					}
				}
			}
		}

		.x_subscribe {
			width: 100%;
			height: auto;
			padding: 1.25rem 0;
			border-radius: 0.3125rem;
			background-color: white;
			margin: 0.625rem 0;
			box-shadow: -0.0625rem  0.0625rem 0.3125rem #eee;

			.x_b_sub_bs {
				width: 90%;
				margin: 0 auto;
				height: auto;
				display: flex;
				font-size: 0.8rem;
				justify-content: space-between;

				>view:nth-child(1) {
					margin-top: 0.3125rem;
				}

				.x_sub_button {
					border:  0.0625rem solid #4f96ff;
					padding: 0.1875rem 1.5625rem;
					color: #4f96ff;
					border-radius: 1.5625rem;
				}
			}
		}

		.x_icon_ {
			width: 100%;
			height: auto;
			padding: 0.625rem 0;
			border-radius: 0.3125rem;
			background-color: white;
			margin: 0.625rem 0;

			.x_icon_s {
				width: 90%;
				height: auto;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;

				view {
					font-size: 0.8rem;
					text-align: center;
					color: #666666;

					img {
						width: 1.5625rem;
						height: 1.5625rem;
					}
				}
			}
		}


		.x_utabs {
			width: 100%;
			height: auto;
			padding: 0.625rem 0;
			border-radius: 0.3125rem;
			background-color: white;
			margin: 0.625rem 0;

			.x_utabs_context {
				color: #585858;

				>view {
					width: 77%;
					height: auto;
					margin: 0 auto;
					text-align: center;
					padding: 0.625rem 0;
				}

				>view:nth-child(1) {
					margin-top: 3.125rem;
				}

				>view:nth-child(3) {
					width: 50%;
				}

				.x_popups {
					width: 100%;
					height: 12.5rem;
					text-align: center;
				}
			}

			.x_utabs_context1 {

				
				.x_utabs_context1_0 {
					>view:nth-child(1) {
						width: 80%;
						margin: 0.625rem auto;
						height: auto;
						color: #aaabb0;
						font-size: 0.8rem;
					}

					.x_for_item {
						width: 90%;
						margin: 1.25rem auto;
						height: auto;
						text-indent: 2rem;
					}
				}

				
				.x_utabs_context1_1 {
					.x_medical_records {
						display: flex;
						justify-content: center;

						view {
							padding: 0.3125rem 1.25rem;
							background-color: #45abff;
							color: white;
							margin: 0 0.625rem;
						}

						view:nth-child(1) {
							border-radius: 1.25rem 0 0 1.25rem;
						}

						view:nth-child(2) {
							border-radius: 0 1.25rem 1.25rem 0;
						}
					}

					.x_medical_records_0 {
						width: 90%;
						height: auto;
						margin: 0 auto;
						padding-left: 0.625rem;
						border-left:  0.0625rem solid #a6a7ac;

						
						>view {
							position: relative;
							width: 100%;
							height: auto;
							margin: 0.625rem 0;

							>view:nth-child(1) {
								display: flex;

								>view {
									padding: 0 0.625rem 0 0;
								}

								>view:nth-child(1) {
									font-size: 0.9 rem;
									color: #a6a7ac;
								}
							}

							>view:nth-child(2) {
								display: flex;
								margin: 0.625rem 0;
								justify-content: space-around;

								img {
									width: 3.75rem;
									height: 3.75rem;
									border-radius: 0.3125rem;
									border:  0.0625rem solid #45abff;
								}
							}

							.x_dot {
								width: 0.3125rem;
								height: 0.3125rem;
								background-color: #45abff;
								border-radius: 0.3125rem;
								position: absolute;
								top: 0;
								left: 0.8125rem;
							}
						}
					}

					.x_medical_records_1 {
						width: 90%;
						height: auto;
						margin: 0 auto;
						padding-left: 0.625rem;
						border-left:  0.0625rem solid #a6a7ac;

						view {
							>view {
								position: relative;
								font-size: 0.9rem;
								color: #a6a7ac;

								view:nth-child(2) {
									display: flex;
									margin: 0.625rem 0;
									justify-content: space-around;

									img {
										width: 3.75rem;
										height: 3.75rem;
										border-radius: 0.3125rem;
										border:  0.0625rem solid #45abff;
									}
								}

								.x_dot01 {
									width: 0.3125rem;
									height: 0.3125rem;
									background-color: #45abff;
									border-radius: 0.3125rem;
									position: absolute;
									top: 1.5rem;
									left: 0.8125rem;
								}
							}
						}
					}
				}
			}

			
			.x_utabs_context1_2 {
				width: 90%;
				height: auto;
				margin: 0 auto;

				.x_friendly_reminder {
					width: 90%;
					height: auto;
					margin: 0 auto 0.625rem;
					font-size: 0.8rem;
					color: #aaabb0;
				}

				.x_upload_record {
					width: 100%;
					height: auto;
					
					border-left:  0.0625rem solid #4f96ff;
					position: relative;
					padding-left: 0.625rem;

					>view:nth-child(2) {
						padding: 0.625rem 0;
						display: flex;
						justify-content: space-around;

						>view {
							width: 3.75rem;
							height: 3.75rem;
							position: relative;
							
							border:  0.0625rem solid #45abff;
							border-radius: 0.3125rem;

							img {
								width: 3.75rem;
								height: 3.75rem;
							}

							view {
								position: absolute;
								width: 100%;
								height: auto;
								font-size: 0.9rem;
								background-color: rgba(255, 255, 255, 0.5);
								top: 2.5rem;
							}
						}
					}

					.x_dot {
						width: 0.3125rem;
						height: 0.3125rem;
						background-color: #45abff;
						border-radius: 0.3125rem;
						position: absolute;
						top: -0.3125rem;
						left: -0.1875rem;
					}
				}
			}
		}

	}
</style>