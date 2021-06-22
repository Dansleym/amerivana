function _defineProperties(e, t) {
	for (var i = 0; i < t.length; i++) {
		var s = t[i];
		s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
	}
}

function _createClass(e, t, i) {
	return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}

function _extends() {
	return (_extends = Object.assign || function (e) {
		for (var t = 1; t < arguments.length; t++) {
			var i = arguments[t];
			for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
		}
		return e
	}).apply(this, arguments)
}

function isObject(e) {
	return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
}

function extend(e, t) {
	void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function (i) {
		void 0 === e[i] ? e[i] = t[i] : isObject(t[i]) && isObject(e[i]) && Object.keys(t[i]).length > 0 && extend(e[i], t[i])
	}))
}

var ssrDocument = {
	body: {}, addEventListener: function () {
	}, removeEventListener: function () {
	}, activeElement: {
		blur: function () {
		}, nodeName: ""
	}, querySelector: function () {
		return null
	}, querySelectorAll: function () {
		return []
	}, getElementById: function () {
		return null
	}, createEvent: function () {
		return {
			initEvent: function () {
			}
		}
	}, createElement: function () {
		return {
			children: [], childNodes: [], style: {}, setAttribute: function () {
			}, getElementsByTagName: function () {
				return []
			}
		}
	}, createElementNS: function () {
		return {}
	}, importNode: function () {
		return null
	}, location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
};

function getDocument() {
	var e = "undefined" != typeof document ? document : {};
	return extend(e, ssrDocument), e
}

var ssrWindow = {
	document: ssrDocument,
	navigator: {userAgent: ""},
	location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
	history: {
		replaceState: function () {
		}, pushState: function () {
		}, go: function () {
		}, back: function () {
		}
	},
	CustomEvent: function () {
		return this
	},
	addEventListener: function () {
	},
	removeEventListener: function () {
	},
	getComputedStyle: function () {
		return {
			getPropertyValue: function () {
				return ""
			}
		}
	},
	Image: function () {
	},
	Date: function () {
	},
	screen: {},
	setTimeout: function () {
	},
	clearTimeout: function () {
	},
	matchMedia: function () {
		return {}
	},
	requestAnimationFrame: function (e) {
		return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
	},
	cancelAnimationFrame: function (e) {
		"undefined" != typeof setTimeout && clearTimeout(e)
	}
};

function getWindow() {
	var e = "undefined" != typeof window ? window : {};
	return extend(e, ssrWindow), e
}

function _inheritsLoose(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function _getPrototypeOf(e) {
	return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
		return e.__proto__ || Object.getPrototypeOf(e)
	})(e)
}

function _setPrototypeOf(e, t) {
	return (_setPrototypeOf = Object.setPrototypeOf || function (e, t) {
		return e.__proto__ = t, e
	})(e, t)
}

function _isNativeReflectConstruct() {
	if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
	if (Reflect.construct.sham) return !1;
	if ("function" == typeof Proxy) return !0;
	try {
		return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
		}))), !0
	} catch (e) {
		return !1
	}
}

function _construct(e, t, i) {
	return (_construct = _isNativeReflectConstruct() ? Reflect.construct : function (e, t, i) {
		var s = [null];
		s.push.apply(s, t);
		var a = new (Function.bind.apply(e, s));
		return i && _setPrototypeOf(a, i.prototype), a
	}).apply(null, arguments)
}

function _isNativeFunction(e) {
	return -1 !== Function.toString.call(e).indexOf("[native code]")
}

function _wrapNativeSuper(e) {
	var t = "function" == typeof Map ? new Map : void 0;
	return (_wrapNativeSuper = function (e) {
		if (null === e || !_isNativeFunction(e)) return e;
		if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
		if (void 0 !== t) {
			if (t.has(e)) return t.get(e);
			t.set(e, i)
		}

		function i() {
			return _construct(e, arguments, _getPrototypeOf(this).constructor)
		}

		return i.prototype = Object.create(e.prototype, {
			constructor: {
				value: i,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), _setPrototypeOf(i, e)
	})(e)
}

function _assertThisInitialized(e) {
	if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e
}

function makeReactive(e) {
	var t = e.__proto__;
	Object.defineProperty(e, "__proto__", {
		get: function () {
			return t
		}, set: function (e) {
			t.__proto__ = e
		}
	})
}

var Dom7 = function (e) {
	function t(t) {
		var i;
		return makeReactive(_assertThisInitialized(i = e.call.apply(e, [this].concat(t)) || this)), i
	}

	return _inheritsLoose(t, e), t
}(_wrapNativeSuper(Array));

function arrayFlat(e) {
	void 0 === e && (e = []);
	var t = [];
	return e.forEach((function (e) {
		Array.isArray(e) ? t.push.apply(t, arrayFlat(e)) : t.push(e)
	})), t
}

function arrayFilter(e, t) {
	return Array.prototype.filter.call(e, t)
}

function arrayUnique(e) {
	for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
	return t
}

function qsa(e, t) {
	if ("string" != typeof e) return [e];
	for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) i.push(s[a]);
	return i
}

function $(e, t) {
	var i = getWindow(), s = getDocument(), a = [];
	if (!t && e instanceof Dom7) return e;
	if (!e) return new Dom7(a);
	if ("string" == typeof e) {
		var r = e.trim();
		if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
			var n = "div";
			0 === r.indexOf("<li") && (n = "ul"), 0 === r.indexOf("<tr") && (n = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (n = "tr"), 0 === r.indexOf("<tbody") && (n = "table"), 0 === r.indexOf("<option") && (n = "select");
			var o = s.createElement(n);
			o.innerHTML = r;
			for (var l = 0; l < o.childNodes.length; l += 1) a.push(o.childNodes[l])
		} else a = qsa(e.trim(), t || s)
	} else if (e.nodeType || e === i || e === s) a.push(e); else if (Array.isArray(e)) {
		if (e instanceof Dom7) return e;
		a = e
	}
	return new Dom7(arrayUnique(a))
}

function addClass() {
	for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
	var s = arrayFlat(t.map((function (e) {
		return e.split(" ")
	})));
	return this.forEach((function (e) {
		var t;
		(t = e.classList).add.apply(t, s)
	})), this
}

function removeClass() {
	for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
	var s = arrayFlat(t.map((function (e) {
		return e.split(" ")
	})));
	return this.forEach((function (e) {
		var t;
		(t = e.classList).remove.apply(t, s)
	})), this
}

function toggleClass() {
	for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
	var s = arrayFlat(t.map((function (e) {
		return e.split(" ")
	})));
	this.forEach((function (e) {
		s.forEach((function (t) {
			e.classList.toggle(t)
		}))
	}))
}

function hasClass() {
	for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
	var s = arrayFlat(t.map((function (e) {
		return e.split(" ")
	})));
	return arrayFilter(this, (function (e) {
		return s.filter((function (t) {
			return e.classList.contains(t)
		})).length > 0
	})).length > 0
}

function attr(e, t) {
	if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
	for (var i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(e, t); else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
	return this
}

function removeAttr(e) {
	for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
	return this
}

function transform(e) {
	for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
	return this
}

function transition(e) {
	for (var t = 0; t < this.length; t += 1) this[t].style.transition = "string" != typeof e ? e + "ms" : e;
	return this
}

function on() {
	for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
	var s = t[0], a = t[1], r = t[2], n = t[3];

	function o(e) {
		var t = e.target;
		if (t) {
			var i = e.target.dom7EventData || [];
			if (i.indexOf(e) < 0 && i.unshift(e), $(t).is(a)) r.apply(t, i); else for (var s = $(t).parents(), n = 0; n < s.length; n += 1) $(s[n]).is(a) && r.apply(s[n], i)
		}
	}

	function l(e) {
		var t = e && e.target && e.target.dom7EventData || [];
		t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
	}

	"function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
	for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
		var u = this[p];
		if (a) for (d = 0; d < h.length; d += 1) {
			var c = h[d];
			u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
				listener: r,
				proxyListener: o
			}), u.addEventListener(c, o, n)
		} else for (d = 0; d < h.length; d += 1) {
			var v = h[d];
			u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
				listener: r,
				proxyListener: l
			}), u.addEventListener(v, l, n)
		}
	}
	return this
}

function off() {
	for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
	var s = t[0], a = t[1], r = t[2], n = t[3];
	"function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
	for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], h = 0; h < this.length; h += 1) {
		var p = this[h], u = void 0;
		if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length) for (var c = u.length - 1; c >= 0; c -= 1) {
			var v = u[c];
			r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1))
		}
	}
	return this
}

function trigger() {
	for (var e = getWindow(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
	for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) for (var o = a[n], l = 0; l < this.length; l += 1) {
		var d = this[l];
		if (e.CustomEvent) {
			var h = new e.CustomEvent(o, {detail: r, bubbles: !0, cancelable: !0});
			d.dom7EventData = i.filter((function (e, t) {
				return t > 0
			})), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
		}
	}
	return this
}

function transitionEnd(e) {
	var t = this;
	return e && t.on("transitionend", (function i(s) {
		s.target === this && (e.call(this, s), t.off("transitionend", i))
	})), this
}

function outerWidth(e) {
	if (this.length > 0) {
		if (e) {
			var t = this.styles();
			return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
		}
		return this[0].offsetWidth
	}
	return null
}

function outerHeight(e) {
	if (this.length > 0) {
		if (e) {
			var t = this.styles();
			return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
		}
		return this[0].offsetHeight
	}
	return null
}

function offset() {
	if (this.length > 0) {
		var e = getWindow(), t = getDocument(), i = this[0], s = i.getBoundingClientRect(), a = t.body,
			r = i.clientTop || a.clientTop || 0, n = i.clientLeft || a.clientLeft || 0,
			o = i === e ? e.scrollY : i.scrollTop, l = i === e ? e.scrollX : i.scrollLeft;
		return {top: s.top + o - r, left: s.left + l - n}
	}
	return null
}

function styles() {
	var e = getWindow();
	return this[0] ? e.getComputedStyle(this[0], null) : {}
}

function css(e, t) {
	var i, s = getWindow();
	if (1 === arguments.length) {
		if ("string" != typeof e) {
			for (i = 0; i < this.length; i += 1) for (var a in e) this[i].style[a] = e[a];
			return this
		}
		if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
	}
	if (2 === arguments.length && "string" == typeof e) {
		for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
		return this
	}
	return this
}

function each(e) {
	return e ? (this.forEach((function (t, i) {
		e.apply(t, [t, i])
	})), this) : this
}

function filter(e) {
	return $(arrayFilter(this, e))
}

function html(e) {
	if (void 0 === e) return this[0] ? this[0].innerHTML : null;
	for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
	return this
}

function text(e) {
	if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
	for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
	return this
}

function is(e) {
	var t, i, s = getWindow(), a = getDocument(), r = this[0];
	if (!r || void 0 === e) return !1;
	if ("string" == typeof e) {
		if (r.matches) return r.matches(e);
		if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
		if (r.msMatchesSelector) return r.msMatchesSelector(e);
		for (t = $(e), i = 0; i < t.length; i += 1) if (t[i] === r) return !0;
		return !1
	}
	if (e === a) return r === a;
	if (e === s) return r === s;
	if (e.nodeType || e instanceof Dom7) {
		for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === r) return !0;
		return !1
	}
	return !1
}

function index() {
	var e, t = this[0];
	if (t) {
		for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
		return e
	}
}

function eq(e) {
	if (void 0 === e) return this;
	var t = this.length;
	if (e > t - 1) return $([]);
	if (e < 0) {
		var i = t + e;
		return $(i < 0 ? [] : [this[i]])
	}
	return $([this[e]])
}

function append() {
	for (var e, t = getDocument(), i = 0; i < arguments.length; i += 1) {
		e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
		for (var s = 0; s < this.length; s += 1) if ("string" == typeof e) {
			var a = t.createElement("div");
			for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
		} else if (e instanceof Dom7) for (var r = 0; r < e.length; r += 1) this[s].appendChild(e[r]); else this[s].appendChild(e)
	}
	return this
}

function prepend(e) {
	var t, i, s = getDocument();
	for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
		var a = s.createElement("div");
		for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0])
	} else if (e instanceof Dom7) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
	return this
}

function next(e) {
	return this.length > 0 ? e ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(e) ? $([this[0].nextElementSibling]) : $([]) : this[0].nextElementSibling ? $([this[0].nextElementSibling]) : $([]) : $([])
}

function nextAll(e) {
	var t = [], i = this[0];
	if (!i) return $([]);
	for (; i.nextElementSibling;) {
		var s = i.nextElementSibling;
		e ? $(s).is(e) && t.push(s) : t.push(s), i = s
	}
	return $(t)
}

function prev(e) {
	if (this.length > 0) {
		var t = this[0];
		return e ? t.previousElementSibling && $(t.previousElementSibling).is(e) ? $([t.previousElementSibling]) : $([]) : t.previousElementSibling ? $([t.previousElementSibling]) : $([])
	}
	return $([])
}

function prevAll(e) {
	var t = [], i = this[0];
	if (!i) return $([]);
	for (; i.previousElementSibling;) {
		var s = i.previousElementSibling;
		e ? $(s).is(e) && t.push(s) : t.push(s), i = s
	}
	return $(t)
}

function parent(e) {
	for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? $(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
	return $(t)
}

function parents(e) {
	for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s;) e ? $(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
	return $(t)
}

function closest(e) {
	var t = this;
	return void 0 === e ? $([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
}

function find(e) {
	for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);
	return $(t)
}

function children(e) {
	for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].children, a = 0; a < s.length; a += 1) e && !$(s[a]).is(e) || t.push(s[a]);
	return $(t)
}

function remove() {
	for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
	return this
}

$.fn = Dom7.prototype;
var support, device, browser, Methods = {
	addClass: addClass,
	removeClass: removeClass,
	hasClass: hasClass,
	toggleClass: toggleClass,
	attr: attr,
	removeAttr: removeAttr,
	transform: transform,
	transition: transition,
	on: on,
	off: off,
	trigger: trigger,
	transitionEnd: transitionEnd,
	outerWidth: outerWidth,
	outerHeight: outerHeight,
	styles: styles,
	offset: offset,
	css: css,
	each: each,
	html: html,
	text: text,
	is: is,
	index: index,
	eq: eq,
	append: append,
	prepend: prepend,
	next: next,
	nextAll: nextAll,
	prev: prev,
	prevAll: prevAll,
	parent: parent,
	parents: parents,
	closest: closest,
	find: find,
	children: children,
	filter: filter,
	remove: remove
};

