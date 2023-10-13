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
				console.log("登录信息：", res);
			}).catch(err => {
				console.log('登录异常：', err);
			})
		}
	}
}