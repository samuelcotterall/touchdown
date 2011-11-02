/**
* jQuery Droptouch Plugin
*/
(function($) {

	$.fn.DropTouch = function() {

		return this.each(function(i,obj) {

			$this = $(this);

			var options;
			
			for (var i = $this.find('li').length - 1; i >= 0; i--){
				var item = $this.find('li')[i],
					anchor = $(item).find('a'); 
				options += '<option value="' + anchor.attr('href') + '">' + anchor.text() + '</option>';
			};			
			
			$this.after('<select class="droptouch"> ' + options +'</select>');

			// Event handler
			$this.next('select').change(function(){
				window.location = $(this).val();
			});


		});
		
	};
	
})(jQuery);
