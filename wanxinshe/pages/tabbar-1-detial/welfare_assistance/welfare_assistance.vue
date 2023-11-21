<template>
	<view>
		
		
		<u-navbar leftText="公益救助" :safeAreaInsetTop="true" fixed autoBack bgColor="white" :autoBack="true"
			:placeholder="true">
		</u-navbar>

		<view class="x_body">

			<view class="x_boxs">
				<view class="x_box" v-for="(item,index) in projectList" :key="index">
					<view><text>{{item.type}}</text>{{item.title}}</view>
					<view @click="applyClick(item.id)">申请指南</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				isShow: true,
				projectList:[
					{
						id:"1",
						type:"医保二次报销",
						title:"医保二次报销在当地社保局将社保升级成大病保险，可在基本医疗的基础上进行二次报销。",
					},
					{
						id:"2",
						type:"门诊慢病报销",
						title:"在医院门诊就诊的时候，可以报销比例高一些，有的时候可报销80%的费用。",
					},
					{
						id:"3",
						type:"门诊特殊病种",
						title:"办理门特之后，门诊费用就会像住院费用一样，按比例报销，并且报销比例和住院一样。",
					},
					{
						id:"4",
						type:"低保",
						title:"申请低保用户可以进行再次报销，报销的比例也是比较高的，可以达到90%。",
					},
					{
						id:"5",
						type:"大病援助",
						title:"有工作单位的，可以跟单位或者红十字会申请一个大病的救助。",
					},
					{
						id:"6",
						type:"妇联两癌救助",
						title:"乳腺癌、宫颈癌女性患者，可以向当地妇联申请5000--10000的妇女两癌专项救助。",
					},
					{
						id:"7",
						type:"新药临床试验",
						title:"在当前治疗方案无效、进展、不耐受的新药临床试验情况下，可以去尝试申请一些新药临床试验，提前接受到未上市的新疗法。",
					},
					{
						id:"8",
						type:"轻松筹",
						title:"国内首批慈善组织互联网募捐平台，大平台，边筹边取，安全可靠，不会收任何服务费用。",
					},
					{
						id:"9",
						type:"生命之钥",
						title:"无力承担帕博利珠单抗注射液治疗费用的晚期实体瘤成人患者，可申请免费赠药援助。",
					},
					{
						id:"10",
						type:"水滴筹",
						title:"家庭经济当前无力承担治疗费用的患者，可申请大病筹款，平台收取提现金额3%的服务费。",
					},
				]
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
			applyClick(id){
				console.log(id);
				uni.navigateTo({
					url:`/pages/article/article?id=${id}`
				})
			}
		},

		onLoad() {

		}
	}
</script>

<style lang="scss">
	.x_body {
		width: 100vw;
		height: 1670px;
		background-image: url("https://wanton-001.obs.cn-east-3.myhuaweicloud.com/WanXinWebMini/index/detail/gyjz.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center top;
		position: relative;

		.x_boxs {
			width: 100%;
			height: 65.5%;
			position: absolute;
			top: 27%;

			.x_box {
				width: 80%;
				height: 90px;
				margin: 0 auto;
				margin-top: 20px;
				background-color: #FFF7EC;
				border-radius: 8px;
				position: relative;
				view:nth-child(1){
					text{
						width: 100px;
						
						padding: 3px;
						display: inline-block;
						margin: 10px 5px 0 0;
						text-align: center;
						
						background-color: #FB9028;
						color: white;
						font-size: 0.9rem;
						border-radius: 5px;
					}
					font-size: 0.8rem;
					
					margin-left: 10px;
				}
				view:nth-child(2){
					position: absolute;
					width: 80px;
					height: 20px;
					border-radius: 10px;
					color: white;
					font-size: 0.9rem;
					text-align: center;
					bottom: 5px;
					right: 10px;
					background: linear-gradient(to top,#EF7026,#F59048);
				}
			}
		}
	}
</style>