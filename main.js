import App from './App'

// 导入封装请求
import http from './utils/http.js'

// #ifndef VUE3
import Vue from 'vue'
// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI)
// 引入store
import store from './store'
// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$tn.mixin.js')
Vue.mixin(vuexStore)
Vue.config.productionTip = false
// 全局挂载
Vue.prototype.api = http
App.mpType = 'app'

import CloudSDK from 'leancloud-storage'
import {
	BASE,
	ID,
	KEY
} from './config/index.js';
CloudSDK.init({
	appId: ID,
	appKey: KEY,
	serverURL: BASE
});

try {
	function isPromise(obj) {
		return (
			!!obj &&
			(typeof obj === "object" || typeof obj === "function") &&
			typeof obj.then === "function"
		);
	}

	// 统一 vue2 API Promise 化返回格式与 vue3 保持一致
	uni.addInterceptor({
		returnValue(res) {
			if (!isPromise(res)) {
				return res;
			}
			return new Promise((resolve, reject) => {
				res.then((res) => {
					if (res[0]) {
						reject(res[0]);
					} else {
						resolve(res[1]);
					}
				});
			});
		},
	});
} catch (error) {}

// 全局组件
import JobItem from './components/job-item.vue'
import SearchIpt from './components/search-ipt.vue'
Vue.component('job-item', JobItem)
Vue.component('search-ipt', SearchIpt)

const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif