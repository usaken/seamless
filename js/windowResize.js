$(document).ready(function(){
	var resize = function(){
		var windowHeight = parseInt( $(window).height(), 10 );
		var menuHeight = 100;
		$( '#gmap' ).css({
							'width' : '100%',
							'height' : String(windowHeight - menuHeight) + 'px'
						});
	};
	resize();
	$( window ).resize( function(){
		resize();
	});
});