function deleteProps(e) {
	var t = e;
	Object.keys(t).forEach((function (e) {
		try {
			t[e] = null
		} catch (e) {
		}
		try {
			delete t[e]
		} catch (e) {
		}
	}))
}

function nextTick(e, t) {
	return void 0 === t && (t = 0), setTimeout(e, t)
}

function now() {
	return Date.now()
}

function getTranslate(e, t) {
	void 0 === t && (t = "x");
	var i, s, a, r = getWindow(), n = r.getComputedStyle(e, null);
	return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map((function (e) {
		return e.replace(",", ".")
	})).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
}

function isObject$1(e) {
	return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
}

function extend$1() {
	for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
		var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
		if (null != i) for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
			var n = s[a], o = Object.getOwnPropertyDescriptor(i, n);
			void 0 !== o && o.enumerable && (isObject$1(e[n]) && isObject$1(i[n]) ? extend$1(e[n], i[n]) : !isObject$1(e[n]) && isObject$1(i[n]) ? (e[n] = {}, extend$1(e[n], i[n])) : e[n] = i[n])
		}
	}
	return e
}

function bindModuleMethods(e, t) {
	Object.keys(t).forEach((function (i) {
		isObject$1(t[i]) && Object.keys(t[i]).forEach((function (s) {
			"function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e))
		})), e[i] = t[i]
	}))
}

function calcSupport() {
	var e = getWindow(), t = getDocument();
	return {
		touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
		pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
		observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
		passiveListener: function () {
			var t = !1;
			try {
				var i = Object.defineProperty({}, "passive", {
					get: function () {
						t = !0
					}
				});
				e.addEventListener("testPassiveListener", null, i)
			} catch (e) {
			}
			return t
		}(),
		gestures: "ongesturestart" in e
	}
}

function getSupport() {
	return support || (support = calcSupport()), support
}

function calcDevice(e) {
	var t = (void 0 === e ? {} : e).userAgent, i = getSupport(), s = getWindow(), a = s.navigator.platform,
		r = t || s.navigator.userAgent, n = {ios: !1, android: !1}, o = s.screen.width, l = s.screen.height,
		d = r.match(/(Android);?[\s\/]+([\d.]+)?/), h = r.match(/(iPad).*OS\s([\d_]+)/),
		p = r.match(/(iPod)(.*OS\s([\d_]+))?/), u = !h && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), c = "Win32" === a,
		v = "MacIntel" === a;
	return !h && v && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768"].indexOf(o + "x" + l) >= 0 && ((h = r.match(/(Version)\/([\d.]+)/)) || (h = [0, 1, "13_0_0"]), v = !1), d && !c && (n.os = "android", n.android = !0), (h || u || p) && (n.os = "ios", n.ios = !0), n
}

function getDevice(e) {
	return void 0 === e && (e = {}), device || (device = calcDevice(e)), device
}

function calcBrowser() {
	var e, t = getWindow();
	return {
		isEdge: !!t.navigator.userAgent.match(/Edge/g),
		isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
		isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
	}
}

function getBrowser() {
	return browser || (browser = calcBrowser()), browser
}

Object.keys(Methods).forEach((function (e) {
	$.fn[e] = Methods[e]
}));
var modular = {
	useParams: function (e) {
		var t = this;
		t.modules && Object.keys(t.modules).forEach((function (i) {
			var s = t.modules[i];
			s.params && extend$1(e, s.params)
		}))
	}, useModules: function (e) {
		void 0 === e && (e = {});
		var t = this;
		t.modules && Object.keys(t.modules).forEach((function (i) {
			var s = t.modules[i], a = e[i] || {};
			s.on && t.on && Object.keys(s.on).forEach((function (e) {
				t.on(e, s.on[e])
			})), s.create && s.create.bind(t)(a)
		}))
	}
}, eventsEmitter = {
	on: function (e, t, i) {
		var s = this;
		if ("function" != typeof t) return s;
		var a = i ? "unshift" : "push";
		return e.split(" ").forEach((function (e) {
			s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
		})), s
	}, once: function (e, t, i) {
		var s = this;
		if ("function" != typeof t) return s;

		function a() {
			s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
			for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
			t.apply(s, r)
		}

		return a.__emitterProxy = t, s.on(e, a, i)
	}, onAny: function (e, t) {
		if ("function" != typeof e) return this;
		var i = t ? "unshift" : "push";
		return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this
	}, offAny: function (e) {
		if (!this.eventsAnyListeners) return this;
		var t = this.eventsAnyListeners.indexOf(e);
		return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
	}, off: function (e, t) {
		var i = this;
		return i.eventsListeners ? (e.split(" ").forEach((function (e) {
			void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((function (s, a) {
				(s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1)
			}))
		})), i) : i
	}, emit: function () {
		var e, t, i, s = this;
		if (!s.eventsListeners) return s;
		for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
		"string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i);
		var o = Array.isArray(e) ? e : e.split(" ");
		return o.forEach((function (e) {
			if (s.eventsListeners && s.eventsListeners[e]) {
				var a = [];
				s.eventsListeners[e].forEach((function (e) {
					a.push(e)
				})), a.forEach((function (e) {
					e.apply(i, t)
				}))
			}
		})), s
	}
};

function updateSize() {
	var e, t, i = this.$el;
	e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), extend$1(this, {
		width: e,
		height: t,
		size: this.isHorizontal() ? e : t
	}))
}

function updateSlides() {
	var e = getWindow(), t = this.params, i = this.$wrapperEl, s = this.size, a = this.rtlTranslate, r = this.wrongRTL,
		n = this.virtual && t.virtual.enabled, o = n ? this.virtual.slides.length : this.slides.length,
		l = i.children("." + this.params.slideClass), d = n ? this.virtual.slides.length : l.length, h = [], p = [],
		u = [];

	function c(e, i) {
		return !t.cssMode || i !== l.length - 1
	}

	var v = t.slidesOffsetBefore;
	"function" == typeof v && (v = t.slidesOffsetBefore.call(this));
	var f = t.slidesOffsetAfter;
	"function" == typeof f && (f = t.slidesOffsetAfter.call(this));
	var m = this.snapGrid.length, g = this.snapGrid.length, w = t.spaceBetween, b = -v, y = 0, x = 0;
	if (void 0 !== s) {
		var E, T;
		"string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? l.css({
			marginLeft: "",
			marginTop: ""
		}) : l.css({
			marginRight: "",
			marginBottom: ""
		}), t.slidesPerColumn > 1 && (E = Math.floor(d / t.slidesPerColumn) === d / this.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (E = Math.max(E, t.slidesPerView * t.slidesPerColumn)));
		for (var C, S = t.slidesPerColumn, M = E / S, $ = Math.floor(d / t.slidesPerColumn), P = 0; P < d; P += 1) {
			T = 0;
			var z = l.eq(P);
			if (t.slidesPerColumn > 1) {
				var k = void 0, L = void 0, I = void 0;
				if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
					var O = Math.floor(P / (t.slidesPerGroup * t.slidesPerColumn)),
						D = P - t.slidesPerColumn * t.slidesPerGroup * O,
						A = 0 === O ? t.slidesPerGroup : Math.min(Math.ceil((d - O * S * t.slidesPerGroup) / S), t.slidesPerGroup);
					k = (L = D - (I = Math.floor(D / A)) * A + O * t.slidesPerGroup) + I * E / S, z.css({
						"-webkit-box-ordinal-group": k,
						"-moz-box-ordinal-group": k,
						"-ms-flex-order": k,
						"-webkit-order": k,
						order: k
					})
				} else "column" === t.slidesPerColumnFill ? (I = P - (L = Math.floor(P / S)) * S, (L > $ || L === $ && I === S - 1) && (I += 1) >= S && (I = 0, L += 1)) : L = P - (I = Math.floor(P / M)) * M;
				z.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px")
			}
			if ("none" !== z.css("display")) {
				if ("auto" === t.slidesPerView) {
					var N = e.getComputedStyle(z[0], null), G = z[0].style.transform, H = z[0].style.webkitTransform;
					if (G && (z[0].style.transform = "none"), H && (z[0].style.webkitTransform = "none"), t.roundLengths) T = this.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0); else if (this.isHorizontal()) {
						var B = parseFloat(N.getPropertyValue("width") || 0),
							W = parseFloat(N.getPropertyValue("padding-left") || 0),
							F = parseFloat(N.getPropertyValue("padding-right") || 0),
							X = parseFloat(N.getPropertyValue("margin-left") || 0),
							_ = parseFloat(N.getPropertyValue("margin-right") || 0),
							Y = N.getPropertyValue("box-sizing");
						T = Y && "border-box" === Y ? B + X + _ : B + W + F + X + _
					} else {
						var V = parseFloat(N.getPropertyValue("height") || 0),
							R = parseFloat(N.getPropertyValue("padding-top") || 0),
							q = parseFloat(N.getPropertyValue("padding-bottom") || 0),
							j = parseFloat(N.getPropertyValue("margin-top") || 0),
							K = parseFloat(N.getPropertyValue("margin-bottom") || 0),
							U = N.getPropertyValue("box-sizing");
						T = U && "border-box" === U ? V + j + K : V + R + q + j + K
					}
					G && (z[0].style.transform = G), H && (z[0].style.webkitTransform = H), t.roundLengths && (T = Math.floor(T))
				} else T = (s - (t.slidesPerView - 1) * w) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[P] && (this.isHorizontal() ? l[P].style.width = T + "px" : l[P].style.height = T + "px");
				l[P] && (l[P].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + y / 2 + w, 0 === y && 0 !== P && (b = b - s / 2 - w), 0 === P && (b = b - s / 2 - w), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), x % t.slidesPerGroup == 0 && h.push(b), p.push(b)) : (t.roundLengths && (b = Math.floor(b)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && h.push(b), p.push(b), b = b + T + w), this.virtualSize += T + w, y = T, x += 1
			}
		}
		if (this.virtualSize = Math.max(this.virtualSize, s) + f, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({width: this.virtualSize + t.spaceBetween + "px"}), t.setWrapperSize && (this.isHorizontal() ? i.css({width: this.virtualSize + t.spaceBetween + "px"}) : i.css({height: this.virtualSize + t.spaceBetween + "px"})), t.slidesPerColumn > 1 && (this.virtualSize = (T + t.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({width: this.virtualSize + t.spaceBetween + "px"}) : i.css({height: this.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
			C = [];
			for (var Z = 0; Z < h.length; Z += 1) {
				var J = h[Z];
				t.roundLengths && (J = Math.floor(J)), h[Z] < this.virtualSize + h[0] && C.push(J)
			}
			h = C
		}
		if (!t.centeredSlides) {
			C = [];
			for (var Q = 0; Q < h.length; Q += 1) {
				var ee = h[Q];
				t.roundLengths && (ee = Math.floor(ee)), h[Q] <= this.virtualSize - s && C.push(ee)
			}
			h = C, Math.floor(this.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 && h.push(this.virtualSize - s)
		}
		if (0 === h.length && (h = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? a ? l.filter(c).css({marginLeft: w + "px"}) : l.filter(c).css({marginRight: w + "px"}) : l.filter(c).css({marginBottom: w + "px"})), t.centeredSlides && t.centeredSlidesBounds) {
			var te = 0;
			u.forEach((function (e) {
				te += e + (t.spaceBetween ? t.spaceBetween : 0)
			}));
			var ie = (te -= t.spaceBetween) - s;
			h = h.map((function (e) {
				return e < 0 ? -v : e > ie ? ie + f : e
			}))
		}
		if (t.centerInsufficientSlides) {
			var se = 0;
			if (u.forEach((function (e) {
				se += e + (t.spaceBetween ? t.spaceBetween : 0)
			})), (se -= t.spaceBetween) < s) {
				var ae = (s - se) / 2;
				h.forEach((function (e, t) {
					h[t] = e - ae
				})), p.forEach((function (e, t) {
					p[t] = e + ae
				}))
			}
		}
		extend$1(this, {
			slides: l,
			snapGrid: h,
			slidesGrid: p,
			slidesSizesGrid: u
		}), d !== o && this.emit("slidesLengthChange"), h.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== g && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
	}
}

function updateAutoHeight(e) {
	var t, i = [], s = 0;
	if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) if (this.params.centeredSlides) this.visibleSlides.each((function (e) {
		i.push(e)
	})); else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
		var a = this.activeIndex + t;
		if (a > this.slides.length) break;
		i.push(this.slides.eq(a)[0])
	} else i.push(this.slides.eq(this.activeIndex)[0]);
	for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
		var r = i[t].offsetHeight;
		s = r > s ? r : s
	}
	s && this.$wrapperEl.css("height", s + "px")
}

function updateSlidesOffset() {
	for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
}

function updateSlidesProgress(e) {
	void 0 === e && (e = this && this.translate || 0);
	var t = this.params, i = this.slides, s = this.rtlTranslate;
	if (0 !== i.length) {
		void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
		var a = -e;
		s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
		for (var r = 0; r < i.length; r += 1) {
			var n = i[r],
				o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
			if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
				var l = -(a - n.swiperSlideOffset), d = l + this.slidesSizesGrid[r];
				(l >= 0 && l < this.size - 1 || d > 1 && d <= this.size || l <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass))
			}
			n.progress = s ? -o : o
		}
		this.visibleSlides = $(this.visibleSlides)
	}
}

function updateProgress(e) {
	if (void 0 === e) {
		var t = this.rtlTranslate ? -1 : 1;
		e = this && this.translate && this.translate * t || 0
	}
	var i = this.params, s = this.maxTranslate() - this.minTranslate(), a = this.progress, r = this.isBeginning,
		n = this.isEnd, o = r, l = n;
	0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), extend$1(this, {
		progress: a,
		isBeginning: r,
		isEnd: n
	}), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !o && this.emit("reachBeginning toEdge"), n && !l && this.emit("reachEnd toEdge"), (o && !r || l && !n) && this.emit("fromEdge"), this.emit("progress", a)
}

