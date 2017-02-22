$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
			  items: {
				     src: 'https://www.youtube.com/watch?v=FH0tmYWZdjA'
			     },
			  type: 'iframe',
			  iframe: {
				    	markup: '<div class="mfp-iframe-scaler">'+
			            		'<div class="mfp-close"></div>'+
			            		'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			            		'</div>', 
			        patterns: {
			            youtube: {
				              index: 'youtube.com/', 
				              id: 'v=', 
				              src: '//www.youtube.com/embed/%id%?autoplay=1' 
					        }
					     },
					     srcAction: 'iframe_src', 
			     }
			});
	});