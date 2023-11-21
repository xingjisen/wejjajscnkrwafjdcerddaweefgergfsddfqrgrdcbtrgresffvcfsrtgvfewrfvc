<template>
	<view>
		
		<view class="x_navBarBox">
			
			<view>
				
				<u-navbar leftText="肿瘤百科" :safeAreaInsetTop="true" fixed autoBack bgColor="white"
					:autoBack="true" :placeholder="true">
				</u-navbar>
			</view>
		</view>


		
		<view class="x_body">
			
			<view class="x_list_s">
				<view class="x_list_data" :class="'x_fixed_'+item.letter" v-for="(item,index) in itemArr" :key="item.letter">

					<view :class="'x_height x_letter_avatar_'+item.letter">{{ item.letter }}</view>

					<view class="x_list_data1" v-for="(data,index) in item.data" :key="index" @click="handleItemClick(data)">
						{{ data }}
					</view>
					
				</view>
			</view>

			
			<view class="x_list_index">
				<view @click="x_list_index_right(item.letter)" class="x_bgc"
					:class="x_activate == item.letter ? 'x_bgc_activate':''" v-for="(item,index) in itemArr"
					:key="index">
					{{ item.letter }}
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

				
				itemArr: [{
						letter: "A",
						data: ['列表A1', '列表A2', '列表A3']
					},
					{
						letter: "B",
						data: ['列表B1', '列表B2', '列表B3']
					},
					{
						letter: "C",
						data: ['列表C1', '列表C2', '列表C3']
					},
					{
						letter: "D",
						data: ['列表D1', '列表D2', '列表D3']
					},
					{
						letter: "E",
						data: ['列表E1', '列表E2', '列表E3']
					},
					{
						letter: "F",
						data: ['列表F1', '列表F2', '列表F3']
					},
					{
						letter: "G",
						data: ['列表G1', '列表G2', '列表G3']
					},
					{
						letter: "H",
						data: ['列表H1', '列表H2', '列表H3']
					},
					{
						letter: "I",
						data: ['列表I1', '列表I2', '列表I3']
					},
					{
						letter: "J",
						data: ['列表J1', '列表J2', '列表J3']
					},
					{
						letter: "K",
						data: ['列表K1', '列表K2', '列表K3']
					},
					{
						letter: "L",
						data: ['列表L1', '列表L2', '列表L3']
					},
					{
						letter: "M",
						data: ['列表M1', '列表M2', '列表M3']
					},
					{
						letter: "N",
						data: ['列表N1', '列表N2', '列表N3']
					},
					{
						letter: "O",
						data: ['列表O1', '列表O2', '列表O3']
					},
					{
						letter: "P",
						data: ['列表P1', '列表P2', '列表P3']
					},
					{
						letter: "Q",
						data: ['列表Q1', '列表Q2', '列表Q3']
					},
					{
						letter: "R",
						data: ['列表R1', '列表R2', '列表R3']
					},
					{
						letter: "S",
						data: ['列表S1', '列表S2', '列表S3']
					},
					{
						letter: "T",
						data: ['列表T1', '列表T2', '列表T3']
					},
					{
						letter: "U",
						data: ['列表U1', '列表U2', '列表U3']
					},
					{
						letter: "V",
						data: ['列表V1', '列表V2', '列表V3']
					},
					{
						letter: "W",
						data: ['列表W1', '列表W2', '列表W3']
					},
					{
						letter: "X",
						data: ['列表X1', '列表X2', '列表X3']
					},
					{
						letter: "Y",
						data: ['列表Y1', '列表Y2', '列表Y3']
					},
					{
						letter: "Z",
						data: ['列表Z1', '列表Z2', '列表Z3']
					}
				],
				lastScrollTop: 0, 
				
				x_activate: "A",

				activeLetter: '', 
				

			}
		},
		mounted() {
			
			
			

		},
		onPageScroll(res) {
			
			const scrollY = res.scrollTop;
			
			



			
			uni.createSelectorQuery()
				.select('.x_list_data')
				.fields({
					size: true
				}, (res) => {
					if (res) {
						
						let x_box1 = 37
						
						let x_box2 = res.height + 10;
						

						
						let x_number = 3

						let x_height = x_box1 + 10 + x_box2 * x_number //这个三是数组长度
						
						
						


						
						const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
						const letterCount = alphabet.length;
						for (let i = 0; i < letterCount; i++) {
							if (scrollY < (res.height + 10) * (i + 1)) {
								
								this.x_activate = alphabet[i];
								break; 
							}
						}
					}
				})
				.exec();

		},


		methods: {
			
			handleItemClick(data) {
				console.log(data);
				uni.redirectTo({
					url:`/pages/tabbar-1-detial/tabbar1_encyclopedia_of_cancer_details/tabbar1_encyclopedia_of_cancer_details?name=${data}`
				})
			},
			
			x_list_index_right(letter) {
				this.x_activate = letter
				

				

				for (var i = 0; i < 999999; i++) {
					console.log(i);
				}
				for (var i = 0; i < 999999; i++) {
					console.log(i);
				}
				for (let i = 0; i < this.itemArr.length; i++) {
					if (this.itemArr[i].letter === letter) {
						
						const leftData = this.itemArr[i].data;
						
						
						const query = uni.createSelectorQuery().in(this);
						
						query.select(`.x_fixed_${letter}`).boundingClientRect()
						
						
						
						
						
						query.exec((res) => {
							
							const elementInfo = res[0];
							if (elementInfo) {
								
								const scrollTop = elementInfo.top-78+ this.lastScrollTop;
								
								if (scrollTop !== this.lastScrollTop) {

									
									
									
									uni.pageScrollTo({
										scrollTop: scrollTop,
										duration: 200 
									});
									
									this.lastScrollTop = scrollTop;
								}
							} else {
								console.log('未找到元素');
							}
						});



						break; 
					}
				}
			},

		},
		//第一次加载时调用
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
	}
</script>

<style lang="scss">
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
		margin: 0 auto;

		
		.x_list_s {
			margin: 0.625rem 0;

			.x_list_data {
				border-bottom: 0.0625rem solid #eeeeee;

				
				>view:nth-child(1) {
					font-size: 0.8rem;
					color: #666666;
					margin: 0.625rem 0;
				}

				
				.x_list_data1 {
					margin: 0.625rem 0;
					font-weight: bold;
				}
			}
		}

		
		.x_list_index {
			height: 85%;
			width: 1.875rem;
			border-radius: 3.125rem;
			font-size: 0.9rem;
			color: #333333;
			background-color: #eeeeee;
			text-align: center;
			position: fixed;
			top: 12%;
			right: 0.625rem;
			display: flex;
			justify-content: space-between;
			flex-direction: column;


			.x_bgc {
				
				border-radius: 0.625rem;
			}

			.x_bgc_activate {
				background-color: #5babff;
			}
		}

	}
</style>