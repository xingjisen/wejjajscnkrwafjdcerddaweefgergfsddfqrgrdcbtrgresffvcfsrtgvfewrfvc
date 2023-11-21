<template>
	<view>
		
		<view class="x_page_Pattern1" v-for="i in 10">
			<view class="x_page_Pattern1_left">
				<view class="x_page_Pattern1_left_top"><text>【癌症患者】</text>采用靶向药物治疗时，吃中药能缓解副作用吗？</view>
				<view class="x_page_Pattern1_left_bottom">
					<view>
						<view>实验分期</view>
						<view>适应症</view>
					</view>

					<view>
						<view>Ⅲ期</view>
						<view>非小细胞癌（NSCLC）</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "globalList",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	
	.x_page_Pattern1 {
		width: 100%;
		height: auto;
		margin: 0 auto;
		padding: 10px 0 10px;
		display: flex;
		border-bottom: #eeeeee solid 1px;
		justify-content: space-between;

		.x_page_Pattern1_left {
			
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.x_page_Pattern1_left_top {
				font-size: 0.9rem;
				color: #333333;
				font-weight: bold;

				text {
					font-weight: bold;
				}
			}

			.x_page_Pattern1_left_bottom {
				color: #333333;
				font-size: 0.7rem;
				display: flex;

				>view {
					margin-left: 20px;
					
					>view{
						margin: 5px 0 0;
					}
				}
			}

		}

	}
</style>