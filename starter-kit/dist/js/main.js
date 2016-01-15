(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

// 'use strict';
/*global $:false,window:false*/

//image scale
;(function () {
	function imgScale(objs, scale) {
		if ((typeof objs === 'undefined' ? 'undefined' : _typeof(objs)) == 'object' && typeof scale == 'number') {
			$(objs).each(function () {
				var w = parseInt($(this).width());
				$(this).height(parseInt(w * scale));
			});
		}
	}
	// play-story
	function reset() {
		imgScale($('.new-goods img'), 1.5);
		imgScale($('.theme-column .big'), 1.25);
		imgScale($('.theme-column .small'), 0.625);
		imgScale($('.goods-column img'), 1);
		imgScale($('.goods-list .list img'), 1);
		imgScale($('.goods-detail .goods-img'), 1);
		imgScale($('.goods-detail .details .img'), 1);
	}

	reset();
	window.onresize = function () {
		reset();
	};
})();

},{}]},{},[1]);
