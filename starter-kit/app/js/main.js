// 'use strict';
/*global $:false,window:false*/

//image scale
;(function(){
	function imgScale(objs,scale){
		if(typeof objs == 'object' && typeof scale == 'number'){
			$(objs).each(function(){
				var w = parseInt($(this).width());
				$(this).height(parseInt(w*scale));
			});
		}
	}
	// play-story
	function reset(){
		imgScale($('.new-goods img'),1.5);
		imgScale($('.theme-column .big'),1.25);
		imgScale($('.theme-column .small'),0.625);
		imgScale($('.goods-column img'),1);
		imgScale($('.goods-list .list img'),1);
		imgScale($('.goods-detail .goods-img'),1);
		imgScale($('.goods-detail .details .img'),1);
	}

	reset();
	window.onresize = function(){
		reset();
	};
})();