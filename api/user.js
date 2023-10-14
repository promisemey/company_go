import http from '../utils/request.js'

// 登录
export const userLogin = (account) => {
	return http.post('login', account)
}
// 注册
export const userReg = (account) => {
	return http.post('users', account)
}
// 更新
export const userUpdate = (account) => {
	return http.post('users', account)
}