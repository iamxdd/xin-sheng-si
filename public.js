//深拷贝函数
function ObjCopy(obj) {
	var tmp_obj;
	if (typeof obj == 'object') {
		if (obj instanceof Array) {
			tmp_obj = [];
		} else {
			tmp_obj = {};
		}
	} else {
		return obj;
	}
	for (var i in obj) {
		if (typeof obj[i] != 'object') {
			tmp_obj[i] = obj[i];
		} else if (obj[i] instanceof Array) {
			tmp_obj[i] = [];
			for (var j in obj[i]) {
				if (typeof obj[i][j] != 'object') {
					tmp_obj[i][j] = obj[i][j];
				} else {
					tmp_obj[i][j] = ObjCopy(obj[i][j]);
				}
			}
		} else {
			tmp_obj[i] = ObjCopy(obj[i]);
		}
	}
	return tmp_obj;
}

/**
 * 去除数组重复
 * [getArray description]
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function getArray(arr) {
	var hash = {};
	var len = arr.length;
	var result = [];

	for (var i = 0; i < len; i++) {
		if (!hash[arr[i]]) {
			hash[arr[i]] = true;
			result.push(arr[i]);
		}
	}
	return result;
}


function PostAjax(url, param, header, className) {
	var headers = (header === undefined ? {
		'Content-Type': 'application/json;charset=UTF-8'
	} : header);
	var ajaxObj = $.ajax({
		url: url,
		type: 'post',
		data: param,
		datatype: 'jsonp',
		jsonp: 'callback',
		headers: headers,
		beforeSend: function() {
			if (className) {
				var loadHtml =
					'<div class="common-loading">' +
					'<div class="img"></div>' +
					'</div>';
				var fixDiv = $(className);
				fixDiv.css("position", "relative");
				fixDiv.append(loadHtml);
			}

		},
		complete: function() {
			if (className) {
				var fixDiv = $(className);
				fixDiv.children(".common-loading").remove();
			}
		}
	});
	return ajaxObj;
};

function PutAjax(url, param, header, className) {
	var headers = (header === undefined ? {
		'Content-Type': 'application/json;charset=UTF-8'
	} : header);
	var ajaxObj = $.ajax({
		url: url,
		type: 'PUT',
		datatype: 'jsonp',
		jsonp: 'callback',
		data: param,
		headers: headers,
		beforeSend: function() {
			if (className) {
				var loadHtml =
					'<div class="common-loading">' +
					'<div class="img"></div>' +
					'</div>';
				var fixDiv = $(className);
				fixDiv.css("position", "relative");
				fixDiv.append(loadHtml);
			}

		},
		complete: function() {
			if (className) {
				var fixDiv = $(className);
				fixDiv.children(".common-loading").remove();
			}
		}
	});
	return ajaxObj;
};

function DeleteAjax(url, header) {
	var headers = (header === undefined ? {
		'Content-Type': 'application/json;charset=UTF-8'
	} : header);
	var ajaxObj = $.ajax({
		url: url,
		type: 'DELETE',
		datatype: 'jsonp',
		jsonp: 'callback',
		headers: headers
	});
	return ajaxObj;
};
jQuery.support.cors = true;

function GetAjax(url, header, className) {
	var headers = (header === undefined ? {
		'Content-Type': 'application/json;charset=UTF-8'
	} : header);
	var ajaxObj = $.ajax({
		url: url,
		type: 'GET',
		datatype: 'jsonp',
		jsonp: 'callback',
		async:true,//异步还是同步
		headers: headers,
		beforeSend: function() {
			if (className) {
				var loadHtml =
					'<div class="common-loading">' +
					'<div class="img"></div>' +
					'</div>';
				var fixDiv = $(className);
				fixDiv.css("position", "relative");
				fixDiv.append(loadHtml);
			}

		},
		complete: function() {
			if (className) {
				var fixDiv = $(className);
				fixDiv.children(".common-loading").remove();
			}
		}

	});
	return ajaxObj;
};

function GetThreeArr(arr, count) {
	var result = [];
	for (var i = 0; i < arr.length; i += count) {
		result.push(arr.slice(i, i + count));
	}

	return result;
};

//对手机号码验证
function phoneCheck(val) {
	var flag = true;
	var pattern = /^1[3|4|5|8][0-9]\d{4,8}$/;
	// var patternTwo = /^0\d{2,3}-?\d{7,8}$/;
	if (pattern.test(val)) {
		flag = true;
	} else {
		flag = false;
	}
	return flag;
}

/*页面跳转*/
var linkFun = function(URLS) {
	window.location.href = URLS + ".html";
}

