<template>
	<view>
		
		
		<u-navbar :leftText="leftTitle" :safeAreaInsetTop="true" fixed autoBack bgColor="white" :autoBack="true"
			:placeholder="true">
		</u-navbar>
		<view class="x_body">
			<view class="x_title">{{article.title}}</view>
			<view class="x_author">{{article.author}}</view>
			<view class="x_msg">
				{{article.msg}}
			</view>
			<view>传递过来的ID{{ aasdad }}</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftTitle:"文章详情",
				article:{
					title:"三名赋予紧密型医共体总院人财务事业忌官权，真正体现了一家人一条心一本账",
					author:"邢继森",
					msg:"三名赋予紧密型医共体总院人财务事业忌官权，真正体现了一家人一条心一本账"
				},
				aasdad:""
			}
		},
		methods: {
			 
		},
		onLoad(article){
			console.log("传递过来的数据:",article.id);
			console.log(this.aasdad = article.id);
		},
	}
</script>

<style lang="scss">
.x_body{
	width: 90%;
	margin: 20px auto 0;
	.x_title{
		font-weight: bold;
		font-size: 1.1rem;
		margin: 10px 0;
	}
	.x_author{
		font-size: 0.8rem;
		color: #666;
	}
	.x_msg{
		margin-top: 20px;
	}
}
</style>
