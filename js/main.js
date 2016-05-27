;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function(){

		//nice scroll
		$('html').niceScroll({
		    cursoropacitymax: 0,
		    horizrailenabled: false
		});

		var snippetHead = '.snippet-head';
		var snippetBody = '.snippet-body';
		var snippet = '.snippet';

		$(snippetHead).on('click', function(){
			var $head = $(this),
				$section = $head.closest(snippet),
				$body = $section.find(snippetBody);

			$head.toggleClass('active');

			$body.stop(true, true).slideToggle();

			var $sections = $section.siblings();
			$sections.find(snippetHead).removeClass('active');
			$sections.find(snippetBody).stop(true, true).slideUp();

			setTimeout(function(){			
				$('html').getNiceScroll().resize();
			}, 100);

		});

		$('.snippet-cnt-inner pre').niceScroll();
	});
	
})(jQuery, window, document);