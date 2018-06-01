<template>
	<div class="doctor-list">
		<router-link :to="{path: '/doctorInfo'}">
			<div class="doctor-list-item" v-for="item in doctorData">
				<div class="doctor-img">
					<img :src="item.doctorImg" />
				</div>
				<div class="doctor-info">
					<p class="doctor-title">{{item.doctoeName}}&nbsp;&nbsp;{{item.doctorJob}}</p>
					<div class="doctor-detail">{{item.doctorInfo}}</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'doctor-list',
		data() {
			return {
				doctorData: [{
					doctorImg: require('../../assets/images/test1.png'),
					doctoeName: '张红军',
					doctorJob: '执行医师',
					doctorInfo: '口腔医学硕士，医师。毕业于四川大学华西口腔医院，从事口腔医疗工作多年，擅长牙体牙髓病等等'
				}, {
					doctorImg: require('../../assets/images/test1.png'),
					doctoeName: '张红军',
					doctorJob: '主治医师',
					doctorInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloribus veniam voluptates ratione nobis maiores fugiat vitae quidem quos blanditiis voluptatibus iure qui est laudantium saepe repellendus placeat quae expedita!'
				}, {
					doctorImg: require('../../assets/images/test1.png'),
					doctoeName: '张红军',
					doctorJob: '职业医师',
					doctorInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloribus veniam voluptates ratione nobis maiores fugiat vitae quidem quos blanditiis voluptatibus iure qui est laudantium saepe repellendus placeat quae expedita!'
				}, {
					doctorImg: require('../../assets/images/test1.png'),
					doctoeName: '张红军',
					doctorJob: '职业医师',
					doctorInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloribus veniam voluptates ratione nobis maiores fugiat vitae quidem quos blanditiis voluptatibus iure qui est laudantium saepe repellendus placeat quae expedita!'
				}, {
					doctorImg: require('../../assets/images/test1.png'),
					doctoeName: '张红军',
					doctorJob: '职业医师',
					doctorInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloribus veniam voluptates ratione nobis maiores fugiat vitae quidem quos blanditiis voluptatibus iure qui est laudantium saepe repellendus placeat quae expedita!'
				}]
			}
		}
	}
</script>

<style lang="less">
	.doctor-list {
		.doctor-list-item {
			padding: 1rem;
			display: flex;
			margin-bottom: 1rem;
			border-bottom: 1px solid #ccc;
			.doctor-img {
				width: 10rem;
				margin-right: 1rem;
				img {
					max-width: 7rem;
					max-height: 10rem;
				}
			}
			.doctor-info {
				overflow: hidden;
				text-overflow: ellipsis;
				.doctor-title {
					font-size: 1.5rem;
					font-weight: 300;
				}
				.doctor-detail {
					font-size: 14px;
					margin-top: 1rem;
					line-height: 25px;
					overflow: hidden;
				    text-overflow: ellipsis;
				    display: -webkit-box;
				    -webkit-box-orient: vertical;
				    -webkit-line-clamp: 3;
				}
			}
		}
	}
</style>