//检验名称
function NameCheck(val) {
	var flag = true;
	var patternName = /^[\u4E00-\u9FA5a-zA-Z0-9_]{1,16}$/;
	if (patternName.test(val)) {
		flag = true;
	} else {
		flag = false;
	}
	return flag;
}
//检验金额
var moneyCheck = function(val) {
	var flag = true;
	var patternName = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
	if (patternName.test(val)) {
		flag = true;
	} else {
		flag = false;
	}
	return flag;
}

function isNumber(value) {
	var patrn = /^[0-9]*$/;
	if (patrn.exec(value) == null || value == "") {
		return false
	} else {
		return true
	}
}
//对手机号码验证
function phoneNumCheck(val) {
	var flag = true;
	var pattern = /^1[3|4|5|8][0-9]\d{4,8}$/;
	var patternTwo = /^(0\\d{2}-\\d{8}(-\\d{1,4})?)|(0\\d{3}-\\d{7,8}(-\\d{1,4})?)$/;
	if (pattern.test(val) || patternTwo.test(val)) {
		flag = true;
	} else {
		flag = false;
	}
	return flag;
}

//对邮箱验证
function mailCheck(val) {
	var flag = true;
	var pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	if (pattern.test(val)) {
		flag = true;
	} else {
		flag = false;
	}
	return flag;
}

/**
 *[errorAlert]警告出现
 */
function errorAlert(dom, text) {
	dom.text(text);
}

/**
 * [getnewDay description]
 * @return {[type]} [description] 生成日期
 */
function getnewDay(Day, flag) {
	var tody = new Date(Day);
	var year = tody.getFullYear();
	var month = tody.getMonth() + 1;
	var day = tody.getDate();
	var hour = tody.getHours();
	var min = tody.getMinutes();
	var newDay = (flag == true ? (year + "-" + zero(month) + "-" + zero(day) + ' ' + zero(hour) + ':' + zero(min)) : (year + "-" + zero(month) + "-" + zero(day)));
	return newDay;
}
/**
 * [zero description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
function zero(value) {
	var _value = '';
	if (value > 9) {
		_value = value
	} else {
		_value = '0' + value;
	}
	return _value
}
/**
 * [getnewPassword description]
 * @param  {[type]} password [description]
 * @return {[type]}          [description] 得到新的转换后的密码
 */
function getnewPassword(password) {
	var base = new Base64();
	var newpassword = '';
	var _password = password + ' ' + getnewDay();
	/*先转成base64*/

	var _newpassword = base.encode(_password);
	newpassword = _newpassword.replace(/([a-z]*)(.*?)([A-Z]*)/g, function(m, m1, m2, m3) {
		return m1.toUpperCase() + m2 + m3.toLowerCase();
	});
	return newpassword;
}

/**
 * [guid description]
 * @return {[type]} [description] 唯一码生成
 */
function guid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

/**
 * [passwordFlag 匹配一个有英文和数字组成的长度为6～18的字符串,必须包含至少一个字母和一个数字]
 * @param  {[type]} val [description]
 * @return {[type]}     [description]
 */
function passwordFlag(val) {
	var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/;
	var flag = true;
	if (pattern.test(val)) {
		flag = true;
	} else {
		flag = false;
	}
	return flag;
}

