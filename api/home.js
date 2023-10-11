import http from '../utils/request.js'

// 分类宫格
export const category = () => {
	return http.get('classes/category', {
		params: {
			where: {
				parentId: '0-0'
			}
		}
	})
}