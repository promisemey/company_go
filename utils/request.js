import Request from '../js_sdk/luch-request/luch-request/index.js'
import {
	BASE,
	ID,
	KEY
} from '../config/index.js'
import {
	fail
} from 'assert';
const http = new Request()
/* config 为默认全局配置*/
http.setConfig((config) => {
	config.baseURL = BASE + '/1.1/'; /* 根域名 */
	config.header = {
		"X-LC-Id": ID,
		"X-LC-Key": KEY,
		"Content-Type": "application/json"
	}
	return config
})
// 请求拦截器
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	config.header = {
		...config.header,
		// a: 1 // 演示拦截器header加参
	}
	console.log('请求拦截器');
	return config
}, config => { // 可使用async await 做异步操作
	return Promise.reject(config)
})
//响应拦截器
http.interceptors.response.use((response) => {
	/* 对响应成功做点什么 可使用async await 做异步操作*/

	const {
		url
	} = response.config
	if (url === 'login' || url === 'users') {
		uni.showToast({
			title: '操作成功'
		})
	}

	return response
}, (response) => {
	/*  对响应错误做点什么 （statusCode !== 200）*/
	const {
		url
	} = response.config
	if (url === 'login' || url === 'users') {
		uni.showToast({
			icon: 'none',
			title: '操作失败'
		})
	}

	return Promise.reject(response)
})

export default http