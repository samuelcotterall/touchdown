# TouchDown

Touchdown is a tiny bit of JavaScript that converts `<ul>` or `<ol>` navigation elements to `<select>` dropdowns—which is nice if you’re using an iPhone or something. 
	
Want to see a demo? Sure you do <http://samuelcotterall.com/code/touchdown/demo/>: 

## Here’s how you use it:
	
Make some lists like this: 

	<ul id="social-networks">
		<li><a href="https://plus.google.com/113158264847735001631/posts">Google+</a></li>
		<li><a href="http://twitter.com/samuelcotterall/">Twitter</a></li>
		<li><a href="http://samuelcotterall.tumblr.com/">Tumblr</a></li>
		<li><a href="http://www.last.fm/user/samuelcotterall/">last.fm</a></li>
	</ul>

	<ul id="powered-by">
		<li><a href="http://jquery.com">jQuery</a></li>
		<li><a href="http://html5boilerplate.com//">HTML5 Boilerplate</a></li>
	</ul>	

Call the script and initialise it: 

	<script defer src="../jquery.touchdown.js"></script>
	<script>
		$(document).ready(function(){
			$('#social-networks, #powered-by').Touchdown();
		});
	</script>

	
Use Media Queries or whatever to show/hide the lists and `<selects>` depending on screensize. Do this however you like, it’s up to you: 
		
	.touchdown-list {display: none;}
	.touchdown {display: block;}

	@media only screen and (min-width: 768px) {
	.touchdown-list {display: block;}
	.touchdown {display: none;}
	}
