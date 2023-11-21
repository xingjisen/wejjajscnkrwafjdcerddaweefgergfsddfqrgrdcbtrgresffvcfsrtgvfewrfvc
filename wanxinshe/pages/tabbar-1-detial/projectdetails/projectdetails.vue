<template>
	<view>
		
		<view class="x_navBarBox">
			
			<view>
				
				<u-navbar leftText="项目详情" :safeAreaInsetTop="true" fixed autoBack bgColor="white"
					@rightClick="rightClick" :autoBack="true" :placeholder="true">
				</u-navbar>
			</view>
		</view>
		
		<view class="x_body">
			<view class="x_body_title">【癌症患者】采用靶向药物治疗时，吃中药能缓解副作用吗？</view>
			
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.x_body{
		width: 90%;
		height: auto;
		margin: 0.625rem auto 0;
		.x_body_title{
			font-weight: bold;
		}
	}
</style>