;(function() {
	window.$ = function(selector) {
		return new _$(selector);
	}

	function _$(selector) {
		this.elements = document.querySelector(selector);
		return this;
	}
	_$.prototype = {
		constructor: _$,
		method: function(name, fn) {
			if(this.elements) {
				this.elements.addEventListener(name, fn, false);
			}
			return this;
		},
		show: function() {
			this.elements.style.display = '';
			return this;
		},
		hide: function() {
			this.elements.style.display = 'none';
			return this;
		},
		hasClass: function(name) {
			name = name || '';
			if(name.replace(/\s/g, '').length == 0) return false;
			return new RegExp(' ' + name + ' ').test(' ' + this.elements.className + ' ');
		},
		addClass: function(name) {
			var ele = this.elements;
			if(!this.hasClass(name)) {
				ele.className = ele.className == '' ? name : ele.className + ' ' + name;
			}
			return this;
		},
		removeClass: function(name) {
			var elem = this.elements;
			if(this.hasClass(name)) {
				var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
				while(newClass.indexOf(' ' + name + ' ') >= 0) {
					newClass = newClass.replace(' ' + name + ' ', ' ');
				}
				elem.className = newClass.replace(/^\s+|\s+$/g, '');
			}
			return this;
		},
		ajax: function(ops) {
			if(window.XDomainRequest) { // IE
				var xhr = new XDomainRequest();
			} else { // webkit
				var xhr = new XMLHttpRequest();
			}
			// 转换大写 避免出错
			ops.type.toLocaleUpperCase();

			if(ops.type == "POST") { // post
				xhr.open(ops.type, url);
				xhr.send(encodeURI(JSON.stringify(ops.data)));
			} else { // get
				var str = "?";
				for(var key in ops.data) {
					str += key + "=" + ops.data[key] + "&";
				}
				xhr.open(ops.type, ops.url + str);
				xhr.send();
			}

			xhr.onload = function() {
				callback(JSON.parse(xhr.responseText));
			}
			xhr.onerror = function() {
				// console.log("错误了");
			}
			xhr.timeout = function() {
				// console.log("请求超时");
			}
			xhr.onprogress = function() {
				// console.log("请求进行中");
			}
			return this;
		}
	}
})();