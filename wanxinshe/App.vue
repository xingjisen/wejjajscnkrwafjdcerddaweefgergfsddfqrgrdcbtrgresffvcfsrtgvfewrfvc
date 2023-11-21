<script>
	export default {
		
		
		
		
		
		
		onLaunch: function() {
			console.log('App Launch');
			

			
			setTimeout(() => {
				uni.setTabBarItem({
					
				})
				
				uni.setTabBarBadge({
					
					
				});
				
				uni.showTabBarRedDot({
					
				});
			}, 1000);
		},
		onShow: function() {
			
			console.log('App Show');

			
			uni.hideTabBar()

			
			
			
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>


<style lang="scss">
	

	
	.u-page__item__slot-icon {
		width: 1.5625rem;
		height: 1.5625rem;
		margin: 0 0 -5px 0;
	}

	.u-page__item__slot-icon1 {
		width: 2.1875rem;
		height: 2.1875rem;
	}

	
	
	
	
	
	
	body {
		background-color: #fafafa;
		color: #333333;
	}

	
	.x_navBarBox {
		background-color: #19ABFF;
		width: 100%;
		
		z-index: 999;
	}

	.x_navBarBox .x_statusBar {}

	.x_navBarBox .x_navBar {
		
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 0.3125rem;
	}

	.x_navBarBox .x_navBar {
		width: 100%;
		background-color: #19ABFF;
		height: 3rem;
	}

	.x_navBar {
		.x_navbar_1 {
			padding-bottom: 0.625rem;
			width: 90%;
			height: auto;
			color: white;

			
			.x_flex {
				display: flex;

				
				.x_logo {
					width:  1.875rem;
					height:  1.875rem;
					margin-right: 0.3125rem;
					background-color: white;
					border-radius: 50%;
				}

				
				.x_main_heading {
					font-weight: bold;
					font-size: 1.2rem;
					margin-top: 0.1875rem;
				}
			}

			
			.x_subtitle_heading {
				font-size: 0.7rem;
			}
		}
	}
	.img_fixed{
		width: 2rem;
		height: 2rem;
		background-color: #19ABFF;
		border-radius: 50px;
		position: fixed;
		z-index: 99999;
		
		top: 67%;
		right: 10%;
		margin-top: -2.5rem;
		margin-right: -1.5rem;
		image{
			width: 2rem;
			height: 2rem;
		}
	}
	
</style>