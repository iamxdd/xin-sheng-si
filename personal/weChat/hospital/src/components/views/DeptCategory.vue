<template>
	<div class="dept-category">
		<!--<router-link :to="{path: '/deptCategory'}">-->
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">科室介绍</mt-tab-item>
			  <mt-tab-item id="2">科室医生</mt-tab-item>
			</mt-navbar>
			
			<!-- tab-container -->				
			<mt-tab-container v-model="selected">				
			  <mt-tab-container-item id="1">
			  	<router-link :to="{path: '/department'}">
				    <div class=" doctor-list">
				    	<img  v-for='item in doctorList' :src="item.src" :key='item.src' />
				    	<h3>罗采择<span>主任医师</span></h3>
				    	<div class="specialty">擅长:<span>暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无</span></div>
				    </div>
				</router-link>
			  </mt-tab-container-item>	  
			  
			  <mt-tab-container-item id="2">
			    <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
			  </mt-tab-container-item>
			  
			  <!--<mt-tab-container-item id="3">
			    <div class=" doctor-list" v-for="item in doctorList">
			    	<img  v-for='item in doctorList' :src="item.src" :key='item.src' />
			    	<h3>{{item.title}}<span>{{item.sub}}</span></h3>
			    	<div class="specialty">擅长:<span>{{item.text}}</span></div>
			    </div>
			    
			    <div class=" doctor-list" v-for="item in doctorList">
			    	<img src="../../../dist/static/img/test1.3c88901.png" alt="" />
			    	<h3>{{item.title}}<span>{{item.sub}}</span></h3>
			    	<div class="specialty">擅长:<span>{{item.text}}</span></div>
			    </div>
			  </mt-tab-container-item>-->
			  
			</mt-tab-container>

		<!--</router-link>-->		
	</div>
</template>

<script>
	export default{
		name:'dept-category',
		data(){
			return{
				selected:"1",
				doctorList:[{
					title:'罗采择',
					sub:'主任医师',
					text:'暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无',
					src:require('../../../dist/static/img/test1.3c88901.png')
				}]
			}
		}
	}
</script>

<style scoped>
	/*.dept-category{*/
	
	html,body{
		background-color:#f5f5f5;
	}
		.doctor-list{
			margin-top:2px;
		    padding: 1rem;
		    border-top: 1px solid #eee;
		    border-bottom: 1px solid #eee;
		    background-color: #fff;
		}
		img{
			max-width: 100%;
		    width: 5rem;
		    height: 5rem;
		    border: 1px solid #666;
		    border-radius: 50%;
		    float: left;
		}
		h3{
			margin-left: 6.5rem;
    		margin-bottom: 5px;
		}
		h3 span{
			display: inline-block;
		    padding-left: 6px;
		    color: #666;
		    font-size: 12px;
		}
		.specialty{
			margin-left: 6.5rem;
		    width: 265px;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		}
		.mint-tab-container{
			margin-top:1rem;
		}
	/*}*/
</style>