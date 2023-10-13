import http from '../utils/request.js'

// 登录
export const userLogin = (account) => {
	return http.post('login', account)
}