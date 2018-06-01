<template>
	<div class="health-nav-panel">
		<!-- swipe -->
		<mt-swipe :auto="4000" class="swiper-panel">
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
		<!-- nav -->
		<div class="flexbox nav-title text-center">
			<router-link @click.native="toLink(item.text)" :class="{'active': active == item.text}" v-for="item in navArr" :to="{path: item.path + '?active=' + item.text}" :key="item.text" class="nav-title-item flex1">
				{{item.text}}
			</router-link>
		</div>
		<!-- list -->
		<div class="health-list">
			<div class="flexbox health-list-item" v-for="item in healthList" :key="item.title">
				<img :src="item.imgPath" />
				<div class="">
					<h3>{{item.title}}</h3>
					<div class="health-list-item-summary">{{item.summary}}</div>
				</div>
			</div>
		</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'health-nav',
		data() {
			return {
				active: '妙招',
				navArr: [{
					path: '/extension',
					text: '妙招'
				}, {
					path: '/extension',
					text: '防痛'
				}, {
					path: '/extension',
					text: '食疗'
				}, {
					path: '/extension',
					text: '谈性'
				}, {
					path: '/extension',
					text: '动作'
				}],
				healthList: [{
					imgPath: '',
					title: '测试测试测试侧hi',
					summary: '卡死京东方卡死积分卡十分接近阿隆索放假啊速度快司机啊的风口浪尖阿斯蒂芬快乐'
				}, {
					imgPath: '',
					title: '测试测试测试侧hi',
					summary: '卡死京东方卡死积分卡十分接近阿隆索放假啊速度快司机啊的风口浪尖阿斯蒂芬快乐'
				}, {
					imgPath: '',
					title: '测试测试测试侧hi',
					summary: '卡死京东方卡死积分卡十分接近阿隆索放假啊速度快司机啊的风口浪尖阿斯蒂芬快乐'
				}, {
					imgPath: '',
					title: '测试测试测试侧hi',
					summary: '卡死京东方卡死积分卡十分接近阿隆索放假啊速度快司机啊的风口浪尖阿斯蒂芬快乐'
				}, {
					imgPath: '',
					title: '测试测试测试侧hi',
					summary: '卡死京东方卡死积分卡十分接近阿隆索放假啊速度快司机啊的风口浪尖阿斯蒂芬快乐'
				}, {
					imgPath: '',
					title: '测试测试测试侧hi',
					summary: '卡死京东方卡死积分卡十分接近阿隆索放假啊速度快司机啊的风口浪尖阿斯蒂芬快乐'
				}]
			}
		},
		methods: {
			toLink(idx) {
				this.active = idx;
			}
		},
		created() {
			this.active = location.href.split('?')[1] ? decodeURI(location.href.split('?')[1].split('=')[1]) : '妙招';
		}
	}
</script>

<style lang="less">
	.health-nav-panel {
		.swiper-panel {
			height: 20rem;
			text-align: center;
			background-color: #DCDCDC;
		}
		.nav-title {
			width: 100%;
			line-height: 3rem;
			background-color: #FBFBFB;
			.nav-title-item {
				&.active {
					color: #8AAF7F;
				}
			}
		}
		.health-list {
			border-top: 1px solid #DCDCDC;
			.health-list-item {
				padding: 1rem;
				border-bottom: 1px solid #DCDCDC;
				img {
					width: 12rem;
					margin-right: 1rem;
					border: 1px solid #DCDCDC;
				}
				h3 {
					font-size: 14px;
					color: #333;
					margin: 0;
					margin-bottom: .5rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.health-list-item-summary {
					color: #666;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					letter-spacing: 1px;
				}
			}
		}
	}
</style>