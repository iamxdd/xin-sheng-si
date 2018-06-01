import Vue from 'vue'
import Router from 'vue-router'

//import Hello from '@/components/Hello'
import Home from '@/components/Home'

import Registration from '@/components/views/Registration'
import Summary from '@/components/views/Summary'
import Department from '@/components/views/Department'
import DoctorList from '@/components/views/DoctorList'
import DoctorInfo from '@/components/views/DoctorInfo'
import DeptCategory from '@/components/views/DeptCategory'
import Extension from '@/components/views/Extension'
import Website from '@/components/views/Website'
import Consultant from '@/components/views/Consultant'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home,
		children: [{
			path: 'registration', 
			name: 'registration', //首页
			component: Registration
		}, {
			path: 'summary',
			name: 'summary', //医院介绍
			component: Summary
		}, {
			path: 'department',
			name: 'department', //科室医生
			component: Department
		}, {
			path: 'doctorList',
			name: 'doctorList', //医生列表
			component: DoctorList	
		}, {
			path: 'doctorInfo',
			name: 'doctorInfo', //个人简介
			component: DoctorInfo
		},{
			path: 'deptCategory',
			name: 'deptCategory', //科室介绍+科室医生
			component: 	DeptCategory
		},{
			path: 'extension',
			name: 'extension', //健康咨询
			component: Extension
		},{
			path:'website',
			name:'website', //医院官网
			component:Website
		},{
			path:'consultant',
			name:'consultant', //咨询医生
			component:Consultant
		}]
	}]
})