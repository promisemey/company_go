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

//岗位详情
export const companyDetail = (id) => {
	return http.get(`classes/job/${id}`)
}

// 岗位报名
export const companyApply = (joinData) => {
	return http.post(`classes/join`, joinData)
}

// 报名状态查询
export const applyStateGet = (userId, jobId) => {
	return http.get('classes/ReactJoin', {
		where: {
			userId,
			jobId
		}
	})
}

// 查询报名列表
export const applyList = (userId, state = 0) => {
	let where = {
		userId
	}
	if (state != 0) {
		where.state = state
	}
	return request.get('classes/join', {
		params: {
			where
		}
	})
}