/********************************************兼容IE7 8 时间****************************************/
function dateFormat(dateString, format) {
	if (!dateString) return "";

	var time = new Date($.trim(dateString.replace(/-/g, '/').replace(/T|Z/g, ' ')));
	var o = {
		"M+": time.getMonth() + 1, //月份
		"d+": time.getDate(), //日
		"h+": time.getHours(), //小时
		"m+": time.getMinutes(), //分
		"s+": time.getSeconds(), //秒
		"q+": Math.floor((time.getMonth() + 3) / 3), //季度
		"S": time.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return format;
}


/********************************************兼容IE7 8 ****************************************/
if (typeof Array.prototype.forEach != 'function') {
	Array.prototype.forEach = function(callback) {
		for (var i = 0; i < this.length; i++) {
			callback.apply(this, [this[i], i, this]);
		}
	};
}

/*********************************************兼容处理*********************************************/

if (!window.JSON) {
	window.JSON = {
		parse: function(jsonStr) {
			return eval('(' + jsonStr + ')');
		},
		stringify: function(jsonObj) {
			var result = '',
				curVal;
			if (jsonObj === null) {
				return String(jsonObj);
			}
			switch (typeof jsonObj) {
				case 'number':
				case 'boolean':
					return String(jsonObj);
				case 'string':
					return '"' + jsonObj + '"';
				case 'undefined':
				case 'function':
					return undefined;
			}

			switch (Object.prototype.toString.call(jsonObj)) {
				case '[object Array]':
					result += '[';
					for (var i = 0, len = jsonObj.length; i < len; i++) {
						curVal = JSON.stringify(jsonObj[i]);
						result += (curVal === undefined ? null : curVal) + ",";
					}
					if (result !== '[') {
						result = result.slice(0, -1);
					}
					result += ']';
					return result;
				case '[object Date]':
					return '"' + (jsonObj.toJSON ? jsonObj.toJSON() : jsonObj.toString()) + '"';
				case '[object RegExp]':
					return "{}";
				case '[object Object]':
					result += '{';
					for (i in jsonObj) {
						if (jsonObj.hasOwnProperty(i)) {
							curVal = JSON.stringify(jsonObj[i]);
							if (curVal !== undefined) {
								result += '"' + i + '":' + curVal + ',';
							}
						}
					}
					if (result !== '{') {
						result = result.slice(0, -1);
					}
					result += '}';
					return result;

				case '[object String]':
					return '"' + jsonObj.toString() + '"';
				case '[object Number]':
				case '[object Boolean]':
					return jsonObj.toString();
			}
		}
	};
}



// /*********************************************兼容IE7 8  localStorage*********************************************/          



if(typeof(localStorage)=='undefined'){

 var  box = document.body || document.getElementsByTagName("head")[0] || document.documentElement; 

      userdataobj = document.createElement('input'); 

      userdataobj.type = "hidden"; 

      userdataobj.addBehavior ("#default#userData"); 

      box.appendChild(userdataobj);

   //设定对象  

            
 var localStorage= {

    setItem:function(nam,val){
      	userdataobj.load(nam);

 		userdataobj.setAttribute(nam,val);

 		var d= new Date();

         d.setDate( d.getDate()+700); 

		 userdataobj.expires=d.toUTCString(); 

		 userdataobj.save(nam);

		 userdataobj.load("userdata_record");

		 var dt=userdataobj.getAttribute("userdata_record");

		 if(dt==null)dt='';

		 dt=dt+nam+",";

		 userdataobj.setAttribute("userdata_record",dt);

		 userdataobj.save("userdata_record");
	},

//模拟 setItem

 

 getItem:function(nam){

 	userdataobj.load(nam);

 	return userdataobj.getAttribute(nam); 
 },

//模拟 getItem

 removeItem:function(nam){
	 	userdataobj.load(nam);

	 	clear_userdata(nam)

	 	userdataobj.load("userdata_record");

		 var dt=userdataobj.getAttribute("userdata_record");

		 var reg=new RegExp(nam+",","g");

		 dt=dt.replace(reg,'');

		 var d= new Date();

	     d.setDate( d.getDate()+700); 

		 userdataobj.expires= d.toUTCString();

		 userdataobj.setAttribute("userdata_record",dt);

		 userdataobj.save("userdata_record");

 },

//模拟 removeItem

 

 clear:function(){
	    userdataobj.load("userdata_record");

	 	var dt=userdataobj.getAttribute("userdata_record").split(","); 

	     for (var i in dt){
	     	if(dt[i]!='')
	     	clear_userdata(dt[i])
	      }

	      clear_userdata("userdata_record")

 }

//模拟 clear();

 

}

//将名字为keyname的变量消除
function clear_userdata(keyname){
	var keyname;

    var d= new Date();

    d.setDate( d.getDate()-1);

    userdataobj.load(keyname);

    userdataobj.expires=d.toUTCString();

   userdataobj.save(keyname);

  }



 }