function updateSlidesClasses() {
	var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex,
		n = this.virtual && i.virtual.enabled;
	t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
	var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
	i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
	var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
	i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses()
}

function updateActiveIndex(e) {
	var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid,
		r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, d = e;
	if (void 0 === d) {
		for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
		r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
	}
	if (a.indexOf(i) >= 0) t = a.indexOf(i); else {
		var p = Math.min(r.slidesPerGroupSkip, d);
		t = p + Math.floor((d - p) / r.slidesPerGroup)
	}
	if (t >= a.length && (t = a.length - 1), d !== n) {
		var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
		extend$1(this, {
			snapIndex: t,
			realIndex: u,
			previousIndex: n,
			activeIndex: d
		}), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
	} else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
}

function updateClickedSlide(e) {
	var t = this.params, i = $(e.target).closest("." + t.slideClass)[0], s = !1;
	if (i) for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
	if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
	this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt($(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = $(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
}

var update = {
	updateSize: updateSize,
	updateSlides: updateSlides,
	updateAutoHeight: updateAutoHeight,
	updateSlidesOffset: updateSlidesOffset,
	updateSlidesProgress: updateSlidesProgress,
	updateProgress: updateProgress,
	updateSlidesClasses: updateSlidesClasses,
	updateActiveIndex: updateActiveIndex,
	updateClickedSlide: updateClickedSlide
};

function getSwiperTranslate(e) {
	void 0 === e && (e = this.isHorizontal() ? "x" : "y");
	var t = this.params, i = this.rtlTranslate, s = this.translate, a = this.$wrapperEl;
	if (t.virtualTranslate) return i ? -s : s;
	if (t.cssMode) return s;
	var r = getTranslate(a[0], e);
	return i && (r = -r), r || 0
}

function setTranslate(e, t) {
	var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.wrapperEl, n = this.progress, o = 0,
		l = 0;
	this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
	var d = this.maxTranslate() - this.minTranslate();
	(0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
}

function minTranslate() {
	return -this.snapGrid[0]
}

function maxTranslate() {
	return -this.snapGrid[this.snapGrid.length - 1]
}

function translateTo(e, t, i, s, a) {
	void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
	var r = this, n = r.params, o = r.wrapperEl;
	if (r.animating && n.preventInteractionOnTransition) return !1;
	var l, d = r.minTranslate(), h = r.maxTranslate();
	if (l = s && e > d ? d : s && e < h ? h : e, r.updateProgress(l), n.cssMode) {
		var p, u = r.isHorizontal();
		if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -l; else if (o.scrollTo) o.scrollTo(((p = {})[u ? "left" : "top"] = -l, p.behavior = "smooth", p)); else o[u ? "scrollLeft" : "scrollTop"] = -l;
		return !0
	}
	return 0 === t ? (r.setTransition(0), r.setTranslate(l), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(l), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
		r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
	}), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
}

var translate = {
	getTranslate: getSwiperTranslate,
	setTranslate: setTranslate,
	minTranslate: minTranslate,
	maxTranslate: maxTranslate,
	translateTo: translateTo
};

function setTransition(e, t) {
	this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
}

function transitionStart(e, t) {
	void 0 === e && (e = !0);
	var i = this.activeIndex, s = this.params, a = this.previousIndex;
	if (!s.cssMode) {
		s.autoHeight && this.updateAutoHeight();
		var r = t;
		if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
			if ("reset" === r) return void this.emit("slideResetTransitionStart");
			this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
		}
	}
}

function transitionEnd$1(e, t) {
	void 0 === e && (e = !0);
	var i = this.activeIndex, s = this.previousIndex, a = this.params;
	if (this.animating = !1, !a.cssMode) {
		this.setTransition(0);
		var r = t;
		if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
			if ("reset" === r) return void this.emit("slideResetTransitionEnd");
			this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
		}
	}
}

var transition$1 = {setTransition: setTransition, transitionStart: transitionStart, transitionEnd: transitionEnd$1};

function slideTo(e, t, i, s) {
	void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
	var a = this, r = e;
	r < 0 && (r = 0);
	var n = a.params, o = a.snapGrid, l = a.slidesGrid, d = a.previousIndex, h = a.activeIndex, p = a.rtlTranslate,
		u = a.wrapperEl;
	if (a.animating && n.preventInteractionOnTransition) return !1;
	var c = Math.min(a.params.slidesPerGroupSkip, r), v = c + Math.floor((r - c) / a.params.slidesPerGroup);
	v >= o.length && (v = o.length - 1), (h || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
	var f, m = -o[v];
	if (a.updateProgress(m), n.normalizeSlideIndex) for (var g = 0; g < l.length; g += 1) -Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);
	if (a.initialized && r !== h) {
		if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
		if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (h || 0) !== r) return !1
	}
	if (f = r > h ? "next" : r < h ? "prev" : "reset", p && -m === a.translate || !p && m === a.translate) return a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1;
	if (n.cssMode) {
		var w, b = a.isHorizontal(), y = -m;
		if (p && (y = u.scrollWidth - u.offsetWidth - y), 0 === t) u[b ? "scrollLeft" : "scrollTop"] = y; else if (u.scrollTo) u.scrollTo(((w = {})[b ? "left" : "top"] = y, w.behavior = "smooth", w)); else u[b ? "scrollLeft" : "scrollTop"] = y;
		return !0
	}
	return 0 === t ? (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)) : (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
		a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, f))
	}), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0
}

function slideToLoop(e, t, i, s) {
	void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
	var a = e;
	return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
}

function slideNext(e, t, i) {
	void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
	var s = this.params, a = this.animating, r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
	if (s.loop) {
		if (a && s.loopPreventsSlide) return !1;
		this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
	}
	return this.slideTo(this.activeIndex + r, e, t, i)
}

function slidePrev(e, t, i) {
	void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
	var s = this.params, a = this.animating, r = this.snapGrid, n = this.slidesGrid, o = this.rtlTranslate;
	if (s.loop) {
		if (a && s.loopPreventsSlide) return !1;
		this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
	}

	function l(e) {
		return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
	}

	var d, h = l(o ? this.translate : -this.translate), p = r.map((function (e) {
		return l(e)
	})), u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
	return void 0 === u && s.cssMode && r.forEach((function (e) {
		!u && h >= e && (u = e)
	})), void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
}

function slideReset(e, t, i) {
	void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
	return this.slideTo(this.activeIndex, e, t, i)
}

function slideToClosest(e, t, i, s) {
	void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
	var a = this.activeIndex, r = Math.min(this.params.slidesPerGroupSkip, a),
		n = r + Math.floor((a - r) / this.params.slidesPerGroup),
		o = this.rtlTranslate ? this.translate : -this.translate;
	if (o >= this.snapGrid[n]) {
		var l = this.snapGrid[n];
		o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
	} else {
		var d = this.snapGrid[n - 1];
		o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
	}
	return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
}

function slideToClickedSlide() {
	var e, t = this, i = t.params, s = t.$wrapperEl,
		a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, r = t.clickedIndex;
	if (i.loop) {
		if (t.animating) return;
		e = parseInt($(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), nextTick((function () {
			t.slideTo(r)
		}))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), nextTick((function () {
			t.slideTo(r)
		}))) : t.slideTo(r)
	} else t.slideTo(r)
}

var slide = {
	slideTo: slideTo,
	slideToLoop: slideToLoop,
	slideNext: slideNext,
	slidePrev: slidePrev,
	slideReset: slideReset,
	slideToClosest: slideToClosest,
	slideToClickedSlide: slideToClickedSlide
};

function loopCreate() {
	var e = this, t = getDocument(), i = e.params, s = e.$wrapperEl;
	s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
	var a = s.children("." + i.slideClass);
	if (i.loopFillGroupWithBlank) {
		var r = i.slidesPerGroup - a.length % i.slidesPerGroup;
		if (r !== i.slidesPerGroup) {
			for (var n = 0; n < r; n += 1) {
				var o = $(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
				s.append(o)
			}
			a = s.children("." + i.slideClass)
		}
	}
	"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
	var l = [], d = [];
	a.each((function (t, i) {
		var s = $(t);
		i < e.loopedSlides && d.push(t), i < a.length && i >= a.length - e.loopedSlides && l.push(t), s.attr("data-swiper-slide-index", i)
	}));
	for (var h = 0; h < d.length; h += 1) s.append($(d[h].cloneNode(!0)).addClass(i.slideDuplicateClass));
	for (var p = l.length - 1; p >= 0; p -= 1) s.prepend($(l[p].cloneNode(!0)).addClass(i.slideDuplicateClass))
}

function loopFix() {
	this.emit("beforeLoopFix");
	var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev,
		r = this.allowSlideNext, n = this.snapGrid, o = this.rtlTranslate;
	this.allowSlidePrev = !0, this.allowSlideNext = !0;
	var l = -n[t] - this.getTranslate();
	if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l); else if (t >= i.length - s) {
		e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
	}
	this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
}

function loopDestroy() {
	var e = this.$wrapperEl, t = this.params, i = this.slides;
	e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
}

var loop = {loopCreate: loopCreate, loopFix: loopFix, loopDestroy: loopDestroy};

function setGrabCursor(e) {
	if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
		var t = this.el;
		t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
	}
}

function unsetGrabCursor() {
	this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
}

var grabCursor = {setGrabCursor: setGrabCursor, unsetGrabCursor: unsetGrabCursor};

function appendSlide(e) {
	var t = this.$wrapperEl, i = this.params;
	if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]); else t.append(e);
	i.loop && this.loopCreate(), i.observer && this.support.observer || this.update()
}

function prependSlide(e) {
	var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
	t.loop && this.loopDestroy();
	var a = s + 1;
	if ("object" == typeof e && "length" in e) {
		for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
		a = s + e.length
	} else i.prepend(e);
	t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1)
}

function addSlide(e, t) {
	var i = this.$wrapperEl, s = this.params, a = this.activeIndex;
	s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
	var r = this.slides.length;
	if (e <= 0) this.prependSlide(t); else if (e >= r) this.appendSlide(t); else {
		for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
			var d = this.slides.eq(l);
			d.remove(), o.unshift(d)
		}
		if ("object" == typeof t && "length" in t) {
			for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
			n = a > e ? a + t.length : a
		} else i.append(t);
		for (var p = 0; p < o.length; p += 1) i.append(o[p]);
		s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
	}
}

function removeSlide(e) {
	var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
	t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
	var a, r = s;
	if ("object" == typeof e && "length" in e) {
		for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
		r = Math.max(r, 0)
	} else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
	t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
}

function removeAllSlides() {
	for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
	this.removeSlide(e)
}

var manipulation = {
	appendSlide: appendSlide,
	prependSlide: prependSlide,
	addSlide: addSlide,
	removeSlide: removeSlide,
	removeAllSlides: removeAllSlides
};

function onTouchStart(e) {
	var t = getDocument(), i = getWindow(), s = this.touchEventsData, a = this.params, r = this.touches;
	if (!this.animating || !a.preventInteractionOnTransition) {
		var n = e;
		n.originalEvent && (n = n.originalEvent);
		var o = $(n.target);
		if (("wrapper" !== a.touchEventsTarget || o.closest(this.wrapperEl).length) && (s.isTouchEvent = "touchstart" === n.type, (s.isTouchEvent || !("which" in n) || 3 !== n.which) && !(!s.isTouchEvent && "button" in n && n.button > 0 || s.isTouched && s.isMoved))) if (a.noSwiping && o.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0; else if (!a.swipeHandler || o.closest(a.swipeHandler)[0]) {
			r.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX, r.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY;
			var l = r.currentX, d = r.currentY, h = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
				p = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
			if (!h || !(l <= p || l >= i.screen.width - p)) {
				if (extend$1(s, {
					isTouched: !0,
					isMoved: !1,
					allowTouchCallbacks: !0,
					isScrolling: void 0,
					startMoving: void 0
				}), r.startX = l, r.startY = d, s.touchStartTime = now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== n.type) {
					var u = !0;
					o.is(s.formElements) && (u = !1), t.activeElement && $(t.activeElement).is(s.formElements) && t.activeElement !== o[0] && t.activeElement.blur();
					var c = u && this.allowTouchMove && a.touchStartPreventDefault;
					(a.touchStartForcePreventDefault || c) && n.preventDefault()
				}
				this.emit("touchStart", n)
			}
		}
	}
}

function onTouchMove(e) {
	var t = getDocument(), i = this.touchEventsData, s = this.params, a = this.touches, r = this.rtlTranslate, n = e;
	if (n.originalEvent && (n = n.originalEvent), i.isTouched) {
		if (!i.isTouchEvent || "touchmove" === n.type) {
			var o = "touchmove" === n.type && n.targetTouches && (n.targetTouches[0] || n.changedTouches[0]),
				l = "touchmove" === n.type ? o.pageX : n.pageX, d = "touchmove" === n.type ? o.pageY : n.pageY;
			if (n.preventedByNestedSwiper) return a.startX = l, void (a.startY = d);
			if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (extend$1(a, {
				startX: l,
				startY: d,
				currentX: l,
				currentY: d
			}), i.touchStartTime = now()));
			if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
				if (d < a.startY && this.translate <= this.maxTranslate() || d > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
			} else if (l < a.startX && this.translate <= this.maxTranslate() || l > a.startX && this.translate >= this.minTranslate()) return;
			if (i.isTouchEvent && t.activeElement && n.target === t.activeElement && $(n.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
			if (i.allowTouchCallbacks && this.emit("touchMove", n), !(n.targetTouches && n.targetTouches.length > 1)) {
				a.currentX = l, a.currentY = d;
				var h = a.currentX - a.startX, p = a.currentY - a.startY;
				if (!(this.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(p, 2)) < this.params.threshold)) {
					var u;
					if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : h * h + p * p >= 25 && (u = 180 * Math.atan2(Math.abs(p), Math.abs(h)) / Math.PI, i.isScrolling = this.isHorizontal() ? u > s.touchAngle : 90 - u > s.touchAngle);
					if (i.isScrolling && this.emit("touchMoveOpposite", n), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
						this.allowClick = !1, !s.cssMode && n.cancelable && n.preventDefault(), s.touchMoveStopPropagation && !s.nested && n.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", n)), this.emit("sliderMove", n), i.isMoved = !0;
						var c = this.isHorizontal() ? h : p;
						a.diff = c, c *= s.touchRatio, r && (c = -c), this.swipeDirection = c > 0 ? "prev" : "next", i.currentTranslate = c + i.startTranslate;
						var v = !0, f = s.resistanceRatio;
						if (s.touchReleaseOnEdges && (f = 0), c > 0 && i.currentTranslate > this.minTranslate() ? (v = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + c, f))) : c < 0 && i.currentTranslate < this.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - c, f))), v && (n.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
							if (!(Math.abs(c) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
							if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
						}
						s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
							position: a[this.isHorizontal() ? "startX" : "startY"],
							time: i.touchStartTime
						}), i.velocities.push({
							position: a[this.isHorizontal() ? "currentX" : "currentY"],
							time: now()
						})), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
					}
				}
			}
		}
	} else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", n)
}

