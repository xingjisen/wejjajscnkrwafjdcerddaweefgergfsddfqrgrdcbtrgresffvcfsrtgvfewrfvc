<template>
	<view>
		
		
		<u-navbar leftText="基因检测" :safeAreaInsetTop="true" fixed autoBack bgColor="white" :autoBack="true"
			:placeholder="true">
		</u-navbar>

		<view class="x_body">
			<view v-if="isShow" class="x_select" @click="show = true">
				癌种选择: ▼
			</view>
			<view v-else class="x_select">
				{{ label }}
			</view>
			<view :class="'x_port_detail' + index" @click="titleClick(item.id)" v-for="(item,index) in columns[0][0].cancerData" :key="index">
				{{item.title}}
			</view>
			<u-picker :show="show" :columns="columns" keyName="label" @confirm="confirm" @cancel="cancel"></u-picker>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				columns: [
					[{
						id: 1,
						label: '癌症1',
						cancerData: [
							{
								id:"1",
								title:"看完这篇文章，别再问我癌症基因检测有什么用了!"
							},{
								id:"2",
								title:"哪些患者需要配做基因检测？"
							},{
								id:"3",
								title:"没有组织还能做基因检测吗？血液检测了解一下？"
							},{
								id:"4",
								title:"做完基因检测，多久就能收到报告？"
							},
						]
					}, {
						id: 2,
						label: '癌症2',
						cancerData: [
							{
								id:"1",
								title:"看完这篇文章，别再问我癌症基因检测有什么用了!"
							},{
								id:"2",
								title:"哪些患者需要配做基因检测？"
							},{
								id:"3",
								title:"没有组织还能做基因检测吗？血液检测了解一下？"
							},{
								id:"4",
								title:"做完基因检测，多久就能收到报告？"
							},
						]
					}]
				],
				label: "",
				isShow: true
			};
		},
		methods: {
			cancel() {
				this.show = false
			},
			confirm(e) {
				console.log('confirm', e.value[0].cancerData)
				this.label = e.value[0].label
				
				this.isShow = false
				this.show = false
			},
			titleClick(id){
				uni.navigateTo({ 
					url: `/pages/article/article?id=${id}`
				})
			}
		},
		
		onLoad() {

		}
	}
</script>

<style lang="scss">
	.x_body {
		width: 100%;
		height: 1000px;
		background-image: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/detail/jyjc.png");
		background-size: 100% 100%;
		position: relative;

		.x_select {
			width: 140px;
			height: 23px;
			text-align: center;
			font-weight: bold;
			color: #fff;
			position: absolute;
			top: 33.5%;
			left: 33%;
		}
		@for $i from 0 through 3 {
		  .x_port_detail#{$i} {
		    position: absolute;
		    top: #{50% + $i * 11%};
		    left: 15%;
		    width: 70%;
			text-align: center;
		  }
		}
	}
</style>