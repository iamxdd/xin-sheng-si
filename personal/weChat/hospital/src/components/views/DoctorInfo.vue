<template>
	<div class="doctor-info">
		<div class="doctor-info-head">
			<img src="../../assets/images/doctorBg.png" />
			<div class="doctor-info-img">
				<img src="../../assets/images/test1.png" />
				<p>张红军 口腔科</p>
			</div>
		</div>
		<div class="doctor-info-detail">
			<button>预约挂号</button>
			<div class="doctor-info-item-row">
				<label>性别：</label>
				<span>男</span>
			</div>
			<div class="doctor-info-item-row">
				<label>科室：</label>
				<span>口腔科</span>
			</div>
			<div class="doctor-info-item-row">
				<h3>医生职称</h3>
				<p>职业医师</p>
			</div>
			<div class="doctor-info-item-row">
				<h3>医生荣耀</h3>
				<p>暂无</p>
			</div>
			<div class="doctor-info-item-row">
				<h3>医生简介</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugit sed vitae nesciunt aperiam maxime veniam optio ea perspiciatis. Soluta optio explicabo atque ullam unde illum eos non sapiente earum!</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'doctor-info',
		data() {
			return {}
		}
	}
</script>

<style lang="less">
	.doctor-info {
		.doctor-info-head {
			position: relative;
			.doctor-info-img {
				img {
					position: absolute;
					left: 1rem;
					bottom: .5rem;
					width: 7rem;
					height: 10rem;
					padding: .5rem;
					background-color: #fff;
					border-radius: 6px;
					z-index: 2;
				}
				p {
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					height: 2.5rem;
					background-color: rgba(0, 0, 0, .4);
					z-index: 1;
					text-indent: 10rem;
					color: #dcdcdc;
					font-size: 1.3rem;
					font-weight: 400;
				}
			}
		}
		.doctor-info-detail {
			padding: 1rem;
			font-size: 1.3rem;
			h3{
				margin-bottom: .5rem;
				font-size: 1.5rem;
				color: #393939;
			}
			button{
				width: 100%;
			    border: none;
			    background-color: cornflowerblue;
			    border-radius: 5px;
			    line-height: 2.5rem;
			    color: #fff;
			    font-size: 15px;
			    letter-spacing: 3px;
			    margin-bottom: 1rem;
			}
		}
	}
</style>