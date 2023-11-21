<template>
	<view>
		
		<view class="x_navBarBox">
			
			<view class="x_statusBar" :style="{ paddingTop: statusBarHeight + 10 + 'px' }"></view>
			
			<view class="x_navBar">
				<view class="x_navbar_1">
					<view class="x_flex">
						<view class="x_main_heading" style="color: white;">肿瘤百科</view>
					</view>
				</view>
			</view>
		</view>

		<view class="img_fixed">
			<image src="https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/come.png" alt="">
		</view>
		
		<view class="x_body">
			<view class="x_banner">
				<view class="x_search">
					<u-toast ref="uToast" />
					<u-search @custom="x_custom_search" :clearabled="true" showAction actionText="搜索" searchIconSize="0"
						searchIcon :actionStyle="{'color':'white'}" searchIconColor="#45ABFF" :animation="true"
						label="肿瘤知识" placeholder="化疗后感冒了该怎么办?" v-model="keyword"></u-search>
				</view>
				
				<view class="x_tabs">
					<u-sticky>
						<u-tabs @click="x_tabs_click" :inactiveStyle="{color:'white'}"
							:activeStyle="{color:'white',fontWeight:'bold'}" lineWidth="30" lineColor="white"
							:list="list1">
						</u-tabs>
					</u-sticky>
				</view>

				<view v-if="x_tabs_id==0" class="page_box">
					<scroll-view scroll-y
						:style="{ height: x_phone_height_1 - navBarHeight - statusBarHeight + 5 + 'px' }">
						
						<bkList :x_data="x_data_1" />
						
						<bk-list2></bk-list2>
						
						<bk-list3></bk-list3>
					</scroll-view>

				</view>

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
	import bkList from "@/components/bk-list/bk-list"
	import bkList2 from "@/components/bk-list2/bk-list2"
	import bkList3 from "@/components/bk-list3/bk-list3"
	export default {
		data() {
			return {
				
				x_data_1: [{
						name: "癌症患者采用靶向药物治疗时，吃中药能缓解副作用吗？",
						classify: "康复护理",
						type: "图文",
						image_url:"xxx"
					},
					{
						name: "01癌症患者采用靶向药物治疗时，吃中药能缓解副作用吗？",
						classify: "康复护理",
						type: "图文"
					},
					{
						name: "02癌症患者采用靶向药物治疗时，吃中药能缓解副作用吗？",
						classify: "康复护理",
						type: "图文"
					},
				],
				
				statusBarHeight: 0,
				
				navBarHeight: 82 + 11,
				value4: 1,
				
				keyword: '',
				
				list1: [{
					name: '推荐',
				}, {
					name: '常见问题',
				}, {
					name: '中医专区'
				}, {
					name: '康复护理'
				}, {
					name: '健康饮食'
				}, {
					name: '西医专区'
				}],
				
				x_tabs_id: 0,
				
				x_phone_height: 0,
				
				x_phone_height_1: 0
			};
		},
		components: { 
			bkList,
			bkList2,
			bkList3,
		},
		props: {

		},
		onLoad() {

			
			const query = uni.createSelectorQuery().in(this);
			query.select('.x_search').boundingClientRect(data => {
				console.log("x_search", data.height);
				this.x_phone_height += data.height
			}).exec();


			query.select('.x_tabs').boundingClientRect(data => {
				console.log("x_tabs", data.height);
				this.x_phone_height += data.height



				console.log("已占高度", this.x_phone_height);

				uni.getSystemInfo({
					success: res => {
						console.log("设备高度:", res.screenHeight)
						this.x_phone_height_1 = res.screenHeight - this.x_phone_height
						console.log(res.screenHeight, this.x_phone_height);
					}
				})
			}).exec();




		},
		methods: {
			
			x_tabs_click(item) {
				this.x_tabs_id = item.index
				this.$u.toast(item.index)
				console.log(item);
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
		created() {
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},

	}
</script>

<style lang="scss" scoped>
	.x_navBarBox .x_navBar {
		.x_main_heading {
			margin: 0 auto;
			color: black;
		}
	}

	.x_body {
		width: 100%;
		height: auto;
		margin: 0 auto;

		.x_banner {
			width: 100%;
			height: auto;
			margin:  -0.375rem 0 0 0;
			
			background-image: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/bg1.png");
			
			background-repeat: repeat-x;
			position: relative;

			//搜索
			.x_search {
				width: 90%;
				height: auto;
				margin: 0 auto;
				padding-top: 0.625rem;
			}

			
			.x_tabs {
				width: 90%;
				height: auto;
				margin: 0 auto;
			}

			

			.page_box {
				width: 90%;
				height: 100%;
				border-radius: 0.3125rem;
				margin: 0.625rem auto 0;
				padding: 0.625rem;
				background-color: white;
			}


		}
	}
</style>