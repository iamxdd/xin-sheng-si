<template>
	<div class="registration">
		<!-- swiper -->
		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="../../assets/images/banner1.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../assets/images/banner2.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../assets/images/banner3.jpg" />
			</mt-swipe-item>
		</mt-swipe> 
		<div class="tip">
			<router-link :to="{path:'/department'}">
				<h3><i class="iconfont icon-yixuewentizixun"></i>挂号预约</h3>
				<p>在线挂号，现场取号</p>
			</router-link>
		</div>
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
	export default {
		name: 'registration',
		data() { 
			return {
				squaredList: [{
					icon: 'icon-guanyu',
					text: '关于东区',
					path: '/summary'
				},{
					icon: 'icon-zhaopinxinxi',
					text: '招聘信息',
					path: '/summary'
				},{
					icon: 'icon-jiankangzixun',
					text: '健康咨询',
					path: '/extension'
				},{
					icon: 'icon-tesefuwu',
					text: '特色医疗',
					path: '/summary'
				}, {
					icon: 'icon-xianlu_',
					text: '来院路线',
					path: '/summary'
				}, {
					icon: 'icon-xinwen',
					text: '新闻活动',
					path: '/summary'
				},{
					icon: 'icon-yiliaozixun-',
					text: '咨询医生',
					path: '/consultant'
				}, {
					icon: 'icon-yiliao',
					text: '优势医疗',
					path: '/summary'
				}, {
					icon: 'icon-laba',
					text: '联系我们',
					path: '/summary'
				},{
					icon: 'icon-hydrodentweixintubiaoyiyuanjieshao',
					text: '医院介绍',
					path: '/summary'
				}, {
					icon: 'icon-yixuewentizixun',
					text: '科室医生',
					path: '/department'
				}, {
					icon: 'icon-chuanweiappyiliao',
					text: '医院官网',
					path: '/website'
				}]
			}
		}
	}
</script>

<style lang="less">
	.registration {
		.mint-swipe {
			height: 15rem;
		}
		.squared-panel{
			margin-top: 1.8rem;
		}
		.tip{
			padding: 0 1rem;
			margin-bottom: 1.5rem;
		    width: 110px;
		    border-right: 1px solid #eee;
		}
		h3{
			font-size: 16px;
    		color: #333;
		}
		i{
			font-size: 2rem;
		}
	}
</style>