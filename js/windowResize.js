$(document).ready(function(){
	var resize = function(){
		var windowHeight = parseInt( $(window).height(), 10 );
		var menuHeight = 100;
		$( '#gmap' ).css({
							'width' : '100%',
							'height' : String(windowHeight - menuHeight) + 'px'
						});
		if ( parseInt( $(window).width(), 10 ) < 250 ) {
			$( 'img' ).css({ 'width' : '31px', 'height' : '31px' });
		} else {
			$( 'img' ).css({ 'width' : '62px', 'height' : '62px' });
		}
	};
	resize();
	$( window ).resize( function(){
		resize();
	});
});
