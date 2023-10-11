import http from '../utils/request.js'

// 公司列表
export const companyGet = (page = 1, name) => {
	let skip = (page - 1) * 10
	let where = {}
	if (name && name !== '') {
		where.lv1 = name
	}
	return http.get('classes/job', {
		params: {
			limit: 10,
			skip,
			where
		}
	})
}