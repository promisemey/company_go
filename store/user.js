import {
	userLogin
} from '../api/user.js'
export default {
	namespaced: true,
	state() {
		return {
			userInfo: null
		}
	},
	mutations: {
		initUserInfo(state, info) {
			state.userInfo = info
		}
	},
	actions: {
		userLoginAction(context, account) {
			userLogin(account).then(res => {
				// console.log("登录信息：", res);
				context.commit('initUserInfo', res.data)
				uni.setStorage({
					key: "userInfo",
					data: res.data
				})
				uni.navigateBack({
					delta: 1
				})
			}).catch(err => {
				console.log('登录异常：', err);
			})
		}
	}
}