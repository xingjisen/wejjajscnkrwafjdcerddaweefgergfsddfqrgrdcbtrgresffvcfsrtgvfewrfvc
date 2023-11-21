<template>
	<view>
		
		<view class="x_navBarBox">
			
			<view class="x_statusBar" :style="{ paddingTop: statusBarHeight + 10 + 'px' }"></view>
			
			<view class="x_navBar">
				<view class="x_navbar_1">
					<view class="x_flex">
						<u-icon @click="x_click" name="arrow-left" size="28"></u-icon>
						<view class="x_main_heading">临床试验报名</view>
					</view>
				</view>
			</view>
		</view>


		<view class="x_body">
			<view class="x_title">临床试验报名申请</view>
			<view class="x_added_title">只需三步完成报名</view>
			<view class="x_setp">
				<view>第①步<br />报名登记</view>
				<view>第②步<br />医生审核</view>
				<view>第③步<br />告知结果</view>
			</view>
			<view class="x_patient_information">
				<view class="x_patient_title">
					<view>患者信息:</view>
					<view>选择患者</view>
				</view>
				<view class="x_patient_body">
					<view>
						<view>性别:</view>
						<view>李大佑</view>
					</view>

					<view>
						<view>身份证号:</view>
						<view>123456789123456789</view>
					</view>

					<view>
						<view>联系方式:</view>
						<view>13256521236</view>
					</view>
				</view>
			</view>
			
			<view class="x_upload_case">
				<view class="x_upload_msg">
					<text>上传病例:</text>(资料越丰富，通过率越高)<br />
					1.最后一次入院、出院记录<br />
					2.病理报告、免疫组化报告<br />
					3.最近两次以上CT报告<br />
					4.最后一次血常规、血生化、传染病结果<br />
					5.基因报告
				</view>
				<view class="x_upload">
					<u-upload :maxCount="3" :previewFullImage="true" :fileList="fileList1" @afterRead="afterRead"
						@delete="deletePic" name="1" multiple></u-upload>
				</view>

				<view class="x_user_agreement">
					<u-checkbox-group placement="column">
						<u-checkbox @change="checkboxChange" size="15" :customStyle="{marginTop: '4rpx'}" shape="circle" key="1" name="lczmfwgz">
						</u-checkbox>
					</u-checkbox-group>
					<view class="x_fwgz_color">我已阅读并同意<text>《临床招募服务规则》</text></view>
				</view>

				<view class="x_button">
					<u-button type="primary" iconColor="#5babff" shape="circle" text="提交报名"></u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				statusBarHeight: 0,
				
				navBarHeight: 82 + 11,
				
				fileList1: [{
						url: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						url: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						url: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
				],

				
				radiolist1: [{
						name: '苹果',
						disabled: false
					},
					{
						name: '香蕉',
						disabled: false
					},
					{
						name: '橙子',
						disabled: false
					}, {
						name: '榴莲',
						disabled: false
					}
				],
				
				radiovalue1: '苹果',


			};
		},
		methods: {
			
			checkboxChange(n) {
				console.log('复选框change', n);
			},
			x_click() {
				
				uni.navigateBack()
			},
			
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			
			async afterRead(event) {
				
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', 
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		},
		//第一次加载时调用
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
			console.log(this.statusBarHeight);
		},
	}
</script>

<style lang="scss">
	.x_navBarBox {
		background-color: #D9EBFE;
	}

	.x_navBarBox .x_navBar {
		background-color: #D9EBFE;

		.x_main_heading {
			color: black;
		}
	}

	body {
		background-color: #D9EBFE;
	}

	.x_body {
		width: 90%;
		height: auto;
		background-color: white;
		border-radius: 0.625rem;
		margin: 1.25rem auto 0;
		padding: 0 0 0.625rem 0;
		box-shadow: 0 0.03125rem 0.3125rem #464646;

		.x_title {
			width: 90%;
			height: auto;
			margin: 0 auto;
			font-weight: bold;
			text-align: center;
			font-size: 1.1rem;
			padding: 0.625rem 0;
			border-bottom: 0.0625rem solid #666666;
		}

		.x_added_title {
			width: 90%;
			height: auto;
			margin: 0.3125rem auto 0.625rem;
			font-size: 0.9rem;
			color: #666666;
		}

		.x_setp {
			width: 90%;
			height: auto;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;

			>view {
				width: 25%;
				text-align: center;
				font-size: 0.8rem;
			}

			>view:nth-child(1) {
				color: #5babff;
			}
		}

		.x_patient_information {
			width: 90%;
			height: auto;
			margin: 0 auto;
			padding: 0 0 0.625rem 0;
			border-bottom: 0.0625rem solid #666666;

			.x_patient_title {
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin: 1.25rem 0;

				view:nth-child(2) {
					color: #5babff;
				}
			}

			.x_patient_body {
				width: 100%;
				height: auto;
				margin: 0 auto;
				font-size: 0.9rem;
				background-color: #F5F8FB;
				border-radius: 0.3125rem;
				padding: 0.3125rem 0;

				>view {
					margin: 0.625rem;
					display: flex;
					justify-content: space-between;
				}
			}
		}

		
		.x_upload_case {
			width: 90%;
			height: auto;
			margin: 0.625rem auto;

			.x_upload_msg {
				font-size: 0.9rem;

				text {
					font-weight: bold;
				}
			}

			.x_upload {
				margin: 0.625rem 0;
			}

			.x_button {
				width: 80%;
				margin: 0 auto;
			}

			.x_user_agreement {
				display: flex;
				margin: 0.625rem 0;

				.x_fwgz_color {
					font-size: 0.8rem;

					text {
						color: #5babff;
					}
				}
			}

		}
	}
</style>