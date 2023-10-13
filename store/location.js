// 地理位置 经纬度
export default {

	namespaced: true,
	state() {
		return {
			city: '定位中...',
			lnglat: []
		}
	},
	mutations: {
		initLngLat(state, {
			city,
			lnglat
		}) {
			state.city = city
			state.lnglat = lnglat
		}
	}
}