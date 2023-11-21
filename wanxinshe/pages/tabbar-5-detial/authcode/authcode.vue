<template>
	<view>
		
		<view class="x_navBarBox">
			
			<view>
				
				<u-navbar leftText=" " title="手机号快捷登录" :safeAreaInsetTop="true" fixed autoBack bgColor="white"
					@rightClick="rightClick" :autoBack="true" :placeholder="true">
				</u-navbar>
			</view>
		</view>


		<view class="x_body">
			<view class="x_icon">

			</view>
			<view class="x_title">请输入验证码</view>


			<view class="x_title2">
				<u--text mode="name" align="center" :text="`已发送至 ${desensitizeText(phone)}`"></u--text>
			</view>


			<view class="x_code">
				<u-code-input size="45" @finish="finish" fontSize="22" :space="30" color="black" borderColor="#e4ebff"
					:bold="true" :focus="true" maxlength="4" v-model="value"></u-code-input>
			</view>

			<view class="x_second" v-if="x_second">
				<text>{{second}}秒</text>后重新获取验证码
			</view>

			<view class="x_second" v-if="!x_second">
				<text @click="x_second_click">重新获取</text>
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
				value: '',
				
				second: '',
				
				phone: '',
				
				x_second: true
			}
		},
		onLoad: function(option) {
			console.log(option.second); //打印出上个页面传递的参数。
			console.log(option.phone); //打印出上个页面传递的参数。
			this.second = option.second
			this.phone = option.phone
			let timer = setInterval(function() {
				this.second--;
				if (this.second == 0) {
					clearInterval(timer)
					this.x_second = false
				}
			}.bind(this), 1000);
		},
		methods: {
			
			x_second_click() {
				this.second = 60
				this.x_second = true
				let timer = setInterval(function() {
					this.second--;
					if (this.second == 0) {
						clearInterval(timer)
						this.x_second = false
					}
				}.bind(this), 1000);
			},
			desensitizeText(text) {
				
				if (text.length < 8) {
					return text;
				}
				const visibleLength = 2; 
				const middleLength = text.length - 4; 
				const startText = text.slice(0, visibleLength);
				const middleText = '*'.repeat(middleLength);
				const endText = text.slice(-visibleLength);

				return startText + middleText + endText;
			},
			
			finish(e) {
				console.log('输入结束，当前值为：' + e);
			},

		},
		//第一次加载时调用
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
	}
</script>

<style scoped lang="scss">
	.x_body {
		width: 90%;
		height: auto;
		margin: 0 auto;
		margin-top: 0.625rem;

		.x_icon {
			width: 3.125rem;
			height: 3.125rem;
			background-color: red;
			border-radius: 3.125rem;
			margin: 3.125rem auto;
		}

		.x_title {
			font-size: 1.2rem;
			font-weight: bold;
			text-align: center;
			margin: 0.625rem 0;
		}

		.x_title2 {
			font-size: 0.9rem;
			text-align: center;
			margin: 0.625rem auto;
			display: flex;

			text {
				font-size: 0.9rem;
				color: #666666;
			}
		}

		.x_code {
			width: 83%;
			text-align: center;
			margin: 1.25rem auto;
		}

		.x_second {
			width: 100%;
			text-align: center;
			font-size: 0.8rem;

			text {
				color: #5babff;
			}
		}
	}
</style>