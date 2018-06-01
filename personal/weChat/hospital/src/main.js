import qs from 'qs'
import Vue from 'vue'
import App from './App'
// 引入UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'

// 公共less
import './assets/less/public.less'
// 公共js
import api from './assets/js/common.js'
// 交互插件axios
import axios from 'axios'

import router from './router'

// 默认请求路径 -- 前缀
axios.defaults.baseURL = 'http://localhost:8080';

Vue.use(Mint)

// 统一设置请求不成功的方法
axios.interceptors.response.use(response => {
	return response.data;
}, error => {
	console.log(error);
});

// 统一设置请求前修改参数
axios.interceptors.request.use((config) => {
	
});

// 路由渲染前动作 -- 判断是否登录
router.beforeEach((to, from, next) => {
	next();
});

Vue.prototype.api = api;
Vue.prototype.$http = axios;

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})