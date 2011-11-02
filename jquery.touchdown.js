/**
* jQuery Droptouch Plugin <https://github.com/samuelcotterall/Touchdown>
* 
* By Samuel Cotterall <http://samuelcotterall.com>
*/
(function($) {

	$.fn.Touchdown = function() {

		return this.each(function() {

			$this = $(this);

			var li = $this.find('li'),
				optionList;
				
			for (var i = li.length - 1; i >= 0; i--){

				var anchor = $(li[i]).find('a'); 
				optionList += '<option value="' + anchor.attr('href') + '">' + anchor.text() + '</option>';

			}

			// DOM manipulation
			$this.addClass('touchdown-list').after('<select class="touchdown"> ' + optionList +'</select>');

			// Event handler
			$this.next('select').change(function(){
				window.location = $(this).val();
			});


		});
		
	};
	
})(jQuery);
