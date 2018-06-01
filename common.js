export default {
	dateFormat: function(time, fmt) {
		if(!time) {
			return "";
		}
		var d = new Date(time);
		var o = {
			"M+": d.getMonth() + 1, //月份   
			"d+": d.getDate(), //日   
			"z+": d.getDate() - 1, //昨日
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
	toPrice(num) {
		if(!num) {
			return '0.00';
		}
		return String(Number(num).toFixed(2)).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
	},
	//格式化折扣
	toDiscount(num) {
		if(!num) {
			return '0.0';
		}
		return String(Number(num).toFixed(1)).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
	},
	showLoading() {
		var loadingHtml = '<div class="loading-panel" style="z-index: 999; width: 100%; height: 100%; position: fixed; top: 0; left: 0; bottom: 0; right: 0; background-color: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;"><i class="el-icon-loading" style="font-size: 68px;color: #fff;"></i></div>';
		$("body").append(loadingHtml);
	},
	hideLoading(loadingHtml) {
		$(".loading-panel").remove();
	},
	setHeader: function(header) {
		document.querySelector('title').innerHTML = header;
	},
	getArrItem(arr, value, getItemKey, key) {
		for(var i = 0, len = arr.length; i < len; i++) {
			if(arr[i][getItemKey] == value) {
				return arr[i][key];
				break;
			}
		}
	},
	resetJson(obj) {
		var newObj = {}
		for(var key in obj) {
			newObj[key] = "";
		}
		return newObj;
	},
	validJsonIsNull(obj) {
		var jsonIsNull = null;
		for(var key in obj) {
			if(obj[key] == "") { // 为空
				jsonIsNull = true;
				continue;
			} else { // 不为空
				jsonIsNull = false;
				break;
			}
		}
		return jsonIsNull;
	},
	arrHasItem(arr, keys) {
		var returnValue = false;
		for(var i = 0, len = arr.length; i < len; i++) {
			if(arr[i].name == keys) {
				returnValue = true;
				break;
			} else {
				returnValue = false;
				continue;
			}
		}
		return returnValue;
	},
	jsonToStringUri(url, ops) {
		var str = '';
		for(var key in ops) {
			str += '&' + key + '=' + (ops[key] || '')
		}
		return sessionStorage.getItem('baseUrl') + url + '?Authorization=' + JSON.parse(localStorage.getItem("loginInfo")).token + str;
	},
	jsonToArrParams(obj, str) {
		var arr = [];
		for(var i = 0, len = obj.length; i < len; i++) {
			arr.push(obj[i][str]);
		}
		return arr;
	},
	exportFile(url) {
		var str = 'export-file-tag-' + new Date().getTime();
		var a = document.createElement('a');
		a.id = str;
		a.style.display = 'none';
		a.href = url;
		a.download = url;

		document.querySelector('body').appendChild(a);
		a.click();
		document.querySelector('#' + str).remove();
	},
	init(path) {
		if(sessionStorage.getItem('num')) {
			var urlArr = require('../json/url.json').urlArr;
			for(var key in urlArr) {
				if(path.indexOf(urlArr[key].path) > 0) {
					var sess = urlArr[key].toSess;
					for(var k = 0, len = sess.length; k < len; k++) {
						sessionStorage.removeItem(sess[k]);
					}
					break;
				}
			}
		}
		sessionStorage.removeItem('num');
	}
}