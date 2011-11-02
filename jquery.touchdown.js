/**
* jQuery Droptouch Plugin
*/
(function($) {
	$.fn.DropTouch = function() {
		//Link background colors 
		var colors = new Array('4AC7ED', 'FDC015', '9F78EC', 'F25C33');
		return this.each(function(i,obj) {
			$this = $(this);
			$anchors = $(obj).find("a").get();
			$.each($anchors, function(j,ele) {
				var randColor = Math.floor (Math.random() * colors.length);
				$(ele).css({
					'background-color':'#'+colors[randColor],
					'text-decoration':'none',
					'color':'#333333',
					'padding':'0px 5px 0px 5px'
				});
			});
		});
	};
})(jQuery);
