import http from '../utils/request.js'

export const category = () => {
	return http.get('classes/category', {
		params: {
			where: {
				parentId: '0-0'
			}
		}
	})
}