import {
	BASE,
	ID,
	KEY
} from '../config/index.js'

const $http = (api, method = "GET", data = {}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE}/1.1/${api}`,
			method,
			header: {
				"X-LC-Id": ID,
				"X-LC-Key": KEY,
				"Content-Type": 'application/json'
			},
			data,
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

// GET 请求
const $get = (api, data = {}) => {
	return $http(api, "GET", data)
}

export default {
	$http,
	$get
}