$(document).ready(function () {
	$(window).scroll(function () {

		var scrollTop = $(window).scrollTop()

		if (scrollTop > 100) {
			$('header').addclass('scrolled')
		} else {
			$('header').removeclass('scrolled')
		}
		

	})
})
