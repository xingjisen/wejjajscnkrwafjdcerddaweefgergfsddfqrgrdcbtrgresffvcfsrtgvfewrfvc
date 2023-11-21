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
			<view class="x_title">
				登录
			</view>
			
			
			<u--input maxlength="11" shape="circle"
				:customStyle="{'padding':'20px 0 20px 20px','background-color':'#F7F9FF',}" :clearable="true"
				placeholder="请输入需要登陆的手机号" border="none" v-model="value" @change="change"></u--input>
			<view class="x_hint" :class="x_hint_i ? 'x_hint_color':'' ">请输入正确的手机号</view>

			
			<view class="x_check">
				<checkbox-group @change="onRadioChange" class="x_radio">
					<checkbox :checked="true" color="#5babff" :value="1"> </checkbox>
				</checkbox-group>
				<view>
					我已阅读并同意<text>《用户注册协议并同意隐私政策》</text><text>《法律声明及隐私政策》</text>。未注册手机号验证后将自动登录
				</view>
			</view>

			
			<u-button text="获取短信验证码" :disabled="x_disabled" :color="x_button_color" size="large" shape="circle" @click="x_button_click"></u-button>
			
			
			<view class="x_password">密码登录</view>
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
				//动态切换
				x_hint_i: false,
				
				x_button_color: '#C4C4C4',
				
				x_disabled: true,
			};
		},
		methods: {
			
			x_button_click(){
				console.log("向后端发送请求，跳转到填写验证码页面");
				uni.redirectTo({
					url:`/pages/tabbar-5-detial/authcode/authcode?second=60&phone=${this.value}`
				})
			},
			
			onRadioChange(e) {
				
				console.log('选中的值:', e.mp.detail.value[0]);
				if (e.mp.detail.value[0] == 1) {
					return e.mp.detail.value[0]
				}
			},
			change(phone) {
				console.log('change', phone);
				

				let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
				if (phoneReg.test(phone) || phone == '') {
					console.log(123);
					this.x_hint_i = false
					this.x_button_color = '#5babff'
					this.x_disabled = false
					return true
				} else {
					console.log(456);
					this.x_hint_i = true
					this.x_button_color = '#C4C4C4'
					this.x_disabled = true
					return false
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

<style lang="scss">
	body {
		background-color: white;
	}

	.x_body {
		width: 90%;
		height: auto;
		margin: 0 auto;
		margin-top: 0.625rem;

		.x_title {
			width: 100%;
			height: 12.5rem;
			text-align: center;
			font-weight: bold;
			line-height: 12.5rem;
			font-size: 1.8rem;
		}

		.x_hint {
			margin: 0.3125rem 0 0 0.625rem;
			font-size: 0.8rem;
			
			visibility: hidden;
		}

		.x_hint_color {
			
			visibility: visible;
			color: red;
		}

		
		.x_check {
			display: flex;
			margin: 0.3125rem 0 3.125rem 0;
			font-size: 0.8rem;

			view {
				text {
					color: #96bdf3;
				}
			}
		}
		
		.x_password{
			margin-top: 1.25rem;
			font-size: 0.9rem;
			color: #333333;
			width: 100%;
			text-align: center;
		}
	}
</style>