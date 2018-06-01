<template>
	<div class="department-list">
		<ul class="squared-panel">
			<li v-for='item in squaredList' class="squared-item" :key="item.text">
				<router-link :to="{path: item.path}" class="squared-link">
					<i class="iconfont" :class="item.icon"></i>
					<p>{{item.text}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'department-list',
		data(){
			return{
				squaredList: [{
					icon: 'icon-icon-',
					text: '体检科',
					path: '/doctorList'
				}, {
					icon: 'icon-shoushushi',
					text: '手术室',
					path: '/deptCategory'
				}, {
					icon: 'icon-potion',
					text: '药剂科',
					path: '/doctorList'
				}, {
					icon: 'icon-gongneng',
					text: '功能科',
					path: '/doctorList'
				}, {
					icon: 'icon-fangsheke',
					text: '放射科',
					path: '/doctorList'
				}, {
					icon: 'icon-jianyanjiancha',
					text: '检验科',
					path: '/doctorList'
				}, {
					icon: 'icon-gangchangke',
					text: '肛肠外科',
					path: '/doctorList'
				}, {
					icon: 'icon-miniao_iconx',
					text: '泌尿外科',
					path: '/doctorList'
				}, {
					icon: 'icon-gandan',
					text: '肝胆外科',
					path: '/doctorList'
				}, {
					icon: 'icon-puwaike',
					text: '普外科',
					path: '/doctorList'
				}, {
					icon: 'icon-guke',
					text: '骨科',
					path: '/doctorList'
				}, {
					icon: 'icon-neifenmike',
					text: '内分泌科',
					path: '/doctorList'
				}, {
					icon: 'icon-huxineike',
					text: '呼吸内科',
					path: '/doctorList'
				}, {
					icon: 'icon-xinneike',
					text: '心内科',
					path: '/doctorList'
				}, {
					icon: 'icon-pifuke',
					text: '皮肤科',
					path: '/doctorList'
				}, {
					icon: 'icon-color',
					text: '中医科',
					path: '/doctorList'
				}, {
					icon: 'icon-kangfuyixueke',
					text: '康复医学科',
					path: '/doctorList'
				}, {
					icon: 'icon-color1',
					text: '口腔科',
					path: '/doctorList'
				}, {
					icon: 'icon-erbiyanhouke',
					text: '耳鼻咽喉科',
					path: '/doctorList'
				}, {
					icon: 'icon-mazuike',
					text: '麻醉科',
					path: '/doctorList'
				}, {
					icon: 'icon-fuke',
					text: '妇科',
					path: '/doctorList'
				}, {
					icon: 'icon-waike',
					text: '外科',
					path: '/doctorList'
				}, {
					icon: 'icon-neike',
					text: '内科',
					path: '/doctorList'
				}, {
					icon: 'icon-jizhenke',
					text: '急诊科',
					path: '/doctorList'
				}]
			}
		}
	}
</script>

<style>
	
</style>