function onTouchEnd(e) {
	var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, n = t.$wrapperEl,
		o = t.slidesGrid, l = t.snapGrid, d = e;
	if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
	s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
	var h, p = now(), u = p - i.touchStartTime;
	if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = now(), nextTick((function () {
		t.destroyed || (t.allowClick = !0)
	})), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
	if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
		if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
		if (h > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
		if (s.freeModeMomentum) {
			if (i.velocities.length > 1) {
				var c = i.velocities.pop(), v = i.velocities.pop(), f = c.position - v.position, m = c.time - v.time;
				t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || now() - c.time > 300) && (t.velocity = 0)
			} else t.velocity = 0;
			t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
			var g = 1e3 * s.freeModeMomentumRatio, w = t.velocity * g, b = t.translate + w;
			r && (b = -b);
			var y, x, E = !1, T = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
			if (b < t.maxTranslate()) s.freeModeMomentumBounce ? (b + t.maxTranslate() < -T && (b = t.maxTranslate() - T), y = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), s.loop && s.centeredSlides && (x = !0); else if (b > t.minTranslate()) s.freeModeMomentumBounce ? (b - t.minTranslate() > T && (b = t.minTranslate() + T), y = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), s.loop && s.centeredSlides && (x = !0); else if (s.freeModeSticky) {
				for (var C, S = 0; S < l.length; S += 1) if (l[S] > -b) {
					C = S;
					break
				}
				b = -(b = Math.abs(l[C] - b) < Math.abs(l[C - 1] - b) || "next" === t.swipeDirection ? l[C] : l[C - 1])
			}
			if (x && t.once("transitionEnd", (function () {
				t.loopFix()
			})), 0 !== t.velocity) {
				if (g = r ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), s.freeModeSticky) {
					var M = Math.abs((r ? -b : b) - t.translate), $ = t.slidesSizesGrid[t.activeIndex];
					g = M < $ ? s.speed : M < 2 * $ ? 1.5 * s.speed : 2.5 * s.speed
				}
			} else if (s.freeModeSticky) return void t.slideToClosest();
			s.freeModeMomentumBounce && E ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((function () {
				t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout((function () {
					t.setTranslate(y), n.transitionEnd((function () {
						t && !t.destroyed && t.transitionEnd()
					}))
				}), 0))
			}))) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((function () {
				t && !t.destroyed && t.transitionEnd()
			})))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
		} else if (s.freeModeSticky) return void t.slideToClosest();
		(!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
	} else {
		for (var P = 0, z = t.slidesSizesGrid[0], k = 0; k < o.length; k += k < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
			var L = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
			void 0 !== o[k + L] ? h >= o[k] && h < o[k + L] && (P = k, z = o[k + L] - o[k]) : h >= o[k] && (P = k, z = o[o.length - 1] - o[o.length - 2])
		}
		var I = (h - o[P]) / z, O = P < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
		if (u > s.longSwipesMs) {
			if (!s.longSwipes) return void t.slideTo(t.activeIndex);
			"next" === t.swipeDirection && (I >= s.longSwipesRatio ? t.slideTo(P + O) : t.slideTo(P)), "prev" === t.swipeDirection && (I > 1 - s.longSwipesRatio ? t.slideTo(P + O) : t.slideTo(P))
		} else {
			if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
			t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(P + O) : t.slideTo(P) : ("next" === t.swipeDirection && t.slideTo(P + O), "prev" === t.swipeDirection && t.slideTo(P))
		}
	}
}

function onResize() {
	var e = this.params, t = this.el;
	if (!t || 0 !== t.offsetWidth) {
		e.breakpoints && this.setBreakpoint();
		var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid;
		this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
	}
}

function onClick(e) {
	this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
}

function onScroll() {
	var e = this.wrapperEl, t = this.rtlTranslate;
	this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
	var i = this.maxTranslate() - this.minTranslate();
	(0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
}

var dummyEventAttached = !1;

function dummyEventListener() {
}

function attachEvents() {
	var e = getDocument(), t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl, r = this.device,
		n = this.support;
	this.onTouchStart = onTouchStart.bind(this), this.onTouchMove = onTouchMove.bind(this), this.onTouchEnd = onTouchEnd.bind(this), t.cssMode && (this.onScroll = onScroll.bind(this)), this.onClick = onClick.bind(this);
	var o = !!t.nested;
	if (!n.touch && n.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, o), e.addEventListener(i.end, this.onTouchEnd, !1); else {
		if (n.touch) {
			var l = !("touchstart" !== i.start || !n.passiveListener || !t.passiveListeners) && {
				passive: !0,
				capture: !1
			};
			s.addEventListener(i.start, this.onTouchStart, l), s.addEventListener(i.move, this.onTouchMove, n.passiveListener ? {
				passive: !1,
				capture: o
			} : o), s.addEventListener(i.end, this.onTouchEnd, l), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, l), dummyEventAttached || (e.addEventListener("touchstart", dummyEventListener), dummyEventAttached = !0)
		}
		(t.simulateTouch && !r.ios && !r.android || t.simulateTouch && !n.touch && r.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, o), e.addEventListener("mouseup", this.onTouchEnd, !1))
	}
	(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : this.on("observerUpdate", onResize, !0)
}

function detachEvents() {
	var e = getDocument(), t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl, r = this.device,
		n = this.support, o = !!t.nested;
	if (!n.touch && n.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1); else {
		if (n.touch) {
			var l = !("onTouchStart" !== i.start || !n.passiveListener || !t.passiveListeners) && {
				passive: !0,
				capture: !1
			};
			s.removeEventListener(i.start, this.onTouchStart, l), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, l), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, l)
		}
		(t.simulateTouch && !r.ios && !r.android || t.simulateTouch && !n.touch && r.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1))
	}
	(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize)
}

var events = {attachEvents: attachEvents, detachEvents: detachEvents};

function setBreakpoint() {
	var e = this.activeIndex, t = this.initialized, i = this.loopedSlides, s = void 0 === i ? 0 : i, a = this.params,
		r = this.$el, n = a.breakpoints;
	if (n && (!n || 0 !== Object.keys(n).length)) {
		var o = this.getBreakpoint(n);
		if (o && this.currentBreakpoint !== o) {
			var l = o in n ? n[o] : void 0;
			l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function (e) {
				var t = l[e];
				void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
			}));
			var d = l || this.originalParams, h = a.slidesPerColumn > 1, p = d.slidesPerColumn > 1;
			h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
			var u = d.direction && d.direction !== a.direction,
				c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
			u && t && this.changeDirection(), extend$1(this.params, d), extend$1(this, {
				allowTouchMove: this.params.allowTouchMove,
				allowSlideNext: this.params.allowSlideNext,
				allowSlidePrev: this.params.allowSlidePrev
			}), this.currentBreakpoint = o, c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d)
		}
	}
}

function getBreakpoints(e) {
	var t = getWindow();
	if (e) {
		var i = !1, s = Object.keys(e).map((function (e) {
			if ("string" == typeof e && 0 === e.indexOf("@")) {
				var i = parseFloat(e.substr(1));
				return {value: t.innerHeight * i, point: e}
			}
			return {value: e, point: e}
		}));
		s.sort((function (e, t) {
			return parseInt(e.value, 10) - parseInt(t.value, 10)
		}));
		for (var a = 0; a < s.length; a += 1) {
			var r = s[a], n = r.point;
			r.value <= t.innerWidth && (i = n)
		}
		return i || "max"
	}
}

var breakpoints = {setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoints};

function addClasses() {
	var e = this.classNames, t = this.params, i = this.rtl, s = this.$el, a = this.device, r = [];
	r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && (r.push("multirow"), "column" === t.slidesPerColumnFill && r.push("multirow-column")), a.android && r.push("android"), a.ios && r.push("ios"), t.cssMode && r.push("css-mode"), r.forEach((function (i) {
		e.push(t.containerModifierClass + i)
	})), s.addClass(e.join(" ")), this.emitContainerClasses()
}

function removeClasses() {
	var e = this.$el, t = this.classNames;
	e.removeClass(t.join(" ")), this.emitContainerClasses()
}

var classes = {addClasses: addClasses, removeClasses: removeClasses};

function loadImage(e, t, i, s, a, r) {
	var n, o = getWindow();

	function l() {
		r && r()
	}

	$(e).parent("picture")[0] || e.complete && a ? l() : t ? ((n = new o.Image).onload = l, n.onerror = l, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : l()
}

function preloadImages() {
	var e = this;

	function t() {
		null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
	}

	e.imagesToLoad = e.$el.find("img");
	for (var i = 0; i < e.imagesToLoad.length; i += 1) {
		var s = e.imagesToLoad[i];
		e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
	}
}

var images = {loadImage: loadImage, preloadImages: preloadImages};

function checkOverflow() {
	var e = this.params, t = this.isLocked,
		i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
	e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update())
}

