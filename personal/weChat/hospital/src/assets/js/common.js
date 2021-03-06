export default {
	dateFormat: function(time, fmt) {
		if(!time) {
			return "";
		}
		var d = new Date(time);
		var o = {
			"M+": d.getMonth() + 1, //月份   
			"d+": d.getDate(), //日   
			"h+": d.getHours(), //小时   
			"m+": d.getMinutes(), //分   
			"s+": d.getSeconds(), //秒   
			"q+": Math.floor((d.getMonth() + 3) / 3), //季度   
			"S": d.getMilliseconds() //毫秒   
		};
		if(/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
		for(var k in o)
			if(new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	},
	vueDataFormat: function(ops) {
		return JSON.parse(JSON.stringify(ops));
	},
	getUrlParams: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg) || window.location.hash.substr(window.location.hash.indexOf("?") + 1).match(reg);
		if(r) {
			return decodeURI(r[2]);
		} else {
			return null;
		}
	},
	setHeader: function(name) {
		document.getElementsByTagName('header')[0].innerHTML = name;
	}
}