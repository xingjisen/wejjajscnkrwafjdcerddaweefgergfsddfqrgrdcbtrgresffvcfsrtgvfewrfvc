<template>
	<view>
		
		<view class="x_navBarBox">
			
			<view class="x_statusBar" :style="{ paddingTop: statusBarHeight + 10  + 'px' }"></view>
			
			<view class="x_navBar">
				<view class="x_navbar_1">
					<view class="x_flex">
						<view class="x_main_heading">我的</view>
					</view>
				</view>
			</view>
		</view>
			
		<view class="img_fixed">
			<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/come.png" alt="">
		</view>
		
		<view class="x_body">
			
			<view class="x_my_information">
				<view v-if="false" class="x_my_information1 x_my_information_a">
					<view>
						<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/release.png"></image>
					</view>
					<view>
						<view>舍友145</view>
						<view></view>
					</view>
				</view>
				<view v-if="true" class="x_my_information_a x_my_information1">
					<view>
						<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/release.png"></image>
					</view>
					<view>
						<view @click="click_login">立即登录</view>
						<view></view>
					</view>
				</view>
				<u-action-sheet :actions="listlogin" @select="select" :closeOnClickOverlay="true" :closeOnClickAction="true" @close="close" :title="title" :show="show">
					<button size="mini" class="btnStyle" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信登陆</button>
					<button size="mini" class="btnStyle" @click="phonelogin">手机登陆</button>
				</u-action-sheet>
				
				
					
				
				<view class="x_my_information3 x_my_information_a">
					<view v-for="i in x_information_data">
						<view>{{ i.index }}</view>
						<view>{{ i.name }}</view>
					</view>
				</view>
			</view>
			
			<view class="x_invite_invitation">
				<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/yqr.png" mode=""></image>
			</view>

			
			<view class="x_tools_and_services">
				<view>
					工具与服务
				</view>
				<u-grid :border="false" col="4">
					<u-grid-item @click="x_grid_click" v-for="(listItem,listIndex) in list" :key="listIndex">
						<image :src="listItem.name" mode=""></image>
						<text class="grid-text">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>
		</view>



		
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
	import { getLogin, loginSuccessHandler } from "../../../utils/login.js";
	export default {
		data() {
			return {
				title:'选择登陆方式',
				listlogin: [
				],
				show: false,
				
				statusBarHeight: 0,
				
				navBarHeight: 82 + 11,
				value4: 4,
				x_information_data: [{
						index: 0,
						name: "收藏"
					},
					{
						index: 0,
						name: "医生"
					},
					{
						index: 0,
						name: "病友"
					},
					{
						index: 0,
						name: "积分"
					},
				],
				
				list: [{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/wdys.png',
						title: '我的医生'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/yhsq.png',
						title: '医患社群'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/yqhy.png',
						title: '邀请好友'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/gnjs.png',
						title: '功能介绍'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/wddd.png',
						title: '我的订单'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/wdfp.png',
						title: '我的发票'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/rzzx.png',
						title: '认证中心'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/gzht.png',
						title: '工作后台'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/kfzx.png',
						title: '客服中心'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/gywm.png',
						title: '关于我们'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/yhfk.png',
						title: '用户反馈'
					},
					{
						name: 'https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/hzrz.png',
						title: '合作入驻'
					},
				],
			};
		},
		props: {

		},
		onLoad() {
			
			
			uni.checkSession({
				success(e) {
					console.log("登陆状态",e);
				},
				fail(e) {
					console.log("登陆状态",e);
				}
			})
		},
		methods: {
			phonelogin(){
				uni.navigateTo({
					url:"/pages/tabbar-5-detial/login/login"
				})
				this.show = false
			},
			wxlogin(){
				uni.login({
					provider: 'weixin', //使用微信登录
					univerifyStyle: { //一键登陆样式
					    fullScreen: true
					},
					success: async function (loginRes) {
						console.log("login方法：",loginRes.code);
						console.log("login方法：",loginRes); 
						const codeKey = loginRes.code;
						if (codeKey) {
						
						//发起网络请求
						await getLogin(loginRes.code).then((response) => {
						  
						  console.log('登录成功', response);
						  const code = response.code; 
						  const token = response.data; 
						  loginSuccessHandler(token)
						}).catch((error) => {
						  
						  console.error('登录失败了', error);
						});
						} else {
						  console.log('登录失败！' + res.errMsg)
						}
					}
				})
			},
			select(e){
				console.log(e);
				
			},
			close(){
				this.show = false
			},
			chooseAvatar(e){
				console.log(e);
			},
			getUserInfo(e){
				console.log(e);
			},
			getPhoneNumber(e) {
				this.wxlogin()//登录方法
				
				console.log(e);
			  
			  /* if (e.detail.errMsg === 'getPhoneNumber:ok') {
				
				const encryptedData = e.detail.encryptedData;
				const iv = e.detail.iv;
				const code = e.detail.code;
		
				
				
				console.log('获取到的手机号数据：');
				console.log('encryptedData:', encryptedData);
				console.log('iv:', iv);
				console.log('code:', code);
				
				
			  } else {
				
				console.error('获取手机号失败：', e.detail.errMsg);
			  }
			  */
			  	this.show = false
			},
			
			x_grid_click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			},
			click_login(){
				this.show = true
				
				
				
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

		.x_my_information {
			padding: 0.625rem 0;
			width: 100%;
			height: auto;
			background-color: white;
			margin: 1.25rem 0 0.625rem;
			border-radius: 0.3125rem;

			.x_my_information_a {
				margin: 0 1.25rem;
			}
			.x_my_information_b{
				margin: 1.5rem 1.25rem;
			}

			.x_my_information1 {
				width: 100%;
				height: auto;
				display: flex;
				align-items: center;
				margin-bottom: 0.625rem;

				>view:nth-child(1) {
					width: 3.125rem;
					height: 3.125rem;
					border-radius: 3.125rem;
					margin-right: 0.625rem;
					border: 0.0625rem solid red;

					image {
						width: 100%;
						height: 100%;
						border-radius: 3.125rem;
					}
				}

				>view:nth-child(2) {
					view:nth-child(1) {
						font-weight: bold;
					}

					view:nth-child(2) {
						width: 3.125rem;
						height: 1.25rem;
						background-color: red;
						background: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/my/wsm.png") 0 0 no-repeat;
						background-size: 3.125rem 1.25rem;
					}
				}
			}
			.btnStyle::after{
				border: none;
			}
			.btnStyle:hover{
				background-color: #eee;
			}
			.btnStyle{
				width: 400rpx;
				font-size: 0.8rem;
				padding: 10rpx;
				margin: 0 auto;
				background-color: #fff;
			}

			.x_my_information2 {
				margin: 0.625rem 1.25rem;
				width: 90%;
				margin: 0 auto;
				height: 2.5rem;

				image {
					width: 100%;
					height: 100%;

				}
			}

			.x_my_information3 {
				margin-top: 0.625rem;
				width: 90%;
				margin: 0 auto;
				padding: 0.625rem;
				display: flex;
				justify-content: space-around;
				text-align: center;

				>view {
					font-size: 0.8rem;
					line-height: 1.5625rem;

					>view:nth-child(1) {
						font-weight: bold;
					}
				}
			}
		}

		
		.x_invite_invitation {
			width: 100%;
			height: 5rem;
			
			border-radius: 0.3125rem;

			image {
				width: 100%;
				height: 100%;
			}
		}

		
		.x_tools_and_services {
			width: 100%;
			height: auto;
			background-color: white;
			margin: 0.625rem 0;
			border-radius: 0.3125rem;
			padding: 0.625rem 0;

			>view:nth-child(1) {
				margin: 0 0 0 0.625rem;
			}
			image{
				width: 1.5625rem;
				height: 1.5625rem;
				margin-top: 1.5625rem;
			}
			.grid-text{
				color: #333333;
				font-size: 0.8rem;
				margin: 0.3125rem 0 0;
			}
		}
	}
</style>