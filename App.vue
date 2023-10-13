<script>
	export default {
		onLaunch: function() {
			console.log(11111);
			// 获取位置信息
			uni.getLocation({
				success: (res) => {
					let {
						longitude,
						latitude
					} = res
					console.log(111212111);
					// 高德逆地理编码API
					let url =
						`https://restapi.amap.com/v3/geocode/regeo?location=${longitude},${latitude}&key=bdcb713505916c92f9cb7ac751b8579d`
					uni.request({
						url,
						success: (res) => {
							let {
								province,
								city
							} = res.data.regeocode.addressComponent
							console.log('位置：', res);
							let cityName = city.length ? city : province

							// 存入 状态中
							this.$store.commit('location/initLngLat', {
								city: cityName,
								lnglat: [longitude, latitude]
							})
						}
					})
				}
			})

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'colorui/icon.css';
	@import 'colorui/main.css';
	@import 'colorui/animation.css';
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import './tuniao-ui/index.scss';
	@import './tuniao-ui/iconfont.css';
	@import './static/font/iconfont.css';
</style>