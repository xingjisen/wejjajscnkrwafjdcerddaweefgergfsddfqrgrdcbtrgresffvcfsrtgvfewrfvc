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

		
		<view style="width: 100%;height: 100%;background-color: red;" class="page">我是页面内容3</view>
		
		
		
		<u-tabbar :value="value4" @change="change01" :fixed="true" :placeholder="false" activeColor="#5babff"
			inactiveColor="#a6a7ac" placeholder :safeAreaInsetBottom="false">
			<u-tabbar-item text="首页">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="../../../static/img/icon/tabbar/home1.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="../../../static/img/icon/tabbar/home.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="百科">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="../../../static/img/icon/tabbar/cyclopedia1.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="../../../static/img/icon/tabbar/cyclopedia11.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text=" ">
				<image class="u-page__item__slot-icon1" slot="active-icon"
					src="../../../static/img/icon/tabbar/plussign.png"></image>
				<image class="u-page__item__slot-icon1" slot="inactive-icon"
					src="../../../static/img/icon/tabbar/plussign.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="电子病历">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="../../../static/img/icon/tabbar/case1.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="../../../static/img/icon/tabbar/case.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="我的">
				<image class="u-page__item__slot-icon" slot="active-icon" src="../../../static/img/icon/tabbar/my1.png">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="../../../static/img/icon/tabbar/my.png"></image>
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
				value4: 2,
			};
		},
		props: {

		},
		methods: {
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
		created() {
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
</style>