var checkOverflow$1 = {checkOverflow: checkOverflow}, defaults = {
	init: !0,
	direction: "horizontal",
	touchEventsTarget: "container",
	initialSlide: 0,
	speed: 300,
	cssMode: !1,
	updateOnWindowResize: !0,
	width: null,
	height: null,
	preventInteractionOnTransition: !1,
	userAgent: null,
	url: null,
	edgeSwipeDetection: !1,
	edgeSwipeThreshold: 20,
	freeMode: !1,
	freeModeMomentum: !0,
	freeModeMomentumRatio: 1,
	freeModeMomentumBounce: !0,
	freeModeMomentumBounceRatio: 1,
	freeModeMomentumVelocityRatio: 1,
	freeModeSticky: !1,
	freeModeMinimumVelocity: .02,
	autoHeight: !1,
	setWrapperSize: !1,
	virtualTranslate: !1,
	effect: "slide",
	breakpoints: void 0,
	spaceBetween: 0,
	slidesPerView: 1,
	slidesPerColumn: 1,
	slidesPerColumnFill: "column",
	slidesPerGroup: 1,
	slidesPerGroupSkip: 0,
	centeredSlides: !1,
	centeredSlidesBounds: !1,
	slidesOffsetBefore: 0,
	slidesOffsetAfter: 0,
	normalizeSlideIndex: !0,
	centerInsufficientSlides: !1,
	watchOverflow: !1,
	roundLengths: !1,
	touchRatio: 1,
	touchAngle: 45,
	simulateTouch: !0,
	shortSwipes: !0,
	longSwipes: !0,
	longSwipesRatio: .5,
	longSwipesMs: 300,
	followFinger: !0,
	allowTouchMove: !0,
	threshold: 0,
	touchMoveStopPropagation: !1,
	touchStartPreventDefault: !0,
	touchStartForcePreventDefault: !1,
	touchReleaseOnEdges: !1,
	uniqueNavElements: !0,
	resistance: !0,
	resistanceRatio: .85,
	watchSlidesProgress: !1,
	watchSlidesVisibility: !1,
	grabCursor: !1,
	preventClicks: !0,
	preventClicksPropagation: !0,
	slideToClickedSlide: !1,
	preloadImages: !0,
	updateOnImagesReady: !0,
	loop: !1,
	loopAdditionalSlides: 0,
	loopedSlides: null,
	loopFillGroupWithBlank: !1,
	loopPreventsSlide: !0,
	allowSlidePrev: !0,
	allowSlideNext: !0,
	swipeHandler: null,
	noSwiping: !0,
	noSwipingClass: "swiper-no-swiping",
	noSwipingSelector: null,
	passiveListeners: !0,
	containerModifierClass: "swiper-container-",
	slideClass: "swiper-slide",
	slideBlankClass: "swiper-slide-invisible-blank",
	slideActiveClass: "swiper-slide-active",
	slideDuplicateActiveClass: "swiper-slide-duplicate-active",
	slideVisibleClass: "swiper-slide-visible",
	slideDuplicateClass: "swiper-slide-duplicate",
	slideNextClass: "swiper-slide-next",
	slideDuplicateNextClass: "swiper-slide-duplicate-next",
	slidePrevClass: "swiper-slide-prev",
	slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
	wrapperClass: "swiper-wrapper",
	runCallbacksOnInit: !0,
	_emitClasses: !1
}, prototypes = {
	modular: modular,
	eventsEmitter: eventsEmitter,
	update: update,
	translate: translate,
	transition: transition$1,
	slide: slide,
	loop: loop,
	grabCursor: grabCursor,
	manipulation: manipulation,
	events: events,
	breakpoints: breakpoints,
	checkOverflow: checkOverflow$1,
	classes: classes,
	images: images
}, extendedDefaults = {}, Swiper = function () {
	function e() {
		for (var t, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
		1 === a.length && a[0].constructor && a[0].constructor === Object ? i = a[0] : (t = a[0], i = a[1]), i || (i = {}), i = extend$1({}, i), t && !i.el && (i.el = t);
		var n = this;
		n.support = getSupport(), n.device = getDevice({userAgent: i.userAgent}), n.browser = getBrowser(), n.eventsListeners = {}, n.eventsAnyListeners = [], Object.keys(prototypes).forEach((function (t) {
			Object.keys(prototypes[t]).forEach((function (i) {
				e.prototype[i] || (e.prototype[i] = prototypes[t][i])
			}))
		})), void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach((function (e) {
			var t = n.modules[e];
			if (t.params) {
				var s = Object.keys(t.params)[0], a = t.params[s];
				if ("object" != typeof a || null === a) return;
				if (!(s in i) || !("enabled" in a)) return;
				!0 === i[s] && (i[s] = {enabled: !0}), "object" != typeof i[s] || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {enabled: !1})
			}
		}));
		var o = extend$1({}, defaults);
		n.useParams(o), n.params = extend$1({}, o, extendedDefaults, i), n.originalParams = extend$1({}, n.params), n.passedParams = extend$1({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach((function (e) {
			n.on(e, n.params.on[e])
		})), n.$ = $;
		var l = $(n.params.el);
		if (t = l[0]) {
			if (l.length > 1) {
				var d = [];
				return l.each((function (t) {
					var s = extend$1({}, i, {el: t});
					d.push(new e(s))
				})), d
			}
			var h, p, u;
			return t.swiper = n, t && t.shadowRoot && t.shadowRoot.querySelector ? (h = $(t.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
				return l.children(e)
			} : h = l.children("." + n.params.wrapperClass), extend$1(n, {
				$el: l,
				el: t,
				$wrapperEl: h,
				wrapperEl: h[0],
				classNames: [],
				slides: $(),
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal: function () {
					return "horizontal" === n.params.direction
				},
				isVertical: function () {
					return "vertical" === n.params.direction
				},
				rtl: "rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction"),
				rtlTranslate: "horizontal" === n.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction")),
				wrongRTL: "-webkit-box" === h.css("display"),
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				allowSlideNext: n.params.allowSlideNext,
				allowSlidePrev: n.params.allowSlidePrev,
				touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
					start: p[0],
					move: p[1],
					end: p[2],
					cancel: p[3]
				}, n.touchEventsDesktop = {
					start: u[0],
					move: u[1],
					end: u[2]
				}, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					formElements: "input, select, option, textarea, button, video, label",
					lastClickTime: now(),
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					isTouchEvent: void 0,
					startMoving: void 0
				},
				allowClick: !0,
				allowTouchMove: n.params.allowTouchMove,
				touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
				imagesToLoad: [],
				imagesLoaded: 0
			}), n.useModules(), n.emit("_swiper"), n.params.init && n.init(), n
		}
	}

	var t = e.prototype;
	return t.emitContainerClasses = function () {
		var e = this;
		if (e.params._emitClasses && e.el) {
			var t = e.el.className.split(" ").filter((function (t) {
				return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
			}));
			e.emit("_containerClasses", t.join(" "))
		}
	}, t.emitSlidesClasses = function () {
		var e = this;
		e.params._emitClasses && e.el && e.slides.each((function (t) {
			var i = t.className.split(" ").filter((function (t) {
				return 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass)
			}));
			e.emit("_slideClass", t, i.join(" "))
		}))
	}, t.slidesPerViewDynamic = function () {
		var e = this.params, t = this.slides, i = this.slidesGrid, s = this.size, a = this.activeIndex, r = 1;
		if (e.centeredSlides) {
			for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
			for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
		} else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
		return r
	}, t.update = function () {
		var e = this;
		if (e && !e.destroyed) {
			var t = e.snapGrid, i = e.params;
			i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
		}

		function s() {
			var t = e.rtlTranslate ? -1 * e.translate : e.translate,
				i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
			e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
		}
	}, t.changeDirection = function (e, t) {
		void 0 === t && (t = !0);
		var i = this.params.direction;
		return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each((function (t) {
			"vertical" === e ? t.style.width = "" : t.style.height = ""
		})), this.emit("changeDirection"), t && this.update()), this
	}, t.init = function () {
		this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
	}, t.destroy = function (e, t) {
		void 0 === e && (e = !0), void 0 === t && (t = !0);
		var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, n = i.slides;
		return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (e) {
			i.off(e)
		})), !1 !== e && (i.$el[0].swiper = null, deleteProps(i)), i.destroyed = !0), null
	}, e.extendDefaults = function (e) {
		extend$1(extendedDefaults, e)
	}, e.installModule = function (t) {
		e.prototype.modules || (e.prototype.modules = {});
		var i = t.name || Object.keys(e.prototype.modules).length + "_" + now();
		e.prototype.modules[i] = t
	}, e.use = function (t) {
		return Array.isArray(t) ? (t.forEach((function (t) {
			return e.installModule(t)
		})), e) : (e.installModule(t), e)
	}, _createClass(e, null, [{
		key: "extendedDefaults", get: function () {
			return extendedDefaults
		}
	}, {
		key: "defaults", get: function () {
			return defaults
		}
	}]), e
}(), Resize = {
	name: "resize", create: function () {
		var e = this;
		extend$1(e, {
			resize: {
				resizeHandler: function () {
					e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
				}, orientationChangeHandler: function () {
					e && !e.destroyed && e.initialized && e.emit("orientationchange")
				}
			}
		})
	}, on: {
		init: function (e) {
			var t = getWindow();
			t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler)
		}, destroy: function (e) {
			var t = getWindow();
			t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
		}
	}
}, Observer = {
	attach: function (e, t) {
		void 0 === t && (t = {});
		var i = getWindow(), s = this, a = new (i.MutationObserver || i.WebkitMutationObserver)((function (e) {
			if (1 !== e.length) {
				var t = function () {
					s.emit("observerUpdate", e[0])
				};
				i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
			} else s.emit("observerUpdate", e[0])
		}));
		a.observe(e, {
			attributes: void 0 === t.attributes || t.attributes,
			childList: void 0 === t.childList || t.childList,
			characterData: void 0 === t.characterData || t.characterData
		}), s.observer.observers.push(a)
	}, init: function () {
		if (this.support.observer && this.params.observer) {
			if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
			this.observer.attach(this.$el[0], {childList: this.params.observeSlideChildren}), this.observer.attach(this.$wrapperEl[0], {attributes: !1})
		}
	}, destroy: function () {
		this.observer.observers.forEach((function (e) {
			e.disconnect()
		})), this.observer.observers = []
	}
}, Observer$1 = {
	name: "observer",
	params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
	create: function () {
		bindModuleMethods(this, {observer: _extends(_extends({}, Observer), {}, {observers: []})})
	},
	on: {
		init: function (e) {
			e.observer.init()
		}, destroy: function (e) {
			e.observer.destroy()
		}
	}
}, Virtual = {
	update: function (e) {
		var t = this, i = t.params, s = i.slidesPerView, a = i.slidesPerGroup, r = i.centeredSlides,
			n = t.params.virtual, o = n.addSlidesBefore, l = n.addSlidesAfter, d = t.virtual, h = d.from, p = d.to,
			u = d.slides, c = d.slidesGrid, v = d.renderSlide, f = d.offset;
		t.updateActiveIndex();
		var m, g, w, b = t.activeIndex || 0;
		m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + o) : (g = s + (a - 1) + l, w = a + o);
		var y = Math.max((b || 0) - w, 0), x = Math.min((b || 0) + g, u.length - 1),
			E = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

		function T() {
			t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
		}

		if (extend$1(t.virtual, {
			from: y,
			to: x,
			offset: E,
			slidesGrid: t.slidesGrid
		}), h === y && p === x && !e) return t.slidesGrid !== c && E !== f && t.slides.css(m, E + "px"), void t.updateProgress();
		if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
			offset: E,
			from: y,
			to: x,
			slides: function () {
				for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
				return e
			}()
		}), void (t.params.virtual.renderExternalUpdate && T());
		var C = [], S = [];
		if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var M = h; M <= p; M += 1) (M < y || M > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
		for (var $ = 0; $ < u.length; $ += 1) $ >= y && $ <= x && (void 0 === p || e ? S.push($) : ($ > p && S.push($), $ < h && C.push($)));
		S.forEach((function (e) {
			t.$wrapperEl.append(v(u[e], e))
		})), C.sort((function (e, t) {
			return t - e
		})).forEach((function (e) {
			t.$wrapperEl.prepend(v(u[e], e))
		})), t.$wrapperEl.children(".swiper-slide").css(m, E + "px"), T()
	}, renderSlide: function (e, t) {
		var i = this.params.virtual;
		if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
		var s = i.renderSlide ? $(i.renderSlide.call(this, e, t)) : $('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
		return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s
	}, appendSlide: function (e) {
		if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]); else this.virtual.slides.push(e);
		this.virtual.update(!0)
	}, prependSlide: function (e) {
		var t = this.activeIndex, i = t + 1, s = 1;
		if (Array.isArray(e)) {
			for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
			i = t + e.length, s = e.length
		} else this.virtual.slides.unshift(e);
		if (this.params.virtual.cache) {
			var r = this.virtual.cache, n = {};
			Object.keys(r).forEach((function (e) {
				var t = r[e], i = t.attr("data-swiper-slide-index");
				i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
			})), this.virtual.cache = n
		}
		this.virtual.update(!0), this.slideTo(i, 0)
	}, removeSlide: function (e) {
		if (null != e) {
			var t = this.activeIndex;
			if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0); else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
			this.virtual.update(!0), this.slideTo(t, 0)
		}
	}, removeAllSlides: function () {
		this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
	}
}, Virtual$1 = {
	name: "virtual",
	params: {
		virtual: {
			enabled: !1,
			slides: [],
			cache: !0,
			renderSlide: null,
			renderExternal: null,
			renderExternalUpdate: !0,
			addSlidesBefore: 0,
			addSlidesAfter: 0
		}
	},
	create: function () {
		bindModuleMethods(this, {
			virtual: _extends(_extends({}, Virtual), {}, {
				slides: this.params.virtual.slides,
				cache: {}
			})
		})
	},
	on: {
		beforeInit: function (e) {
			if (e.params.virtual.enabled) {
				e.classNames.push(e.params.containerModifierClass + "virtual");
				var t = {watchSlidesProgress: !0};
				extend$1(e.params, t), extend$1(e.originalParams, t), e.params.initialSlide || e.virtual.update()
			}
		}, setTranslate: function (e) {
			e.params.virtual.enabled && e.virtual.update()
		}
	}
}, Keyboard = {
	handle: function (e) {
		var t = getWindow(), i = getDocument(), s = this.rtlTranslate, a = e;
		a.originalEvent && (a = a.originalEvent);
		var r = a.keyCode || a.charCode, n = this.params.keyboard.pageUpDown, o = n && 33 === r, l = n && 34 === r,
			d = 37 === r, h = 39 === r, p = 38 === r, u = 40 === r;
		if (!this.allowSlideNext && (this.isHorizontal() && h || this.isVertical() && u || l)) return !1;
		if (!this.allowSlidePrev && (this.isHorizontal() && d || this.isVertical() && p || o)) return !1;
		if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
			if (this.params.keyboard.onlyInViewport && (o || l || d || h || p || u)) {
				var c = !1;
				if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
				var v = t.innerWidth, f = t.innerHeight, m = this.$el.offset();
				s && (m.left -= this.$el[0].scrollLeft);
				for (var g = [[m.left, m.top], [m.left + this.width, m.top], [m.left, m.top + this.height], [m.left + this.width, m.top + this.height]], w = 0; w < g.length; w += 1) {
					var b = g[w];
					b[0] >= 0 && b[0] <= v && b[1] >= 0 && b[1] <= f && (c = !0)
				}
				if (!c) return
			}
			this.isHorizontal() ? ((o || l || d || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((l || h) && !s || (o || d) && s) && this.slideNext(), ((o || d) && !s || (l || h) && s) && this.slidePrev()) : ((o || l || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (l || u) && this.slideNext(), (o || p) && this.slidePrev()), this.emit("keyPress", r)
		}
	}, enable: function () {
		var e = getDocument();
		this.keyboard.enabled || ($(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
	}, disable: function () {
		var e = getDocument();
		this.keyboard.enabled && ($(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
	}
}, Keyboard$1 = {
	name: "keyboard",
	params: {keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}},
	create: function () {
		bindModuleMethods(this, {keyboard: _extends({enabled: !1}, Keyboard)})
	},
	on: {
		init: function (e) {
			e.params.keyboard.enabled && e.keyboard.enable()
		}, destroy: function (e) {
			e.keyboard.enabled && e.keyboard.disable()
		}
	}
};

function isEventSupported() {
	var e = getDocument(), t = "onwheel" in e;
	if (!t) {
		var i = e.createElement("div");
		i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
	}
	return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
}

var Mousewheel = {
		lastScrollTime: now(), lastEventBeforeSnap: void 0, recentWheelEvents: [], event: function () {
			return getWindow().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : isEventSupported() ? "wheel" : "mousewheel"
		}, normalize: function (e) {
			var t = 0, i = 0, s = 0, a = 0;
			return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
				spinX: t,
				spinY: i,
				pixelX: s,
				pixelY: a
			}
		}, handleMouseEnter: function () {
			this.mouseEntered = !0
		}, handleMouseLeave: function () {
			this.mouseEntered = !1
		}, handle: function (e) {
			var t = e, i = this, s = i.params.mousewheel;
			i.params.cssMode && t.preventDefault();
			var a = i.$el;
			if ("container" !== i.params.mousewheel.eventsTarget && (a = $(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
			t.originalEvent && (t = t.originalEvent);
			var r = 0, n = i.rtlTranslate ? -1 : 1, o = Mousewheel.normalize(t);
			if (s.forceToAxis) if (i.isHorizontal()) {
				if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
				r = -o.pixelX * n
			} else {
				if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
				r = -o.pixelY
			} else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
			if (0 === r) return !0;
			if (s.invert && (r = -r), i.params.freeMode) {
				var l = {time: now(), delta: Math.abs(r), direction: Math.sign(r)}, d = i.mousewheel.lastEventBeforeSnap,
					h = d && l.time < d.time + 500 && l.delta <= d.delta && l.direction === d.direction;
				if (!h) {
					i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
					var p = i.getTranslate() + r * s.sensitivity, u = i.isBeginning, c = i.isEnd;
					if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!u && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
						clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
						var v = i.mousewheel.recentWheelEvents;
						v.length >= 15 && v.shift();
						var f = v.length ? v[v.length - 1] : void 0, m = v[0];
						if (v.push(l), f && (l.delta > f.delta || l.direction !== f.direction)) v.splice(0); else if (v.length >= 15 && l.time - m.time < 500 && m.delta - l.delta >= 1 && l.delta <= 6) {
							var g = r > 0 ? .8 : .2;
							i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.mousewheel.timeout = nextTick((function () {
								i.slideToClosest(i.params.speed, !0, void 0, g)
							}), 0)
						}
						i.mousewheel.timeout || (i.mousewheel.timeout = nextTick((function () {
							i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
						}), 500))
					}
					if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0
				}
			} else {
				var w = {time: now(), delta: Math.abs(r), direction: Math.sign(r), raw: e},
					b = i.mousewheel.recentWheelEvents;
				b.length >= 2 && b.shift();
				var y = b.length ? b[b.length - 1] : void 0;
				if (b.push(w), y ? (w.direction !== y.direction || w.delta > y.delta || w.time > y.time + 150) && i.mousewheel.animateSlider(w) : i.mousewheel.animateSlider(w), i.mousewheel.releaseScroll(w)) return !0
			}
			return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
		}, animateSlider: function (e) {
			var t = getWindow();
			return e.delta >= 6 && now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)
		}, releaseScroll: function (e) {
			var t = this.params.mousewheel;
			if (e.direction < 0) {
				if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
			} else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
			return !1
		}, enable: function () {
			var e = Mousewheel.event();
			if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
			if (!e) return !1;
			if (this.mousewheel.enabled) return !1;
			var t = this.$el;
			return "container" !== this.params.mousewheel.eventsTarget && (t = $(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
		}, disable: function () {
			var e = Mousewheel.event();
			if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
			if (!e) return !1;
			if (!this.mousewheel.enabled) return !1;
			var t = this.$el;
			return "container" !== this.params.mousewheel.eventsTarget && (t = $(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
		}
	}, Mousewheel$1 = {
		name: "mousewheel",
		params: {
			mousewheel: {
				enabled: !1,
				releaseOnEdges: !1,
				invert: !1,
				forceToAxis: !1,
				sensitivity: 1,
				eventsTarget: "container"
			}
		},
		create: function () {
			bindModuleMethods(this, {
				mousewheel: {
					enabled: !1,
					lastScrollTime: now(),
					lastEventBeforeSnap: void 0,
					recentWheelEvents: [],
					enable: Mousewheel.enable,
					disable: Mousewheel.disable,
					handle: Mousewheel.handle,
					handleMouseEnter: Mousewheel.handleMouseEnter,
					handleMouseLeave: Mousewheel.handleMouseLeave,
					animateSlider: Mousewheel.animateSlider,
					releaseScroll: Mousewheel.releaseScroll
				}
			})
		},
		on: {
			init: function (e) {
				!e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
			}, destroy: function (e) {
				e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
			}
		}
	}, Navigation = {
		update: function () {
			var e = this.params.navigation;
			if (!this.params.loop) {
				var t = this.navigation, i = t.$nextEl, s = t.$prevEl;
				s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
			}
		}, onPrevClick: function (e) {
			e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
		}, onNextClick: function (e) {
			e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
		}, init: function () {
			var e, t, i = this.params.navigation;
			(i.nextEl || i.prevEl) && (i.nextEl && (e = $(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = $(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), extend$1(this.navigation, {
				$nextEl: e,
				nextEl: e && e[0],
				$prevEl: t,
				prevEl: t && t[0]
			}))
		}, destroy: function () {
			var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
			t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
		}
	}, Navigation$1 = {
		name: "navigation",
		params: {
			navigation: {
				nextEl: null,
				prevEl: null,
				hideOnClick: !1,
				disabledClass: "swiper-button-disabled",
				hiddenClass: "swiper-button-hidden",
				lockClass: "swiper-button-lock"
			}
		},
		create: function () {
			bindModuleMethods(this, {navigation: _extends({}, Navigation)})
		},
		on: {
			init: function (e) {
				e.navigation.init(), e.navigation.update()
			}, toEdge: function (e) {
				e.navigation.update()
			}, fromEdge: function (e) {
				e.navigation.update()
			}, destroy: function (e) {
				e.navigation.destroy()
			}, click: function (e, t) {
				var i, s = e.navigation, a = s.$nextEl, r = s.$prevEl;
				!e.params.navigation.hideOnClick || $(t.target).is(r) || $(t.target).is(a) || (a ? i = a.hasClass(e.params.navigation.hiddenClass) : r && (i = r.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass))
			}
		}
	}, Pagination = {
		update: function () {
			var e = this.rtl, t = this.params.pagination;
			if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
				var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
					a = this.pagination.$el,
					r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
				if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
					var n, o, l, d = this.pagination.bullets;
					if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, l = ((o = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each((function (e) {
						var s = $(e), a = s.index();
						a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= o && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === o && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
					})); else {
						var h = d.eq(i), p = h.index();
						if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
							for (var u = d.eq(n), c = d.eq(o), v = n; v <= o; v += 1) d.eq(v).addClass(t.bulletActiveClass + "-main");
							if (this.params.loop) if (p >= d.length - t.dynamicMainBullets) {
								for (var f = t.dynamicMainBullets; f >= 0; f -= 1) d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");
								d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
							} else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"); else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
						}
					}
					if (t.dynamicBullets) {
						var m = Math.min(d.length, t.dynamicMainBullets + 4),
							g = (this.pagination.bulletSize * m - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize,
							w = e ? "right" : "left";
						d.css(this.isHorizontal() ? w : "top", g + "px")
					}
				}
				if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
					var b;
					b = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
					var y = (i + 1) / r, x = 1, E = 1;
					"horizontal" === b ? x = y : E = y, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + E + ")").transition(this.params.speed)
				}
				"custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
			}
		}, render: function () {
			var e = this.params.pagination;
			if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
				var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
					i = this.pagination.$el, s = "";
				if ("bullets" === e.type) {
					for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
					i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
				}
				"fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
			}
		}, init: function () {
			var e = this, t = e.params.pagination;
			if (t.el) {
				var i = $(t.el);
				0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function (t) {
					t.preventDefault();
					var i = $(this).index() * e.params.slidesPerGroup;
					e.params.loop && (i += e.loopedSlides), e.slideTo(i)
				})), extend$1(e.pagination, {$el: i, el: i[0]}))
			}
		}, destroy: function () {
			var e = this.params.pagination;
			if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
				var t = this.pagination.$el;
				t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
			}
		}
	}, Pagination$1 = {
		name: "pagination",
		params: {
			pagination: {
				el: null,
				bulletElement: "span",
				clickable: !1,
				hideOnClick: !1,
				renderBullet: null,
				renderProgressbar: null,
				renderFraction: null,
				renderCustom: null,
				progressbarOpposite: !1,
				type: "bullets",
				dynamicBullets: !1,
				dynamicMainBullets: 1,
				formatFractionCurrent: function (e) {
					return e
				},
				formatFractionTotal: function (e) {
					return e
				},
				bulletClass: "swiper-pagination-bullet",
				bulletActiveClass: "swiper-pagination-bullet-active",
				modifierClass: "swiper-pagination-",
				currentClass: "swiper-pagination-current",
				totalClass: "swiper-pagination-total",
				hiddenClass: "swiper-pagination-hidden",
				progressbarFillClass: "swiper-pagination-progressbar-fill",
				progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
				clickableClass: "swiper-pagination-clickable",
				lockClass: "swiper-pagination-lock"
			}
		},
		create: function () {
			bindModuleMethods(this, {pagination: _extends({dynamicBulletIndex: 0}, Pagination)})
		},
		on: {
			init: function (e) {
				e.pagination.init(), e.pagination.render(), e.pagination.update()
			}, activeIndexChange: function (e) {
				(e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
			}, snapIndexChange: function (e) {
				e.params.loop || e.pagination.update()
			}, slidesLengthChange: function (e) {
				e.params.loop && (e.pagination.render(), e.pagination.update())
			}, snapGridLengthChange: function (e) {
				e.params.loop || (e.pagination.render(), e.pagination.update())
			}, destroy: function (e) {
				e.pagination.destroy()
			}, click: function (e, t) {
				e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !$(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass))
			}
		}
	}, Scrollbar = {
		setTranslate: function () {
			if (this.params.scrollbar.el && this.scrollbar.el) {
				var e = this.scrollbar, t = this.rtlTranslate, i = this.progress, s = e.dragSize, a = e.trackSize,
					r = e.$dragEl, n = e.$el, o = this.params.scrollbar, l = s, d = (a - s) * i;
				t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function () {
					n[0].style.opacity = 0, n.transition(400)
				}), 1e3))
			}
		}, setTransition: function (e) {
			this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
		}, updateSize: function () {
			if (this.params.scrollbar.el && this.scrollbar.el) {
				var e = this.scrollbar, t = e.$dragEl, i = e.$el;
				t[0].style.width = "", t[0].style.height = "";
				var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize,
					n = r * (a / this.size);
				s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), extend$1(e, {
					trackSize: a,
					divider: r,
					moveDivider: n,
					dragSize: s
				}), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
			}
		}, getPointerPosition: function (e) {
			return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
		}, setDragPosition: function (e) {
			var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize,
				o = i.dragStartPos;
			t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
			var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
			this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
		}, onDragStart: function (e) {
			var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl;
			this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
		}, onDragMove: function (e) {
			var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl;
			this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
		}, onDragEnd: function (e) {
			var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el;
			this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = nextTick((function () {
				a.css("opacity", 0), a.transition(400)
			}), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
		}, enableDraggable: function () {
			if (this.params.scrollbar.el) {
				var e = getDocument(), t = this.scrollbar, i = this.touchEventsTouch, s = this.touchEventsDesktop,
					a = this.params, r = this.support, n = t.$el[0],
					o = !(!r.passiveListener || !a.passiveListeners) && {passive: !1, capture: !1},
					l = !(!r.passiveListener || !a.passiveListeners) && {passive: !0, capture: !1};
				r.touch ? (n.addEventListener(i.start, this.scrollbar.onDragStart, o), n.addEventListener(i.move, this.scrollbar.onDragMove, o), n.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (n.addEventListener(s.start, this.scrollbar.onDragStart, o), e.addEventListener(s.move, this.scrollbar.onDragMove, o), e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
			}
		}, disableDraggable: function () {
			if (this.params.scrollbar.el) {
				var e = getDocument(), t = this.scrollbar, i = this.touchEventsTouch, s = this.touchEventsDesktop,
					a = this.params, r = this.support, n = t.$el[0],
					o = !(!r.passiveListener || !a.passiveListeners) && {passive: !1, capture: !1},
					l = !(!r.passiveListener || !a.passiveListeners) && {passive: !0, capture: !1};
				r.touch ? (n.removeEventListener(i.start, this.scrollbar.onDragStart, o), n.removeEventListener(i.move, this.scrollbar.onDragMove, o), n.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (n.removeEventListener(s.start, this.scrollbar.onDragStart, o), e.removeEventListener(s.move, this.scrollbar.onDragMove, o), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
			}
		}, init: function () {
			if (this.params.scrollbar.el) {
				var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, s = $(i.el);
				this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
				var a = s.find("." + this.params.scrollbar.dragClass);
				0 === a.length && (a = $('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), extend$1(e, {
					$el: s,
					el: s[0],
					$dragEl: a,
					dragEl: a[0]
				}), i.draggable && e.enableDraggable()
			}
		}, destroy: function () {
			this.scrollbar.disableDraggable()
		}
	}, Scrollbar$1 = {
		name: "scrollbar",
		params: {
			scrollbar: {
				el: null,
				dragSize: "auto",
				hide: !1,
				draggable: !1,
				snapOnRelease: !0,
				lockClass: "swiper-scrollbar-lock",
				dragClass: "swiper-scrollbar-drag"
			}
		},
		create: function () {
			bindModuleMethods(this, {scrollbar: _extends({isTouched: !1, timeout: null, dragTimeout: null}, Scrollbar)})
		},
		on: {
			init: function (e) {
				e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
			}, update: function (e) {
				e.scrollbar.updateSize()
			}, resize: function (e) {
				e.scrollbar.updateSize()
			}, observerUpdate: function (e) {
				e.scrollbar.updateSize()
			}, setTranslate: function (e) {
				e.scrollbar.setTranslate()
			}, setTransition: function (e, t) {
				e.scrollbar.setTransition(t)
			}, destroy: function (e) {
				e.scrollbar.destroy()
			}
		}
	}, Parallax = {
		setTransform: function (e, t) {
			var i = this.rtl, s = $(e), a = i ? -1 : 1, r = s.attr("data-swiper-parallax") || "0",
				n = s.attr("data-swiper-parallax-x"), o = s.attr("data-swiper-parallax-y"),
				l = s.attr("data-swiper-parallax-scale"), d = s.attr("data-swiper-parallax-opacity");
			if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
				var h = d - (d - 1) * (1 - Math.abs(t));
				s[0].style.opacity = h
			}
			if (null == l) s.transform("translate3d(" + n + ", " + o + ", 0px)"); else {
				var p = l - (l - 1) * (1 - Math.abs(t));
				s.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + p + ")")
			}
		}, setTranslate: function () {
			var e = this, t = e.$el, i = e.slides, s = e.progress, a = e.snapGrid;
			t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
				e.parallax.setTransform(t, s)
			})), i.each((function (t, i) {
				var r = t.progress;
				e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), $(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
					e.parallax.setTransform(t, r)
				}))
			}))
		}, setTransition: function (e) {
			void 0 === e && (e = this.params.speed);
			this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
				var i = $(t), s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
				0 === e && (s = 0), i.transition(s)
			}))
		}
	}, Parallax$1 = {
		name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
			bindModuleMethods(this, {parallax: _extends({}, Parallax)})
		}, on: {
			beforeInit: function (e) {
				e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
			}, init: function (e) {
				e.params.parallax.enabled && e.parallax.setTranslate()
			}, setTranslate: function (e) {
				e.params.parallax.enabled && e.parallax.setTranslate()
			}, setTransition: function (e, t) {
				e.params.parallax.enabled && e.parallax.setTransition(t)
			}
		}
	}, Zoom = {
		getDistanceBetweenTouches: function (e) {
			if (e.targetTouches.length < 2) return 1;
			var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, s = e.targetTouches[1].pageX,
				a = e.targetTouches[1].pageY;
			return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
		}, onGestureStart: function (e) {
			var t = this.support, i = this.params.zoom, s = this.zoom, a = s.gesture;
			if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
				if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
				s.fakeGestureTouched = !0, a.scaleStart = Zoom.getDistanceBetweenTouches(e)
			}
			a.$slideEl && a.$slideEl.length || (a.$slideEl = $(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
		}, onGestureChange: function (e) {
			var t = this.support, i = this.params.zoom, s = this.zoom, a = s.gesture;
			if (!t.gestures) {
				if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
				s.fakeGestureMoved = !0, a.scaleMove = Zoom.getDistanceBetweenTouches(e)
			}
			a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e)
		}, onGestureEnd: function (e) {
			var t = this.device, i = this.support, s = this.params.zoom, a = this.zoom, r = a.gesture;
			if (!i.gestures) {
				if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
				if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
				a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
			}
			r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0))
		}, onTouchStart: function (e) {
			var t = this.device, i = this.zoom, s = i.gesture, a = i.image;
			s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
		}, onTouchMove: function (e) {
			var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity;
			if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
				s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
				var r = s.width * t.scale, n = s.height * t.scale;
				if (!(r < i.slideWidth && n < i.slideHeight)) {
					if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
						if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
						if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
					}
					e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
				}
			}
		}, onTouchEnd: function () {
			var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity;
			if (t.$imageEl && 0 !== t.$imageEl.length) {
				if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
				i.isTouched = !1, i.isMoved = !1;
				var a = 300, r = 300, n = s.x * a, o = i.currentX + n, l = s.y * r, d = i.currentY + l;
				0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
				var h = Math.max(a, r);
				i.currentX = o, i.currentY = d;
				var p = i.width * e.scale, u = i.height * e.scale;
				i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
			}
		}, onTransitionEnd: function () {
			var e = this.zoom, t = e.gesture;
			t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
		}, toggle: function (e) {
			var t = this.zoom;
			t.scale && 1 !== t.scale ? t.out() : t.in(e)
		}, in: function (e) {
			var t, i, s, a, r, n, o, l, d, h, p, u, c, v, f, m, g = this.zoom, w = this.params.zoom, b = g.gesture,
				y = g.image;
			(b.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? b.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : b.$slideEl = this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), b.$imageWrapEl = b.$imageEl.parent("." + w.containerClass)), b.$imageEl && 0 !== b.$imageEl.length) && (b.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, g.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = b.$slideEl[0].offsetWidth, m = b.$slideEl[0].offsetHeight, s = b.$slideEl.offset().left + f / 2 - t, a = b.$slideEl.offset().top + m / 2 - i, o = b.$imageEl[0].offsetWidth, l = b.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, c = -(p = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > c && (r = c), (n = a * g.scale) < u && (n = u), n > v && (n = v)) : (r = 0, n = 0), b.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
		}, out: function () {
			var e = this.zoom, t = this.params.zoom, i = e.gesture;
			i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
		}, toggleGestures: function (e) {
			var t = this.zoom, i = t.slideSelector, s = t.passiveListener;
			this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s)
		}, enableGestures: function () {
			this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"))
		}, disableGestures: function () {
			this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"))
		}, enable: function () {
			var e = this.support, t = this.zoom;
			if (!t.enabled) {
				t.enabled = !0;
				var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
					passive: !0,
					capture: !1
				}, s = !e.passiveListener || {passive: !1, capture: !0}, a = "." + this.params.slideClass;
				this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s)
			}
		}, disable: function () {
			var e = this.zoom;
			if (e.enabled) {
				var t = this.support;
				this.zoom.enabled = !1;
				var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
					passive: !0,
					capture: !1
				}, s = !t.passiveListener || {passive: !1, capture: !0}, a = "." + this.params.slideClass;
				t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s)
			}
		}
	}, Zoom$1 = {
		name: "zoom",
		params: {
			zoom: {
				enabled: !1,
				maxRatio: 3,
				minRatio: 1,
				toggle: !0,
				containerClass: "swiper-zoom-container",
				zoomedSlideClass: "swiper-slide-zoomed"
			}
		},
		create: function () {
			var e = this;
			bindModuleMethods(e, {
				zoom: _extends({
					enabled: !1,
					scale: 1,
					currentScale: 1,
					isScaling: !1,
					gesture: {
						$slideEl: void 0,
						slideWidth: void 0,
						slideHeight: void 0,
						$imageEl: void 0,
						$imageWrapEl: void 0,
						maxRatio: 3
					},
					image: {
						isTouched: void 0,
						isMoved: void 0,
						currentX: void 0,
						currentY: void 0,
						minX: void 0,
						minY: void 0,
						maxX: void 0,
						maxY: void 0,
						width: void 0,
						height: void 0,
						startX: void 0,
						startY: void 0,
						touchesStart: {},
						touchesCurrent: {}
					},
					velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
				}, Zoom)
			});
			var t = 1;
			Object.defineProperty(e.zoom, "scale", {
				get: function () {
					return t
				}, set: function (i) {
					if (t !== i) {
						var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
							a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
						e.emit("zoomChange", i, s, a)
					}
					t = i
				}
			})
		},
		on: {
			init: function (e) {
				e.params.zoom.enabled && e.zoom.enable()
			}, destroy: function (e) {
				e.zoom.disable()
			}, touchStart: function (e, t) {
				e.zoom.enabled && e.zoom.onTouchStart(t)
			}, touchEnd: function (e, t) {
				e.zoom.enabled && e.zoom.onTouchEnd(t)
			}, doubleTap: function (e, t) {
				e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
			}, transitionEnd: function (e) {
				e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
			}, slideChange: function (e) {
				e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
			}
		}
	}, Lazy = {
		loadInSlide: function (e, t) {
			void 0 === t && (t = !0);
			var i = this, s = i.params.lazy;
			if (void 0 !== e && 0 !== i.slides.length) {
				var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
					r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
				!a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each((function (e) {
					var r = $(e);
					r.addClass(s.loadingClass);
					var n = r.attr("data-background"), o = r.attr("data-src"), l = r.attr("data-srcset"),
						d = r.attr("data-sizes"), h = r.parent("picture");
					i.loadImage(r[0], o || n, l, d, !1, (function () {
						if (null != i && i && (!i || i.params) && !i.destroyed) {
							if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (l && (r.attr("srcset", l), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each((function (e) {
								var t = $(e);
								t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
							})), o && (r.attr("src", o), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
								var e = a.attr("data-swiper-slide-index");
								if (a.hasClass(i.params.slideDuplicateClass)) {
									var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
									i.lazy.loadInSlide(p.index(), !1)
								} else {
									var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
									i.lazy.loadInSlide(u.index(), !1)
								}
							}
							i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight()
						}
					})), i.emit("lazyImageLoad", a[0], r[0])
				}))
			}
		}, load: function () {
			var e = this, t = e.$wrapperEl, i = e.params, s = e.slides, a = e.activeIndex,
				r = e.virtual && i.virtual.enabled, n = i.lazy, o = i.slidesPerView;

			function l(e) {
				if (r) {
					if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
				} else if (s[e]) return !0;
				return !1
			}

			function d(e) {
				return r ? $(e).attr("data-swiper-slide-index") : $(e).index()
			}

			if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function (t) {
				var i = r ? $(t).attr("data-swiper-slide-index") : $(t).index();
				e.lazy.loadInSlide(i)
			})); else if (o > 1) for (var h = a; h < a + o; h += 1) l(h) && e.lazy.loadInSlide(h); else e.lazy.loadInSlide(a);
			if (n.loadPrevNext) if (o > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
				for (var p = n.loadPrevNextAmount, u = o, c = Math.min(a + u + Math.max(p, u), s.length), v = Math.max(a - Math.max(u, p), 0), f = a + o; f < c; f += 1) l(f) && e.lazy.loadInSlide(f);
				for (var m = v; m < a; m += 1) l(m) && e.lazy.loadInSlide(m)
			} else {
				var g = t.children("." + i.slideNextClass);
				g.length > 0 && e.lazy.loadInSlide(d(g));
				var w = t.children("." + i.slidePrevClass);
				w.length > 0 && e.lazy.loadInSlide(d(w))
			}
		}
	}, Lazy$1 = {
		name: "lazy",
		params: {
			lazy: {
				enabled: !1,
				loadPrevNext: !1,
				loadPrevNextAmount: 1,
				loadOnTransitionStart: !1,
				elementClass: "swiper-lazy",
				loadingClass: "swiper-lazy-loading",
				loadedClass: "swiper-lazy-loaded",
				preloaderClass: "swiper-lazy-preloader"
			}
		},
		create: function () {
			bindModuleMethods(this, {lazy: _extends({initialImageLoaded: !1}, Lazy)})
		},
		on: {
			beforeInit: function (e) {
				e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
			}, init: function (e) {
				e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
			}, scroll: function (e) {
				e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
			}, resize: function (e) {
				e.params.lazy.enabled && e.lazy.load()
			}, scrollbarDragMove: function (e) {
				e.params.lazy.enabled && e.lazy.load()
			}, transitionStart: function (e) {
				e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
			}, transitionEnd: function (e) {
				e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
			}, slideChange: function (e) {
				e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
			}
		}
	}, Controller = {
		LinearSpline: function (e, t) {
			var i, s, a, r, n, o = function (e, t) {
				for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
				return i
			};
			return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
				return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
			}, this
		}, getInterpolateFunction: function (e) {
			this.controller.spline || (this.controller.spline = this.params.loop ? new Controller.LinearSpline(this.slidesGrid, e.slidesGrid) : new Controller.LinearSpline(this.snapGrid, e.snapGrid))
		}, setTranslate: function (e, t) {
			var i, s, a = this, r = a.controller.control, n = a.constructor;

			function o(e) {
				var t = a.rtlTranslate ? -a.translate : a.translate;
				"slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
			}

			if (Array.isArray(r)) for (var l = 0; l < r.length; l += 1) r[l] !== t && r[l] instanceof n && o(r[l]); else r instanceof n && t !== r && o(r)
		}, setTransition: function (e, t) {
			var i, s = this, a = s.constructor, r = s.controller.control;

			function n(t) {
				t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && nextTick((function () {
					t.updateAutoHeight()
				})), t.$wrapperEl.transitionEnd((function () {
					r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
				})))
			}

			if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof a && n(r[i]); else r instanceof a && t !== r && n(r)
		}
	}, Controller$1 = {
		name: "controller",
		params: {controller: {control: void 0, inverse: !1, by: "slide"}},
		create: function () {
			bindModuleMethods(this, {controller: _extends({control: this.params.controller.control}, Controller)})
		},
		on: {
			update: function (e) {
				e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
			}, resize: function (e) {
				e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
			}, observerUpdate: function (e) {
				e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
			}, setTranslate: function (e, t, i) {
				e.controller.control && e.controller.setTranslate(t, i)
			}, setTransition: function (e, t, i) {
				e.controller.control && e.controller.setTransition(t, i)
			}
		}
	}, A11y = {
		makeElFocusable: function (e) {
			return e.attr("tabIndex", "0"), e
		}, makeElNotFocusable: function (e) {
			return e.attr("tabIndex", "-1"), e
		}, addElRole: function (e, t) {
			return e.attr("role", t), e
		}, addElLabel: function (e, t) {
			return e.attr("aria-label", t), e
		}, disableEl: function (e) {
			return e.attr("aria-disabled", !0), e
		}, enableEl: function (e) {
			return e.attr("aria-disabled", !1), e
		}, onEnterKey: function (e) {
			var t = this.params.a11y;
			if (13 === e.keyCode) {
				var i = $(e.target);
				this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
			}
		}, notify: function (e) {
			var t = this.a11y.liveRegion;
			0 !== t.length && (t.html(""), t.html(e))
		}, updateNavigation: function () {
			if (!this.params.loop && this.navigation) {
				var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
				i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)))
			}
		}, updatePagination: function () {
			var e = this, t = e.params.a11y;
			e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (i) {
				var s = $(i);
				e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1))
			}))
		}, init: function () {
			this.$el.append(this.a11y.liveRegion);
			var e, t, i = this.params.a11y;
			this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
		}, destroy: function () {
			var e, t;
			this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
		}
	}, A11y$1 = {
		name: "a11y",
		params: {
			a11y: {
				enabled: !0,
				notificationClass: "swiper-notification",
				prevSlideMessage: "Previous slide",
				nextSlideMessage: "Next slide",
				firstSlideMessage: "This is the first slide",
				lastSlideMessage: "This is the last slide",
				paginationBulletMessage: "Go to slide {{index}}"
			}
		},
		create: function () {
			bindModuleMethods(this, {a11y: _extends(_extends({}, A11y), {}, {liveRegion: $('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')})})
		},
		on: {
			init: function (e) {
				e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
			}, toEdge: function (e) {
				e.params.a11y.enabled && e.a11y.updateNavigation()
			}, fromEdge: function (e) {
				e.params.a11y.enabled && e.a11y.updateNavigation()
			}, paginationUpdate: function (e) {
				e.params.a11y.enabled && e.a11y.updatePagination()
			}, destroy: function (e) {
				e.params.a11y.enabled && e.a11y.destroy()
			}
		}
	}, History = {
		init: function () {
			var e = getWindow();
			if (this.params.history) {
				if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
				var t = this.history;
				t.initialized = !0, t.paths = History.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState))
			}
		}, destroy: function () {
			var e = getWindow();
			this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
		}, setHistoryPopState: function () {
			this.history.paths = History.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
		}, getPathValues: function (e) {
			var t = getWindow(), i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter((function (e) {
				return "" !== e
			})), s = i.length;
			return {key: i[s - 2], value: i[s - 1]}
		}, setHistory: function (e, t) {
			var i = getWindow();
			if (this.history.initialized && this.params.history.enabled) {
				var s;
				s = this.params.url ? new URL(this.params.url) : i.location;
				var a = this.slides.eq(t), r = History.slugify(a.attr("data-history"));
				s.pathname.includes(e) || (r = e + "/" + r);
				var n = i.history.state;
				n && n.value === r || (this.params.history.replaceState ? i.history.replaceState({value: r}, null, r) : i.history.pushState({value: r}, null, r))
			}
		}, slugify: function (e) {
			return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
		}, scrollToSlide: function (e, t, i) {
			if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
				var r = this.slides.eq(s);
				if (History.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
					var n = r.index();
					this.slideTo(n, e, i)
				}
			} else this.slideTo(0, e, i)
		}
	}, History$1 = {
		name: "history",
		params: {history: {enabled: !1, replaceState: !1, key: "slides"}},
		create: function () {
			bindModuleMethods(this, {history: _extends({}, History)})
		},
		on: {
			init: function (e) {
				e.params.history.enabled && e.history.init()
			}, destroy: function (e) {
				e.params.history.enabled && e.history.destroy()
			}, transitionEnd: function (e) {
				e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
			}, slideChange: function (e) {
				e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
			}
		}
	}, HashNavigation = {
		onHashCange: function () {
			var e = getDocument();
			this.emit("hashChange");
			var t = e.location.hash.replace("#", "");
			if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
				var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
				if (void 0 === i) return;
				this.slideTo(i)
			}
		}, setHash: function () {
			var e = getWindow(), t = getDocument();
			if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet"); else {
				var i = this.slides.eq(this.activeIndex), s = i.attr("data-hash") || i.attr("data-history");
				t.location.hash = s || "", this.emit("hashSet")
			}
		}, init: function () {
			var e = getDocument(), t = getWindow();
			if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
				this.hashNavigation.initialized = !0;
				var i = e.location.hash.replace("#", "");
				if (i) for (var s = 0, a = this.slides.length; s < a; s += 1) {
					var r = this.slides.eq(s);
					if ((r.attr("data-hash") || r.attr("data-history")) === i && !r.hasClass(this.params.slideDuplicateClass)) {
						var n = r.index();
						this.slideTo(n, 0, this.params.runCallbacksOnInit, !0)
					}
				}
				this.params.hashNavigation.watchState && $(t).on("hashchange", this.hashNavigation.onHashCange)
			}
		}, destroy: function () {
			var e = getWindow();
			this.params.hashNavigation.watchState && $(e).off("hashchange", this.hashNavigation.onHashCange)
		}
	}, HashNavigation$1 = {
		name: "hash-navigation",
		params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
		create: function () {
			bindModuleMethods(this, {hashNavigation: _extends({initialized: !1}, HashNavigation)})
		},
		on: {
			init: function (e) {
				e.params.hashNavigation.enabled && e.hashNavigation.init()
			}, destroy: function (e) {
				e.params.hashNavigation.enabled && e.hashNavigation.destroy()
			}, transitionEnd: function (e) {
				e.hashNavigation.initialized && e.hashNavigation.setHash()
			}, slideChange: function (e) {
				e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
			}
		}
	}, Autoplay = {
		run: function () {
			var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
			t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = nextTick((function () {
				e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
			}), i)
		}, start: function () {
			return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
		}, stop: function () {
			return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
		}, pause: function (e) {
			this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
		}, onVisibilityChange: function () {
			var e = getDocument();
			"hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1)
		}, onTransitionEnd: function (e) {
			this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd), this.autoplay.paused = !1, this.autoplay.running ? this.autoplay.run() : this.autoplay.stop())
		}
	}, Autoplay$1 = {
		name: "autoplay",
		params: {
			autoplay: {
				enabled: !1,
				delay: 3e3,
				waitForTransition: !0,
				disableOnInteraction: !0,
				stopOnLastSlide: !1,
				reverseDirection: !1
			}
		},
		create: function () {
			bindModuleMethods(this, {autoplay: _extends(_extends({}, Autoplay), {}, {running: !1, paused: !1})})
		},
		on: {
			init: function (e) {
				e.params.autoplay.enabled && (e.autoplay.start(), getDocument().addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
			}, beforeTransitionStart: function (e, t, i) {
				e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
			}, sliderFirstMove: function (e) {
				e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
			}, touchEnd: function (e) {
				e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
			}, destroy: function (e) {
				e.autoplay.running && e.autoplay.stop(), getDocument().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
			}
		}
	}, Fade = {
		setTranslate: function () {
			for (var e = this.slides, t = 0; t < e.length; t += 1) {
				var i = this.slides.eq(t), s = -i[0].swiperSlideOffset;
				this.params.virtualTranslate || (s -= this.translate);
				var a = 0;
				this.isHorizontal() || (a = s, s = 0);
				var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
				i.css({opacity: r}).transform("translate3d(" + s + "px, " + a + "px, 0px)")
			}
		}, setTransition: function (e) {
			var t = this, i = t.slides, s = t.$wrapperEl;
			if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
				var a = !1;
				i.transitionEnd((function () {
					if (!a && t && !t.destroyed) {
						a = !0, t.animating = !1;
						for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
					}
				}))
			}
		}
	}, EffectFade = {
		name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
			bindModuleMethods(this, {fadeEffect: _extends({}, Fade)})
		}, on: {
			beforeInit: function (e) {
				if ("fade" === e.params.effect) {
					e.classNames.push(e.params.containerModifierClass + "fade");
					var t = {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
						watchSlidesProgress: !0,
						spaceBetween: 0,
						virtualTranslate: !0
					};
					extend$1(e.params, t), extend$1(e.originalParams, t)
				}
			}, setTranslate: function (e) {
				"fade" === e.params.effect && e.fadeEffect.setTranslate()
			}, setTransition: function (e, t) {
				"fade" === e.params.effect && e.fadeEffect.setTransition(t)
			}
		}
	}, Cube = {
		setTranslate: function () {
			var e, t = this.$el, i = this.$wrapperEl, s = this.slides, a = this.width, r = this.height,
				n = this.rtlTranslate, o = this.size, l = this.browser, d = this.params.cubeEffect, h = this.isHorizontal(),
				p = this.virtual && this.params.virtual.enabled, u = 0;
			d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = $('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: a + "px"})) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = $('<div class="swiper-cube-shadow"></div>'), t.append(e)));
			for (var c = 0; c < s.length; c += 1) {
				var v = s.eq(c), f = c;
				p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
				var m = 90 * f, g = Math.floor(m / 360);
				n && (m = -m, g = Math.floor(-m / 360));
				var w = Math.max(Math.min(v[0].progress, 1), -1), b = 0, y = 0, x = 0;
				f % 4 == 0 ? (b = 4 * -g * o, x = 0) : (f - 1) % 4 == 0 ? (b = 0, x = 4 * -g * o) : (f - 2) % 4 == 0 ? (b = o + 4 * g * o, x = o) : (f - 3) % 4 == 0 && (b = -o, x = 3 * o + 4 * o * g), n && (b = -b), h || (y = b, b = 0);
				var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + b + "px, " + y + "px, " + x + "px)";
				if (w <= 1 && w > -1 && (u = 90 * f + 90 * w, n && (u = 90 * -f - 90 * w)), v.transform(E), d.slideShadows) {
					var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
						C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
					0 === T.length && (T = $('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = $('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-w, 0)), C.length && (C[0].style.opacity = Math.max(w, 0))
				}
			}
			if (i.css({
				"-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
				"-moz-transform-origin": "50% 50% -" + o / 2 + "px",
				"-ms-transform-origin": "50% 50% -" + o / 2 + "px",
				"transform-origin": "50% 50% -" + o / 2 + "px"
			}), d.shadow) if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else {
				var S = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
					M = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
					P = d.shadowScale, z = d.shadowScale / M, k = d.shadowOffset;
				e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (r / 2 + k) + "px, " + -r / 2 / z + "px) rotateX(-90deg)")
			}
			var L = l.isSafari || l.isWebView ? -o / 2 : 0;
			i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
		}, setTransition: function (e) {
			var t = this.$el;
			this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
		}
	}, EffectCube = {
		name: "effect-cube",
		params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
		create: function () {
			bindModuleMethods(this, {cubeEffect: _extends({}, Cube)})
		},
		on: {
			beforeInit: function (e) {
				if ("cube" === e.params.effect) {
					e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
					var t = {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
						watchSlidesProgress: !0,
						resistanceRatio: 0,
						spaceBetween: 0,
						centeredSlides: !1,
						virtualTranslate: !0
					};
					extend$1(e.params, t), extend$1(e.originalParams, t)
				}
			}, setTranslate: function (e) {
				"cube" === e.params.effect && e.cubeEffect.setTranslate()
			}, setTransition: function (e, t) {
				"cube" === e.params.effect && e.cubeEffect.setTransition(t)
			}
		}
	}, Flip = {
		setTranslate: function () {
			for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
				var s = e.eq(i), a = s[0].progress;
				this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
				var r = -180 * a, n = 0, o = -s[0].swiperSlideOffset, l = 0;
				if (this.isHorizontal() ? t && (r = -r) : (l = o, o = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
					var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
						h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
					0 === d.length && (d = $('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = $('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0))
				}
				s.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)")
			}
		}, setTransition: function (e) {
			var t = this, i = t.slides, s = t.activeIndex, a = t.$wrapperEl;
			if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
				var r = !1;
				i.eq(s).transitionEnd((function () {
					if (!r && t && !t.destroyed) {
						r = !0, t.animating = !1;
						for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
					}
				}))
			}
		}
	}, EffectFlip = {
		name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
			bindModuleMethods(this, {flipEffect: _extends({}, Flip)})
		}, on: {
			beforeInit: function (e) {
				if ("flip" === e.params.effect) {
					e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
					var t = {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
						watchSlidesProgress: !0,
						spaceBetween: 0,
						virtualTranslate: !0
					};
					extend$1(e.params, t), extend$1(e.originalParams, t)
				}
			}, setTranslate: function (e) {
				"flip" === e.params.effect && e.flipEffect.setTranslate()
			}, setTransition: function (e, t) {
				"flip" === e.params.effect && e.flipEffect.setTransition(t)
			}
		}
	}, Coverflow = {
		setTranslate: function () {
			for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, o = r ? e / 2 - n : t / 2 - n, l = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
				var u = i.eq(h), c = s[h], v = (o - u[0].swiperSlideOffset - c / 2) / c * a.modifier, f = r ? l * v : 0,
					m = r ? 0 : l * v, g = -d * Math.abs(v), w = a.stretch;
				"string" == typeof w && -1 !== w.indexOf("%") && (w = parseFloat(a.stretch) / 100 * c);
				var b = r ? 0 : w * v, y = r ? w * v : 0, x = 1 - (1 - a.scale) * Math.abs(v);
				Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(x) < .001 && (x = 0);
				var E = "translate3d(" + y + "px," + b + "px," + g + "px)  rotateX(" + m + "deg) rotateY(" + f + "deg) scale(" + x + ")";
				if (u.transform(E), u[0].style.zIndex = 1 - Math.abs(Math.round(v)), a.slideShadows) {
					var T = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
						C = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
					0 === T.length && (T = $('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(T)), 0 === C.length && (C = $('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(C)), T.length && (T[0].style.opacity = v > 0 ? v : 0), C.length && (C[0].style.opacity = -v > 0 ? -v : 0)
				}
			}
		}, setTransition: function (e) {
			this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
		}
	}, EffectCoverflow = {
		name: "effect-coverflow",
		params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0}},
		create: function () {
			bindModuleMethods(this, {coverflowEffect: _extends({}, Coverflow)})
		},
		on: {
			beforeInit: function (e) {
				"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
			}, setTranslate: function (e) {
				"coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
			}, setTransition: function (e, t) {
				"coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
			}
		}
	}, Thumbs = {
		init: function () {
			var e = this.params.thumbs;
			if (this.thumbs.initialized) return !1;
			this.thumbs.initialized = !0;
			var t = this.constructor;
			return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, extend$1(this.thumbs.swiper.originalParams, {
				watchSlidesProgress: !0,
				slideToClickedSlide: !1
			}), extend$1(this.thumbs.swiper.params, {
				watchSlidesProgress: !0,
				slideToClickedSlide: !1
			})) : isObject$1(e.swiper) && (this.thumbs.swiper = new t(extend$1({}, e.swiper, {
				watchSlidesVisibility: !0,
				watchSlidesProgress: !0,
				slideToClickedSlide: !1
			})), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0
		}, onThumbClick: function () {
			var e = this.thumbs.swiper;
			if (e) {
				var t = e.clickedIndex, i = e.clickedSlide;
				if (!(i && $(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
					var s;
					if (s = e.params.loop ? parseInt($(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
						var a = this.activeIndex;
						this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
						var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
							n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
						s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r
					}
					this.slideTo(s)
				}
			}
		}, update: function (e) {
			var t = this.thumbs.swiper;
			if (t) {
				var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
					s = this.params.thumbs.autoScrollOffset, a = s && !t.params.loop;
				if (this.realIndex !== t.realIndex || a) {
					var r, n, o = t.activeIndex;
					if (t.params.loop) {
						t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex);
						var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
							d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
						r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l, n = this.activeIndex > this.previousIndex ? "next" : "prev"
					} else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
					a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0))
				}
				var h = 1, p = this.params.thumbs.slideThumbActiveClass;
				if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var u = 0; u < h; u += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p); else for (var c = 0; c < h; c += 1) t.slides.eq(this.realIndex + c).addClass(p)
			}
		}
	}, Thumbs$1 = {
		name: "thumbs",
		params: {
			thumbs: {
				swiper: null,
				multipleActiveThumbs: !0,
				autoScrollOffset: 0,
				slideThumbActiveClass: "swiper-slide-thumb-active",
				thumbsContainerClass: "swiper-container-thumbs"
			}
		},
		create: function () {
			bindModuleMethods(this, {thumbs: _extends({swiper: null, initialized: !1}, Thumbs)})
		},
		on: {
			beforeInit: function (e) {
				var t = e.params.thumbs;
				t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
			}, slideChange: function (e) {
				e.thumbs.swiper && e.thumbs.update()
			}, update: function (e) {
				e.thumbs.swiper && e.thumbs.update()
			}, resize: function (e) {
				e.thumbs.swiper && e.thumbs.update()
			}, observerUpdate: function (e) {
				e.thumbs.swiper && e.thumbs.update()
			}, setTransition: function (e, t) {
				var i = e.thumbs.swiper;
				i && i.setTransition(t)
			}, beforeDestroy: function (e) {
				var t = e.thumbs.swiper;
				t && e.thumbs.swiperCreated && t && t.destroy()
			}
		}
	},
	components = [Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y$1, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
Swiper.use(components);
export default Swiper;
export {Swiper};
